import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-amber-400">
        <header className="w-full px-8 py-4 flex items-center justify-between sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm ">
          <div className="text-2xl font-bold text-gray-900">
            Adiya<span className="text-orange-500">.</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <a
              href="#about"
              className="relative hover:text-orange-500 transition after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-orange-500 hover:after:w-full after:transition-all"
            >
              About
            </a>
            <a
              href="#services"
              className="relative hover:text-orange-500 transition after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-orange-500 hover:after:w-full after:transition-all"
            >
              Services
            </a>
            <a
              href="#projects"
              className="relative hover:text-orange-500 transition after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-orange-500 hover:after:w-full after:transition-all"
            >
              Projects
            </a>
          </div>

          <a
            href="#contact"
            className="px-5 py-2 rounded-lg bg-orange-500 text-white border border-orange-500 hover:bg-orange-600 hover:border-orange-600 shadow transition"
          >
            Contact Meh brudda
          </a>
        </header>

        <div className="bg-amber-400 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 md:px-12 py-32 gap-8">
          {}
          <div className="flex-1 text-center md:text-left space-y-6 h-140">
            <h1 className="text-6xl font-extrabold text-gray-900">
              hello there <span className="text-orange-500"></span>
            </h1>
            <p className="text-gray-700 text-lg md:text-xl max-w-md mx-auto md:mx-0"></p>
          </div>

          {}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              <img
                src="https://i.imgflip.com/5da9r5.png?a490248"
                alt="my profile"
                className="rounded-full object-cover shadow-2xl border-4 border-white"
              />
            </div>
          </div>
        </div>

        <div
          id="about"
          className="py-32 bg-yellow-100 h-screen flex items-center justify-center"
        >
          <h2 className="text-3xl font-bold text-center">ur here at about </h2>
          <p className="max-w-xl mx-auto mt-4 text-center text-gray-700">hi</p>
        </div>
        <div
          id="services"
          className="py-32 bg-green-100 h-screen flex items-center justify-center"
        >
          <h2 className="text-3xl font-bold text-center">
            {" "}
            ur here at Services
          </h2>
       </div>

        {}
        <div
          id="projects"
          className="py-32 bg-blue-100 h-screen flex items-center justify-center"
        >
          <h2 className="text-3xl font-bold text-center">
            {" "}
            ur here at Projects
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-center text-gray-700">
            hello
          </p>
        </div>

        {}
        <div
          id="contact"
          className="py-32 bg-gray-200 h-screen flex items-center justify-center"
        >
          <h2 className="text-3xl font-bold text-center">
            ur here at contact me
          </h2>
        </div>

        {}
        <footer className="bg-gray-900 text-white py-10 mt-auto py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
              <div>
                <h2 className="text-2xl font-bold">Adiyabals Portfolio</h2>
                <p className="mt-2 text-gray-400">i like potatoes</p>
              </div>

              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Tiktok
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  reddit
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  facebook
                </a>
              </div>
            </div>

            {}
          </div>
        </footer>
      </div>
    </>
  );
}
