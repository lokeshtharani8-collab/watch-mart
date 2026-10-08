import React, { useState } from 'react';
import {
  Watch,
  Search,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Truck,
  RotateCcw,
  Award,
  ChevronRight,
  TrendingUp,
  SlidersHorizontal
} from 'lucide-react';
import { WatchProduct, PageRoute } from '../types/watch';
import { POPULAR_BRANDS } from '../data/products';
import { WatchCard } from '../components/WatchCard';

interface HomePageProps {
  products: WatchProduct[];
  onNavigate: (page: PageRoute) => void;
  onSelectBrand: (brand: string) => void;
  onSelectProduct: (product: WatchProduct) => void;
  onSearchSubmit: (query: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  products,
  onNavigate,
  onSelectBrand,
  onSelectProduct,
  onSearchSubmit
}) => {
  const [homeSearchQuery, setHomeSearchQuery] = useState('');

  const featuredWatches = products.filter(p => p.featured).slice(0, 8);
  const bestSellers = products.filter(p => p.rating >= 4.8).slice(0, 4);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (homeSearchQuery.trim()) {
      onSearchSubmit(homeSearchQuery.trim());
    } else {
      onNavigate('shop');
    }
  };

  const quickSearchTags = [
    'Casio G-Shock',
    'Titan 1805',
    'Fossil Grant',
    'Fastrack Analog',
    'Sonata Poze',
    'Timex Expedition'
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white overflow-hidden py-16 sm:py-24">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Headline and Call-to-actions */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/20 text-blue-300 text-xs sm:text-sm font-medium">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span>Premier Watch Destination in India</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-white">Perfect Watch</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Discover premium watches from the world's most trusted brands. From rugged G-Shock chronographs to classic Titan dress pieces, your timeless companion awaits.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => onNavigate('shop')}
                  className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2 transform active:scale-95"
                >
                  <span>Shop Watches</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('brands')}
                  className="px-7 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-semibold text-sm transition-all flex items-center gap-2"
                >
                  <span>Explore Brands</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              </div>

              {/* Prominent Quick Search Inside Hero */}
              <div className="pt-6 max-w-xl mx-auto lg:mx-0">
                <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                  <div className="relative w-full">
                    <input
                      type="text"
                      placeholder="Search watches by brand or model..."
                      value={homeSearchQuery}
                      onChange={(e) => setHomeSearchQuery(e.target.value)}
                      className="w-full bg-slate-800/95 text-white placeholder-slate-400 text-sm rounded-xl pl-11 pr-28 py-3.5 border border-slate-700 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 shadow-lg"
                    />
                    <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                  <button
                    type="submit"
                    className="absolute right-2 bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                  >
                    Search
                  </button>
                </form>

                {/* Quick tags */}
                <div className="flex flex-wrap items-center gap-2 mt-3 text-xs text-slate-400">
                  <span className="text-slate-500 font-medium">Trending:</span>
                  {quickSearchTags.map(tag => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => onSearchSubmit(tag)}
                      className="bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white px-2.5 py-1 rounded-md text-[11px] transition-colors border border-slate-700/60"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Main Watch Card */}
                <div className="bg-gradient-to-tr from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-6 shadow-2xl relative overflow-hidden group">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-slate-950/80 mb-5 relative">
                    <img
                      src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80"
                      alt="Featured Casio Vintage Watch"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-md">
                      FEATURED PICK
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs uppercase font-bold text-blue-400 tracking-wider">
                        CASIO VINTAGE
                      </span>
                      <h3 className="text-lg font-bold text-white mt-0.5">
                        AQ-230GA Champagne Dial
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">Dual-Time Analog-Digital Classic</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-extrabold text-white">₹4,995</span>
                      <span className="block text-xs text-slate-400 line-through">₹5,995</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onNavigate('shop')}
                    className="w-full mt-5 py-2.5 rounded-xl bg-blue-600/90 hover:bg-blue-600 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>View Collection</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Floating mini stat card */}
                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-slate-900/95 border border-slate-700/80 rounded-2xl p-4 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-white">100% Original</span>
                    <span className="block text-[11px] text-slate-400">Authorized Retail Warranty</span>
                  </div>
                </div>

                {/* Floating mini stat card 2 */}
                <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-slate-900/95 border border-slate-700/80 rounded-2xl p-4 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-white">40+ Curated Models</span>
                    <span className="block text-[11px] text-slate-400">8 Global Leading Brands</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Highlights Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-md p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">100% Original Products</h4>
              <p className="text-xs text-slate-500 mt-0.5">Sourced directly from verified brands</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Free Express Delivery</h4>
              <p className="text-xs text-slate-500 mt-0.5">Free shipping on orders above ₹999</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Up to 2-Year Warranty</h4>
              <p className="text-xs text-slate-500 mt-0.5">Comprehensive brand service support</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
              <RotateCcw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Easy 7-Day Returns</h4>
              <p className="text-xs text-slate-500 mt-0.5">Guaranteed peace of mind</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Brands Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              WORLD'S FINEST BRANDS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Popular Brands
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Explore timepieces from the world’s most trusted watchmakers.
            </p>
          </div>
          <button
            onClick={() => onNavigate('brands')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            <span>View All 8 Brands</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Brand Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {POPULAR_BRANDS.map((brand) => (
            <button
              key={brand.name}
              onClick={() => onSelectBrand(brand.name)}
              className="group bg-white rounded-2xl p-4 border border-slate-200/90 hover:border-blue-500 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center focus:outline-none"
            >
              <div className="w-14 h-14 rounded-full bg-slate-50 group-hover:bg-blue-50 border border-slate-200 group-hover:border-blue-200 flex items-center justify-center mb-3 transition-colors">
                <Watch className="w-7 h-7 text-slate-700 group-hover:text-blue-600 transition-colors" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                {brand.name}
              </h3>
              <span className="text-[11px] text-slate-500 mt-0.5">
                {products.filter(p => p.brand === brand.name).length} Watches
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Featured Watches Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              HANDPICKED FOR YOU
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Featured Watches
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Top trending designs, timeless classics, and modern chronographs.
            </p>
          </div>
          <button
            onClick={() => onNavigate('shop')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            <span>Explore All Watches</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredWatches.map((product) => (
            <WatchCard
              key={product.id}
              product={product}
              onViewDetails={onSelectProduct}
            />
          ))}
        </div>
      </section>

      {/* Promotional Mid-Page Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white p-8 sm:p-12 border border-slate-800 shadow-xl">
          <div className="max-w-xl space-y-4 relative z-10">
            <span className="px-3 py-1 rounded-full bg-blue-600 text-xs font-bold uppercase tracking-wider">
              LIMITED TIME OFFER
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Upgrade Your Wrist Game with Authentic Timepieces
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Explore our wide variety of Analog, Digital, Chronograph, and Smart watches from top tier brands. Enjoy verified brand warranty and easy 7-day returns.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('shop')}
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-md"
              >
                Shop Full Catalog
              </button>
              <button
                onClick={() => onNavigate('brands')}
                className="px-6 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm transition-all"
              >
                Browse Brands
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Top Rated & Customer Favorites Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              CUSTOMER FAVORITES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Top Rated Watches
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Rated 4.8 stars or higher by verified watch enthusiasts.
            </p>
          </div>
          <button
            onClick={() => onNavigate('shop')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <WatchCard
              key={product.id}
              product={product}
              onViewDetails={onSelectProduct}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
