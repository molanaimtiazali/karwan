/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DestinationsFolder } from './components/DestinationsFolder';
import { PackagesSection } from './components/PackagesSection';
import { LeadershipSection } from './components/LeadershipSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PilgrimToolsSection } from './components/PilgrimToolsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { RegistrationModal } from './components/RegistrationModal';
import { ZiyaratPackage, CONTACT_INFO } from './data/pilgrimageData';
import { MessageCircle, Phone } from 'lucide-react';

export default function App() {
  const [currency, setCurrency] = useState<'PKR' | 'USD'>('PKR');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preselectedPackageId, setPreselectedPackageId] = useState<string | undefined>(undefined);
  const [preselectedDestination, setPreselectedDestination] = useState<string>('');

  const handleToggleCurrency = () => {
    setCurrency((prev) => (prev === 'PKR' ? 'USD' : 'PKR'));
  };

  const handleOpenRegister = (packageId?: string) => {
    setPreselectedPackageId(packageId);
    setIsModalOpen(true);
  };

  const handleSelectPackageForBooking = (pkg: ZiyaratPackage) => {
    setPreselectedPackageId(pkg.id);
    setIsModalOpen(true);
  };

  const handleSelectDestinationForInquiry = (destName: string) => {
    setPreselectedDestination(destName);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfbf7] text-slate-800 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Top Header & Navigation */}
      <Header
        currency={currency}
        onToggleCurrency={handleToggleCurrency}
        onOpenRegisterModal={handleOpenRegister}
      />

      <main className="flex-1">
        {/* Hero Section with Official Group Banner at Bain-ul-Haramain */}
        <Hero onOpenRegister={() => handleOpenRegister()} />

        {/* Holy Destinations & City Folders */}
        <DestinationsFolder
          onSelectDestinationForInquiry={handleSelectDestinationForInquiry}
        />

        {/* Upcoming Packages with PKR/USD Toggle */}
        <PackagesSection
          currency={currency}
          onBookPackage={handleSelectPackageForBooking}
        />

        {/* About Leadership: Zulfiqar Ali */}
        <LeadershipSection />

        {/* Past Trips Media Folders & Lightbox */}
        <GallerySection />

        {/* Verified Pilgrim Testimonials */}
        <TestimonialsSection />

        {/* Pilgrim Tools: Interactive Checklist, Holy Duas & FAQ */}
        <PilgrimToolsSection />

        {/* Contact Us & Registration Form */}
        <ContactSection preselectedDestination={preselectedDestination} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Registration Modal */}
      <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselectedPackageId={preselectedPackageId}
      />

      {/* Floating Quick Action Contacts for Instant Access */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        <a
          href={CONTACT_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-xl shadow-emerald-950/30 transition-transform hover:scale-105 group border border-emerald-400/40 text-xs font-semibold"
          aria-label="Direct WhatsApp Chat"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="hidden sm:inline">WhatsApp Maulana Sahab</span>
        </a>

        <a
          href={`tel:${CONTACT_INFO.phones[0].clean}`}
          className="flex items-center gap-2 px-3.5 py-2 bg-[#021f15] hover:bg-[#032d1f] text-amber-300 hover:text-white rounded-full shadow-lg border border-amber-500/40 transition-transform hover:scale-105 text-xs font-medium"
          aria-label="Call Helpline"
        >
          <Phone className="w-4 h-4 text-emerald-400" />
          <span className="hidden sm:inline">{CONTACT_INFO.phones[0].number}</span>
        </a>
      </div>
    </div>
  );
}
