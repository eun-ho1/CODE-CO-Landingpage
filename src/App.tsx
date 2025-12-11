import { useState } from 'react';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { SolutionIntro } from './components/SolutionIntro';
import { Comparison } from './components/Comparison';
import { HowItWorks } from './components/HowItWorks';
import { BeforeAfter } from './components/BeforeAfter';
import { BetaWaitlist } from './components/BetaWaitlist';
import { Footer } from './components/Footer';
import { CTAPopup } from './components/CTAPopup';

export default function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0B0D] relative overflow-hidden">
      {/* Atmospheric background gradients */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-radial from-[#111114] via-[#0B0B0D] to-[#0A0A0C]"></div>
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-white/[0.03] to-transparent blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-[#6A6AFB]/[0.08] to-transparent blur-3xl"></div>
      </div>

      <Hero onCTAClick={() => setIsPopupOpen(true)} />
      <Problem />
      <SolutionIntro />
      <Comparison />
      <HowItWorks />
      <BeforeAfter />
      <BetaWaitlist />
      <Footer />
      
      <CTAPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
}
