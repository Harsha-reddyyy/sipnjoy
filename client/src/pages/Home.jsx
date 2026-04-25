import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Star, ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { cafeInfo, whyChooseUs, specialOfferings, menuCategories, testimonials } from '../data/mockData';

export const Home = () => {
  // Get icon component dynamically
  const getIcon = (iconName) => {
    const Icon = LucideIcons[iconName];
    return Icon ? <Icon className="w-6 h-6" /> : null;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1765225979687-8e4a11541401?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHw0fHxjb3p5JTIwbW9kZXJuJTIwY2FmZSUyMGludGVyaW9yfGVufDB8fHx8MTc3MDUzOTA2OHww&ixlib=rb-4.1.0&q=85"
            alt="Café Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Where Every Sip<br />
            <span className="text-[#40BFB4]">Brings a Smile</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Your cozy corner for great coffee, delicious snacks, and joyful moments in Rajkot
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={cafeInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 bg-[#40BFB4] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#35a39a] transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <MapPin className="w-5 h-5" />
              <span>Get Directions</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              to="/menu"
              className="group flex items-center space-x-2 bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <span>View Menu</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Rating Badge */}
          <div className="mt-10 inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <span className="text-white font-semibold text-lg">{cafeInfo.rating}</span>
            <span className="text-gray-300">on Google Maps</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/70 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Special Offerings */}
      <section className="py-20 bg-gradient-to-br from-[#40BFB4]/5 via-white to-[#40BFB4]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialOfferings.map((offering, index) => {
              const Icon = LucideIcons[offering.icon];
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="w-16 h-16 bg-[#40BFB4]/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-[#40BFB4] transition-colors duration-300">
                    {Icon && <Icon className="w-8 h-8 text-[#40BFB4] group-hover:text-white transition-colors duration-300" />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{offering.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{offering.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why <span className="text-[#40BFB4]">Sip N Joy?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              More than just a café – it's your happy place
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = LucideIcons[item.icon];
              return (
                <div
                  key={index}
                  className="group flex items-start space-x-5 p-8 rounded-2xl bg-gray-50 hover:bg-[#40BFB4]/5 transition-all duration-300 border border-transparent hover:border-[#40BFB4]/20"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-[#40BFB4]/10 rounded-xl flex items-center justify-center group-hover:bg-[#40BFB4] transition-colors duration-300">
                      {Icon && <Icon className="w-7 h-7 text-[#40BFB4] group-hover:text-white transition-colors duration-300" />}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Picks */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Popular <span className="text-[#40BFB4]">Picks</span>
            </h2>
            <p className="text-xl text-gray-600">Customer favorites you must try</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {/* Sample Menu Items */}
            {[
              { name: 'Cappuccino', price: 120, image: 'https://images.unsplash.com/photo-1645536024589-0c25fb936d74?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBmb29kJTIwY2FmZXxlbnwwfHx8fDE3NzA1MzkwNzN8MA&ixlib=rb-4.1.0&q=85', description: 'Classic with frothy milk' },
              { name: 'Club Sandwich', price: 150, image: 'https://images.unsplash.com/photo-1764391835184-dd7f71cffdd2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxjb2ZmZWUlMjBmb29kJTIwY2FmZXxlbnwwfHx8fDE3NzA1MzkwNzN8MA&ixlib=rb-4.1.0&q=85', description: 'Triple-decker delight' },
              { name: 'Chocolate Brownie', price: 100, image: 'https://images.unsplash.com/photo-1718122142804-3cdb7aa8f98b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHw0fHxjb2ZmZWUlMjBmb29kJTIwY2FmZXxlbnwwfHx8fDE3NzA1MzkwNzN8MA&ixlib=rb-4.1.0&q=85', description: 'Fudgy & rich' }
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                    <span className="text-[#40BFB4] font-bold text-lg">₹{item.price}</span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/menu"
              className="inline-flex items-center space-x-2 bg-[#40BFB4] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#35a39a] transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <span>View Full Menu</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our <span className="text-[#40BFB4]">Customers Say</span>
            </h2>
            <p className="text-xl text-gray-600">Real reviews from real coffee lovers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.slice(0, 4).map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#40BFB4] to-[#35a39a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your Next Coffee Break Starts Here
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Visit us today and experience the perfect blend of great coffee, delicious food, and warm hospitality
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={cafeInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-white text-[#40BFB4] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <MapPin className="w-5 h-5" />
              <span>Get Directions</span>
            </a>
            <a
              href={`tel:${cafeInfo.phone}`}
              className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 border-2 border-white/30 hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
