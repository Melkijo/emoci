'use client';

import { useState, useEffect } from 'react';

const languages = [
  { text: 'Hello', language: 'English' },
  { text: 'Hola', language: 'Spanish' },
  { text: 'Bonjour', language: 'French' },
  { text: 'Hallo', language: 'German' },
  { text: 'Ciao', language: 'Italian' },
];

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === languages.length - 1) {
          // After showing all languages, start the closing animation
          setTimeout(() => {
            setIsClosing(true);
            // Wait for the slide up animation to complete before calling onComplete
            setTimeout(() => {
              setIsVisible(false);
              onComplete();
            }, 800); // Match the slideUp animation duration
          }, 1000);
          return prevIndex;
        }
        return prevIndex + 1;
      });
    }, 500); // Change language every 1.5 seconds

    return () => clearInterval(interval);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-background text-foreground transition-transform duration-600 ease-in-out ${
      isClosing ? 'transform -translate-y-full' : 'transform translate-y-0'
    }`}>
      <div className="text-center">
        <h1 
          key={currentIndex}
          className="text-6xl md:text-8xl font-bold animate-fade-in text-primary"
          style={{
            animation: 'fadeIn 0.4s ease-in-out'
          }}
        >
          {languages[currentIndex].text}
        </h1>
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-in-out;
        }
        
        .animate-fade-in-delay {
          animation: fadeIn 0.6s ease-in-out 0.3s both;
        }
      `}</style>
    </div>
  );
}
