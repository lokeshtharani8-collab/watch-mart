import React from 'react';
import { Watch, ArrowRight, Award, Globe, Calendar, CheckCircle2 } from 'lucide-react';
import { POPULAR_BRANDS, BrandInfo } from '../data/products';
import { WatchProduct } from '../types/watch';

interface BrandsPageProps {
  products: WatchProduct[];
  onSelectBrand: (brandName: string) => void;
}

export const BrandsPage: React.FC<BrandsPageProps> = ({ products, onSelectBrand }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
          World-Class Watchmakers
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Explore Our Brand Heritage
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          From legendary Japanese innovation to Swiss precision and rich American heritage, discover why millions trust our handpicked watch partners.
        </p>
      </div>

      {/* Brands Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {POPULAR_BRANDS.map((brand: BrandInfo) => {
          const brandWatchCount = products.filter(p => p.brand === brand.name).length;
          
          return (
            <div
              key={brand.name}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {/* Image banner */}
              <div className="relative h-44 overflow-hidden bg-slate-900">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between text-white">
                  <div>
                    <h3 className="text-xl font-extrabold tracking-wide">
                      {brand.name}
                    </h3>
                    <p className="text-[11px] text-blue-300 font-medium">
                      {brand.tagline}
                    </p>
                  </div>
                  <span className="text-xs font-bold bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-lg">
                    {brandWatchCount} Models
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Globe className="w-3.5 h-3.5 text-slate-400" />
                      <span>{brand.country}</span>
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>Est. {brand.founded}</span>
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {brand.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <button
                    onClick={() => onSelectBrand(brand.name)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-blue-600 text-slate-800 hover:text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 group/btn border border-slate-200 hover:border-blue-600"
                  >
                    <span>View {brand.name} Watches</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
