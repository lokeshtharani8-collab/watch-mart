import React from 'react';
import { Watch, ShieldCheck, Truck, RotateCcw, Award, Mail, Phone, MapPin } from 'lucide-react';
import { PageRoute } from '../types/watch';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
  onSelectBrand?: (brand: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectBrand }) => {
  const brandList = [
    'Casio',
    'Titan',
    'Sonata',
    'Fastrack',
    'Allen Solly',
    'Timex',
    'Fossil',
    'Tommy Hilfiger'
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Trust & Assurance Bar */}
      <div className="border-b border-slate-800/80 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/20 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">100% Genuine</h4>
                <p className="text-xs text-slate-400 mt-0.5">Directly sourced authentic brand watches</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/20 shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Free Express Delivery</h4>
                <p className="text-xs text-slate-400 mt-0.5">On all prepaid & COD orders over ₹999</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/20 shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">2-Year Warranty</h4>
                <p className="text-xs text-slate-400 mt-0.5">Comprehensive brand service protection</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/20 shrink-0">
                <RotateCcw className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Easy 7-Day Returns</h4>
                <p className="text-xs text-slate-400 mt-0.5">Hassle-free replacement guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md">
                <Watch className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-lg font-bold text-white tracking-wider uppercase font-['Plus_Jakarta_Sans',sans-serif]">
                  THE WATCH <span className="text-blue-400">MART</span>
                </span>
                <span className="block text-[10px] text-slate-400 tracking-widest uppercase">
                  Find Your Perfect Watch
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              The Watch Mart is an online watch shopping destination built to help customers explore, compare, and acquire authentic timepieces from the world’s most trusted brands.
            </p>

            <div className="space-y-2 text-xs text-slate-400 pt-2">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>support@thewatchmart.in</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>+91 (800) 456-7890 (Toll-Free Mon–Sat)</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>MG Road, Prestige Tech Park, Bengaluru, Karnataka, 560001</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-blue-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('shop')} className="hover:text-blue-400 transition-colors">
                  Shop All Watches
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('brands')} className="hover:text-blue-400 transition-colors">
                  Popular Brands
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-blue-400 transition-colors">
                  About Our Store
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-blue-400 transition-colors">
                  Contact Support
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('cart')} className="hover:text-blue-400 transition-colors">
                  Shopping Cart
                </button>
              </li>
            </ul>
          </div>

          {/* Popular Brands */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Featured Brands
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {brandList.map(brand => (
                <li key={brand}>
                  <button
                    onClick={() => {
                      if (onSelectBrand) {
                        onSelectBrand(brand);
                      } else {
                        onNavigate('shop');
                      }
                    }}
                    className="hover:text-blue-400 transition-colors text-left"
                  >
                    {brand} Watches
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories & Policies */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Watch Categories
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>Analog Classic</li>
              <li>Digital Sport</li>
              <li>Analog-Digital Hybrid</li>
              <li>Executive Chronograph</li>
              <li>Touchscreen Smart Watch</li>
              <li className="pt-2 text-xs text-slate-500 border-t border-slate-800">
                100% Secure Checkout with Razorpay / UPI / Cash on Delivery
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} THE WATCH MART. All rights reserved.</p>
          <p className="text-slate-400">
            Professional E-Commerce Internship Project · Designed & Built with React & Vite
          </p>
        </div>
      </div>
    </footer>
  );
};
