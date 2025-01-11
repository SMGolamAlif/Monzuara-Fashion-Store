import Image from "next/image";

export default function About() {
  return (
    <div>
      <h1>About us</h1>
      <main>
        {/* Navigation */}
        <nav className="absolute top-0 w-full z-20 p-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h2 className="text-white text-2xl font-bold">Monzuara</h2>
            <div className="hidden md:flex space-x-8 text-white">
              <a href="#" className="hover:text-gray-200 transition-colors">
                Home
              </a>
              <a href="#" className="hover:text-gray-200 transition-colors">
                Shop
              </a>
              <a href="#" className="hover:text-gray-200 transition-colors">
                Collections
              </a>
              <a href="#" className="hover:text-gray-200 transition-colors">
                About
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative h-screen w-full">
          <Image
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1920&q=80"
            alt="Fashion Hero Image"
            fill
            priority
            sizes="100vw"
            quality={75}
            className="object-cover z-0"
            loading="eager"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50 z-[1]" />

          {/* Content Overlay */}
          <div className="relative z-[2] flex flex-col items-start justify-center h-full max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight animate-fade-in">
                Elevate Your <span className="text-amber-400">Style</span> With
                Us
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
                Discover curated collections that define modern elegance and
                timeless fashion
              </p>
              <div className="flex space-x-4">
                <button className="bg-amber-400 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-300 transition-all duration-300 transform hover:scale-105">
                  Shop Now
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300">
                  View Collections
                </button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
            <div className="animate-bounce">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
