import React, { useState } from 'react';
import { Watch, ShoppingBag, Search, Menu, X, ArrowRight } from 'lucide-react';
import { PageRoute } from '../types/watch';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  onSearchSubmit: (query: string) => void;
  searchQuery: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onSearchSubmit,
  searchQuery
}) => {
  const { itemCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navSearchInput, setNavSearchInput] = useState(searchQuery);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (navSearchInput.trim()) {
      onSearchSubmit(navSearchInput.trim());
      setMobileMenuOpen(false);
    }
  };

  const navLinks: { label: string; page: PageRoute }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Shop', page: 'shop' },
    { label: 'Brands', page: 'brands' },
    { label: 'About', page: 'about' },
    { label: 'Contact', page: 'contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800 text-white shadow-md">
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 px-4 py-1.5 text-xs text-center text-blue-100 font-medium flex items-center justify-center gap-2">
        <span>✨ 100% Genuine Branded Watches</span>
        <span className="hidden sm:inline">·</span>
        <span className="hidden sm:inline">Free Express Delivery Across India on Orders Above ₹999</span>
        <span className="hidden md:inline">·</span>
        <span className="hidden md:inline font-semibold text-yellow-300">Use Code: WATCHMART10 for 10% Off</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
          >
            <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/30 group-hover:bg-blue-500 transition-colors">
              <Watch className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="block text-xl font-bold tracking-wider uppercase font-['Plus_Jakarta_Sans',sans-serif]">
                THE WATCH <span className="text-blue-400">MART</span>
              </span>
              <span className="block text-[11px] text-slate-400 tracking-widest uppercase font-medium">
                Find Your Perfect Watch
              </span>
            </div>
          </button>

          {/* Desktop Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-md mx-6">
            <form onSubmit={handleSearchSubmit} className="relative w-full">
              <input
                type="text"
                placeholder="Search watches by brand or model..."
                value={navSearchInput}
                onChange={(e) => setNavSearchInput(e.target.value)}
                className="w-full bg-slate-800/90 text-sm text-white placeholder-slate-400 rounded-full pl-11 pr-24 py-2.5 border border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <button
                type="submit"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-500 text-xs font-semibold px-3.5 py-1.5 rounded-full transition-colors"
              >
                Search
              </button>
            </form>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => onNavigate(link.page)}
                  className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'text-blue-400 bg-slate-800/80 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons (Cart & Mobile Menu Trigger) */}
          <div className="flex items-center gap-3">
            {/* Cart Button */}
            <button
              onClick={() => onNavigate('cart')}
              className={`relative flex items-center gap-2 px-3.5 py-2 rounded-xl transition-all ${
                currentPage === 'cart'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
              }`}
              aria-label="View Shopping Cart"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-2.5 -right-2.5 bg-blue-500 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-slate-900 shadow-sm animate-pulse">
                    {itemCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline text-sm font-semibold">Cart</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar Row */}
        <div className="lg:hidden pb-4 pt-1">
          <form onSubmit={handleSearchSubmit} className="relative w-full">
            <input
              type="text"
              placeholder="Search watches by brand or model..."
              value={navSearchInput}
              onChange={(e) => setNavSearchInput(e.target.value)}
              className="w-full bg-slate-800 text-sm text-white placeholder-slate-400 rounded-xl pl-10 pr-20 py-2.5 border border-slate-700 focus:outline-none focus:border-blue-500"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <button
              type="submit"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-500 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      {/* Mobile Drawer / Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-4 pt-2 pb-6 space-y-1.5 animate-fadeIn">
          {navLinks.map((link) => {
            const isActive = currentPage === link.page;
            return (
              <button
                key={link.page}
                onClick={() => {
                  onNavigate(link.page);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </button>
            );
          })}

          <div className="pt-2">
            <button
              onClick={() => {
                onNavigate('cart');
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-blue-600 text-white font-semibold text-base shadow-md"
            >
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                <span>My Shopping Cart</span>
              </div>
              <span className="bg-white text-blue-700 text-xs font-bold px-2 py-0.5 rounded-full">
                {itemCount} items
              </span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
