import React, { useState, useMemo } from 'react';
import {
  Search,
  SlidersHorizontal,
  X,
  RotateCcw,
  Sparkles,
  ArrowUpDown,
  Check,
  PackageOpen
} from 'lucide-react';
import { WatchProduct, WatchCategory, BrandName } from '../types/watch';
import { filterProducts, getRecommendedProducts, formatINR } from '../utils/search';
import { WatchCard } from '../components/WatchCard';

interface ShopPageProps {
  products: WatchProduct[];
  initialSearchQuery?: string;
  initialBrand?: string;
  onSelectProduct: (product: WatchProduct) => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({
  products,
  initialSearchQuery = '',
  initialBrand = 'All',
  onSelectProduct
}) => {
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [selectedBrand, setSelectedBrand] = useState<string>(initialBrand);
  const [selectedCategory, setSelectedCategory] = useState<WatchCategory | 'All'>('All');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating' | 'newest'>('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Parse price range
  const { minPrice, maxPrice } = useMemo(() => {
    switch (priceRange) {
      case 'under-2k':
        return { minPrice: 0, maxPrice: 2000 };
      case '2k-5k':
        return { minPrice: 2000, maxPrice: 5000 };
      case '5k-10k':
        return { minPrice: 5000, maxPrice: 10000 };
      case 'above-10k':
        return { minPrice: 10000, maxPrice: Infinity };
      default:
        return { minPrice: 0, maxPrice: Infinity };
    }
  }, [priceRange]);

  // Dynamic filtering
  const filteredProducts = useMemo(() => {
    return filterProducts(products, {
      query: searchQuery,
      brand: selectedBrand,
      category: selectedCategory,
      minPrice,
      maxPrice,
      sortBy
    });
  }, [products, searchQuery, selectedBrand, selectedCategory, minPrice, maxPrice, sortBy]);

  // Recommended products for empty state fallback
  const recommendedProducts = useMemo(() => {
    return getRecommendedProducts(products, 4);
  }, [products]);

  // Distinct brands list for sidebar
  const brandsList: BrandName[] = [
    'Casio',
    'Titan',
    'Sonata',
    'Fastrack',
    'Allen Solly',
    'Timex',
    'Fossil',
    'Tommy Hilfiger'
  ];

  const categories: (WatchCategory | 'All')[] = [
    'All',
    'Analog',
    'Digital',
    'Analog-Digital',
    'Chronograph',
    'Smart Watch'
  ];

  const priceOptions = [
    { label: 'All Prices', value: 'all' },
    { label: 'Under ₹2,000', value: 'under-2k' },
    { label: '₹2,000 - ₹5,000', value: '2k-5k' },
    { label: '₹5,000 - ₹10,000', value: '5k-10k' },
    { label: 'Above ₹10,000', value: 'above-10k' }
  ];

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedBrand('All');
    setSelectedCategory('All');
    setPriceRange('all');
    setSortBy('featured');
  };

