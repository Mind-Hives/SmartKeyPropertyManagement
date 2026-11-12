import React from "react";
import {
  Map,
  MapMarker,
  MarkerContent,
  MarkerPopup,
  MapControls,
} from "@/components/ui/map";
import { MapPin, ExternalLink } from "lucide-react";

const properties = [
  {
    id: 1,
    name: "750 Georgia Ave",
    locationName: "750 Georgia Ave, Brooklyn, NY 11207",
    address: "750 Georgia Ave, Brooklyn, NY 11207",
    latitude: 40.658569828670856,
    longitude: -73.89294216052045,
    image:
      "https://res.cloudinary.com/kj98z6s1/image/upload/v1794348799/750-georgia-ave.webp",
  },
  {
    id: 2,
    name: "281 Elm Ave",
    locationName: "281 Elm Ave, Bogota, NJ 07666",
    address: "281 Elm Ave, Bogota, NJ 07666",
    latitude: 40.876753580229874,
    longitude: -74.02961932983028,
    image:
      "https://res.cloudinary.com/kj98z6s1/image/upload/v1794348739/281-elm-ave.jpg",
  },
  {
    id: 3,
    name: "167 Beach 27th St",
    locationName: "167 Beach 27th St, Far Rockaway, NY 11691",
    address: "167 Beach 27th St, Far Rockaway, NY 11691",
    latitude: 40.5942572416498,
    longitude: -73.76009588751137,
    image:
      "https://res.cloudinary.com/kj98z6s1/image/upload/v1794348771/167-beach-27th-st.jpg",
  },
  {
    id: 4,
    name: "531 Summer St",
    locationName: "531 Summer St, Paterson, NJ 07501",
    address: "531 Summer St, Paterson, NJ 07501",
    latitude: 40.909467395485386,
    longitude: -74.16335120099369,
    image:
      "https://res.cloudinary.com/kj98z6s1/image/upload/v1794348880/531-summer-st.jpg",
  },
  {
    id: 5,
    name: "535 Summer St",
    locationName: "535 Summer St, Paterson, NJ 07501",
    address: "535 Summer St, Paterson, NJ 07501",
    latitude: 40.90939005369133,
    longitude: -74.16350907585371,
    image:
      "https://res.cloudinary.com/kj98z6s1/image/upload/v1794348755/535-summer-st.jpg",
  },
  {
    id: 6,
    name: "1400 67th St",
    locationName: "1400 67th St, North Bergen, NJ 07047",
    address: "1400 67th St, North Bergen, NJ 07047",
    latitude: 40.797547711098545,
    longitude: -74.01921705866857,
    image:
      "https://res.cloudinary.com/kj98z6s1/image/upload/v1794348875/1400-67th-st.jpg",
  },
  {
    id: 7,
    name: "179-15 144th Ave",
    locationName: "179-15 144th Ave, Queens, NY 11434",
    address: "179-15 144th Ave, Queens, NY 11434",
    latitude: 40.669304286855564,
    longitude: -73.76510571634343,
    image:
      "https://res.cloudinary.com/kj98z6s1/image/upload/v1794348729/179-15-144th-ave.jpg",
  },
  {
    id: 8,
    name: "3001 Grace Ave",
    locationName: "3001 Grace Ave, Bronx, NY 10469",
    address: "3001 Grace Ave, Bronx, NY 10469",
    latitude: 40.871928841829416,
    longitude: -73.83604468934895,
    image:
      "https://res.cloudinary.com/kj98z6s1/image/upload/v1794348786/3001-grace-ave.jpg",
  },
  {
    id: 9,
    name: "91-41 91st St",
    locationName: "91-41 91st St, Queens, NY 11421",
    address: "91-41 91st St, Queens, NY 11421",
    latitude: 40.688451895773326,
    longitude: -73.85167957586118,
    image:
      "https://res.cloudinary.com/kj98z6s1/image/upload/v1794348887/91-41-91st-st.webp",
  },
  {
    id: 10,
    name: "366 E 173rd St",
    locationName: "366 E 173rd St, Bronx, NY 10457",
    address: "366 E 173rd St, Bronx, NY 10457",
    latitude: 40.84323065004823,
    longitude: -73.90439207400848,
    image:
      "https://res.cloudinary.com/kj98z6s1/image/upload/v1794348711/366-e-173rd-st.jpg",
  },
  {
    id: 11,
    name: "362 E 173rd St",
    locationName: "362 E 173rd St, Bronx, NY 10457",
    address: "362 E 173rd St, Bronx, NY 10457",
    latitude: 40.84330054827386,
    longitude: -73.90463853352642,
    image:
      "https://res.cloudinary.com/kj98z6s1/image/upload/v1794348765/362-e-173rd-st.jpg",
  },
  {
    id: 12,
    name: "1743 Taylor Ave",
    locationName: "1743 Taylor Ave, Bronx, NY 10460",
    address: "1743 Taylor Ave, Bronx, NY 10460",
    latitude: 40.84311321596073,
    longitude: -73.87005726236151,
    image:
      "https://res.cloudinary.com/kj98z6s1/image/upload/v1794348779/1743-taylor-ave.jpg",
  },
  {
    id: 13,
    name: "952 E 227th St",
    locationName: "952 E 227th St, Bronx, NY 10466",
    address: "952 E 227th St, Bronx, NY 10466",
    latitude: 40.88668580416253,
    longitude: -73.85203807400708,
    image:
      "https://res.cloudinary.com/kj98z6s1/image/upload/v1794348731/952-e-227th-st.jpg",
  },
  {
    id: 14,
    name: "532 East 3rd Street",
    locationName: "532 East 3rd Street, Mount Vernon, NY 10553",
    address: "532 East 3rd Street, Mount Vernon, NY 10553",
    latitude: 40.9080434896483,
    longitude: -73.81711373167664,
    image:
      "https://res.cloudinary.com/kj98z6s1/image/upload/v1794348804/532-east-3rd-street.jpg",
  },
  {
    id: 15,
    name: "210 Baltimore Ave Apt 3",
    locationName: "210 Baltimore Ave Apt 3, Hillside, NJ 07205",
    address: "210 Baltimore Ave Apt 3, Hillside, NJ 07205",
    latitude: 40.69444872098169,
    longitude: -74.23139446051924,
    image:
      "https://res.cloudinary.com/kj98z6s1/image/upload/v1794348805/210-baltimore-ave-apt-3.jpg",
  },
  {
    id: 16,
    name: "534 Summer St",
    locationName: "534 Summer Street, Paterson, NJ 07501",
    address: "534 Summer Street, Paterson, NJ 07501",
    latitude: 40.909395487326776,
    longitude: -74.16392280468865,
    image:
      "https://res.cloudinary.com/kj98z6s1/image/upload/v1794348784/534-summer-st.jpg",
  },
  {
    id: 17,
    name: "14-09 Chandler St",
    locationName: "14-09 Chandler St, Far Rockaway, NY 11691",
    address: "14-09 Chandler St, Far Rockaway, NY 11691",
    latitude: 40.60891134669307,
    longitude: -73.75617880285141,
    image:
      "https://res.cloudinary.com/kj98z6s1/image/upload/v1794348769/14-09-chandler-st.jpg",
  },
  {
    id: 18,
    name: "4245 Digney Ave",
    locationName: "4245 Digney Ave, Bronx, NY 10466",
    address: "4245 Digney Ave, Bronx, NY 10466",
    latitude: 40.89468745203571,
    longitude: -73.85218347400647,
    image:
      "https://res.cloudinary.com/kj98z6s1/image/upload/v1794348885/4245-digney-ave-cfab9.jpg",
  },
  {
    id: 19,
    name: "2253 Mott Ave Unit 2",
    locationName: "2253 Mott Ave Unit 2, Far Rockaway, NY 11691",
    address: "2253 Mott Ave Unit 2, Far Rockaway, NY 11691",
    latitude: 40.60565231638647,
    longitude: -73.75704850285146,
    image:
      "https://res.cloudinary.com/kj98z6s1/image/upload/v1794348800/2253-mott-ave-unit-2.jpg",
  },
  {
    id: 20,
    name: "210 Baltimore Ave",
    locationName: "210 Baltimore Ave, Hillside, NJ 07205",
    address: "210 Baltimore Ave, Hillside, NJ 07205",
    latitude: 40.69444058640379,
    longitude: -74.23135154510017,
    image:
      "https://res.cloudinary.com/kj98z6s1/image/upload/v1794348752/210-baltimore-ave.jpg",
  },
  {
    id: 21,
    name: "720 26th St",
    locationName: "720 26th St, Union City, NJ 07087",
    address: "720 26th St, Union City, NJ 07087",
    latitude: 40.7704906001807,
    longitude: -74.03437881626148,
    image:
      "https://res.cloudinary.com/kj98z6s1/image/upload/v1794348721/720-26th-st.jpg",
  },
  {
    id: 22,
    name: "921 Ringwood Ave",
    locationName: "921 Ringwood Ave, Haskell, NJ 07420",
    address: "921 Ringwood Ave, Haskell, NJ 07420",
    latitude: 41.03583004104619,
    longitude: -74.29484060275985,
    image:
      "https://res.cloudinary.com/kj98z6s1/image/upload/v1794348737/921-ringwood-ave.jpg",
  },
  {
    id: 23,
    name: "29-12 Deerfield Rd",
    locationName: "29-12 Deerfield Rd, Far Rockaway, NY 11691",
    address: "29-12 Deerfield Rd, Far Rockaway, NY 11691",
    latitude: 40.59749832114203,
    longitude: -73.76289150277549,
    image:
      "https://res.cloudinary.com/kj98z6s1/image/upload/v1794348794/29-12-deerfield-rd.jpg",
  },
  {
    id: 24,
    name: "186-11 122nd Ave",
    locationName: "186-11 122nd Ave, Queens, NY 11413",
    address: "186-11 122nd Ave, Queens, NY 11413",
    latitude: 40.68365372268852,
    longitude: -73.7598210316086,
    image:
      "https://res.cloudinary.com/kj98z6s1/image/upload/v1794348790/186-11-122nd-ave.jpg",
  },
  {
    id: 25,
    name: "120-28 218th St",
    locationName: "120-28 218th St, Cambria Heights, Queens, NY 10459",
    address: "120-28 218th St, Cambria Heights, Queens, NY 10459",
    latitude: 40.69018766285497,
    longitude: -73.74510033160841,
    image:
      "https://res.cloudinary.com/kj98z6s1/image/upload/v1794348742/120-28-218th-st.jpg",
  },
  {
    id: 26,
    name: "114-33 194th St",
    locationName: "114-33 194th St, Queens, NY 11412",
    address: "114-33 194th St, Queens, NY 11412",
    latitude: 40.69770758419274,
    longitude: -73.7598163739361,
    image:
      "https://res.cloudinary.com/kj98z6s1/image/upload/v1794348723/114-33-194th-st.jpg",
  },
  {
    id: 27,
    name: "2489 Marion Ave",
    locationName: "2489 Marion Ave, Bronx, NY 10458",
    address: "2489 Marion Ave, Bronx, NY 10458",
    latitude: 40.86091898474789,
    longitude: -73.89392710276638,
    image:
      "https://res.cloudinary.com/kj98z6s1/image/upload/v1794348718/2489-marion-ave.jpg",
  },
  {
    id: 28,
    name: "559 Claremont Pkwy",
    locationName: "559 Claremont Pkwy, Bronx, NY 10457",
    address: "559 Claremont Pkwy, Bronx, NY 10457",
    latitude: 40.838149511700244,
    longitude: -73.89997323160303,
    image:
      "https://res.cloudinary.com/kj98z6s1/image/upload/v1794348876/559-claremont-pkwy.jpg",
  },
  // {
  //   id: 29,
  //   name: "959 E 212th St",
  //   locationName: "959 E 212th St, Bronx, NY 10469",
  //   address: "959 E 212th St, Bronx, NY 10469",
  //   latitude: 40.87664099277236,
  //   longitude: -73.85741727392991,
  //   image:
  //     "https://res.cloudinary.com/kj98z6s1/image/upload/v1794348876/559-claremont-pkwy.jpg",
  // },
];

