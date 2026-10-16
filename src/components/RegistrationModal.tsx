import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Phone, MessageCircle, Send } from 'lucide-react';
import { CONTACT_INFO, PACKAGES } from '../data/pilgrimageData';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedPackageId?: string;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  preselectedPackageId
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    packageId: preselectedPackageId || 'iraq-special-15d',
    travelers: '2',
    notes: ''
  });

  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (preselectedPackageId) {
      setFormData((prev) => ({ ...prev, packageId: preselectedPackageId }));
    }
  }, [preselectedPackageId]);

  if (!isOpen) return null;

  const selectedPkg = PACKAGES.find((p) => p.id === formData.packageId) || PACKAGES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const getWhatsAppLink = () => {
    const text = `Salam Alaykum Zulfiqar Ali Sahab,\n\nI wish to register for Ziyarat with Karwan-e-Sada-e-Najaf:\n\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• City: ${formData.city || 'Not provided'}\n• Package: ${selectedPkg.title} (${selectedPkg.departureDates})\n• Number of Persons: ${formData.travelers}\n• Notes: ${formData.notes || 'None'}\n\nPlease confirm availability and payment procedure.`;
    return `https://wa.me/923148681093?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative bg-[#032015] border border-amber-500/40 rounded-2xl max-w-xl w-full p-6 sm:p-8 text-amber-50 shadow-2xl overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-emerald-300 hover:text-white p-1 rounded-full bg-emerald-950/80"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-6 space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-900/60 border border-emerald-400 text-emerald-300 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-2xl font-bold font-heading text-white">
                Registration Inquiry Sent
              </h3>
              <p className="text-sm text-emerald-200/90 mt-2">
                Thank you, <strong>{formData.name}</strong>. Your inquiry for <strong>{selectedPkg.title}</strong> has been logged.
              </p>
            </div>

            <div className="p-4 bg-emerald-950/70 border border-emerald-800 rounded-xl text-xs text-left space-y-1 text-emerald-200">
              <div className="font-bold text-amber-400">Direct WhatsApp Notification:</div>
              <div>
                Forward this inquiry directly to Zulfiqar Ali Sahab on WhatsApp to receive priority confirmation and itinerary brochure immediately.
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Notify Zulfiqar Ali on WhatsApp</span>
              </a>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-3 text-xs text-emerald-300 hover:text-white"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-amber-400 text-sm block font-bold">
                کاروانِ صدائے نجف
              </span>
              <h3 className="text-2xl font-black text-white">
                Ziyarat Seat Reservation
              </h3>
              <p className="text-xs text-emerald-200/80 mt-0.5">
                Join our upcoming blessed caravan under the guidance of Zulfiqar Ali.
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-emerald-200 mb-1">
                Select Ziyarat Package
              </label>
              <select
                value={formData.packageId}
                onChange={(e) => setFormData({ ...formData, packageId: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-[#042d1f] border border-emerald-700 text-white focus:outline-none focus:ring-1 focus:ring-amber-400"
              >
                {PACKAGES.map((pkg) => (
                  <option key={pkg.id} value={pkg.id} className="bg-[#032015] text-white">
                    {pkg.title} ({pkg.durationDays} Days - {pkg.departureDates})
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-emerald-200 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Ghulam Abbas"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-[#042d1f] border border-emerald-700 text-white focus:outline-none focus:ring-1 focus:ring-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-emerald-200 mb-1">
                  WhatsApp / Phone *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 0314-8681093"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-[#042d1f] border border-emerald-700 text-white focus:outline-none focus:ring-1 focus:ring-amber-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-emerald-200 mb-1">
                  City of Residence
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="e.g. Lahore, Islamabad"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-[#042d1f] border border-emerald-700 text-white focus:outline-none focus:ring-1 focus:ring-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-emerald-200 mb-1">
                  Number of Pilgrims
                </label>
                <select
                  value={formData.travelers}
                  onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-[#042d1f] border border-emerald-700 text-white focus:outline-none focus:ring-1 focus:ring-amber-400"
                >
                  <option value="1" className="bg-[#032015]">1 Person</option>
                  <option value="2" className="bg-[#032015]">2 Persons (Couple / Sharing)</option>
                  <option value="3" className="bg-[#032015]">3 Persons</option>
                  <option value="4" className="bg-[#032015]">4 Persons (Family)</option>
                  <option value="5+" className="bg-[#032015]">5+ Persons (Large Family)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-emerald-200 mb-1">
                Special Requests (Wheelchair, Elderly room, etc.)
              </label>
              <textarea
                rows={2}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Mention any health or room preferences..."
                className="w-full px-3.5 py-2 text-xs rounded-lg bg-[#042d1f] border border-emerald-700 text-white focus:outline-none focus:ring-1 focus:ring-amber-400"
              />
            </div>

            <div className="pt-2 flex items-center justify-between gap-3">
              <div className="text-[11px] text-emerald-300/80">
                Direct phone: <span className="font-mono">{CONTACT_INFO.phones[0].number}</span>
              </div>
              <button
                type="submit"
                className="px-6 py-2.5 bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 font-bold rounded-lg text-xs hover:from-amber-300 hover:to-yellow-300 shadow flex items-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Reservation</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
