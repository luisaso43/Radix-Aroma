
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-amber-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-['Pacifico'] text-2xl text-black">Radix Aroma</div>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-amber-700 transition-colors cursor-pointer">Home</button>
            <button onClick={() => scrollToSection('oils')} className="text-gray-700 hover:text-amber-700 transition-colors cursor-pointer">Essential Oils</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-amber-700 transition-colors cursor-pointer">About</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-amber-700 transition-colors cursor-pointer">Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="hero" 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(101, 67, 33, 0.4), rgba(101, 67, 33, 0.4)), url('https://readdy.ai/api/search-image?query=Lush%20green%20botanical%20garden%20with%20essential%20oil%20plants%20like%20lemongrass%2C%20eucalyptus%2C%20and%20peppermint%20growing%20naturally%20in%20misty%20morning%20light%2C%20soft%20ethereal%20background%20with%20dewdrops%20on%20leaves%2C%20professional%20photography%20style%2C%20natural%20lighting%2C%20peaceful%20and%20serene%20atmosphere%20perfect%20for%20essential%20oil%20branding%2C%20minimal%20composition&width=1920&height=1080&seq=hero-bg&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Pure Essential Oils,<br />
            <span className="text-amber-300">Export & Import</span> from India
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            High-quality, ethically sourced oils for wholesale export and import
          </p>
          <button 
            onClick={() => scrollToSection('oils')}
            className="bg-amber-700 hover:bg-amber-800 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap"
          >
            Explore Our Oils
          </button>
        </div>
      </section>

      {/* Featured Oils Section */}
      <section id="oils" className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Premium Essential Oils Collection</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our finest selection of pure, therapeutic-grade essential oils, 
              carefully sourced from the heart of India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Lemongrass Oil */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="h-64 bg-cover bg-center" style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=Fresh%20lemongrass%20essential%20oil%20in%20elegant%20glass%20bottle%20with%20lemongrass%20stalks%20and%20leaves%20arranged%20beautifully%20around%20it%2C%20soft%20natural%20lighting%2C%20botanical%20photography%20style%2C%20clean%20white%20background%20with%20subtle%20green%20tones%2C%20professional%20product%20photography%20for%20premium%20essential%20oil%20branding%2C%20minimalist%20composition&width=400&height=300&seq=lemongrass-oil&orientation=landscape')`
              }}></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Lemongrass Oil</h3>
                <p className="text-gray-600 mb-4">
                  Known for its fresh, citrusy aroma and natural antibacterial properties. 
                  Perfect for aromatherapy, skincare, and natural cleaning products. 
                  This energizing oil promotes mental clarity and relaxation.
                </p>
                <div className="text-amber-700 font-semibold">
                  Ethically Sourced • Bulk Export Available
                </div>
              </div>
            </div>

            {/* Vetiver Oil */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="h-64 bg-cover bg-center" style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=Premium%20vetiver%20essential%20oil%20in%20amber%20glass%20bottle%20surrounded%20by%20vetiver%20grass%20roots%20and%20dried%20vetiver%20stalks%2C%20earthy%20natural%20background%2C%20warm%20golden%20lighting%2C%20botanical%20product%20photography%20style%2C%20rustic%20yet%20elegant%20composition%20for%20luxury%20essential%20oil%20marketing%2C%20natural%20textures&width=400&height=300&seq=vetiver-oil&orientation=landscape')`
              }}></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Vetiver Oil</h3>
                <p className="text-gray-600 mb-4">
                  Earthy and grounding with deep therapeutic benefits for stress relief and sleep. 
                  Highly valued in perfumery for its complex, woody fragrance. 
                  Traditional Indian cultivation ensures authentic quality.
                </p>
                <div className="text-amber-700 font-semibold">
                  Ethically Sourced • Bulk Export Available
                </div>
              </div>
            </div>

            {/* Peppermint Oil */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="h-64 bg-cover bg-center" style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=Pure%20peppermint%20essential%20oil%20in%20crystal%20clear%20glass%20bottle%20with%20fresh%20mint%20leaves%20and%20water%20droplets%2C%20cooling%20mint%20green%20background%2C%20refreshing%20photography%20style%2C%20clean%20and%20crisp%20lighting%2C%20premium%20wellness%20product%20presentation%20for%20international%20export%20marketing&width=400&height=300&seq=peppermint-oil&orientation=landscape')`
              }}></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Peppermint Oil</h3>
                <p className="text-gray-600 mb-4">
                  Cooling and invigorating with powerful menthol content for therapeutic applications. 
                  Excellent for digestive health, respiratory support, and natural pain relief. 
                  High purity ensures maximum potency and effectiveness.
                </p>
                <div className="text-amber-700 font-semibold">
                  Ethically Sourced • Bulk Export Available
                </div>
              </div>
            </div>

            {/* Citronella Oil */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="h-64 bg-cover bg-center" style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=Citronella%20essential%20oil%20bottle%20with%20citronella%20grass%20and%20tropical%20leaves%20in%20natural%20outdoor%20setting%2C%20bright%20daylight%20photography%2C%20natural%20insect%20repellent%20theme%2C%20fresh%20green%20botanical%20background%2C%20professional%20product%20photography%20for%20natural%20wellness%20industry%20export&width=400&height=300&seq=citronella-oil&orientation=landscape')`
              }}></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Citronella Oil</h3>
                <p className="text-gray-600 mb-4">
                  Natural insect repellent with fresh, lemony scent perfect for outdoor products. 
                  Antimicrobial properties make it ideal for natural cleaning formulations. 
                  Sustainably harvested from organic Indian plantations.
                </p>
                <div className="text-amber-700 font-semibold">
                  Ethically Sourced • Bulk Export Available
                </div>
              </div>
            </div>

            {/* Eucalyptus Oil */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="h-64 bg-cover bg-center" style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=Eucalyptus%20essential%20oil%20in%20medical%20grade%20bottle%20with%20fresh%20eucalyptus%20leaves%20and%20branches%2C%20medicinal%20herb%20photography%20style%2C%20clean%20white%20background%20with%20soft%20shadows%2C%20therapeutic%20wellness%20product%20presentation%2C%20professional%20pharmaceutical%20grade%20imagery&width=400&height=300&seq=eucalyptus-oil&orientation=landscape')`
              }}></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Eucalyptus Oil</h3>
                <p className="text-gray-600 mb-4">
                  Powerful respiratory support with distinctive medicinal properties and clean aroma. 
                  Anti-inflammatory and antimicrobial benefits for therapeutic applications. 
                  Pharmaceutical-grade purity suitable for medical and wellness industries.
                </p>
                <div className="text-amber-700 font-semibold">
                  Ethically Sourced • Bulk Export Available
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">About Radix Aroma</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              With deep roots in India's rich tradition of aromatic cultivation and distillation, 
              Radix Aroma stands as your trusted export and import agent for the finest essential oils. 
              Our extensive experience in international trade, combined with direct relationships with 
              certified organic farmers across India, ensures that every bottle delivers uncompromising 
              purity and therapeutic quality. We specialize in bulk export and import solutions for wholesalers, 
              manufacturers, and distributors worldwide, maintaining the highest standards of ethical 
              sourcing and sustainable practices. From our headquarters, we coordinate seamless logistics 
              to bring India's aromatic heritage directly to your doorstep.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-plant-line text-2xl text-amber-700"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Ethically Sourced</h3>
                <p className="text-gray-600">Direct partnerships with organic farmers ensuring fair trade practices</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-truck-line text-2xl text-amber-700"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Export & Import</h3>
                <p className="text-gray-600">Complete logistics and documentation support for international trade</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-award-line text-2xl text-amber-700"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Premium Quality</h3>
                <p className="text-gray-600">Therapeutic-grade oils with complete purity and potency certifications</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">Get In Touch</h2>
            <p className="text-xl text-gray-600 mb-12">
              Ready to export or import premium essential oils from India? Contact us for bulk pricing, 
              product samples, and custom solutions.
            </p>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="space-y-6">
                <div className="flex items-center justify-center space-x-4 text-xl">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <i className="ri-phone-line text-amber-700 text-xl"></i>
                  </div>
                  <span className="text-gray-800 font-semibold">+91 98108 73651</span>
                </div>
                
                <div className="flex items-center justify-center space-x-4 text-xl">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <i className="ri-mail-line text-amber-700 text-xl"></i>
                  </div>
                  <span className="text-gray-800 font-semibold">radixaroma@gmail.com</span>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-gray-600">
                  Business Hours: Monday - Saturday, 9:00 AM - 6:00 PM (IST)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="font-['Pacifico'] text-3xl text-amber-400 mb-4">Radix Aroma</div>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Your trusted partner for premium essential oil export and import from India. 
              Committed to quality, sustainability, and authentic aromatic experiences.
            </p>
            
            <div className="flex justify-center space-x-8 mb-6">
              <span className="text-gray-400">📞 +91 98108 73651</span>
              <span className="text-gray-400">📧 radixaroma@gmail.com</span>
            </div>
            
            <div className="border-t border-gray-700 pt-6">
              <p className="text-gray-500 text-sm">
                © 2024 Radix Aroma. All rights reserved. Essential Oil Export & Import from India | Bulk Essential Oils Supplier
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
