import React from 'react';
import { Star, ShoppingCart, Eye, CheckCircle2, Clock } from 'lucide-react';
import { WatchProduct } from '../types/watch';
import { formatINR } from '../utils/search';
import { useCart } from '../context/CartContext';

interface WatchCardProps {
  product: WatchProduct;
  onViewDetails: (product: WatchProduct) => void;
}

export const WatchCard: React.FC<WatchCardProps> = ({ product, onViewDetails }) => {
  const { addToCart } = useCart();

  return (
    <div className="group bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col overflow-hidden">
      {/* Product Image Area */}
      <div className="relative aspect-square bg-slate-100 overflow-hidden cursor-pointer" onClick={() => onViewDetails(product)}>
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            // High quality fallback watch image if uncontactable
            (e.target as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80';
          }}
        />

        {/* Discount Badge */}
        {product.discount > 0 && (
          <div className="absolute top-3 left-3 bg-red-600 text-white text-[11px] font-bold px-2 py-0.5 rounded-md shadow-sm">
            {product.discount}% OFF
          </div>
        )}

        {/* Quick View Floating Action Overlay */}
        <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(product);
            }}
            className="bg-white/95 text-slate-900 hover:bg-white text-xs font-semibold px-4 py-2 rounded-xl shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
          >
            <Eye className="w-4 h-4 text-blue-600" />
            <span>Quick View</span>
          </button>
        </div>

        {/* Category tag */}
        <div className="absolute bottom-3 left-3 bg-slate-900/75 backdrop-blur-xs text-white text-[10px] font-medium tracking-wide uppercase px-2 py-0.5 rounded-sm">
          {product.category}
        </div>
      </div>

      {/* Product Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Brand & Availability */}
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="font-bold text-blue-600 tracking-wider uppercase text-[11px]">
              {product.brand}
            </span>
            <span className={`inline-flex items-center gap-1 text-[11px] font-medium ${
              product.availability.includes('Low') ? 'text-amber-600' : 'text-emerald-600'
            }`}>
              <CheckCircle2 className="w-3 h-3" />
              {product.availability}
            </span>
          </div>

          {/* Model Name & Full Title */}
          <h3
            onClick={() => onViewDetails(product)}
            className="font-semibold text-slate-900 text-sm sm:text-base leading-snug line-clamp-1 hover:text-blue-600 transition-colors cursor-pointer"
            title={product.name}
          >
            {product.name}
          </h3>

          <p className="text-xs text-slate-500 font-mono mt-0.5 mb-2.5">
            Model: <span className="text-slate-700 font-semibold">{product.model}</span>
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mb-3 text-xs">
            <div className="flex items-center gap-1 bg-amber-50 text-amber-800 px-1.5 py-0.5 rounded font-semibold text-[11px] border border-amber-200">
              <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
              <span>{product.rating}</span>
            </div>
            <span className="text-slate-400">({product.reviews} reviews)</span>
          </div>
        </div>

        {/* Price & Action Buttons */}
        <div className="pt-2 border-t border-slate-100 mt-2">
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-lg sm:text-xl font-bold text-slate-900">
              {formatINR(product.price)}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-xs text-slate-400 line-through">
                {formatINR(product.originalPrice)}
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onViewDetails(product)}
              className="w-full text-xs font-semibold py-2 px-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-colors flex items-center justify-center gap-1"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Details</span>
            </button>
            <button
              onClick={() => addToCart(product, 1)}
              className="w-full text-xs font-semibold py-2 px-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-colors flex items-center justify-center gap-1 shadow-sm hover:shadow"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
