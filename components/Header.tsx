import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { Menu, X, ArrowRight } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'auto' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${isScrolled
          ? 'bg-brand-dark/80 backdrop-blur-xl border-white/10 py-4'
          : 'bg-transparent border-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2 z-50 group"
        >
          <div className="bg-gradient-to-tr from-blue-600 to-blue-400 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-900/50 group-hover:scale-105 transition-transform">MP</div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white leading-none">
              Market Pro
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase">Academy</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="text-sm font-medium text-slate-300 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, '#contact')}
            className="group relative px-6 py-2.5 rounded-full bg-white text-brand-dark font-bold text-sm transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] overflow-hidden cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-1 group-hover:gap-2 transition-all">
              Boshlash <ArrowRight className="w-4 h-4" />
            </span>
            <div className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-10 transition-opacity"></div>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-brand-dark z-40 flex items-center justify-center md:hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <nav className="relative flex flex-col items-center gap-8 p-6 w-full">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="text-2xl font-bold text-slate-300 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, '#contact')}
                className="w-full max-w-xs py-4 rounded-xl bg-blue-600 text-white font-bold text-center text-lg shadow-lg shadow-blue-900/50"
              >
                Hoziroq Boshlash
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;