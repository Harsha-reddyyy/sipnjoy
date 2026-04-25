import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';
import { cafeInfo } from '../data/mockData';

export const Contact = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-[#40BFB4] to-[#35a39a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Visit Us
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            We'd love to see you at Sip N Joy. Find us, call us, or just drop by!
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Get In <span className="text-[#40BFB4]">Touch</span>
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#40BFB4]/10 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-[#40BFB4]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                    <p className="text-gray-600 leading-relaxed">{cafeInfo.address}</p>
                    <a
                      href={cafeInfo.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-[#40BFB4] hover:text-[#35a39a] font-medium mt-2 group"
                    >
                      <Navigation className="w-4 h-4" />
                      <span>Get Directions</span>
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#40BFB4]/10 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-[#40BFB4]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                    <a
                      href={`tel:${cafeInfo.phone}`}
                      className="text-gray-600 hover:text-[#40BFB4] transition-colors"
                    >
                      {cafeInfo.phone}
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Available during opening hours</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#40BFB4]/10 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-[#40BFB4]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                    <a
                      href={`mailto:${cafeInfo.email}`}
                      className="text-gray-600 hover:text-[#40BFB4] transition-colors"
                    >
                      {cafeInfo.email}
                    </a>
                    <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#40BFB4]/10 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-[#40BFB4]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Opening Hours</h3>
                    <div className="space-y-1">
                      <p className="text-gray-600">Monday - Sunday</p>
                      <p className="text-[#40BFB4] font-semibold">{cafeInfo.hours.weekday}</p>
                    </div>
                    <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium mt-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Open Now</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-[#40BFB4] to-[#35a39a] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Visit?</h3>
              <p className="mb-6 text-white/90">
                No reservations needed! Just walk in and we'll find you the perfect spot.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={cafeInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-white text-[#40BFB4] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105"
                >
                  <MapPin className="w-5 h-5" />
                  <span>Get Directions</span>
                </a>
                <a
                  href={`tel:${cafeInfo.phone}`}
                  className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition-all border border-white/30"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src={cafeInfo.googleMapsEmbed}
                width="100%"
                height="600"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="Sip N Joy Location"
              ></iframe>
            </div>
            
            <div className="mt-6 p-6 bg-[#40BFB4]/5 rounded-2xl border border-[#40BFB4]/20">
              <h4 className="font-semibold text-gray-900 mb-2">How to Reach</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Located near Marwadi University on Rajkot-Morbi Highway, opposite APMC Yard. 
                Easy to spot with free parking available nearby.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
