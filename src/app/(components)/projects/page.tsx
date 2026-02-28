import React from "react";
import Link from "next/link";

const ProjectsPage = () => {
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
      <main className="relative flex-1 overflow-hidden flex items-center justify-center">

{/* Background video */}

  <iframe
    src="https://www.youtube.com/embed/9vntypeV5QU?autoplay=1&mute=1&loop=1&playlist=9vntypeV5QU&controls=0&modestbranding=1"
    title="hero background"
    className="absolute top-1/2 left-1/2 w-[177.78vh] h-screen -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full pointer-events-none"
    frameBorder="0"
    allow="autoplay; encrypted-media"
    allowFullScreen
  />
        {/* Fog blobs */}
        <div className="absolute w-[500px] h-[500px] bg-orange-500/20 blur-[150px] rounded-full -top-40 -left-40"></div>
        <div className="absolute w-[500px] h-[500px] bg-pink-500/20 blur-[150px] rounded-full bottom-0 right-0"></div>

        {/* Content card */}
        <div className="relative z-10 bg-neutral-800/60 backdrop-blur-xl border border-neutral-700 rounded-3xl p-12 shadow-2xl max-w-2xl text-center">

          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            My Projects
          </h1>

          <p className="mt-6 text-gray-300 text-lg md:text-xl leading-relaxed">
            i have absolutely nothing to show ya pal
          </p>

          <div className="flex justify-center mt-6 ">
            <img 
             src="https://media.tenor.com/IqhbfAs1XvEAAAAe/speed-crine.png"
              alt="speed crine"
              className="h-12 w-12 opacity-80"
            />
          </div>

          <p className="mt-6 text-gray-500 text-sm">
            nothing yet but trust the process
          </p>

        </div>
      </main>

      {/* FOOTER */}
      <footer className="sticky bottom-0 z-50 bg-neutral-900/70 backdrop-blur-xl border-t border-neutral-800 py-6 px-8 flex justify-between items-center">
        <div>Adiyaballs portfolio</div>

        <div className="flex gap-6 text-gray-400">
          <Link href="https://tiktok.com" className="hover:text-orange-500 transition">
            Tiktok
          </Link>
          <Link href="https://discord.com" className="hover:text-orange-500 transition">
            Discord
          </Link>
          <Link href="https://facebook.com" className="hover:text-orange-500 transition">
            Facebook
          </Link>
        </div>
      </footer>

    </div>
  );
};

export default ProjectsPage;