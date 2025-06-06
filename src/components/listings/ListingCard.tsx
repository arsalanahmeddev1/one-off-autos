
import React from "react";
import { Link } from "react-router-dom";
import { MapPin, CircleDollarSign, CheckCircle2 } from "lucide-react";

interface Listing {
  id: string;
  title: string;
  price: number;
  location: string;
  mileage: number;
  image: string;
  mods: string[];
}

interface ListingCardProps {
  listing: Listing;
}

const ListingCard = ({ listing }: ListingCardProps) => {
  return (
    <Link to={`/listings/${listing.slug}`} className="block">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg h-full transition-shadow">
        <div className="relative pb-[65%] overflow-hidden">
          <img
            src={listing.image}
            alt={listing.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-0 right-0 bg-oneoffautos-red text-white px-3 py-1 m-3 rounded-md font-semibold">
            <span>${listing.price.toLocaleString()}</span>
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-bold text-lg mb-2 line-clamp-2">
            {listing.title}
          </h3>

          <div className="flex items-center text-gray-600 mb-2">
            <MapPin size={16} className="mr-1" />
            <span className="text-sm">{listing.location}</span>
            <span className="mx-2">•</span>
            <span className="text-sm">{listing.mileage.toLocaleString()} miles</span>
          </div>

          <div className="mt-3">
            <div className="text-sm font-medium mb-1 text-gray-700">Modified With:</div>
            <div className="flex flex-wrap gap-1">
              {listing.mods.slice(0, 3).map((mod, index) => (
                <span
                  key={index}
                  className="text-xs bg-gray-100 text-gray-700 rounded-full px-2 py-1 flex items-center"
                >
                  <CheckCircle2 size={12} className="mr-1 text-oneoffautos-blue" />
                  {mod}
                </span>
              ))}
              {listing.mods.length > 3 && (
                <span className="text-xs bg-gray-100 text-gray-700 rounded-full px-2 py-1">
                  +{listing.mods.length - 3} more
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListingCard;
