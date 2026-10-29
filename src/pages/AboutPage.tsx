import React from 'react';
import { Compass, ShieldCheck, Heart, MapPin, Sparkles, Wallet, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FBFBF9] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#133E33] mb-3">
            <Compass className="w-4 h-4 text-emerald-600" />
            <span>Our Philosophy</span>
          </div>
          <h1 className="font-serif-title text-4xl sm:text-5xl font-bold text-stone-900 tracking-tight mb-4">
            About VIAJAR
          </h1>
          <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            A thoughtfully crafted tour guidance platform built to empower mindful travelers with realistic estimates, seasonal insights, and authentic recommendations.
          </p>
        </div>

        {/* Mission Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200/90 shadow-2xs mb-12 space-y-6">
          <h2 className="font-serif-title text-2xl font-bold text-stone-900">
            Why We Built VIAJAR
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            Planning independent journeys often entails wading through commercial booking portals full of opaque package costs, paid hotel promotions, and misleading season guides. We wanted an experience that feels calm, elegant, and strictly informative.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            VIAJAR strips away the artificial noise. We highlight extraordinary destinations across mountain ridges, historical kingdoms, tranquil backwaters, and holy riverbanks, giving you the real context you need to plan a trip with confidence.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-stone-100">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-stone-50 border border-stone-100">
              <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-bold text-stone-900 mb-1">
                  Zero Commercial Placement
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  No hotel or resort can pay to appear at the top of our lists. Our editorial selections are based solely on geographic beauty and traveler value.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-stone-50 border border-stone-100">
              <Wallet className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-bold text-stone-900 mb-1">
                  Transparent Budget Method
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Our estimates break down actual per-person costs for standard accommodations, food, local transport, and monument entry.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How We Calculate Budgets */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200/90 shadow-2xs mb-12 space-y-4">
          <h2 className="font-serif-title text-2xl font-bold text-stone-900">
            How Our Budget Guidance Works
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            All trip estimates shown on VIAJAR represent <strong>4-5 day per-person ground costs</strong> for independent travelers. Each estimate reflects:
          </p>
          <ul className="space-y-2 text-sm text-stone-600 list-disc list-inside">
            <li><strong>Accommodation:</strong> Clean, atmospheric guesthouses, boutique heritage havelis, or riverside retreats.</li>
            <li><strong>Food & Dining:</strong> Authentic regional cuisine, dhabas, character cafes, and local dining experiences.</li>
            <li><strong>Sightseeing & Activities:</strong> Standard entry tickets (such as ASI monument composite passes or cable car rides).</li>
            <li><strong>Local Transportation:</strong> On-ground auto-rickshaws, shared jeeps, scooter rentals, or private point-to-point cabs.</li>
          </ul>
          <p className="text-xs text-stone-500 pt-3 border-t border-stone-100">
            * Long-haul transit (interstate airfare or train bookings) is not included because starting locations vary significantly.
          </p>
        </div>

        {/* CTA & Curator Note */}
        <div className="text-center pt-4 space-y-3">
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#133E33] hover:bg-[#0c2720] text-white text-sm font-semibold rounded-2xl shadow-md transition-all"
          >
            <Compass className="w-4 h-4 text-emerald-300" />
            <span>Start Exploring Destinations</span>
          </Link>
          <p className="text-xs text-stone-500">
            Curated with passion from <strong>Chandigarh, India</strong> • Direct Inquiries:{' '}
            <a
              href="mailto:officaillysuraj.9@gmail.com"
              className="text-[#133E33] font-medium hover:underline"
            >
              officaillysuraj.9@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