  const hasActiveFilters =
    Boolean(searchQuery.trim()) ||
    selectedBrand !== 'All' ||
    selectedCategory !== 'All' ||
    priceRange !== 'all' ||
    sortBy !== 'featured';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Title & Breadcrumb */}
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Shop Watches
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Explore our complete catalog of {products.length} genuine brand timepieces.
        </p>
      </div>

      {/* Prominent Search Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-5">
        <div className="relative">
          <input
            type="text"
            placeholder="Search watches by brand or model (e.g. Casio AQ-230, Titan 1805, G-Shock, Fossil)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 text-slate-900 text-sm sm:text-base rounded-xl pl-11 pr-12 py-3.5 border border-slate-300 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all"
          />
          <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 rounded-md"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Quick Suggestion Chips */}
        <div className="flex flex-wrap items-center gap-2 mt-3 pt-3 border-t border-slate-100 text-xs text-slate-500">
          <span className="font-semibold text-slate-700">Quick Searches:</span>
          {['Casio AQ-230GA-9DMQ', 'Casio G-Shock', 'Titan 1805', 'Fastrack Analog', 'Sonata Poze', 'Timex Expedition', 'Fossil Grant'].map((chip) => (
            <button
              key={chip}
              onClick={() => setSearchQuery(chip)}
              className="px-2.5 py-1 bg-slate-100 hover:bg-blue-50 hover:text-blue-600 text-slate-600 rounded-lg text-xs font-medium transition-colors"
            >
              {chip}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Layout (Sidebar Filters + Products Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        
        {/* Desktop Filter Sidebar */}
        <aside className="hidden lg:block bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6 sticky top-28">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
              <SlidersHorizontal className="w-4 h-4 text-blue-600" />
              <span>Filters</span>
            </div>
            {hasActiveFilters && (
              <button
                onClick={handleClearFilters}
                className="text-xs text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            )}
          </div>

          {/* Brand Filter */}
          <div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Brand
            </h3>
            <div className="space-y-1 max-h-48 overflow-y-auto pr-1">
              <button
                onClick={() => setSelectedBrand('All')}
                className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium flex items-center justify-between transition-colors ${
                  selectedBrand === 'All'
                    ? 'bg-blue-50 text-blue-700 font-bold'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <span>All Brands</span>
                <span className="text-[11px] text-slate-400">{products.length}</span>
              </button>

              {brandsList.map((brand) => {
                const count = products.filter(p => p.brand === brand).length;
                const isSelected = selectedBrand === brand;
                return (
                  <button
                    key={brand}
                    onClick={() => setSelectedBrand(brand)}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium flex items-center justify-between transition-colors ${
                      isSelected
                        ? 'bg-blue-50 text-blue-700 font-bold'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span>{brand}</span>
                    <span className="text-[11px] text-slate-400">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Category Filter */}
          <div className="pt-4 border-t border-slate-100">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Category
            </h3>
            <div className="space-y-1">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium flex items-center justify-between transition-colors ${
                      isSelected
                        ? 'bg-blue-50 text-blue-700 font-bold'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span>{cat}</span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-blue-600" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="pt-4 border-t border-slate-100">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Price Range
            </h3>
            <div className="space-y-1">
              {priceOptions.map((opt) => {
                const isSelected = priceRange === opt.value;
                return (
                  <button
                    key={opt.value}
                    onClick={() => setPriceRange(opt.value)}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium flex items-center justify-between transition-colors ${
                      isSelected
                        ? 'bg-blue-50 text-blue-700 font-bold'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span>{opt.label}</span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-blue-600" />}
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Products Column */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Top Bar with Match Counts, Active Badges and Sort */}
          <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            
            {/* Status & Match Text */}
            <div>
              {searchQuery.trim() ? (
                <div>
                  <h2 className="text-sm sm:text-base font-bold text-slate-900">
                    Search results for: <span className="text-blue-600 font-extrabold">"{searchQuery.trim()}"</span>
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Found {filteredProducts.length} matching {filteredProducts.length === 1 ? 'watch' : 'watches'}
                  </p>
                </div>
              ) : (
                <div>
                  <h2 className="text-sm sm:text-base font-bold text-slate-900">
                    {selectedBrand !== 'All' ? `${selectedBrand} Watches` : 'All Watches'}
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Showing {filteredProducts.length} of {products.length} watches
                  </p>
                </div>
              )}
            </div>

            {/* Sort & Mobile Filter Toggle */}
            <div className="flex items-center gap-3">
              {/* Mobile Filter Button */}
              <button
                onClick={() => setMobileFilterOpen(true)}
                className="lg:hidden flex-1 sm:flex-none px-3.5 py-2 rounded-xl border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-1.5"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-blue-600" />
                <span>Filters</span>
                {hasActiveFilters && (
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                )}
              </button>

              {/* Sort By Dropdown */}
              <div className="flex items-center gap-2 flex-1 sm:flex-none">
                <span className="hidden sm:inline text-xs text-slate-500 font-medium whitespace-nowrap">
                  Sort By:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full sm:w-auto bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                >
                  <option value="featured">Featured Picks</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">New Arrivals</option>
                </select>
              </div>
            </div>

          </div>

          {/* Active Filter Pills (if any) */}
          {hasActiveFilters && (
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="text-slate-500 text-xs font-medium">Applied:</span>
              {searchQuery && (
                <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md font-medium border border-blue-200">
                  Search: "{searchQuery}"
                  <button onClick={() => setSearchQuery('')} className="hover:text-blue-900">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {selectedBrand !== 'All' && (
                <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md font-medium border border-blue-200">
                  Brand: {selectedBrand}
                  <button onClick={() => setSelectedBrand('All')} className="hover:text-blue-900">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {selectedCategory !== 'All' && (
                <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md font-medium border border-blue-200">
                  Category: {selectedCategory}
                  <button onClick={() => setSelectedCategory('All')} className="hover:text-blue-900">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {priceRange !== 'all' && (
                <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md font-medium border border-blue-200">
                  Price: {priceOptions.find(p => p.value === priceRange)?.label}
                  <button onClick={() => setPriceRange('all')} className="hover:text-blue-900">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              <button
                onClick={handleClearFilters}
                className="text-xs text-red-600 hover:text-red-700 font-semibold underline underline-offset-2 ml-1"
              >
                Clear All
              </button>
            </div>
          )}

          {/* Product Grid OR No Results State */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <WatchCard
                  key={product.id}
                  product={product}
                  onViewDetails={onSelectProduct}
                />
              ))}
            </div>
          ) : (
            /* No Results Found Fallback */
            <div className="space-y-12">
              <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 text-center max-w-xl mx-auto shadow-sm">
                <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-4 border border-amber-200">
                  <PackageOpen className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  No watches found.
                </h3>
                <p className="text-sm text-slate-500 mt-2 max-w-md mx-auto">
                  We couldn't find any watches matching "{searchQuery || 'selected criteria'}". Try checking for spelling errors, using more general search terms, or clearing filters.
                </p>
                <div className="mt-6">
                  <button
                    onClick={handleClearFilters}
                    className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-colors"
                  >
                    Clear All Filters
                  </button>
                </div>
              </div>

              {/* "You may also like" with recommended products as explicitly required */}
              <div className="pt-6 border-t border-slate-200">
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-bold text-slate-900">
                    You may also like
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {recommendedProducts.map((product) => (
                    <WatchCard
                      key={product.id}
                      product={product}
                      onViewDetails={onSelectProduct}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Mobile Filters Slide-over / Modal */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileFilterOpen(false)}
          />
          <div className="relative ml-auto w-full max-w-xs bg-white h-full shadow-2xl p-6 overflow-y-auto space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h2 className="text-base font-bold text-slate-900">Filter Watches</h2>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Brand Filter */}
            <div>
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                Brand
              </h3>
              <div className="space-y-1">
                <button
                  onClick={() => setSelectedBrand('All')}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium flex items-center justify-between ${
                    selectedBrand === 'All' ? 'bg-blue-50 text-blue-700 font-bold' : 'text-slate-600'
                  }`}
                >
                  <span>All Brands</span>
                  <span>{products.length}</span>
                </button>
                {brandsList.map((brand) => (
                  <button
                    key={brand}
                    onClick={() => setSelectedBrand(brand)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium flex items-center justify-between ${
                      selectedBrand === brand ? 'bg-blue-50 text-blue-700 font-bold' : 'text-slate-600'
                    }`}
                  >
                    <span>{brand}</span>
                    <span>{products.filter(p => p.brand === brand).length}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div className="pt-4 border-t border-slate-100">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                Category
              </h3>
              <div className="space-y-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium flex items-center justify-between ${
                      selectedCategory === cat ? 'bg-blue-50 text-blue-700 font-bold' : 'text-slate-600'
                    }`}
                  >
                    <span>{cat}</span>
                    {selectedCategory === cat && <Check className="w-4 h-4 text-blue-600" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="pt-4 border-t border-slate-100">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                Price
              </h3>
              <div className="space-y-1">
                {priceOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setPriceRange(opt.value)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium flex items-center justify-between ${
                      priceRange === opt.value ? 'bg-blue-50 text-blue-700 font-bold' : 'text-slate-600'
                    }`}
                  >
                    <span>{opt.label}</span>
                    {priceRange === opt.value && <Check className="w-4 h-4 text-blue-600" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Apply & Reset Buttons */}
            <div className="pt-6 border-t border-slate-100 space-y-2">
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="w-full py-3 bg-blue-600 text-white rounded-xl text-xs font-bold shadow-md"
              >
                Show Results ({filteredProducts.length})
              </button>
              {hasActiveFilters && (
                <button
                  onClick={handleClearFilters}
                  className="w-full py-2.5 bg-slate-100 text-slate-700 rounded-xl text-xs font-semibold"
                >
                  Reset All Filters
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
