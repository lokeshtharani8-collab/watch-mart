import React from 'react';
import {
  Watch,
  CheckCircle,
  Search,
  Smartphone,
  ShieldCheck,
  ShoppingBag,
  Award,
  Users,
  Code2
} from 'lucide-react';
import { PageRoute } from '../types/watch';

interface AboutPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Hero Intro */}
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
          <Watch className="w-4 h-4 text-blue-600" />
          <span>About THE WATCH MART</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Find Your Perfect Watch
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          The Watch Mart is an online watch shopping platform designed to help customers discover watches from trusted brands in one place. We bridge the gap between discerning watch lovers and genuine brand timepieces.
        </p>
      </div>

      {/* 5 Core Pillars Section as required by prompt */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* 1. Wide Selection */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
            <ShoppingBag className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">1. Wide Selection</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            From iconic analog dress watches and tactical G-Shocks to smart hybrid fitness trackers and chronographs, our 40+ catalog spans diverse styles, materials, and price tiers for every wrist.
          </p>
        </div>

        {/* 2. Trusted Brands */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">2. Trusted Brands</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            We partner exclusively with certified manufacturers including Casio, Titan, Sonata, Fastrack, Timex, Fossil, Tommy Hilfiger, and Allen Solly to guarantee 100% genuine products with authorized warranties.
          </p>
        </div>

        {/* 3. Easy Search */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">3. Easy Search</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Our multi-parameter dynamic search architecture allows real-time lookups across brand names, specific model codes (e.g., AQ-230, 1805, G-Shock), categories, and partial keywords with zero page refreshes.
          </p>
        </div>

        {/* 4. Simple Shopping Experience */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">4. Simple Shopping Experience</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            A frictionless journey from discovery to checkout. Persistent local shopping cart, transparent INR pricing, promo code support, instant quantity adjustments, and verified demo checkout confirmations.
          </p>
        </div>

        {/* 5. Responsive Design */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
            <Smartphone className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">5. Responsive Design</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Engineered from the ground up for desktop, laptop, tablet, Android, and iPhone viewports. No horizontal scrolling, adaptive navigation drawers, and fluid card grids that render crisply everywhere.
          </p>
        </div>

        {/* Project Dedication Card */}
        <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-3xl p-8 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-600/30 text-blue-400 flex items-center justify-center border border-blue-500/30">
            <Code2 className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white">Engineering Excellence</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Built as a professional internship project showcasing modern React architecture, pure component separation, robust TypeScript typing, and clean UI engineering ready for Vercel production deployment.
          </p>
        </div>

      </div>

      {/* Call to Action Banner */}
      <div className="bg-slate-900 rounded-3xl text-white p-8 sm:p-12 text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          Ready to Find Your Next Timepiece?
        </h2>
        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
          Explore our collection of over 40 watches with fast delivery, authentic warranties, and transparent pricing.
        </p>
        <div>
          <button
            onClick={() => onNavigate('shop')}
            className="px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-colors"
          >
            Start Exploring
          </button>
        </div>
      </div>
    </div>
  );
};
