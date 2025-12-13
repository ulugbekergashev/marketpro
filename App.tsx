import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import MarketOpportunity from './components/MarketOpportunity';
import PainPoints from './components/PainPoints';
import WhyUs from './components/WhyUs';
import Mentor from './components/Mentor';
import Curriculum from './components/Curriculum';
import JobGuarantee from './components/JobGuarantee';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';
import UrgencyBar from './components/UrgencyBar';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark relative selection:bg-brand-blue selection:text-white overflow-x-hidden">
      <Header />
      
      <main>
        {/* Stage 1: Hook & Promise */}
        <Hero />
        <Stats />
        
        {/* Stage 2: Problem & Agitation */}
        <PainPoints />
        <MarketOpportunity />
        
        {/* Stage 3: Why Us & Authority */}
        <WhyUs />
        <Mentor />

        {/* Stage 4: Solution & Methodology */}
        <Curriculum />
        <JobGuarantee />
        
        {/* Stage 5: Proof & Offer */}
        <Testimonials />
        <Pricing />
        <FAQ />
        
        {/* Stage 6: Action */}
        <Contact />
      </main>

      <footer className="bg-[#02040a] text-slate-500 py-12 border-t border-white/5">
        <div className="container mx-auto px-6 text-center md:text-left md:flex justify-between items-center">
          <div>
            <div className="text-xl font-bold text-white mb-2">Market Pro Academy</div>
            <p className="text-sm">Marketpleyslarda strategik hamkoringiz.</p>
          </div>
          <div className="mt-8 md:mt-0 text-sm">
            &copy; {new Date().getFullYear()} Barcha huquqlar himoyalangan.
          </div>
        </div>
      </footer>

      <ChatWidget />
      <UrgencyBar />
    </div>
  );
}

export default App;