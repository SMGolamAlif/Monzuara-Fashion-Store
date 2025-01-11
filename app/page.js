import Image from "next/image";
import { Menu } from "lucide-react";
import Navbar from "@/Components/navbar";

export default function Home() {
  return (
    <>
      <div className="bg-[#2A332C]">
        {/* Top Bar */}
        <div className="bg-[#2A332C] text-gray-300 py-3 px-6 flex justify-between items-center text-sm border-b border-gray-700">
          <div>Call us : +1 234 567 89</div>
          <div className="hidden md:block">
            Open hour : Mon - Fri, 09:00 - 17:00
          </div>
          <div className="flex items-center gap-6">
            <span className="text-sm">Follow us :</span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white">
                f
              </a>
              <a href="#" className="hover:text-white">
                t
              </a>
              <a href="#" className="hover:text-white">
                yt
              </a>
              <a href="#" className="hover:text-white">
                in
              </a>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <Navbar />

        {/* Hero Content */}
        <div className="flex flex-col md:flex-row px-8 pt-12 pb-20">
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-white pt-8 md:pt-16">
            <div className="text-[#D4A853] text-sm tracking-wider mb-6">
              WELCOME TO TEXTILN
            </div>
            <h1 className="text-5xl md:text-6xl font-extralight leading-tight mb-8">
              Do Well, Live
              <br />
              Well & Dress
              <br />
              Really Well
            </h1>
            <p className="text-gray-400 mb-12 max-w-md text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipi scing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus.
            </p>
            <div className="flex items-center gap-10">
              <button className="border border-gray-600 px-8 py-3.5 hover:bg-white hover:text-black transition-colors text-sm">
                GET STARTED
              </button>
              <div className="flex items-center gap-2 text-[#D4A853] cursor-pointer group">
                <span className="text-sm">READ MORE</span>
                <span className="text-lg group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 relative mt-12 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&w=800"
              alt="Fashion fabric"
              className="w-full h-[600px] object-cover"
            />

            {/* Stats Overlays */}
            <div className="absolute top-6 right-6 bg-white p-4 rounded-sm shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#B4724B] flex items-center justify-center text-white text-sm">
                  ✓
                </div>
                <div>
                  <div className="text-2xl font-medium">2,500 +</div>
                  <div className="text-gray-500 text-sm">Total Projects</div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-6 left-6 bg-white p-4 rounded-sm shadow-lg">
              <div className="text-4xl font-medium">4.9</div>
              <div className="text-[#FFB800] text-sm">★★★★★</div>
              <div className="text-gray-500 text-sm mt-1">2000+ reviews</div>
            </div>

            {/* Play Button Overlay */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center cursor-pointer hover:bg-white/40 transition-colors">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <span className="text-black ml-1">▶</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
