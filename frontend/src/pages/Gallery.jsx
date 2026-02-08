import React, { useState } from 'react';
import { X } from 'lucide-react';
import { galleryImages } from '../data/mockData';

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-[#40BFB4] to-[#35a39a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Gallery
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Take a virtual tour of our cozy café and see what makes Sip N Joy special
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-lg border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Experience It <span className="text-[#40BFB4]">Yourself</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Pictures don't do justice to the warm ambience and aromatic coffee. Visit us today!
            </p>
            <a
              href="https://maps.app.goo.gl/WSc9pAdtnraV21Px8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#40BFB4] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#35a39a] transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Visit Us Today
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-[#40BFB4] transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage.url}
            alt={selectedImage.alt}
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};
