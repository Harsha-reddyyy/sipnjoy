import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { menuCategories } from '../data/mockData';

export const Menu = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...menuCategories.map(cat => cat.name)];

  const filteredMenu = menuCategories.filter(category => {
    if (activeCategory !== 'All' && category.name !== activeCategory) return false;
    if (searchTerm) {
      return category.items.some(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return true;
  });

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-[#40BFB4] to-[#35a39a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Menu
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            From aromatic coffees to delicious snacks, we have something for everyone
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="mb-12">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search menu items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#40BFB4] focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-[#40BFB4] text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="space-y-12">
          {filteredMenu.map((category) => {
            const filteredItems = searchTerm
              ? category.items.filter(item =>
                  item.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
              : category.items;

            if (filteredItems.length === 0) return null;

            return (
              <div key={category.name} className="scroll-mt-24">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#40BFB4]/20">
                  {category.name}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredItems.map((item, index) => (
                    <div
                      key={index}
                      className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#40BFB4] transition-colors">
                          {item.name}
                        </h3>
                        <span className="text-[#40BFB4] font-bold text-xl whitespace-nowrap ml-4">
                          ₹{item.price}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {filteredMenu.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600">No items found matching your search.</p>
          </div>
        )}

        {/* Note */}
        <div className="mt-16 p-8 bg-[#40BFB4]/5 rounded-2xl border border-[#40BFB4]/20 text-center">
          <p className="text-gray-700 leading-relaxed">
            <span className="font-semibold">Note:</span> All prices are inclusive of taxes. 
            We also offer customization options – just ask our friendly staff!
          </p>
        </div>
      </div>
    </div>
  );
};
