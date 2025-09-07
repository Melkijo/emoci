'use client';

import { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
              <Image src="/images/app-logo.png" alt="Emoci" width={200} height={200}  className='w-12 object-cover'/>
            
                <span className="ml-2 text-xl font-bold text-foreground">Emoci</span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="/"
                  className="text-foreground hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="#features"
                  className="text-foreground hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium"
                >
                  Features
                </a>
                <a
                  href="#faq"
                  className="text-foreground hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium"
                >
                  FAQ
                </a>
                <button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Join the waiting list
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-foreground hover:text-primary transition-colors duration-200 p-2"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/50 z-40 animate-fade-in-backdrop"
              onClick={closeMobileMenu}
            />
            
            {/* Mobile Menu */}
            <div className="fixed top-0 right-0 h-screen w-80 max-w-[85vw] bg-background border-l border-border z-50 animate-slide-in-right">
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <div className="flex items-center">
                  <Image src="/images/app-logo.png" alt="Emoci" width={200} height={200}  className='w-12 object-cover'/>
            
            <span className="ml-2 text-xl font-bold text-foreground">Emoci</span>
                  </div>
                  <button
                    onClick={closeMobileMenu}
                    className="text-foreground hover:text-primary transition-colors duration-200 p-2"
                    aria-label="Close mobile menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile Menu Content */}
                <div className="flex-1 flex flex-col justify-center px-6 py-8">
                  <nav className="space-y-8">
                    <a
                      href="#home"
                      onClick={closeMobileMenu}
                      className="block text-2xl font-medium text-foreground hover:text-primary transition-colors duration-200"
                    >
                      Home
                    </a>
                    <a
                      href="#features"
                      onClick={closeMobileMenu}
                      className="block text-2xl font-medium text-foreground hover:text-primary transition-colors duration-200"
                    >
                      Features
                    </a>
                    <a
                      href="#faq"
                      onClick={closeMobileMenu}
                      className="block text-2xl font-medium text-foreground hover:text-primary transition-colors duration-200"
                    >
                      FAQ
                    </a>
                    <button
                      onClick={closeMobileMenu}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 px-6 py-4 rounded-lg text-lg font-medium flex items-center justify-center gap-3 mt-8"
                    >
                      <Download className="w-5 h-5" />
                      Join the waiting list
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from being hidden behind fixed navbar */}
      <div className="h-16" />
    </>
  );
}
