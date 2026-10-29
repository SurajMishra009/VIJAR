import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, Info, MessageSquare, MapPin } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState<ContactFormData | null>(null);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format (e.g. name@example.com).';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please provide a subject.';
    } else if (formData.subject.trim().length < 3) {
      errs.subject = 'Subject must be at least 3 characters.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please write your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate sending with realistic delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedMessage(formData);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#FBFBF9] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#133E33] mb-3">
            <Mail className="w-4 h-4 text-emerald-600" />
            <span>Get in Touch</span>
          </div>
          <h1 className="font-serif-title text-4xl sm:text-5xl font-bold text-stone-900 tracking-tight mb-3">
            Contact & Travel Feedback
          </h1>
          <p className="text-stone-600 text-sm sm:text-base max-w-xl mx-auto">
            Have updated notes on a destination, trail conditions, or local budget changes? We’d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Info Side */}
          <div className="md:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-2xs space-y-4">
              <h3 className="font-serif-title text-xl font-bold text-stone-900">
                Editorial Inquiries
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                VIAJAR is maintained as an independent open travel discovery initiative. We welcome corrections to route permits, seasonal closures, and local pricing.
              </p>

              <div className="pt-4 border-t border-stone-100 space-y-3 text-xs text-stone-700">
                <a
                  href="mailto:officaillysuraj.9@gmail.com"
                  className="flex items-center gap-2.5 hover:text-[#133E33] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#133E33] shrink-0" />
                  <span className="font-semibold text-stone-900">officaillysuraj.9@gmail.com</span>
                </a>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#133E33] shrink-0" />
                  <span>Chandigarh, India</span>
                </div>
              </div>
            </div>

            {/* Delivery Transparency Note */}
            <div className="bg-emerald-50/70 rounded-2xl p-5 border border-emerald-200/80 text-xs text-stone-700 space-y-2">
              <div className="flex items-center gap-2 font-bold text-[#133E33]">
                <Info className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Message Delivery Note</span>
              </div>
              <p className="leading-relaxed text-stone-600">
                This platform is running in preview mode. Submissions are validated and stored locally in demo state. For live mailbox delivery, an SMTP relay or SendGrid webhook would be linked to the backend service.
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/90 shadow-2xs">
              {submittedMessage ? (
                <div className="text-center py-8 space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 bg-emerald-100 text-[#133E33] rounded-2xl flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-emerald-700" />
                  </div>
                  <h3 className="font-serif-title text-2xl font-bold text-stone-900">
                    Message Received!
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-stone-800">{submittedMessage.name}</strong>. Your message regarding &ldquo;{submittedMessage.subject}&rdquo; has been validated and recorded.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setSubmittedMessage(null)}
                      className="px-5 py-2.5 bg-[#133E33] hover:bg-[#0c2720] text-white text-xs font-semibold rounded-xl transition-all shadow-sm"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Maya Sharma"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'contact-name-error' : undefined}
                      className={`w-full px-4 py-2.5 text-sm rounded-xl border transition-all ${
                        errors.name
                          ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-300'
                          : 'border-stone-200 bg-stone-50/50 hover:bg-stone-50 focus:bg-white focus:ring-[#133E33]'
                      } focus:outline-none focus:ring-2`}
                    />
                    {errors.name && (
                      <p id="contact-name-error" className="text-rose-600 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. maya@example.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'contact-email-error' : undefined}
                      className={`w-full px-4 py-2.5 text-sm rounded-xl border transition-all ${
                        errors.email
                          ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-300'
                          : 'border-stone-200 bg-stone-50/50 hover:bg-stone-50 focus:bg-white focus:ring-[#133E33]'
                      } focus:outline-none focus:ring-2`}
                    />
                    {errors.email && (
                      <p id="contact-email-error" className="text-rose-600 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Subject <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Budget update for Manali or new trail suggestion"
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
                      className={`w-full px-4 py-2.5 text-sm rounded-xl border transition-all ${
                        errors.subject
                          ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-300'
                          : 'border-stone-200 bg-stone-50/50 hover:bg-stone-50 focus:bg-white focus:ring-[#133E33]'
                      } focus:outline-none focus:ring-2`}
                    />
                    {errors.subject && (
                      <p id="contact-subject-error" className="text-rose-600 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share your detailed notes, season feedback, or recommendations..."
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'contact-message-error' : undefined}
                      className={`w-full px-4 py-2.5 text-sm rounded-xl border transition-all ${
                        errors.message
                          ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-300'
                          : 'border-stone-200 bg-stone-50/50 hover:bg-stone-50 focus:bg-white focus:ring-[#133E33]'
                      } focus:outline-none focus:ring-2`}
                    />
                    {errors.message && (
                      <p id="contact-message-error" className="text-rose-600 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 px-6 bg-[#133E33] hover:bg-[#0c2720] disabled:opacity-60 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#133E33]"
                    >
                      {isSubmitting ? (
                        <span>Validating & Recording...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-emerald-300" />
                          <span>Submit Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
