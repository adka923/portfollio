"use client";
import React, { useState, useEffect } from "react";

const Page = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // only render video on client
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">

      {/* HEADER */}
      <header className="sticky top-0 z-50 w-full px-8 py-4 flex items-center justify-between bg-gray-800/90 backdrop-blur-md border-b border-gray-700 shadow-sm">
        <div className="text-3xl font-bold text-white tracking-wider">
          Adiyaballs🤑<span className="text-orange-500">.</span>
        </div>
      </header>

      {/* HERO */}
      <div className="relative flex-1 w-full flex flex-col items-center justify-center overflow-hidden">

      {/* Background video */}
{isClient && (
  <iframe
    src="https://www.youtube.com/embed/9vntypeV5QU?autoplay=1&mute=1&loop=1&playlist=9vntypeV5QU&controls=0&modestbranding=1"
    title="hero background"
    className="absolute top-1/2 left-1/2 w-[177.78vh] h-screen -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full pointer-events-none"
    frameBorder="0"
    allow="autoplay; encrypted-media"
    allowFullScreen
  />
)}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Floating neon blobs */}
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-pink-500/30 rounded-full filter blur-3xl animate-bounce-slow"></div>
        <div className="absolute bottom-20 right-1/3 w-72 h-72 bg-orange-500/30 rounded-full filter blur-3xl animate-pulse-slow"></div>

        {/* HERO CONTENT */}
        <div className="relative z-10 flex flex-col items-center gap-6 text-center max-w-3xl px-6">

          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-red from-orange-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
            hi Adiyabal。
          </h1>

          <p className="text-gray-300 text-xl md:text-2xl leading-relaxed mt-4">
           
          </p>

          <p className="text-cyan-400 text-2xl font-semibold mt-4 animate-pulse">
            well since ur here at contact me here have my
          </p>

          <p className="text-white text-2xl font-medium">
            well here +976 94145876
          </p>

        </div>
      </div>

      {/* FOOTER */}
      <footer className="sticky bottom-0 z-50 bg-gray-900/90 text-white py-8 border-t border-gray-700 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-2xl font-bold tracking-wider">Adiyaballs bomboclat</h2>
            <p className="mt-2 text-gray-400">mango didiblud bahbe👍🏼👍🏼</p>
          </div>
          <div className="flex gap-6">
            <a href="https://tiktok.com" className="hover:text-orange-500 transition-all duration-300">Tiktok</a>
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
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 6s ease infinite;
        }
        .animate-bounce-slow {
          animation: bounce 6s infinite alternate;
        }
        .animate-pulse-slow {
          animation: pulse 4s infinite alternate;
        }
      `}</style>

    </div>
  );
};

export default Page;