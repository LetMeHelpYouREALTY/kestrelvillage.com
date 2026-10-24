export const CALENDLY_EVENTS = {
  showing: 'https://calendly.com/drjanduffy/showing',
  buyer: 'https://calendly.com/drjanduffy/buyer-consultation-30-min',
  listing: 'https://calendly.com/drjanduffy/listing-consultation',
  strategy: 'https://calendly.com/drjanduffy/15min',
} as const;

export type CalendlyEvent = keyof typeof CALENDLY_EVENTS;

export function calendlyEventForPath(pathname: string): CalendlyEvent {
  if (pathname.startsWith('/market-report')) return 'listing';
  if (pathname.startsWith('/financing')) return 'buyer';
  if (pathname.startsWith('/contact')) return 'strategy';
  return 'showing';
}

/** Booking URL with UTMs; utm_source = bare domain for the Calendly → FUB worker. */
export function calendlyUrl(pathname: string, medium: string, event = calendlyEventForPath(pathname)): string {
  const path = pathname.replace(/^\/|\/$/g, '');
  const params = new URLSearchParams({
    hide_gdpr_banner: '1',
    utm_source: 'kestrelvillage.com',
    utm_medium: medium,
    utm_campaign: path || 'home',
  });
  return `${CALENDLY_EVENTS[event]}?${params.toString()}`;
}
