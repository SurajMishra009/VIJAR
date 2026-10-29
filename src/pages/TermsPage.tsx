import React from 'react';
import { FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TermsPage: React.FC = () => {
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
            <FileText className="w-6 h-6 text-emerald-700" />
            <h1 className="font-serif-title text-3xl font-bold text-stone-900">
              Terms of Service & Travel Disclaimers
            </h1>
          </div>
          <p className="text-xs text-stone-400">Last updated: October 2026</p>

          <section className="space-y-3 text-stone-700 text-sm leading-relaxed">
            <h2 className="font-bold text-stone-900 text-base">1. Nature of the Service</h2>
            <p>
              VIAJAR is an informational travel discovery platform designed to assist travelers with itinerary ideas, estimated budget ranges, and seasonal trends. VIAJAR is not a licensed tour operator, travel agency, or flight booking carrier.
            </p>
          </section>

          <section className="space-y-3 text-stone-700 text-sm leading-relaxed">
            <h2 className="font-bold text-stone-900 text-base">2. Budget Estimates & Rates</h2>
            <p>
              All prices and budget tiers presented across VIAJAR represent indicative averages for independent ground travel. Actual prices fluctuate due to season, demand, availability, fuel rates, and personal comfort preferences. Users should verify live accommodation and transit rates directly with certified providers before booking.
            </p>
          </section>

          <section className="space-y-3 text-stone-700 text-sm leading-relaxed">
            <h2 className="font-bold text-stone-900 text-base">3. Weather & Safety Warnings</h2>
            <p>
              Seasonal advice reflects historical weather trends. Mountain passes, high-altitude trails, and coastal water conditions are subject to rapid shifts and regulatory closures. Travelers are responsible for adhering to official government advisories, permit requirements, and local safety rules.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
