
import React, { useState, useEffect } from 'react';
import { Section } from './components/Section.tsx';
import { LeadForm } from './components/LeadForm.tsx';
import { FAQ_DATA, PLACEMENT_STATS, CUTOFF_DATA } from './constants.tsx';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const WHATSAPP_URL = "https://wa.me/919382082728?text=I'm%20interested%20in%20KIIT%20Admission%202026%20Counselling";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-blue-500/30">
      {/* Floating WhatsApp FAB */}
      <a 
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact on WhatsApp"
        className="fixed bottom-6 right-6 z-[100] bg-[#25D366] p-4 rounded-full shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-90 transition-all group flex items-center gap-2 overflow-hidden max-w-[64px] hover:max-w-[220px]"
      >
        <svg className="w-8 h-8 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.633 1.432h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        <span className="text-white font-black whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Contact Us</span>
      </a>

      {/* Dynamic Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-purple-600/10 rounded-full blur-[100px]"></div>
      </div>

      {/* Modern Pill Nav */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
        <nav className={`glass px-6 py-3 rounded-full flex justify-between items-center transition-all duration-500 ${scrolled ? 'shadow-2xl border-white/20 bg-slate-900/80' : 'border-white/10'}`}>
          <div className="text-xl font-black tracking-tighter flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
            <span className="bg-blue-600 px-2 py-0.5 rounded-lg text-white">KIIT</span>
            <span className="hidden sm:inline text-white">2026</span>
          </div>
          <div className="hidden md:flex space-x-6 text-sm font-bold text-slate-300">
            <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">Campus</button>
            <button onClick={() => scrollToSection('fees')} className="hover:text-white transition-colors">Fees</button>
            <button onClick={() => scrollToSection('placements')} className="hover:text-white transition-colors">Placements</button>
            <button onClick={() => scrollToSection('faq')} className="hover:text-white transition-colors">FAQ</button>
          </div>
          <button 
            onClick={() => scrollToSection('cta')}
            className="bg-white text-black px-5 py-2 rounded-full font-black text-xs hover:bg-blue-600 hover:text-white transition-all shadow-lg active:scale-95"
          >
            GET ADMITTED
          </button>
        </nav>
      </div>

      {/* Hero Section */}
      <header className="relative pt-40 pb-20 md:pt-64 md:pb-40 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center md:text-left grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/40 px-4 py-2 rounded-full text-blue-300 text-xs font-black tracking-widest uppercase mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              2026 Batch Intake Active
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-[1.05] mb-8 text-white">
              Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-purple-500">Reality</span> at KIIT.
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-xl leading-relaxed font-semibold">
              The ultimate 2026 B.Tech roadmap. Secure your future in <span className="text-blue-400">Computer Science</span> and beyond at India's NAAC A++ powerhouse.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
              <button 
                onClick={() => scrollToSection('cta')}
                className="bg-blue-600 hover:bg-blue-500 text-white font-black py-5 px-10 rounded-2xl shadow-[0_0_40px_rgba(59,130,246,0.4)] transition-all text-lg flex items-center justify-center gap-2"
              >
                Start Counseling 🚀
              </button>
              <button 
                onClick={() => scrollToSection('fees')}
                className="glass hover:bg-white/10 text-white font-black py-5 px-10 rounded-2xl transition-all text-lg border-white/20"
              >
                Fee Structure 💳
              </button>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center md:justify-start gap-6">
              <div className="glass px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-black border-white/20 text-slate-100">
                <span className="text-green-400">●</span> NAAC A++
              </div>
              <div className="glass px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-black border-white/20 text-slate-100">
                <span className="text-blue-400">●</span> 100% Placements
              </div>
              <div className="glass px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-black border-white/20 text-slate-100">
                <span className="text-purple-400">●</span> 25k+ Community
              </div>
            </div>
          </div>
          <div className="relative" id="hero-form">
            <div className="absolute -inset-10 bg-blue-600/10 blur-[100px] rounded-full"></div>
            <LeadForm />
          </div>
        </div>
      </header>

      {/* Bento Stats Section */}
      <Section id="placements" className="bg-transparent" title="High-Tier Output 📈" subtitle="Verified placement success for the next generation.">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-2 glass p-10 rounded-[2.5rem] border-white/10 hover:border-blue-500/50 transition-all group bg-slate-900/40">
            <div className="text-blue-400 font-black text-sm uppercase tracking-widest mb-4">Max Package Secured 💰</div>
            <div className="text-7xl font-black text-white mb-2 group-hover:scale-105 transition-transform origin-left">₹63 LPA</div>
            <p className="text-slate-100 text-lg font-bold">Top Global & Domestic CTC</p>
          </div>
          <div className="glass p-10 rounded-[2.5rem] border-white/10 hover:border-purple-500/50 transition-all flex flex-col justify-end bg-slate-900/40">
            <div className="text-6xl font-black text-white mb-2">95%+</div>
            <p className="text-slate-200 font-black uppercase tracking-widest text-xs">Eligible Placement Rate</p>
          </div>
          <div className="glass p-10 rounded-[2.5rem] border-white/10 hover:border-green-500/50 transition-all flex flex-col justify-end bg-slate-900/40">
            <div className="text-6xl font-black text-white mb-2">₹12.5L</div>
            <p className="text-slate-200 font-black uppercase tracking-widest text-xs">Avg. CSE Package</p>
          </div>
          
          <div className="md:col-span-4 glass p-8 rounded-[2.5rem] border-white/10 flex flex-wrap justify-center gap-12 items-center opacity-100 bg-slate-900/20">
             {["Google", "Microsoft", "Amazon", "Adobe", "Cognizant", "Accenture", "Wipro", "TCS"].map((brand) => (
               <span key={brand} className="text-2xl font-black text-slate-400 hover:text-white transition-colors cursor-default tracking-tighter">{brand}</span>
             ))}
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" title="Campus Vibe Check ✨" subtitle="Bhubaneswar's premier tech hub where culture meets code.">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <img src="https://picsum.photos/seed/kiit-vibes/800/600" alt="KIIT Campus" className="rounded-[3rem] shadow-2xl relative z-10 grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 border border-white/10" />
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[3.5rem] blur-lg opacity-30"></div>
          </div>
          <div className="space-y-8">
            <p className="text-2xl font-black text-white leading-relaxed">
              Why settle for mid when you can study at a <span className="bg-blue-600 px-3 py-1 rounded-lg">NAAC A++</span> powerhouse? 
            </p>
            <div className="space-y-4">
              {[
                "Global Flex: 200+ partner universities 🌍",
                "Infinite Grind: 25sq. km of pure labs 💻",
                "World Tour: 50+ nations represented 🏳️‍🌈",
                "High Value: NIRF Rank 15-20 (Engg) 🏆",
                "Big Tech Ties: Google & Microsoft focus 📱"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-slate-900/60 p-5 rounded-2xl border border-white/10 hover:border-blue-500/40 transition-all">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                  <span className="text-slate-100 font-black text-lg">{item}</span>
                </div>
              ))}
            </div>
            <div className="glass p-8 rounded-[2rem] border-l-8 border-purple-500 bg-slate-900/40">
               <p className="text-xl text-slate-50 font-bold italic leading-relaxed">"At KIIT, we build the future. Our 2026 curriculum is designed for AI-native engineers."</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Cutoff Section */}
      <Section id="cutoff" title="Target Scores 🎮" subtitle="Target these ranks for the 2026 admission cycle.">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {CUTOFF_DATA.map((item, i) => (
              <div key={i} className="flex justify-between items-center p-7 glass rounded-3xl hover:bg-slate-900/60 transition-all border-white/10 group">
                <div>
                  <h4 className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors">{item.branch}</h4>
                  <p className="text-sm font-black text-slate-300 uppercase tracking-widest mt-2">Target Score: {item.scoreRange}</p>
                </div>
                <div className="text-right">
                  <div className="bg-blue-600 text-white px-6 py-2.5 rounded-2xl text-sm font-black shadow-[0_5px_20px_rgba(59,130,246,0.3)]">
                    {item.estimatedRank}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-br from-blue-900 to-slate-900 p-10 rounded-[3rem] border border-blue-500/30 flex flex-col justify-between shadow-2xl">
            <div>
              <h3 className="text-3xl font-black text-white mb-8">Scholarships 💸</h3>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="text-4xl">🥇</div>
                  <div>
                    <h5 className="font-black text-white uppercase text-xs tracking-[0.2em] mb-1">Top 1,000 Rank</h5>
                    <p className="text-slate-100 font-bold text-lg">100% Fee Waiver.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-4xl">🥈</div>
                  <div>
                    <h5 className="font-black text-white uppercase text-xs tracking-[0.2em] mb-1">Ranks 1k-5k</h5>
                    <p className="text-slate-100 font-bold text-lg">Monthly Merit Stipends.</p>
                  </div>
                </div>
              </div>
            </div>
            <button onClick={() => scrollToSection('cta')} className="w-full bg-white text-black font-black py-5 rounded-2xl hover:bg-blue-400 hover:text-white transition-all mt-12 shadow-xl">
              Check My Scholarship
            </button>
          </div>
        </div>
      </Section>

      {/* Fees Section */}
      <Section id="fees" title="The Investment 🏷️" subtitle="Full transparency on KIIT B.Tech 2026 financials.">
        <div className="glass rounded-[3rem] overflow-hidden border-white/20 shadow-2xl bg-slate-900/40">
          <div className="grid grid-cols-1 md:grid-cols-3 bg-white/10 font-black text-xs uppercase tracking-[0.25em] text-slate-100 p-7 text-center border-b border-white/10">
            <div>Specialization</div>
            <div>Semester Fee</div>
            <div>Annual Total</div>
          </div>
          <div className="divide-y divide-white/10">
            {[
              { name: "CSE & Specializations", sem: "₹1,95,000", total: "₹3,90,000" },
              { name: "IT / AI / Data Science", sem: "₹1,95,000", total: "₹3,90,000" },
              { name: "Core Branches", sem: "₹1,75,000", total: "₹3,50,000" }
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-3 p-10 text-center items-center hover:bg-white/5 transition-colors">
                <div className="text-2xl font-black text-white mb-2 md:mb-0">{row.name}</div>
                <div className="text-2xl font-bold text-blue-400 mb-2 md:mb-0">{row.sem}</div>
                <div className="text-3xl font-black text-white">{row.total}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="glass p-10 rounded-[2.5rem] border border-white/10 hover:border-blue-500/30 transition-all bg-slate-900/60">
            <h4 className="font-black text-2xl mb-8 flex items-center gap-4 text-white"><span className="text-3xl">🏠</span> Hostel & Mess</h4>
            <div className="space-y-6">
              <div className="flex justify-between items-center bg-white/5 p-6 rounded-2xl border border-white/5">
                <span className="font-black text-slate-200 tracking-widest uppercase text-xs">AC Premium</span>
                <span className="font-black text-white text-xl">₹60k - 90k / sem</span>
              </div>
              <div className="flex justify-between items-center bg-white/5 p-6 rounded-2xl border border-white/5">
                <span className="font-black text-slate-200 tracking-widest uppercase text-xs">Standard Non-AC</span>
                <span className="font-black text-white text-xl">₹30k - 40k / sem</span>
              </div>
            </div>
          </div>
          <div className="glass p-10 rounded-[2.5rem] border border-white/10 hover:border-purple-500/30 transition-all bg-slate-900/60">
            <h4 className="font-black text-2xl mb-8 flex items-center gap-4 text-white"><span className="text-3xl">⚡️</span> Added Perks</h4>
            <ul className="space-y-6 text-slate-100 font-black text-lg">
              <li className="flex items-center gap-4"><div className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div> Free Laptop for B.Tech</li>
              <li className="flex items-center gap-4"><div className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div> Refundable Caution Deposit</li>
              <li className="flex items-center gap-4"><div className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div> 24/7 High-speed WiFi</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section id="faq" title="Direct Intel 🧠" subtitle="Zero-fluff answers to your 2026 queries.">
        <div className="max-w-4xl mx-auto space-y-6">
          {FAQ_DATA.map((faq, i) => (
            <div key={i} className="glass rounded-[2rem] border-white/10 hover:border-blue-500/30 transition-all overflow-hidden bg-slate-900/40">
              <details className="group">
                <summary className="list-none w-full text-left p-10 font-black text-2xl text-white flex justify-between items-center cursor-pointer">
                  {faq.question}
                  <span className="text-blue-500 group-open:rotate-180 transition-transform duration-300">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M19 9l-7 7-7-7"></path></svg>
                  </span>
                </summary>
                <div className="px-10 pb-10 text-slate-100 font-bold text-xl leading-relaxed border-t border-white/10 pt-8">
                  {faq.answer}
                </div>
              </details>
            </div>
          ))}
        </div>
      </Section>

      {/* Final Call Section */}
      <Section id="cta" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/10 -z-10"></div>
        <div className="max-w-7xl mx-auto glass p-12 md:p-24 rounded-[4rem] border-blue-500/30 relative bg-slate-900/60 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/20 rounded-full blur-[100px] -z-10"></div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-black mb-10 leading-[1.1] text-white">Secure the Bag for 2026 👻</h2>
              <p className="text-2xl text-slate-100 mb-12 font-bold leading-relaxed">
                KIIT seats are high-demand. Our experts are here to ensure you land that <span className="text-blue-400 font-black">CSE seat</span> without the stress. 
              </p>
              
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 p-8 glass rounded-[2.5rem] border-white/20 mb-8 group cursor-pointer hover:bg-green-500/10 transition-all"
              >
                <div className="w-16 h-16 bg-[#25D366] rounded-2xl flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.633 1.432h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
                <div>
                  <h4 className="text-2xl font-black text-white">Direct DM</h4>
                  <p className="text-slate-200 font-black uppercase tracking-widest text-xs mt-1">Chat on WhatsApp</p>
                </div>
              </a>
            </div>
            <div className="bg-slate-900 rounded-[3rem] shadow-3xl p-2 border border-white/5">
              <LeadForm />
            </div>
          </div>
        </div>
      </Section>

      {/* Modern Footer */}
      <footer className="bg-slate-950 text-slate-400 py-20 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-5">
            <div className="text-4xl font-black text-white tracking-tighter cursor-pointer" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
              KIIT <span className="text-blue-500">2026</span>
            </div>
            <p className="text-sm font-black uppercase tracking-widest max-w-xs text-center md:text-left text-slate-500">Official Informational Hub • B.Tech Admissions 2026 Cycle.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-10 text-xs font-black uppercase tracking-[0.25em]">
            <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">Vibe</button>
            <button onClick={() => scrollToSection('fees')} className="hover:text-white transition-colors">Wallet</button>
            <button onClick={() => scrollToSection('placements')} className="hover:text-white transition-colors">Jobs</button>
            <button onClick={() => scrollToSection('faq')} className="hover:text-white transition-colors">FAQ</button>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col items-center gap-6">
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-full border border-white/5 text-[10px] font-black uppercase tracking-widest text-slate-500">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
            Deployed via Vercel Edge
          </div>
          <div className="text-[10px] text-center font-black uppercase tracking-[0.4em] opacity-30 leading-loose max-w-4xl">
            KIIT ADMISSION 2026 • KIITEE 2026 ELIGIBILITY • KIIT FEE STRUCTURE 2026 • KIIT CUTOFF 2026 CSE • B.TECH ADMISSION PROCESS • NO CAP DIRECT ADMISSION BLUEPRINT
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
