import Image from "next/image";
import Navbar from "@/Components/navbar";
import Footer from "@/Components/footer";

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
        <div className="flex flex-col md:flex-row px-8 min-h-[85vh] items-center">
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-white flex flex-col justify-center">
            <div className="text-[#D4A853] font-medium uppercase tracking-[0.2em] mb-6">
              Premium Clothing Manufacturer
            </div>
            <h1 className="text-6xl md:text-7xl font-light leading-[1.1] mb-8">
              Crafting <span className="text-[#D4A853]">Quality</span> For Global Brands
            </h1>
            <p className="text-gray-400 mb-12 max-w-md text-lg leading-relaxed">
              With over 5 years of excellence in textile manufacturing, we deliver premium quality garments with innovative designs and sustainable practices.
            </p>
            <div className="flex items-center gap-8">
              <button className="bg-[#D4A853] text-black px-10 py-4 hover:bg-white transition-colors text-sm font-medium tracking-wider">
                REQUEST QUOTE
              </button>
              <div className="flex items-center gap-3 text-white cursor-pointer group">
                <div className="w-12 h-12 rounded-full border border-[#D4A853] flex items-center justify-center group-hover:bg-[#D4A853] transition-all">
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
                <span className="text-sm tracking-wider">VIEW CATALOG</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="relative w-[500px] h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&w=800"
                alt="Manufacturing facility"
                className="w-full h-full object-cover rounded-2xl"
              />
              
              {/* Stats Card */}
              <div className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-md p-4 rounded-xl text-white border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#D4A853] flex items-center justify-center text-xl">
                    ✓
                  </div>
                  <div>
                    <div className="text-2xl font-light">1M+</div>
                    <div className="text-white/80 text-sm">Units Per Month</div>
                  </div>
                </div>
              </div>

              {/* Manufacturing Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md p-4 rounded-xl text-white border border-white/20">
                <div className="text-3xl font-light mb-1">25+</div>
                <div className="text-[#D4A853] text-sm mb-1">Years Experience</div>
                <div className="text-white/80 text-sm">Global Partners</div>
              </div>

              {/* Factory Tour Button */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all border border-white/20">
                  <div className="w-12 h-12 rounded-full bg-[#D4A853] flex items-center justify-center">
                    <span className="text-white text-xs">TOUR</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="bg-[#232925] py-20">
          <div className="container mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-white mb-4">Why Choose Us</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                We combine state-of-the-art technology with skilled craftsmanship to deliver exceptional manufacturing solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Highlight 1 */}
              <div className="bg-[#2A332C] p-8 rounded-xl border border-gray-800 hover:border-[#D4A853] transition-colors group">
                <div className="w-14 h-14 bg-[#D4A853]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#D4A853]/20 transition-colors">
                  <svg className="w-7 h-7 text-[#D4A853]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl text-white mb-3">Quality Control</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Rigorous quality checks at every production stage ensuring perfect garments
                </p>
              </div>

              {/* Highlight 2 */}
              <div className="bg-[#2A332C] p-8 rounded-xl border border-gray-800 hover:border-[#D4A853] transition-colors group">
                <div className="w-14 h-14 bg-[#D4A853]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#D4A853]/20 transition-colors">
                  <svg className="w-7 h-7 text-[#D4A853]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl text-white mb-3">Fast Production</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Advanced machinery and efficient processes for quick turnaround times
                </p>
              </div>

              {/* Highlight 3 */}
              <div className="bg-[#2A332C] p-8 rounded-xl border border-gray-800 hover:border-[#D4A853] transition-colors group">
                <div className="w-14 h-14 bg-[#D4A853]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#D4A853]/20 transition-colors">
                  <svg className="w-7 h-7 text-[#D4A853]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl text-white mb-3">Global Shipping</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Reliable worldwide shipping network with customs handling expertise
                </p>
              </div>

              {/* Highlight 4 */}
              <div className="bg-[#2A332C] p-8 rounded-xl border border-gray-800 hover:border-[#D4A853] transition-colors group">
                <div className="w-14 h-14 bg-[#D4A853]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#D4A853]/20 transition-colors">
                  <svg className="w-7 h-7 text-[#D4A853]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                </div>
                <h3 className="text-xl text-white mb-3">Sustainable</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Eco-friendly practices and materials for responsible manufacturing
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Making Process Section */}
        <div className="py-24 bg-[#2A332C]">
          <div className="container mx-auto px-8">
            <div className="text-center mb-20">
              <div className="text-[#D4A853] font-medium uppercase tracking-[0.2em] mb-4">
                Our Process
              </div>
              <h2 className="text-4xl font-light text-white mb-6">
                How We Manufacture
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Our streamlined manufacturing process ensures quality at every step, from initial concept to final delivery
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              {/* Connected Line */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-[#D4A853]/0 via-[#D4A853] to-[#D4A853]/0"></div>

              {/* Step 1 */}
              <div className="relative">
                <div className="bg-[#232925] p-8 rounded-2xl border border-gray-800 hover:border-[#D4A853] transition-all group">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#2A332C] rounded-full border-4 border-[#232925] flex items-center justify-center text-2xl text-[#D4A853] font-light">
                    1
                  </div>
                  <div className="pt-6">
                    <h3 className="text-xl text-white mb-4 text-center">Design & Planning</h3>
                    <p className="text-gray-400 text-sm leading-relaxed text-center">
                      Initial consultation, design approval, and production planning with detailed specifications
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="bg-[#232925] p-8 rounded-2xl border border-gray-800 hover:border-[#D4A853] transition-all group">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#2A332C] rounded-full border-4 border-[#232925] flex items-center justify-center text-2xl text-[#D4A853] font-light">
                    2
                  </div>
                  <div className="pt-6">
                    <h3 className="text-xl text-white mb-4 text-center">Production</h3>
                    <p className="text-gray-400 text-sm leading-relaxed text-center">
                      Cutting-edge manufacturing with strict quality control at each production stage
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="bg-[#232925] p-8 rounded-2xl border border-gray-800 hover:border-[#D4A853] transition-all group">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#2A332C] rounded-full border-4 border-[#232925] flex items-center justify-center text-2xl text-[#D4A853] font-light">
                    3
                  </div>
                  <div className="pt-6">
                    <h3 className="text-xl text-white mb-4 text-center">Delivery</h3>
                    <p className="text-gray-400 text-sm leading-relaxed text-center">
                      Final quality check, packaging, and worldwide shipping with tracking
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-20 text-center">
              <button className="bg-transparent border-2 border-[#D4A853] text-[#D4A853] px-10 py-4 hover:bg-[#D4A853] hover:text-black transition-colors text-sm font-medium tracking-wider">
                START YOUR PROJECT
              </button>
            </div>
          </div>
        </div>

        {/* Why We Are Best Section */}
        <div className="py-24 bg-[#232925]">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div>
                <div className="text-[#D4A853] font-medium uppercase tracking-[0.2em] mb-4">
                  Why Choose Us
                </div>
                <h2 className="text-4xl font-light text-white mb-8">
                  5 Years of Excellence in <span className="text-[#D4A853]">Garment Manufacturing</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-12">
                  We've established ourselves as a leading manufacturer by consistently delivering quality products and maintaining strong relationships with global brands.
                </p>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-8">
                  <div className="border-l-2 border-[#D4A853] pl-6">
                    <div className="text-4xl text-white font-light mb-2">150+</div>
                    <div className="text-gray-400">Active Clients</div>
                  </div>
                  <div className="border-l-2 border-[#D4A853] pl-6">
                    <div className="text-4xl text-white font-light mb-2">98%</div>
                    <div className="text-gray-400">On-time Delivery</div>
                  </div>
                  <div className="border-l-2 border-[#D4A853] pl-6">
                    <div className="text-4xl text-white font-light mb-2">50M+</div>
                    <div className="text-gray-400">Units Delivered</div>
                  </div>
                  <div className="border-l-2 border-[#D4A853] pl-6">
                    <div className="text-4xl text-white font-light mb-2">35+</div>
                    <div className="text-gray-400">Countries Served</div>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Feature 1 */}
                <div className="bg-[#2A332C] p-6 rounded-xl hover:translate-y-[-4px] transition-transform">
                  <div className="w-12 h-12 bg-[#D4A853]/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#D4A853]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-white text-lg mb-2">Quality Assurance</h3>
                  <p className="text-gray-400 text-sm">Multi-stage quality control process with detailed reporting</p>
                </div>

                {/* Feature 2 */}
                <div className="bg-[#2A332C] p-6 rounded-xl hover:translate-y-[-4px] transition-transform">
                  <div className="w-12 h-12 bg-[#D4A853]/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#D4A853]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-white text-lg mb-2">Quick Turnaround</h3>
                  <p className="text-gray-400 text-sm">Efficient production line with modern machinery</p>
                </div>

                {/* Feature 3 */}
                <div className="bg-[#2A332C] p-6 rounded-xl hover:translate-y-[-4px] transition-transform">
                  <div className="w-12 h-12 bg-[#D4A853]/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#D4A853]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <h3 className="text-white text-lg mb-2">Competitive Pricing</h3>
                  <p className="text-gray-400 text-sm">Best value for quality manufacturing services</p>
                </div>

                {/* Feature 4 */}
                <div className="bg-[#2A332C] p-6 rounded-xl hover:translate-y-[-4px] transition-transform">
                  <div className="w-12 h-12 bg-[#D4A853]/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#D4A853]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <h3 className="text-white text-lg mb-2">Global Standards</h3>
                  <p className="text-gray-400 text-sm">Compliance with international manufacturing standards</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Categories Section */}
        <div className="py-24 bg-[#2A332C]">
          <div className="container mx-auto px-8">
            <div className="text-center mb-16">
              <div className="text-[#D4A853] font-medium uppercase tracking-[0.2em] mb-4">
                Our Expertise
              </div>
              <h2 className="text-4xl font-light text-white mb-6">
                Product Categories
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                We specialize in manufacturing various types of garments with precision and quality
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Category 1 */}
              <div className="group relative overflow-hidden rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=500" 
                  alt="T-Shirts" 
                  className="w-full h-[400px] object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                  <div>
                    <h3 className="text-2xl text-white mb-2">T-Shirts</h3>
                    <p className="text-gray-300 text-sm mb-4">Premium cotton t-shirts with custom designs</p>
                    <a href="#" className="text-[#D4A853] text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                      Learn More <span>→</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Category 2 */}
              <div className="group relative overflow-hidden rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=500" 
                  alt="Formal Wear" 
                  className="w-full h-[400px] object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                  <div>
                    <h3 className="text-2xl text-white mb-2">Formal Wear</h3>
                    <p className="text-gray-300 text-sm mb-4">Business suits and formal attire</p>
                    <a href="#" className="text-[#D4A853] text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                      Learn More <span>→</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Category 3 */}
              <div className="group relative overflow-hidden rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1605763240000-7e93b172d754?auto=format&fit=crop&w=500" 
                  alt="Sportswear" 
                  className="w-full h-[400px] object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                  <div>
                    <h3 className="text-2xl text-white mb-2">Sportswear</h3>
                    <p className="text-gray-300 text-sm mb-4">High-performance athletic clothing</p>
                    <a href="#" className="text-[#D4A853] text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                      Learn More <span>→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-24 bg-[#232925]">
          <div className="container mx-auto px-8">
            <div className="text-center mb-16">
              <div className="text-[#D4A853] font-medium uppercase tracking-[0.2em] mb-4">
                Testimonials
              </div>
              <h2 className="text-4xl font-light text-white mb-6">
                What Our Clients Say
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-[#2A332C] p-8 rounded-xl hover:border-[#D4A853] border border-transparent transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#D4A853]/20 flex items-center justify-center text-[#D4A853] text-xl font-semibold">
                    JS
                  </div>
                  <div>
                    <h4 className="text-white">John Smith</h4>
                    <p className="text-gray-400 text-sm">CEO, Fashion Brand</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "Outstanding quality and consistent delivery. Their attention to detail and commitment to deadlines make them our trusted manufacturing partner."
                </p>
                <div className="text-[#FFB800] mt-4">★★★★★</div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-[#2A332C] p-8 rounded-xl hover:border-[#D4A853] border border-transparent transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#D4A853]/20 flex items-center justify-center text-[#D4A853] text-xl font-semibold">
                    SW
                  </div>
                  <div>
                    <h4 className="text-white">Sarah Wilson</h4>
                    <p className="text-gray-400 text-sm">Production Manager, Sportswear Co.</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "Their innovative approach to sustainable manufacturing and ability to handle large-scale orders has transformed our production capabilities."
                </p>
                <div className="text-[#FFB800] mt-4">★★★★★</div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-[#2A332C] p-8 rounded-xl hover:border-[#D4A853] border border-transparent transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#D4A853]/20 flex items-center justify-center text-[#D4A853] text-xl font-semibold">
                    MR
                  </div>
                  <div>
                    <h4 className="text-white">Michael Rodriguez</h4>
                    <p className="text-gray-400 text-sm">Director, Global Apparel Ltd.</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "We've worked with many manufacturers, but their quality control and quick turnaround times are unmatched. A truly reliable partner."
                </p>
                <div className="text-[#FFB800] mt-4">★★★★★</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-24 bg-[#2A332C]">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <div className="text-[#D4A853] font-medium uppercase tracking-[0.2em] mb-4">
                  Get In Touch
                </div>
                <h2 className="text-4xl font-light text-white mb-6">
                  Start Your Project
                </h2>
                <p className="text-gray-400 mb-8">
                  Let's discuss your manufacturing needs. Fill out the form and we'll get back to you within 24 hours.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#D4A853]/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#D4A853]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white">Phone</div>
                      <div className="text-gray-400">+1 234 567 890</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#D4A853]/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#D4A853]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white">Email</div>
                      <div className="text-gray-400">info@yourcompany.com</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#232925] p-8 rounded-xl">
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <input type="text" placeholder="Name" className="bg-[#2A332C] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A853]" />
                    <input type="email" placeholder="Email" className="bg-[#2A332C] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A853]" />
                  </div>
                  <input type="text" placeholder="Subject" className="w-full bg-[#2A332C] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A853]" />
                  <textarea placeholder="Message" rows="4" className="w-full bg-[#2A332C] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A853]"></textarea>
                  <button className="w-full bg-[#D4A853] text-black py-4 rounded-lg hover:bg-white transition-colors">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-24 bg-[#232925]">
          <div className="container mx-auto px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-light text-white mb-6">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-gray-400 mb-8">
                Stay updated with our latest manufacturing capabilities and industry insights
              </p>
              <form className="flex gap-4">
                <input type="email" placeholder="Enter your email" className="flex-1 bg-[#2A332C] text-white px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A853]" />
                <button className="bg-[#D4A853] text-black px-8 py-4 rounded-lg hover:bg-white transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer/>
      </div>
    </>
  );
}
