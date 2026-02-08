import React from 'react';
import { Heart, Award, Users, Coffee } from 'lucide-react';
import { aboutContent, cafeInfo } from '../data/mockData';

export const About = () => {
  const stats = [
    { icon: Coffee, label: 'Cups Served', value: '10,000+' },
    { icon: Users, label: 'Happy Customers', value: '5,000+' },
    { icon: Award, label: 'Google Rating', value: '4.9' },
    { icon: Heart, label: 'Years of Joy', value: '2+' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#40BFB4]/10 via-white to-[#40BFB4]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-[#40BFB4]">Sip N Joy</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {cafeInfo.description}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-[#40BFB4]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-[#40BFB4]" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1636337100213-17b5804a1933?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxjb3p5JTIwbW9kZXJuJTIwY2FmZSUyMGludGVyaW9yfGVufDB8fHx8MTc3MDUzOTA2OHww&ixlib=rb-4.1.0&q=85"
                  alt="Café Interior"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#40BFB4]/20 rounded-3xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-[#40BFB4]/10 rounded-3xl -z-10"></div>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Our <span className="text-[#40BFB4]">Story</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {aboutContent.story}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {aboutContent.mission}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-4xl font-bold text-gray-900">
                Our <span className="text-[#40BFB4]">Commitment</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {aboutContent.values}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {aboutContent.experience}
              </p>
              
              <div className="flex flex-wrap gap-3 pt-4">
                {['Fresh Ingredients', 'Quality Service', 'Cozy Atmosphere', 'Community First'].map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#40BFB4]/10 text-[#40BFB4] rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1765894711185-63800b16dbba?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHxjb3p5JTIwbW9kZXJuJTIwY2FmZSUyMGludGVyaW9yfGVufDB8fHx8MTc3MDUzOTA2OHww&ixlib=rb-4.1.0&q=85"
                  alt="Café Experience"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#40BFB4]/20 rounded-3xl -z-10"></div>
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-[#40BFB4]/10 rounded-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Visit Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Visit <span className="text-[#40BFB4]">Sip N Joy?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're more than just a café – we're a community hub where memories are made
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Perfect Location',
                description: 'Conveniently located near Marwadi University, making us the ideal spot for students and professionals alike.',
                image: 'https://images.unsplash.com/photo-1686367387286-7256efe961a0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxjYWZlJTIwYW1iaWVuY2V8ZW58MHx8fHwxNzcwNTM5MDc4fDA&ixlib=rb-4.1.0&q=85'
              },
              {
                title: 'Versatile Space',
                description: 'Whether you need a quiet corner to work, a cozy spot to study, or a lively place to meet friends – we have it all.',
                image: 'https://images.unsplash.com/photo-1683318528692-6cfe0ae76817?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHw0fHxjYWZlJTIwYW1iaWVuY2V8ZW58MHx8fHwxNzcwNTM5MDc4fDA&ixlib=rb-4.1.0&q=85'
              },
              {
                title: 'Value for Money',
                description: 'Premium quality at student-friendly prices. Great taste does not have to break the bank.',
                image: 'https://images.unsplash.com/photo-1549804795-05e3d7ec4d3c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwzfHxjYWZlJTIwYW1iaWVuY2V8ZW58MHx8fHwxNzcwNTM5MDc4fDA&ixlib=rb-4.1.0&q=85'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#40BFB4] to-[#35a39a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience the Joy?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Visit us today and discover why we're Rajkot's favorite café
          </p>
          <a
            href={cafeInfo.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-2 bg-white text-[#40BFB4] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            <span>Visit Us Today</span>
          </a>
        </div>
      </section>
    </div>
  );
};
