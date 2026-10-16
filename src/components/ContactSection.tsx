import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, MapPin, Send, CheckCircle2, AlertCircle, Clock, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../data/pilgrimageData';

interface ContactSectionProps {
  preselectedDestination?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  preselectedDestination = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    packageType: preselectedDestination || 'Iraq (15 Days)',
    travelers: '2',
    roomType: 'Double Room',
    specialAssistance: 'None',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please enter your full name and contact phone / WhatsApp number.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const generateWhatsAppInquiryUrl = () => {
    const text = `Salam Alaykum Zulfiqar Ali Sahab,\n\nI have submitted a Ziyarat inquiry on the Karwan-e-Sada-e-Najaf website with the following details:\n\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• City: ${formData.city || 'Not specified'}\n• Package: ${formData.packageType}\n• Travelers: ${formData.travelers}\n• Room: ${formData.roomType}\n• Special Assistance: ${formData.specialAssistance}\n• Notes: ${formData.message || 'None'}\n\nPlease share the detailed pricing, flight schedule, and seat availability. JazakAllah Khair.`;
    return `https://wa.me/923148681093?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-20 bg-[#fbfaf5] text-slate-800 border-b border-amber-900/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-emerald-800 font-sans mb-1 flex items-center gap-1.5">
            <Mail className="w-4 h-4 text-emerald-700" />
            <span>Connect & Inquire</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-emerald-950 mb-2">
            Contact & Registration Desk
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Have questions about upcoming Ziyarat dates, requirements, or wish to reserve seats for your family? Reach out to our leadership directly or submit the inquiry form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#032418] text-amber-50 rounded-2xl p-6 sm:p-8 border border-amber-500/30 shadow-md space-y-6">
              <div className="border-b border-emerald-800/80 pb-4">
                <span className="text-amber-300 text-lg block font-bold">
                  کاروانِ صدائے نجف
                </span>
                <h3 className="text-2xl font-black text-white">
                  {CONTACT_INFO.agencyName}
                </h3>
                <p className="text-xs text-emerald-200/80 mt-1">
                  Under the spiritual guidance of {CONTACT_INFO.leader}
                </p>
              </div>

              {/* Quick Action Dial Buttons */}
              <div className="space-y-3">
                <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold">
                  Official Phone Lines (Call or SMS)
                </div>
                {CONTACT_INFO.phones.map((phone, idx) => (
                  <a
                    key={idx}
                    href={`tel:${phone.clean}`}
                    className="flex items-center justify-between p-3 rounded-xl bg-[#042d1f] border border-emerald-800/60 hover:border-amber-400/60 hover:bg-[#053827] text-white transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-900/80 text-amber-400 flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-mono text-sm font-bold text-amber-200 group-hover:text-white">
                          {phone.number}
                        </div>
                        <div className="text-[11px] text-emerald-300/70">
                          {phone.label}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-amber-400 group-hover:underline">
                      Call Now &rarr;
                    </span>
                  </a>
                ))}
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-2">
                <a
                  href={CONTACT_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 shadow transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp Direct Chat</span>
                </a>
              </div>

              {/* Email & Office Details */}
              <div className="pt-4 border-t border-emerald-800/80 space-y-3 text-xs text-emerald-200/90">
                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Official Email</span>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-white hover:text-amber-300 underline underline-offset-2"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Central Office</span>
                    <span className="text-white">{CONTACT_INFO.officeAddress}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Consultation Timings</span>
                    <span className="text-white">10:00 AM – 9:00 PM (Monday through Sunday)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Registration / Inquiry Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-amber-900/15 p-6 sm:p-8 shadow-sm">
              {submitted ? (
                <div className="text-center py-8 space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-heading text-emerald-950">
                      Inquiry Received With Thanks!
                    </h3>
                    <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
                      JazakAllah Khair, {formData.name}. Zulfiqar Ali and our team have received your details for <strong>{formData.packageType}</strong>.
                    </p>
                  </div>

                  <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-left max-w-md mx-auto text-xs space-y-1 text-slate-700">
                    <div className="font-bold text-emerald-950">Instant Confirmation via WhatsApp:</div>
                    <p>
                      Click the button below to forward your inquiry summary directly to Zulfiqar Ali Sahab's WhatsApp for priority response within minutes:
                    </p>
                  </div>

                  <div className="pt-2 flex flex-wrap justify-center gap-3">
                    <a
                      href={generateWhatsAppInquiryUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-emerald-700 hover:bg-emerald-600 text-white font-bold rounded-xl text-sm flex items-center gap-2 shadow"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send Summary to WhatsApp Direct</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-3 text-xs font-semibold text-slate-600 hover:text-slate-900"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-xl font-bold font-heading text-emerald-950">
                      Ziyarat Package Reservation & Inquiry
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Fill out this quick form for package itineraries, pricing breakdowns, and seat availability.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 bg-red-50 text-red-700 rounded-lg text-xs flex items-center gap-2 border border-red-200">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name (As on Passport) *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Syed Ali Raza"
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-slate-50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        WhatsApp / Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 0314-8681093"
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-slate-50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. yourname@example.com"
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-slate-50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Current City / Residence
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Lahore, Karachi, Houston, UK"
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-slate-50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Preferred Ziyarat Package
                      </label>
                      <select
                        value={formData.packageType}
                        onChange={(e) => setFormData({ ...formData, packageType: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-slate-50"
                      >
                        <option value="Iraq (15 Days)">Iraq (15 Days - Najaf, Karbala, Kazmain, Samarra)</option>
                        <option value="Executive Umrah & Madinah (12 Days)">Executive Umrah & Madinah (12 Days)</option>
                        <option value="Iran (14 Days)">Iran (14 Days - Mashhad & Qom)</option>
                        <option value="Combined Grand Tour (21 Days)">Combined Grand Tour (21 Days - Iraq & Iran)</option>
                        <option value="Custom Group / Private Family Package">Custom Group / Private Family Package</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Number of Travelers
                      </label>
                      <select
                        value={formData.travelers}
                        onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-slate-50"
                      >
                        <option value="1">1 Person (Single)</option>
                        <option value="2">2 Persons (Couple / Sharing)</option>
                        <option value="3-4">3 - 4 Persons (Family)</option>
                        <option value="5-8">5 - 8 Persons (Large Family)</option>
                        <option value="10+">10+ Persons (Group)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Room Preference
                      </label>
                      <select
                        value={formData.roomType}
                        onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-slate-50"
                      >
                        <option value="Double Room (2 Persons)">Double Room (2 Persons)</option>
                        <option value="Triple Room (3 Persons)">Triple Room (3 Persons)</option>
                        <option value="Quad Room (4 Persons)">Quad Room (4 Persons)</option>
                        <option value="Single Private Room">Single Private Room</option>
                        <option value="Standard Group Sharing">Standard Group Sharing</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Elderly / Special Assistance Needed?
                      </label>
                      <select
                        value={formData.specialAssistance}
                        onChange={(e) => setFormData({ ...formData, specialAssistance: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-slate-50"
                      >
                        <option value="None">None (Independent)</option>
                        <option value="Wheelchair Support Required">Wheelchair Support Required</option>
                        <option value="Senior Citizen Care (Ground Floor / Elevator)">Senior Citizen Care (Ground Floor / Elevator)</option>
                        <option value="Diabetic / Dietary Requirements">Diabetic / Dietary Requirements</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Additional Questions or Specific Travel Dates
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. We wish to travel in November, please let us know about child discount and airline baggage allowance..."
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-slate-50"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-[11px] text-slate-500">
                      Your details are kept completely private and shared only with Zulfiqar Ali.
                    </span>
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-7 py-3 bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 font-bold rounded-xl text-sm hover:from-amber-300 hover:to-yellow-300 transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
