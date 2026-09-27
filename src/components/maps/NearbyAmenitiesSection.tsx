import Link from 'next/link';
import { AmenityMap } from '@/components/maps/AmenityMap';
import { COMMUNITY_AREA_LABEL, COMMUNITY_NAME } from '@/config/community-map';

type NearbyAmenitiesSectionProps = {
  id?: string;
  heading?: string;
  subheading?: string;
  showCuratedList?: boolean;
};

export function NearbyAmenitiesSection({
  id = 'whats-nearby',
  heading = 'Life Near Kestrel Village',
  subheading = `Explore restaurants, parks, schools, grocery, and more around ${COMMUNITY_NAME} in ${COMMUNITY_AREA_LABEL}.`,
  showCuratedList = false,
}: NearbyAmenitiesSectionProps) {
  return (
    <section id={id} className="py-24 px-6 bg-stone-900/40 border-t border-stone-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-amber-500 text-sm uppercase tracking-widest">What&apos;s Nearby</span>
          <h2
            className="text-3xl md:text-4xl font-light mt-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {heading}
          </h2>
          <p className="text-stone-400 mt-4 max-w-2xl mx-auto">{subheading}</p>
          <p className="mt-4">
            <Link
              href="/nearby-amenities"
              className="text-amber-400 hover:text-amber-300 text-sm font-medium"
            >
              Full nearby amenities guide →
            </Link>
          </p>
        </div>
        <AmenityMap showCuratedList={showCuratedList} />
      </div>
    </section>
  );
}
