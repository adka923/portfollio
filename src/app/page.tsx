import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-900">

    
      <header className="h-20 w-full px-8 py-4 flex items-center justify-between sticky top-0 z-50 bg-gray-700 backdrop-blur-md border-b border-gray-700 shadow-sm">
        <div className="text-2xl font-bold text-white">
          Adiyaballs🤑<span className="text-orange-500">.</span>
        </div>

        <nav className="flex gap-6">
          <Link className="text-white hover:text-orange-500" href="/about">
            about
          </Link>
          <Link className="text-white hover:text-orange-500" href="/projects">
            projects
          </Link>
        </nav>
      </header>

      <section className="relative flex flex-1 items-center justify-center overflow-hidden px-8 py-20 bg-neutral-900 text-white">

  {/* Background gradient blobs */}
  <div className="absolute w-[500px] h-[500px] bg-orange-500/20 blur-[140px] rounded-full -top-20 -left-20"></div>
  <div className="absolute w-[500px] h-[500px] bg-pink-500/20 blur-[140px] rounded-full bottom-0 right-0"></div>

  <div className="relative z-10 max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT SIDE TEXT */}
    <div className="flex flex-col gap-6">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        begginer friendly
        <span className="block bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
          digital portfollio i made
        </span>
      </h1>

      <p className="text-gray-400 max-w-lg">
        yes i am extremly bad at coding so i dont have any other projects 
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

    {/* RIGHT SIDE MOCK CARD */}
    <div className="relative">
      <div className="bg-neutral-800/70 backdrop-blur-xl border border-neutral-700 rounded-3xl p-8 shadow-2xl">

        <div className="h-40 bg-gradient-to-br from-orange-500/40 to-pink-500/40 rounded-2xl mb-6"></div>

        <h3 className="text-xl font-semibold mb-2">Featured Project</h3>
        <p className="text-gray-400 text-sm">so i dont have anything yet please forgive.
        </p>

      </div>
    </div>

  </div>
</section>

      
      {<footer className="bg-gray-900 text-white py-6 h-30">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold">Adiyaballs portfollio</h2>
            <p className="mt-1 text-gray-400">niche bahbe👍🏼👍🏼</p>
          </div>

          <div className="flex space-x-6">
            <Link href="https://tiktok.com" className="text-gray-400 hover:text-white">
              Tiktok 
              search jelbert52
            </Link>
            <Link href="https://discord.com/" className="text-gray-400 hover:text-white">
              discord
              search adka_tuff_boii1232
            </Link>
            <Link href="https://facebook.com" className="text-gray-400 hover:text-white">
              Facebook
              search Adiya Bal
            </Link>
          </div>
        </div>
      </footer> }

    </div>
  );
};

export default Home;