import React, { useState, useEffect } from 'react';
import { PageRoute, WatchProduct } from './types/watch';
import { WATCH_PRODUCTS } from './data/products';
import { CartProvider, useCart } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './views/HomePage';
import { ShopPage } from './views/ShopPage';
import { BrandsPage } from './views/BrandsPage';
import { AboutPage } from './views/AboutPage';
import { ContactPage } from './views/ContactPage';
import { CartPage } from './views/CartPage';
import { CheckoutPage } from './views/CheckoutPage';
import { ProductDetailsPage } from './views/ProductDetailsPage';
import { CheckCircle2 } from 'lucide-react';

const WatchMartApp: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [selectedProduct, setSelectedProduct] = useState<WatchProduct | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedBrand, setSelectedBrand] = useState<string>('All');
  const { toast, addToCart } = useCart();

  // Scroll to top on page navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, selectedProduct]);

  // Navigate handler
  const handleNavigate = (page: PageRoute) => {
    setCurrentPage(page);
  };

  // Search submit handler (navigates to shop with search query set)
  const handleSearchSubmit = (query: string) => {
    setSearchQuery(query);
    setSelectedBrand('All');
    setCurrentPage('shop');
  };

  // Select brand handler (navigates to shop with brand filter set)
  const handleSelectBrand = (brandName: string) => {
    setSelectedBrand(brandName);
    setSearchQuery('');
    setCurrentPage('shop');
  };

  // Select product for detail view
  const handleSelectProduct = (product: WatchProduct) => {
    setSelectedProduct(product);
    setCurrentPage('product-details');
  };

  // Buy Now handler (adds to cart and proceeds straight to checkout)
  const handleBuyNow = (product: WatchProduct, quantity: number) => {
    addToCart(product, quantity);
    setCurrentPage('checkout');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white text-xs font-semibold px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-2 border border-slate-700 animate-slideUp">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toast}</span>
        </div>
      )}

      {/* Global Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onSearchSubmit={handleSearchSubmit}
        searchQuery={searchQuery}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            products={WATCH_PRODUCTS}
            onNavigate={handleNavigate}
            onSelectBrand={handleSelectBrand}
            onSelectProduct={handleSelectProduct}
            onSearchSubmit={handleSearchSubmit}
          />
        )}

        {currentPage === 'shop' && (
          <ShopPage
            products={WATCH_PRODUCTS}
            initialSearchQuery={searchQuery}
            initialBrand={selectedBrand}
            onSelectProduct={handleSelectProduct}
          />
        )}

        {currentPage === 'brands' && (
          <BrandsPage
            products={WATCH_PRODUCTS}
            onSelectBrand={handleSelectBrand}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}

        {currentPage === 'cart' && (
          <CartPage
            onNavigate={handleNavigate}
            onProceedToCheckout={() => setCurrentPage('checkout')}
          />
        )}

        {currentPage === 'checkout' && (
          <CheckoutPage
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'product-details' && selectedProduct && (
          <ProductDetailsPage
            product={selectedProduct}
            allProducts={WATCH_PRODUCTS}
            onBack={() => setCurrentPage('shop')}
            onNavigate={handleNavigate}
            onSelectProduct={handleSelectProduct}
            onBuyNow={handleBuyNow}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onSelectBrand={handleSelectBrand}
      />
    </div>
  );
};

export default function App() {
  return (
    <CartProvider>
      <WatchMartApp />
    </CartProvider>
  );
}
