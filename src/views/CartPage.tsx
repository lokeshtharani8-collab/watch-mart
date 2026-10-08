import React, { useState } from 'react';
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ShieldCheck,
  Tag,
  Check,
  ChevronLeft
} from 'lucide-react';
import { PageRoute } from '../types/watch';
import { useCart } from '../context/CartContext';
import { formatINR } from '../utils/search';

interface CartPageProps {
  onNavigate: (page: PageRoute) => void;
  onProceedToCheckout: () => void;
}

export const CartPage: React.FC<CartPageProps> = ({ onNavigate, onProceedToCheckout }) => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    subtotal,
    deliveryFee,
    itemCount
  } = useCart();

  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    setPromoSuccess('');

    const cleanCode = promoCode.trim().toUpperCase();
    if (cleanCode === 'WATCHMART10') {
      setDiscountPercent(10);
      setPromoSuccess('Coupon Applied! 10% discount added.');
    } else if (cleanCode === 'INTERN20') {
      setDiscountPercent(20);
      setPromoSuccess('Special Internship Coupon Applied! 20% discount added.');
    } else {
      setPromoError('Invalid coupon code. Try "WATCHMART10"');
    }
  };

  const promoDiscountAmount = Math.round((subtotal * discountPercent) / 100);
  const finalTotal = subtotal - promoDiscountAmount + deliveryFee;

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-16 text-center max-w-lg mx-auto shadow-sm">
          <div className="w-20 h-20 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-6 border border-blue-100">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Your Cart is Empty</h2>
          <p className="text-sm text-slate-500 mt-2">
            Looks like you haven't added any watches to your cart yet. Explore our curated collections from Casio, Titan, Fossil, and more!
          </p>
          <div className="mt-8">
            <button
              onClick={() => onNavigate('shop')}
              className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md transition-colors inline-flex items-center gap-2"
            >
              <span>Explore All Watches</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Shopping Cart
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Review your selected watches ({itemCount} {itemCount === 1 ? 'item' : 'items'})
          </p>
        </div>
        <button
          onClick={() => onNavigate('shop')}
          className="hidden sm:inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Continue Shopping</span>
        </button>
      </div>

      {/* Main Grid: Cart Items List + Order Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Cart Items List */}
        <div className="lg:col-span-8 space-y-4">
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm divide-y divide-slate-100">
            {cart.map((item) => {
              const itemTotal = item.product.price * item.quantity;
              return (
                <div key={item.product.id} className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                  {/* Watch Image */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-slate-100 overflow-hidden border border-slate-200 shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Watch Info */}
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block">
                      {item.product.brand}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-mono mt-0.5">
                      Model: {item.product.model} · {item.product.category}
                    </p>
                    <div className="text-sm font-bold text-slate-900 mt-1 sm:hidden">
                      {formatINR(item.product.price)}
                    </div>
                  </div>

                  {/* Quantity Controller */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50 overflow-hidden">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-1.5 hover:bg-slate-200 text-slate-600 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-3 text-xs font-bold text-slate-900 min-w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1.5 hover:bg-slate-200 text-slate-600 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Subtotal */}
                    <div className="text-right min-w-24 hidden sm:block">
                      <span className="block text-sm font-extrabold text-slate-900">
                        {formatINR(itemTotal)}
                      </span>
                      {item.quantity > 1 && (
                        <span className="block text-[11px] text-slate-400">
                          {formatINR(item.product.price)} each
                        </span>
                      )}
                    </div>

                    {/* Remove Action */}
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="p-2 text-slate-400 hover:text-red-600 rounded-xl hover:bg-red-50 transition-colors"
                      title="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-between items-center pt-2">
            <button
              onClick={() => onNavigate('shop')}
              className="sm:hidden text-xs font-semibold text-blue-600 flex items-center gap-1"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Continue Shopping</span>
            </button>
          </div>
        </div>

        {/* Right: Order Summary Card */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-6">
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-4">
              Order Summary
            </h2>

            {/* Calculations Breakdown */}
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal ({itemCount} items)</span>
                <span className="font-semibold text-slate-900">{formatINR(subtotal)}</span>
              </div>

              {discountPercent > 0 && (
                <div className="flex justify-between text-emerald-600 font-medium">
                  <span>Coupon Discount ({discountPercent}%)</span>
                  <span>-{formatINR(promoDiscountAmount)}</span>
                </div>
              )}

              <div className="flex justify-between text-slate-600">
                <span>Estimated Delivery</span>
                <span>
                  {deliveryFee === 0 ? (
                    <span className="text-emerald-600 font-semibold">FREE</span>
                  ) : (
                    formatINR(deliveryFee)
                  )}
                </span>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-between items-baseline">
                <span className="text-base font-bold text-slate-900">Total Amount</span>
                <span className="text-2xl font-extrabold text-blue-600">
                  {formatINR(finalTotal)}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 text-right">
                Includes all applicable taxes & shipping
              </p>
            </div>

            {/* Promo Code Input */}
            <div className="pt-2">
              <form onSubmit={handleApplyPromo} className="space-y-2">
                <label className="block text-xs font-semibold text-slate-700">
                  Have a Coupon Code?
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="e.g. WATCHMART10"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs uppercase font-mono tracking-wider focus:outline-none focus:border-blue-500"
                    />
                    <Tag className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition-colors"
                  >
                    Apply
                  </button>
                </div>
                {promoSuccess && (
                  <p className="text-xs text-emerald-600 font-medium flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    <span>{promoSuccess}</span>
                  </p>
                )}
                {promoError && (
                  <p className="text-xs text-red-600 font-medium">{promoError}</p>
                )}
              </form>
            </div>

            {/* Checkout CTA */}
            <button
              onClick={onProceedToCheckout}
              className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 transition-all transform active:scale-98"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Safe Shopping Guarantee */}
            <div className="pt-2 text-center flex items-center justify-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Safe & Secure 256-bit SSL Checkout</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
