import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-[#0b101e] text-slate-300 font-sans selection:bg-purple-500/30">
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size-[16px_16px] opacity-30 pointer-events-none"></div>

      <div className="relative container mx-auto px-6 py-24 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 to-green-600">Buy Me A Matcha</span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-slate-400 max-w-2xl mx-auto">
            The ultimate crowdfunding platform designed exclusively for creators, artists, developers, and dreamers. We believe your creative journey shouldn't be limited by funding.
          </p>
        </div>

        <div className="bg-slate-900/60 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-slate-800 shadow-xl mb-12 text-center md:text-left">
          <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            Our mission is simple: to provide a seamless, transparent, and engaging way for your fans and followers to support your work. Whether you're coding the next big app, writing your debut novel, or creating content that makes people smile, a little "matcha" goes a long way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#111827] p-8 rounded-2xl border border-slate-800/50">
            <div className="text-3xl mb-4">🎨</div>
            <h3 className="text-xl font-bold text-white mb-3">For Creators</h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Set up your page in minutes, share your goals, and start receiving support directly from the people who love what you do. Keep 100% of the creative control while building a sustainable income.
            </p>
          </div>

          <div className="bg-[#111827] p-8 rounded-2xl border border-slate-800/50">
            <div className="text-3xl mb-4">💚</div>
            <h3 className="text-xl font-bold text-white mb-3">For Supporters</h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Discover amazing new talent or support your favorite creators. Every contribution goes directly towards helping them focus on what they do best: creating incredible things for you.
            </p>
          </div>
        </div>

        <div className="text-center border-t border-slate-800 pt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Ready to start brewing your next big project?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={"/login"}>
              <button className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-semibold py-3 px-8 rounded-full transition-all duration-200 shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]">
                Start Here!
              </button></Link>

            <Link href={"/contact"}>
              <button className="bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-200">
                Contact Us
              </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'About Us',
}