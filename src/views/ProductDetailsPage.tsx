import React, { useState } from 'react';
import {
  Star,
  ShoppingCart,
  Zap,
  ShieldCheck,
  Truck,
  RotateCcw,
  CheckCircle2,
  ChevronLeft,
  ArrowRight,
  Share2,
  Minus,
  Plus
} from 'lucide-react';
import { WatchProduct, PageRoute } from '../types/watch';
import { formatINR } from '../utils/search';
import { useCart } from '../context/CartContext';
import { WatchCard } from '../components/WatchCard';

interface ProductDetailsPageProps {
  product: WatchProduct;
  allProducts: WatchProduct[];
  onBack: () => void;
  onNavigate: (page: PageRoute) => void;
  onSelectProduct: (product: WatchProduct) => void;
  onBuyNow: (product: WatchProduct, quantity: number) => void;
}

export const ProductDetailsPage: React.FC<ProductDetailsPageProps> = ({
  product,
  allProducts,
  onBack,
  onNavigate,
  onSelectProduct,
  onBuyNow
}) => {
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState<string>(product.image);
  const [quantity, setQuantity] = useState<number>(1);
  const [copiedLink, setCopiedLink] = useState(false);

  // Gallery images (main image + any additionals)
  const images = [product.image, ...(product.additionalImages || [])];

  // Related watches from same brand or category (excluding current product)
  const relatedWatches = allProducts
    .filter(p => p.id !== product.id && (p.brand === product.brand || p.category === product.category))
    .slice(0, 4);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Navigation Breadcrumb & Back */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to Catalog</span>
        </button>

        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span className="cursor-pointer hover:text-blue-600" onClick={() => onNavigate('home')}>Home</span>
          <span>/</span>
          <span className="cursor-pointer hover:text-blue-600" onClick={() => onNavigate('shop')}>Shop</span>
          <span>/</span>
          <span className="text-slate-900 font-semibold">{product.brand}</span>
        </div>
      </div>

      {/* Main Product Stage (Image Gallery & Purchase Configuration) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
        
        {/* Left Column: Image & Thumbnails */}
        <div className="lg:col-span-6 space-y-4">
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-inner group">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            {product.discount > 0 && (
              <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-md">
                {product.discount}% OFF
              </div>
            )}
            <div className="absolute top-4 right-4">
              <button
                onClick={handleShare}
                className="bg-white/90 hover:bg-white p-2 rounded-xl text-slate-700 shadow-sm transition-colors text-xs flex items-center gap-1"
                title="Share product link"
              >
                <Share2 className="w-4 h-4" />
                {copiedLink && <span className="text-[11px] font-semibold text-blue-600">Copied!</span>}
              </button>
            </div>
          </div>

          {/* Gallery Thumbnails (if multiple images available) */}
          {images.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-1">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`w-20 h-20 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                    selectedImage === img
                      ? 'border-blue-600 shadow-md ring-2 ring-blue-500/20'
                      : 'border-slate-200 hover:border-slate-400'
                  }`}
                >
                  <img src={img} alt={`${product.name} thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Details, Specs, Actions */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            {/* Brand & Availability Banner */}
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="font-extrabold text-blue-600 uppercase tracking-widest text-xs">
                {product.brand}
              </span>
              <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 text-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                {product.availability}
              </span>
            </div>

            {/* Title & Model */}
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 text-xs text-slate-500 font-mono">
              <span>Model Number: <strong className="text-slate-800">{product.model}</strong></span>
              <span>·</span>
              <span>Category: <strong className="text-slate-800 font-sans">{product.category}</strong></span>
            </div>

            {/* Ratings & Reviews */}
            <div className="flex items-center gap-3 pt-1">
              <div className="flex items-center gap-1 bg-amber-50 border border-amber-200 text-amber-900 px-2.5 py-1 rounded-lg font-bold text-xs">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <span>{product.rating}</span>
              </div>
              <span className="text-xs text-slate-500 font-medium">
                ({product.reviews} verified customer reviews)
              </span>
            </div>

            {/* Pricing Section */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-baseline gap-3">
              <span className="text-3xl font-extrabold text-slate-900">
                {formatINR(product.price)}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-sm text-slate-400 line-through">
                  {formatINR(product.originalPrice)}
                </span>
              )}
              {product.discount > 0 && (
                <span className="text-xs font-bold text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded-md">
                  Save {product.discount}%
                </span>
              )}
              <span className="text-[11px] text-slate-500 ml-auto hidden sm:inline">
                Inclusive of all taxes
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-600 leading-relaxed">
              {product.description}
            </p>

            {/* Key Features List */}
            <div>
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                Key Features
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Purchase Controls (Quantity, Add to Cart, Buy Now) */}
          <div className="pt-6 border-t border-slate-100 space-y-4">
            
            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Quantity:
              </span>
              <div className="flex items-center border border-slate-300 rounded-xl bg-slate-50 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-slate-200 text-slate-600 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 text-sm font-bold text-slate-900 min-w-10 text-center">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-slate-200 text-slate-600 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                type="button"
                onClick={() => addToCart(product, quantity)}
                className="w-full py-3.5 px-6 rounded-xl border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Add to Cart</span>
              </button>
              <button
                type="button"
                onClick={() => onBuyNow(product, quantity)}
                className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-lg shadow-blue-600/20"
              >
                <Zap className="w-4 h-4" />
                <span>Buy Now</span>
              </button>
            </div>

            {/* Trust Assurance Grid */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-100 text-center text-[11px] text-slate-500">
              <div className="flex flex-col items-center gap-1">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-slate-700">100% Genuine</span>
                <span>Direct Brand Sourced</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Truck className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-slate-700">Free Express</span>
                <span>Fast 2-4 Day Delivery</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <RotateCcw className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-slate-700">7-Day Returns</span>
                <span>Hassle-free Exchange</span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Specifications Table Section */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
        <h2 className="text-xl font-bold text-slate-900 tracking-tight">
          Technical Specifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-sm">
          <div className="flex justify-between py-2.5 border-b border-slate-100">
            <span className="text-slate-500 font-medium">Brand</span>
            <span className="text-slate-900 font-semibold">{product.brand}</span>
          </div>
          <div className="flex justify-between py-2.5 border-b border-slate-100">
            <span className="text-slate-500 font-medium">Model Number</span>
            <span className="text-slate-900 font-semibold font-mono">{product.model}</span>
          </div>
          <div className="flex justify-between py-2.5 border-b border-slate-100">
            <span className="text-slate-500 font-medium">Dial Color</span>
            <span className="text-slate-900 font-semibold">{product.specifications.dialColor}</span>
          </div>
          <div className="flex justify-between py-2.5 border-b border-slate-100">
            <span className="text-slate-500 font-medium">Strap Material</span>
            <span className="text-slate-900 font-semibold">{product.specifications.strapMaterial}</span>
          </div>
          <div className="flex justify-between py-2.5 border-b border-slate-100">
            <span className="text-slate-500 font-medium">Case Diameter</span>
            <span className="text-slate-900 font-semibold">{product.specifications.caseDiameter}</span>
          </div>
          <div className="flex justify-between py-2.5 border-b border-slate-100">
            <span className="text-slate-500 font-medium">Water Resistance</span>
            <span className="text-slate-900 font-semibold">{product.specifications.waterResistance}</span>
          </div>
          <div className="flex justify-between py-2.5 border-b border-slate-100">
            <span className="text-slate-500 font-medium">Movement Type</span>
            <span className="text-slate-900 font-semibold">{product.specifications.movement}</span>
          </div>
          <div className="flex justify-between py-2.5 border-b border-slate-100">
            <span className="text-slate-500 font-medium">Warranty</span>
            <span className="text-slate-900 font-semibold">{product.specifications.warranty}</span>
          </div>
        </div>
      </div>

      {/* Related Watches Section */}
      {relatedWatches.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Related Watches
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                More timepieces from {product.brand} and {product.category} category.
              </p>
            </div>
            <button
              onClick={() => onNavigate('shop')}
              className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedWatches.map((relProduct) => (
              <WatchCard
                key={relProduct.id}
                product={relProduct}
                onViewDetails={onSelectProduct}
              />
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
