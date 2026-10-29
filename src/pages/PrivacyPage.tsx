import React from 'react';
import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FBFBF9] py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-stone-900 mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/90 shadow-2xs space-y-6">
          <div className="flex items-center gap-2.5 text-[#133E33]">
            <Shield className="w-6 h-6 text-emerald-700" />
            <h1 className="font-serif-title text-3xl font-bold text-stone-900">
              Privacy Policy
            </h1>
          </div>
          <p className="text-xs text-stone-400">Last updated: October 2026</p>

          <section className="space-y-3 text-stone-700 text-sm leading-relaxed">
            <h2 className="font-bold text-stone-900 text-base">1. Information We Collect</h2>
            <p>
              VIAJAR does not require you to create an account or provide payment information. Your saved favorite destinations are stored entirely within your browser&apos;s local storage (<code className="bg-stone-100 px-1 py-0.5 rounded text-xs">localStorage</code>) and are never transmitted to any third-party marketing servers.
            </p>
          </section>

          <section className="space-y-3 text-stone-700 text-sm leading-relaxed">
            <h2 className="font-bold text-stone-900 text-base">2. Contact Form Submissions</h2>
            <p>
              When you submit feedback or corrections through our contact form, your name, email, and message are used solely to review editorial notes or reply to your question.
            </p>
          </section>

          <section className="space-y-3 text-stone-700 text-sm leading-relaxed">
            <h2 className="font-bold text-stone-900 text-base">3. Cookies and Analytics</h2>
            <p>
              VIAJAR does not use invasive tracking pixels, ad networks, or third-party behavioral profiling.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
