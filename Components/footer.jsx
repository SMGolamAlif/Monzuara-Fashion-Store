import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#1A1F1B] text-gray-400">
            <div className="container mx-auto px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* About Column */}
                    <div>
                        <h3 className="text-white text-xl mb-6">About Us</h3>
                        <p className="text-sm leading-relaxed mb-6">
                            Leading manufacturer of premium quality garments with a commitment to excellence and sustainability.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-[#D4A853] transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
                                </svg>
                            </a>
                            <a href="#" className="hover:text-[#D4A853] transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                                </svg>
                            </a>
                            <a href="#" className="hover:text-[#D4A853] transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 0 1 .069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
                                </svg>
                            </a>
                            <a href="#" className="hover:text-[#D4A853] transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white text-xl mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-[#D4A853] transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-[#D4A853] transition-colors">Services</a></li>
                            <li><a href="#" className="hover:text-[#D4A853] transition-colors">Products</a></li>
                            <li><a href="#" className="hover:text-[#D4A853] transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white text-xl mb-6">Services</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-[#D4A853] transition-colors">Custom Manufacturing</a></li>
                            <li><a href="#" className="hover:text-[#D4A853] transition-colors">Wholesale Supply</a></li>
                            <li><a href="#" className="hover:text-[#D4A853] transition-colors">Quality Control</a></li>
                            <li><a href="#" className="hover:text-[#D4A853] transition-colors">Design Services</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white text-xl mb-6">Contact Info</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-[#D4A853] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                                <span>123 Manufacturing St, Industry City, 12345</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-6 h-6 text-[#D4A853]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                </svg>
                                <span>+1 234 567 890</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-6 h-6 text-[#D4A853]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                                <span>info@yourcompany.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-sm">
                            © 2024 Monzuara Fashion. All rights reserved.
                        </div>
                        <div className="flex gap-6 text-sm">
                            <a href="#" className="hover:text-[#D4A853] transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-[#D4A853] transition-colors">Terms of Service</a>
                            <a href="#" className="hover:text-[#D4A853] transition-colors">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;