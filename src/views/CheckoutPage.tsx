import React, { useState } from 'react';
import {
  ShieldCheck,
  CheckCircle,
  Truck,
  CreditCard,
  Banknote,
  QrCode,
  ArrowRight,
  PackageCheck,
  ShoppingBag,
  MapPin,
  ChevronLeft
} from 'lucide-react';
import { CustomerInfo, PlacedOrder, PageRoute } from '../types/watch';
import { useCart } from '../context/CartContext';
import { formatINR } from '../utils/search';

interface CheckoutPageProps {
  onNavigate: (page: PageRoute) => void;
  onOrderCompleted?: (order: PlacedOrder) => void;
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({ onNavigate, onOrderCompleted }) => {
  const { cart, subtotal, deliveryFee, total, clearCart } = useCart();

  const [formData, setFormData] = useState<CustomerInfo>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'cod'
  });

  const [errors, setErrors] = useState<Partial<Record<keyof CustomerInfo, string>>>({});
  const [placedOrder, setPlacedOrder] = useState<PlacedOrder | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // If cart is empty and no order has been placed, redirect to cart
  if (cart.length === 0 && !placedOrder) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 max-w-md mx-auto shadow-sm">
          <ShoppingBag className="w-12 h-12 text-slate-400 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-slate-900">Your cart is currently empty</h2>
          <p className="text-xs text-slate-500 mt-2">
            Please add some watches to your cart before proceeding to checkout.
          </p>
          <button
            onClick={() => onNavigate('shop')}
            className="mt-6 px-6 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold"
          >
            Go to Shop
          </button>
        </div>
      </div>
    );
  }

  // Handle Input Changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof CustomerInfo]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof CustomerInfo, string>> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Valid email is required';
    if (!formData.phone.trim() || formData.phone.length < 10) newErrors.phone = 'Valid 10-digit phone number is required';
    if (!formData.address.trim()) newErrors.address = 'Street address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.pincode.trim() || formData.pincode.length < 6) newErrors.pincode = 'Valid 6-digit Pincode is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const generatedOrderId = `TWM-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
      const order: PlacedOrder = {
        orderId: generatedOrderId,
        date: new Date().toLocaleDateString('en-IN', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        customer: { ...formData },
        items: [...cart],
        subtotal,
        delivery: deliveryFee,
        tax: Math.round(subtotal * 0.05),
        total,
        estimatedDelivery: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN', {
          weekday: 'short',
          month: 'short',
          day: 'numeric'
        })
      };

      setPlacedOrder(order);
      clearCart();
      setIsSubmitting(false);
      if (onOrderCompleted) onOrderCompleted(order);
    }, 600);
  };

  // SUCCESS SCREEN
  if (placedOrder) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-lg space-y-8 animate-fadeIn">
          
          {/* Header checkmark & order id */}
          <div className="text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto ring-8 ring-emerald-50">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Order placed successfully!
            </h1>
            <p className="text-sm text-slate-600">
              Thank you for shopping at <span className="font-bold text-slate-900">THE WATCH MART</span>. We've sent an order confirmation to <strong className="text-blue-600">{placedOrder.customer.email}</strong>.
            </p>
            <div className="inline-block bg-slate-100 px-4 py-2 rounded-xl border border-slate-200 mt-2">
              <span className="text-xs text-slate-500 font-medium">Order ID: </span>
              <span className="font-mono font-bold text-slate-900">{placedOrder.orderId}</span>
            </div>
          </div>

          {/* Delivery & Shipping Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm">
            <div className="space-y-1.5">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                Shipping Address
              </span>
              <p className="font-bold text-slate-900">{placedOrder.customer.fullName}</p>
              <p className="text-slate-600">{placedOrder.customer.address}</p>
              <p className="text-slate-600">
                {placedOrder.customer.city}, {placedOrder.customer.state} - {placedOrder.customer.pincode}
              </p>
              <p className="text-slate-600 font-mono">Phone: {placedOrder.customer.phone}</p>
            </div>

            <div className="space-y-1.5">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                Delivery Schedule & Payment
              </span>
              <div className="flex items-center gap-2 text-emerald-700 font-semibold">
                <Truck className="w-4 h-4" />
                <span>Estimated Delivery: {placedOrder.estimatedDelivery}</span>
              </div>
              <p className="text-slate-600">
                Payment Method: <span className="font-bold uppercase text-slate-800">{placedOrder.customer.paymentMethod}</span>
              </p>
              <p className="text-slate-600">
                Order Status: <span className="font-semibold text-blue-600">Confirmed (Processing)</span>
              </p>
            </div>
          </div>

          {/* Purchased Items List */}
          <div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Items Ordered ({placedOrder.items.length})
            </h3>
            <div className="border border-slate-200 rounded-2xl divide-y divide-slate-100 overflow-hidden">
              {placedOrder.items.map((item) => (
                <div key={item.product.id} className="p-4 flex items-center gap-4 bg-white">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-14 h-14 rounded-xl object-cover border border-slate-200 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold text-blue-600 uppercase">
                      {item.product.brand}
                    </span>
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-900 truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 font-mono">
                      Qty: {item.quantity} × {formatINR(item.product.price)}
                    </p>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 shrink-0">
                    {formatINR(item.product.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex justify-between items-baseline text-sm font-bold text-slate-900">
              <span>Total Paid / Payable</span>
              <span className="text-xl text-blue-600">{formatINR(placedOrder.total)}</span>
            </div>
          </div>

          {/* Action to Return Home */}
          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => onNavigate('shop')}
              className="flex-1 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
            >
              <span>Continue Shopping</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('home')}
              className="py-3.5 px-6 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-sm transition-colors"
            >
              Back to Home
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
            Checkout
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Complete your shipping address and confirm your watch order
          </p>
        </div>
        <button
          onClick={() => onNavigate('cart')}
          className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to Cart</span>
        </button>
      </div>

      <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Customer Information & Delivery Address */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Contact & Shipping Form Box */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center gap-2 pb-4 border-b border-slate-100">
              <MapPin className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-bold text-slate-900">
                Customer Information & Shipping Address
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div className="sm:col-span-2 space-y-1">
                <label className="block text-xs font-semibold text-slate-700">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="e.g. Rahul Sharma"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`w-full bg-slate-50 border rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:bg-white transition-all ${
                    errors.fullName ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-slate-300 focus:border-blue-500'
                  }`}
                />
                {errors.fullName && <p className="text-xs text-red-500">{errors.fullName}</p>}
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="block text-xs font-semibold text-slate-700">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="e.g. rahul@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full bg-slate-50 border rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:bg-white transition-all ${
                    errors.email ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-slate-300 focus:border-blue-500'
                  }`}
                />
                {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div className="space-y-1">
                <label className="block text-xs font-semibold text-slate-700">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="e.g. 9876543210"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full bg-slate-50 border rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:bg-white transition-all ${
                    errors.phone ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-slate-300 focus:border-blue-500'
                  }`}
                />
                {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
              </div>

              {/* Street Address */}
              <div className="sm:col-span-2 space-y-1">
                <label className="block text-xs font-semibold text-slate-700">
                  Street Address & Flat / House No. <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="e.g. Flat 402, Greenfield Apartments, MG Road"
                  value={formData.address}
                  onChange={handleInputChange}
                  className={`w-full bg-slate-50 border rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:bg-white transition-all ${
                    errors.address ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-slate-300 focus:border-blue-500'
                  }`}
                />
                {errors.address && <p className="text-xs text-red-500">{errors.address}</p>}
              </div>

              {/* City */}
              <div className="space-y-1">
                <label className="block text-xs font-semibold text-slate-700">
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  placeholder="e.g. Bengaluru"
                  value={formData.city}
                  onChange={handleInputChange}
                  className={`w-full bg-slate-50 border rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:bg-white transition-all ${
                    errors.city ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-slate-300 focus:border-blue-500'
                  }`}
                />
                {errors.city && <p className="text-xs text-red-500">{errors.city}</p>}
              </div>

              {/* State */}
              <div className="space-y-1">
                <label className="block text-xs font-semibold text-slate-700">
                  State <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="state"
                  placeholder="e.g. Karnataka"
                  value={formData.state}
                  onChange={handleInputChange}
                  className={`w-full bg-slate-50 border rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:bg-white transition-all ${
                    errors.state ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-slate-300 focus:border-blue-500'
                  }`}
                />
                {errors.state && <p className="text-xs text-red-500">{errors.state}</p>}
              </div>

              {/* Pincode */}
              <div className="space-y-1">
                <label className="block text-xs font-semibold text-slate-700">
                  Pincode <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="pincode"
                  maxLength={6}
                  placeholder="e.g. 560001"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  className={`w-full bg-slate-50 border rounded-xl px-3.5 py-2.5 text-sm font-mono focus:outline-none focus:bg-white transition-all ${
                    errors.pincode ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-slate-300 focus:border-blue-500'
                  }`}
                />
                {errors.pincode && <p className="text-xs text-red-500">{errors.phone}</p>}
              </div>
            </div>
          </div>

          {/* Payment Method Selector */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-slate-900 pb-3 border-b border-slate-100">
              Payment Method (Demo Mode)
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <label
                className={`p-4 rounded-2xl border-2 flex flex-col items-center text-center cursor-pointer transition-all ${
                  formData.paymentMethod === 'cod'
                    ? 'border-blue-600 bg-blue-50/50 shadow-sm'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={formData.paymentMethod === 'cod'}
                  onChange={handleInputChange}
                  className="sr-only"
                />
                <Banknote className="w-6 h-6 text-blue-600 mb-2" />
                <span className="text-xs font-bold text-slate-900">Cash on Delivery</span>
                <span className="text-[11px] text-slate-500 mt-0.5">Pay in cash upon doorstep arrival</span>
              </label>

              <label
                className={`p-4 rounded-2xl border-2 flex flex-col items-center text-center cursor-pointer transition-all ${
                  formData.paymentMethod === 'upi'
                    ? 'border-blue-600 bg-blue-50/50 shadow-sm'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value="upi"
                  checked={formData.paymentMethod === 'upi'}
                  onChange={handleInputChange}
                  className="sr-only"
                />
                <QrCode className="w-6 h-6 text-blue-600 mb-2" />
                <span className="text-xs font-bold text-slate-900">UPI / QR Code</span>
                <span className="text-[11px] text-slate-500 mt-0.5">Instant GPay, PhonePe, Paytm demo</span>
              </label>

              <label
                className={`p-4 rounded-2xl border-2 flex flex-col items-center text-center cursor-pointer transition-all ${
                  formData.paymentMethod === 'card'
                    ? 'border-blue-600 bg-blue-50/50 shadow-sm'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={formData.paymentMethod === 'card'}
                  onChange={handleInputChange}
                  className="sr-only"
                />
                <CreditCard className="w-6 h-6 text-blue-600 mb-2" />
                <span className="text-xs font-bold text-slate-900">Credit / Debit Card</span>
                <span className="text-[11px] text-slate-500 mt-0.5">Visa, Mastercard, RuPay demo</span>
              </label>
            </div>
          </div>

        </div>

        {/* Right Column: Order Summary & Place Order Button */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-6 sticky top-28">
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-4">
              Order Summary
            </h2>

            {/* Items mini list */}
            <div className="space-y-3 max-h-56 overflow-y-auto pr-1">
              {cart.map((item) => (
                <div key={item.product.id} className="flex items-center gap-3 text-xs">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-12 h-12 rounded-lg object-cover border border-slate-200 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="font-bold text-slate-900 truncate block">
                      {item.product.name}
                    </span>
                    <span className="text-slate-500">Qty: {item.quantity}</span>
                  </div>
                  <span className="font-bold text-slate-900 shrink-0">
                    {formatINR(item.product.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            {/* Calculations Breakdown */}
            <div className="space-y-2.5 text-xs sm:text-sm pt-4 border-t border-slate-100">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span className="font-semibold text-slate-900">{formatINR(subtotal)}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Delivery Charges</span>
                <span>
                  {deliveryFee === 0 ? (
                    <span className="text-emerald-600 font-semibold">FREE</span>
                  ) : (
                    formatINR(deliveryFee)
                  )}
                </span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>GST (Included)</span>
                <span className="text-slate-700">₹0 extra</span>
              </div>
              <div className="pt-3 border-t border-slate-100 flex justify-between items-baseline">
                <span className="text-sm font-bold text-slate-900">Total Payable</span>
                <span className="text-2xl font-extrabold text-blue-600">
                  {formatINR(total)}
                </span>
              </div>
            </div>

            {/* Place Order Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {isSubmitting ? (
                <span>Processing Order...</span>
              ) : (
                <>
                  <PackageCheck className="w-5 h-5" />
                  <span>Place Order ({formatINR(total)})</span>
                </>
              )}
            </button>

            <div className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1.5 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Demo Checkout · No real bank deduction</span>
            </div>
          </div>
        </div>

      </form>
    </div>
  );
};
