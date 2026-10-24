'use client';

import { usePathname } from 'next/navigation';
import { useCallback, useRef } from 'react';
import { calendlyUrl } from '@/lib/calendly';

const CALENDLY_CSS = 'https://assets.calendly.com/assets/external/widget.css';
const CALENDLY_JS = 'https://assets.calendly.com/assets/external/widget.js';

interface CalendlyAPI {
  initPopupWidget: (opts: { url: string }) => void;
}

// Helper to get Calendly from window
function getCalendly(): CalendlyAPI | undefined {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (window as any).Calendly as CalendlyAPI | undefined;
}

type CalendlyLinkProps = {
  children: React.ReactNode;
  className?: string;
};

// Track if Calendly is loading/loaded globally
let calendlyLoadPromise: Promise<void> | null = null;

function loadCalendly(): Promise<void> {
  if (calendlyLoadPromise) return calendlyLoadPromise;
  
  calendlyLoadPromise = new Promise((resolve) => {
    // Load CSS
    if (!document.querySelector(`link[href="${CALENDLY_CSS}"]`)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = CALENDLY_CSS;
      document.head.appendChild(link);
    }
    
    // Load JS
    if (!document.querySelector(`script[src="${CALENDLY_JS}"]`)) {
      const script = document.createElement('script');
      script.src = CALENDLY_JS;
      script.async = true;
      script.onload = () => {
        // Wait for Calendly to be available
        const checkCalendly = () => {
          if (getCalendly()) {
            resolve();
          } else {
            setTimeout(checkCalendly, 50);
          }
        };
        checkCalendly();
      };
      document.body.appendChild(script);
    } else if (getCalendly()) {
      resolve();
    }
  });
  
  return calendlyLoadPromise;
}

export function CalendlyLink({ children, className }: CalendlyLinkProps) {
  const isLoadingRef = useRef(false);
  // Event follows the page; the old /1-home-tour-30-mins event is not active.
  const pathname = usePathname() || '/';
  const CALENDLY_URL = calendlyUrl(pathname, 'popup');
  
  const handleClick = useCallback(async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Prevent double-clicks while loading
    if (isLoadingRef.current) return;
    
    if (typeof window !== 'undefined') {
      const calendly = getCalendly();
      if (calendly) {
        // Already loaded, open immediately
        calendly.initPopupWidget({ url: CALENDLY_URL });
      } else {
        // Load on-demand
        isLoadingRef.current = true;
        try {
          await loadCalendly();
          const loadedCalendly = getCalendly();
          if (loadedCalendly) {
            loadedCalendly.initPopupWidget({ url: CALENDLY_URL });
          }
        } catch {
          // Fallback: open in new tab
          window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');
        } finally {
          isLoadingRef.current = false;
        }
      }
    }
  }, [CALENDLY_URL]);

  return (
    <a 
      href={CALENDLY_URL} 
      onClick={handleClick} 
      className={className} 
      aria-label="Schedule a tour with Dr. Jan Duffy"
    >
      {children}
    </a>
  );
}
