import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Clock,
  MapPin,
  Send,
  CheckCircle2,
  HelpCircle,
  MessageSquare
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Order & Product Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = 'Please provide your name';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Please provide a valid email';
    if (!formData.message.trim()) newErrors.message = 'Please enter your message';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
          We're Here For You
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Get in Touch With THE WATCH MART
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          Have inquiries about watch models, warranties, or delivery timelines? Our dedicated customer support specialists are ready to help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Contact Info Sidebar */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-900 text-white rounded-3xl p-8 space-y-6 shadow-md">
            <h2 className="text-xl font-bold tracking-tight">
              Customer Support Center
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Reach out directly using the phone or email below, or leave us a message using the form.
            </p>

            <div className="space-y-5 pt-2 text-sm">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs text-slate-400 uppercase tracking-wider font-semibold">Email</span>
                  <a href="mailto:support@thewatchmart.in" className="font-semibold text-white hover:text-blue-400 transition-colors">
                    support@thewatchmart.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs text-slate-400 uppercase tracking-wider font-semibold">Toll-Free Phone</span>
                  <a href="tel:+918004567890" className="font-semibold text-white hover:text-blue-400 transition-colors font-mono">
                    +91 (800) 456-7890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/20">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs text-slate-400 uppercase tracking-wider font-semibold">Business Hours</span>
                  <p className="font-medium text-slate-200">
                    Monday – Saturday: 9:00 AM – 8:00 PM IST
                  </p>
                  <p className="text-xs text-slate-400">Sunday: Closed for maintenance</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs text-slate-400 uppercase tracking-wider font-semibold">Headquarters</span>
                  <p className="text-slate-200 text-xs leading-relaxed">
                    Prestige Tech Park, Outer Ring Road, Marathahalli, Bengaluru, Karnataka 560103, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
          {submitted ? (
            <div className="text-center py-12 space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Message Sent Successfully!
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you for reaching out, <strong>{formData.name}</strong>. Our customer assistance team will review your message and reply back to <strong>{formData.email}</strong> within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', phone: '', subject: 'Order & Product Inquiry', message: '' });
                }}
                className="mt-4 px-6 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                <MessageSquare className="w-5 h-5 text-blue-600" />
                <h2 className="text-lg font-bold text-slate-900">Send Us a Direct Message</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-slate-700">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g. Aditi Rao"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full bg-slate-50 border rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:bg-white ${
                      errors.name ? 'border-red-500' : 'border-slate-300 focus:border-blue-500'
                    }`}
                  />
                  {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-slate-700">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="e.g. aditi@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full bg-slate-50 border rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:bg-white ${
                      errors.email ? 'border-red-500' : 'border-slate-300 focus:border-blue-500'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-slate-700">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:bg-white"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-slate-700">
                    Inquiry Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:bg-white"
                  >
                    <option value="Order & Product Inquiry">Product & Stock Inquiry</option>
                    <option value="Delivery Tracking">Delivery Tracking</option>
                    <option value="Brand Warranty & Servicing">Warranty & Servicing</option>
                    <option value="Returns & Exchanges">Returns & Exchanges</option>
                    <option value="General Question">General Question</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-semibold text-slate-700">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="How can our watch specialists assist you today?"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full bg-slate-50 border rounded-xl p-3.5 text-sm focus:outline-none focus:bg-white ${
                    errors.message ? 'border-red-500' : 'border-slate-300 focus:border-blue-500'
                  }`}
                />
                {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </div>

      </div>

      {/* Frequently Asked Questions */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm space-y-6">
        <div className="flex items-center gap-2 pb-4 border-b border-slate-100">
          <HelpCircle className="w-5 h-5 text-blue-600" />
          <h2 className="text-xl font-bold text-slate-900">Frequently Asked Questions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div className="space-y-1">
            <h3 className="font-bold text-slate-900">Are all watches 100% original?</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Yes, absolutely. Every watch sold on THE WATCH MART is 100% genuine and comes with the manufacturer's official warranty card and retail packaging.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-slate-900">How long does delivery take?</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Orders are dispatched within 24 hours. Metro deliveries arrive in 2–3 business days, while other cities receive their watches within 4–5 business days.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-slate-900">What is the return policy?</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We offer a straightforward 7-day hassle-free return or exchange for any product with manufacturing defects or transit damages.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-slate-900">How do I claim my warranty?</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              You can visit any authorized brand service center (e.g. Casio, Titan, Fossil) across India with your THE WATCH MART digital invoice and warranty card.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