const PropertyPopupCard = ({ property }) => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${property.latitude},${property.longitude}`;

  return (
    <div className="w-[250px] overflow-hidden rounded-xl bg-white">
      {/* Property image */}
      <div className="h-36 w-full overflow-hidden bg-slate-100">
        <img
          src={property.image}
          alt={property.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Property details */}
      <div className="p-3">
        <h3 className="text-sm font-bold leading-snug text-[#17395f]">
          {property.name}
        </h3>

        <div className="mt-2 flex items-start gap-2">
          <MapPin size={15} className="mt-0.5 shrink-0 text-[#416184]" />

          <p className="text-xs leading-relaxed text-[#64748b]">
            {property.locationName}
          </p>
        </div>

        {/* Google Maps link */}
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-[#17395f] px-3 py-2.5 text-xs font-semibold text-white transition-colors duration-300 hover:bg-[#416184]"
        >
          Open in Maps
          <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
};

const PropertyMarker = () => {
  return (
    <div className="relative flex h-10 w-8 items-start justify-center drop-shadow-[0_3px_4px_rgba(0,0,0,0.3)] transition-transform duration-200 hover:scale-110">
      <svg
        viewBox="0 0 40 52"
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Red location pin */}
        <path
          d="M20 1C9.5 1 1 9.5 1 20C1 34 20 51 20 51C20 51 39 34 39 20C39 9.5 30.5 1 20 1Z"
          fill="#EA4335"
          stroke="#FFFFFF"
          strokeWidth="2"
        />

        {/* White center */}
        <circle cx="20" cy="20" r="7" fill="#FFFFFF" />
      </svg>
    </div>
  );
};

const PropertyMap = () => {
  return (
    <section className="bg-[#f8fafc] px-4 py-14 sm:px-6 md:py-20">
      {/* Main container */}
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mx-auto mb-9 max-w-2xl text-center">
          {/* <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#416184] sm:text-sm">
            Our Property Locations
          </p> */}

          <h2 className="text-3xl font-bold tracking-tight text-[#173957] sm:text-4xl lg:text-5xl">
            Explore Properties Under Our Management
          </h2>

          <p className="mt-4 text-base text-[#647b91] sm:text-lg lg:text-xl">
            Discover the locations of properties managed by Smart Key Property
            Management.
          </p>
        </div>

        {/* Map wrapper */}
        <div className="mx-auto h-[460px] w-full overflow-hidden rounded-2xl border border-[#e7edf3] bg-white shadow-[0_12px_40px_rgba(23,57,95,0.08)] sm:h-[540px] lg:h-[620px]">
          <Map
            theme="dark"
            viewport={{
              center: [-73.95, 40.72],
              zoom: 10,
              bearing: 0,
              pitch: 0,
            }}
          >
            {/* Zoom controls */}
            <MapControls
              position="top-right"
              showZoom={true}
              showCompass={false}
              showLocate={false}
              showFullscreen={false}
            />

            {/* Property markers */}
            {properties.map((property) => (
              <MapMarker
                key={property.id}
                longitude={property.longitude}
                latitude={property.latitude}
                anchor="bottom"
                openPopupOnHover={true}
                popupCloseDelay={250}
              >
                {/* Custom marker design */}
                <MarkerContent>
                  <PropertyMarker />
                </MarkerContent>

                {/* Property popup */}
                <MarkerPopup
                  closeButton={false}
                  offset={20}
                  className="!border-0 !bg-white !p-0 !shadow-[0_8px_30px_rgba(7,23,42,0.18)]"
                >
                  <PropertyPopupCard property={property} />
                </MarkerPopup>
              </MapMarker>
            ))}
          </Map>
        </div>
      </div>
    </section>
  );
};

export default PropertyMap;
