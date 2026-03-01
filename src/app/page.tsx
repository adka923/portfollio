// app/page.tsx
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-900 text-white">

      {/* HEADER */}
      <header className="h-20 w-full px-8 py-4 flex items-center justify-between sticky top-0 z-50 bg-gray-700 backdrop-blur-md border-b border-gray-700 shadow-sm">
        <div className="text-2xl font-bold text-white">
          Adiyaballs🤑<span className="text-orange-500">.</span>
        </div>

        <nav className="flex gap-6">
          <Link className="text-white hover:text-orange-500" href="/about">about</Link>
          <Link className="text-white hover:text-orange-500" href="/projects">projects</Link>
          <Link className="text-white hover:text-orange-500" href="/contact">contact</Link>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="relative flex flex-1 items-center justify-center overflow-hidden px-8 py-20 bg-neutral-900">

        {/* Gradient background blobs */}
        <div className="absolute w-[500px] h-[500px] bg-orange-500/20 blur-[140px] rounded-full -top-20 -left-20"></div>
        <div className="absolute w-[500px] h-[500px] bg-pink-500/20 blur-[140px] rounded-full bottom-0 right-0"></div>

        <div className="relative z-10 max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE TEXT */}
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Beginner-friendly
              <span className="block bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                digital portfolio i made
              </span>
            </h1>

            <p className="text-gray-400 max-w-lg">
              yes i am extremly bad at coding so i dont have any other projects yet, but check this one out
            </p>

            <div className="flex gap-4 mt-4">
              <Link
                href="/projects"
                className="px-6 py-3 bg-orange-500 text-black font-semibold rounded-2xl hover:scale-105 transition"
              >
                View Projects
              </Link>

              <Link
                href="/contact"
                className="px-6 py-3 border border-gray-600 rounded-2xl hover:bg-white hover:text-black transition"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE FEATURED PROJECT */}
          <Link
            href="https://project-ypxw.vercel.app/"
            target="_blank"
            className="block group"
          >
            <div className="bg-gradient-to-br from-orange-500/30 via-pink-500/30 to-purple-500/30 backdrop-blur-xl border border-neutral-700 rounded-3xl p-8 shadow-2xl hover:scale-105 hover:shadow-3xl transition-transform duration-300">
              <div className="h-40 w-full rounded-2xl bg-gradient-to-tr from-orange-500 to-pink-500 mb-6 animate-pulse"></div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-orange-400 transition-colors">🔥 Main Project Live</h3>
              <p className="text-gray-200 text-sm mb-4">
              huge shoutout to Amraa he did all the work i only did header footer  Check out my tuffer, fully live project hosted on Vercel. Responsive, sleek, and beginner-friendly—but built to impress.
              </p>
              <span className="inline-block px-4 py-2 bg-white/20 text-white font-semibold rounded-lg group-hover:bg-orange-500 group-hover:text-black transition">
                Visit Live →
              </span>
            </div>
          </Link>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-6 h-30 mt-auto">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold">Adiyaballs Portfolio</h2>
            <p className="mt-1 text-gray-400">portfolio</p>
          </div>

          <div className="flex space-x-6">
            <Link href="https://tiktok.com" className="text-gray-400 hover:text-white">
              TikTok: jelbert52
            </Link>
            <Link href="https://discord.com/" className="text-gray-400 hover:text-white">
              Discord: adka_tuff_boii1232
            </Link>
            <Link href="https://facebook.com" className="text-gray-400 hover:text-white">
              Facebook: Adiya Bal
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;