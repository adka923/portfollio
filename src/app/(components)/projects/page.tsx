import React from "react";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-900 text-white">

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-neutral-900/70 backdrop-blur-xl border-b border-neutral-800 px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          Adiyaballs🤑<span className="text-orange-500">.</span>
        </div>

        <nav className="flex gap-6">
          <Link href="/" className="hover:text-orange-500 transition">
            home
          </Link>
          <Link href="/about" className="hover:text-orange-500 transition">
            about
          </Link>
        </nav>
      </header>

      {/* MAIN */}
      <main className="flex-1 flex items-center justify-center relative px-6 py-20">

        {/* Background glow */}
        <div className="absolute w-[500px] h-[500px] bg-orange-500/20 blur-[150px] rounded-full -top-40 -left-40"></div>
        <div className="absolute w-[500px] h-[500px] bg-pink-500/20 blur-[150px] rounded-full bottom-0 right-0"></div>

        {/* FEATURED PROJECT */}
        <Link
          href="https://project-ypxw.vercel.app/"
          target="_blank"
          className="relative z-10 w-full max-w-lg"
        >
          <div className="bg-neutral-800/60 backdrop-blur-xl border border-neutral-700 rounded-3xl p-8 shadow-2xl hover:scale-105 hover:border-orange-500 transition-all duration-300 text-center">

            {/* IMAGE SQUARE */}
            <div className="mx-auto mb-6 w-40 h-40 rounded-xl overflow-hidden border border-gray-700">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOmYkifYtUu9V9VgVpDizfqpAV-Kol8mv1hw&s"
                alt="Featured project"
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold mb-3">
              🔥 see Vercel Project
            </h2>

            <p className="text-gray-400 mb-6">
             cleanly made team project made with versel
            </p>

            <div className="inline-block px-6 py-3 bg-orange-500 text-black font-semibold rounded-xl">
              Go To Project →
            </div>
          </div>
        </Link>

      </main>

      {/* FOOTER */}
      <footer className="bg-neutral-900 border-t border-neutral-800 py-6 px-8 flex justify-between items-center text-gray-400">
        <div>Adiyaballs portfolio</div>
        <div className="flex gap-6">
          <Link href="https://tiktok.com" className="hover:text-orange-500">TikTok</Link>
          <Link href="https://discord.com" className="hover:text-orange-500">Discord</Link>
          <Link href="https://facebook.com" className="hover:text-orange-500">Facebook</Link>
        </div>
      </footer>

    </div>
  );
}