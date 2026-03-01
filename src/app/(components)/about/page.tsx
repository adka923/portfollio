import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen bg-grey-200">
      <header className="w-full px-8 py-4 flex items-center justify-between sticky top-0 z-50 bg-gray-900 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="text-2xl font-bold text-white">
          Adiyaballs🤑<span className="text-orange-500">.</span>
        </div>
      </header>

      <div className="relative flex-1 flex items-center justify-center overflow-hidden">

  {/* Background video */}
  <iframe
    src="https://www.youtube.com/embed/9vntypeV5QU?autoplay=1&mute=1&loop=1&playlist=9vntypeV5QU&controls=0&modestbranding=1"
    title="background"
    className="absolute inset-0 w-full h-full object-cover scale-[2.5] pointer-events-none"
    frameBorder="0"
    allow="autoplay; encrypted-media"
  />

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/70"></div>

  {/* Content card */}
  <div className="relative z-10 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 max-w-3xl text-center shadow-2xl">

    {/* Heading */}
    <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
      Hi, I’m Adiyabal
    </h1>

    {/* Subheading */}
    <p className="mt-6 text-gray-300 text-lg md:text-xl leading-relaxed">
    i do small stuff since i am very bad at coding 
    </p>

    {/* Motivational line */}
    <h2 className="mt-6 text-cyan-400 text-xl font-semibold">
      Progress over perfection
    </h2>

    {/* Tech stack */}
    <div className="mt-8">
      <p className="text-amber-400 text-lg mb-4 font-semibold">i use these</p>

      <div className="flex flex-wrap justify-center gap-4">

        <div className="flex items-center gap-2 bg-black/60 text-white border border-amber-400/40 px-5 py-2 rounded-xl hover:scale-105 transition">
  <img
    src="https://www.ravedigital.agency/wp-content/uploads/2015/06/html5.webp"
    alt="HTML"
    className="h-6 w-6 object-contain"
  />
  HTML
</div>

<div className="flex items-center gap-2 bg-black/60 text-white border border-amber-400/40 px-5 py-2 rounded-xl hover:scale-105 transition">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9uzErWz9EXqZDxZ5lP9aYpMz8eK6rr5X3w&s"
    alt="JavaScript"
    className="h-6 w-6 object-contain"
  />
  JavaScript
</div>

<div className="flex items-center gap-2 bg-black/60 text-white border border-amber-400/40 px-5 py-2 rounded-xl hover:scale-105 transition">
  <img
    src="https://files.raycast.com/mbor6bxq93gsd5dsmvrhmn31p62l"
    alt="Tailwind"
    className="h-6 w-6 object-contain"
  />
  Tailwind
</div>

      </div>
    </div>

  </div>
</div>

      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold">Adiyaballs bomboclat</h2>
          <p className="mt-2 text-gray-400">made by adiya of course</p>
        </div>
      </footer>
    </div>
  );
};

export default Page;
