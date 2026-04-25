import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { cafeInfo } from '../data/mockData';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="https://customer-assets.emergentagent.com/job_coffee-joy-cafe/artifacts/ztvr6ls9_download.png" 
                alt="Sip N Joy Logo" 
                className="h-12 w-12"
              />
              <div>
                <h3 className="text-xl font-bold text-[#40BFB4]">Sip N Joy</h3>
                <p className="text-xs text-gray-400">Café</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              {cafeInfo.tagline}. Your favorite spot for great coffee, delicious food, and memorable moments.
            </p>
            <div className="flex items-center space-x-2 pt-2">
              <span className="text-yellow-400 text-lg">★</span>
              <span className="text-white font-semibold">{cafeInfo.rating}</span>
              <span className="text-gray-400 text-sm">on Google</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#40BFB4]">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Menu', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-[#40BFB4] transition-colors text-sm flex items-center group"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#40BFB4]">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin className="w-5 h-5 text-[#40BFB4] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 leading-relaxed">
                  Near Galaxy Prime Hostel, Marwadi University, Rajkot, Gujarat
                </span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Phone className="w-5 h-5 text-[#40BFB4] flex-shrink-0" />
                <a href={`tel:${cafeInfo.phone}`} className="text-gray-300 hover:text-[#40BFB4] transition-colors">
                  {cafeInfo.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail className="w-5 h-5 text-[#40BFB4] flex-shrink-0" />
                <a href={`mailto:${cafeInfo.email}`} className="text-gray-300 hover:text-[#40BFB4] transition-colors">
                  {cafeInfo.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#40BFB4]">Opening Hours</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-[#40BFB4] flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-gray-300 font-medium">Every Day</p>
                  <p className="text-gray-400">{cafeInfo.hours.weekday}</p>
                </div>
              </div>
              <div className="pt-4">
                <h5 className="text-sm font-semibold mb-3 text-gray-200">Follow Us</h5>
                <div className="flex space-x-3">
                  <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#40BFB4] transition-colors group">
                    <Facebook className="w-4 h-4 text-gray-400 group-hover:text-white" />
                  </a>
                  <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#40BFB4] transition-colors group">
                    <Instagram className="w-4 h-4 text-gray-400 group-hover:text-white" />
                  </a>
                  <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#40BFB4] transition-colors group">
                    <Twitter className="w-4 h-4 text-gray-400 group-hover:text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Sip N Joy Café. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#40BFB4] transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[#40BFB4] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
