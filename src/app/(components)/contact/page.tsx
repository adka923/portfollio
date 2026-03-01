"use client";
import React, { useState, useEffect } from "react";

const Page = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // render video only on client
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 overflow-hidden">

      {/* HEADER */}
      <header className="sticky top-0 z-50 w-full px-8 py-4 flex items-center justify-between bg-gray-800/90 backdrop-blur-md border-b border-gray-700 shadow-lg">
        <div className="text-3xl font-bold text-white tracking-wider">
          Adiyaballs🤑<span className="text-orange-500">.</span>
        </div>
        <nav className="flex gap-6 text-white">
          <a href="#hero" className="hover:text-orange-500 transition">Home</a>
          <a href="#projects" className="hover:text-orange-500 transition">Projects</a>
          <a href="#contact" className="hover:text-orange-500 transition">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section id="hero" className="relative flex-1 w-full flex flex-col items-center justify-center text-center">

        {/* Background video */}
        {isClient && (
          <iframe
            src="https://www.youtube.com/embed/9vntypeV5QU?autoplay=1&mute=1&loop=1&playlist=9vntypeV5QU&controls=0&modestbranding=1"
            title="hero background"
            className="absolute top-1/2 left-1/2 w-[180vh] h-screen -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full pointer-events-none filter brightness-75"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        )}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Floating neon chaos */}
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-pink-500/30 rounded-full filter blur-3xl animate-bounce-slow"></div>
        <div className="absolute bottom-20 right-1/3 w-72 h-72 bg-orange-500/30 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-cyan-400/30 rounded-full filter blur-2xl animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500/40 rounded-full filter blur-xl animate-ping-slow"></div>

        {/* HERO CONTENT */}
        <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl px-6">

          <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-orange-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
            hi i am adiyabal
          </h1>

          <p className="text-white/80 text-2xl md:text-3xl mt-4 leading-relaxed">
            welcome to contact me
          </p>

          {/* Neon floating cards */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 border border-white/20 p-6 rounded-2xl shadow-2xl hover:scale-110 transition transform cursor-pointer">
              <p className="text-white font-bold text-lg">+976 94145876</p>
              <p className="text-cyan-400 text-sm mt-1">call me maybe?</p>
            </div>
            <div className="bg-white/10 border border-white/20 p-6 rounded-2xl shadow-2xl hover:scale-110 transition transform cursor-pointer">
              <p className="text-white font-bold text-lg">jelbert52</p>
              <p className="text-pink-400 text-sm mt-1">catch up</p>
            </div>
            <div className="bg-white/10 border border-white/20 p-6 rounded-2xl shadow-2xl hover:scale-110 transition transform cursor-pointer">
              <p className="text-white font-bold text-lg">Discord</p>
              <p className="text-purple-400 text-sm mt-1">lets be friends</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="sticky bottom-0 z-50 bg-gray-900/90 text-white py-8 border-t border-gray-700 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-2xl font-bold tracking-wider">Adiyaballs portfolio</h2>
            <p className="text-white/70 mt-2">Made by Adiya</p>
          </div>
          <div className="flex gap-6 text-white">
            <a href="https://tiktok.com" className="hover:text-orange-500 transition-all duration-300">TikTok</a>
            <a href="https://discord.com" className="hover:text-orange-500 transition-all duration-300">Discord</a>
            <a href="https://facebook.com" className="hover:text-orange-500 transition-all duration-300">Facebook</a>
          </div>
        </div>
      </footer>

      {/* Animations */}
      <style jsx>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes bounce-slow {
          0% { transform: translateY(0); }
          50% { transform: translateY(-50px); }
          100% { transform: translateY(0); }
        }
        @keyframes pulse-slow {
          0% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.2); opacity: 1; }
          100% { transform: scale(1); opacity: 0.7; }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes ping-slow {
          0% { transform: scale(0.8); opacity: 0.6; }
          50% { transform: scale(1.2); opacity: 1; }
          100% { transform: scale(0.8); opacity: 0.6; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 6s ease infinite;
        }
        .animate-bounce-slow { animation: bounce-slow 6s infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s infinite; }
        .animate-spin-slow { animation: spin-slow 15s linear infinite; }
        .animate-ping-slow { animation: ping-slow 6s infinite; }
      `}</style>

    </div>
  );
};

export default Page;