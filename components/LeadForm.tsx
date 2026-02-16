
import React, { useState } from 'react';

export const LeadForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const WHATSAPP_URL = "https://wa.me/919382082728?text=I%20just%20filled%20the%20form!%20I'm%20interested%20in%20KIIT%20Admission%202026.";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="glass p-10 rounded-3xl border-2 border-green-500/50 text-center animate-in fade-in zoom-in duration-300">
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h3 className="text-3xl font-black text-white mb-4">You're In! 🚀</h3>
        <p className="text-slate-300 text-lg mb-8">Our top advisor will call you within 24 hours. For priority support, slide into our DMs below.</p>
        <a 
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-black py-4 px-8 rounded-2xl transition-all shadow-xl active:scale-95"
        >
          Message on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <div className="glass p-8 rounded-3xl shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>
      <h3 className="text-3xl font-black text-white mb-2">Claim Your Spot ⚡️</h3>
      <p className="text-slate-400 mb-8 font-medium">Get the 2026 B.Tech Admission Blueprint.</p>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Full Name</label>
          <input required type="text" placeholder="Rahul Sharma" className="w-full bg-slate-900/50 px-5 py-4 rounded-2xl border border-slate-700 text-white placeholder-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none" />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">WhatsApp Number</label>
          <input required type="tel" placeholder="+91 98XXX XXXXX" className="w-full bg-slate-900/50 px-5 py-4 rounded-2xl border border-slate-700 text-white placeholder-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none" />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Dream Branch</label>
          <select className="w-full bg-slate-900 px-5 py-4 rounded-2xl border border-slate-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none appearance-none">
            <option>CSE (The Goal 🎯)</option>
            <option>AI & Machine Learning</option>
            <option>Cyber Security</option>
            <option>IT / Data Science</option>
            <option>Core Engineering</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-5 rounded-2xl shadow-xl neon-glow transform hover:scale-[1.02] active:scale-95 transition-all text-xl mt-4">
          Check My Match Test
        </button>
        <p className="text-center text-[10px] text-slate-500 mt-4 font-bold uppercase tracking-tighter">
          NO SPAM • ONLY HIGH-VALUE ADMISSION UPDATES
        </p>
      </form>
    </div>
  );
};
