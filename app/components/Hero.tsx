
import { Download, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Main Title */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
        Talk, Reflect, Grow —{' '}
        <span className="text-primary">Meet Emoci</span>
      </h1>

      {/* Description */}
      <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
        Your personal emotional companion that helps you understand, process, and grow from your feelings. 
        Start meaningful conversations with yourself and discover the power of emotional intelligence.
      </p>

      {/* Call-to-Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 px-8 py-4 rounded-lg text-lg font-semibold flex items-center gap-2 group">
          <Download className="w-5 h-5" />
          Join the waiting list
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
        </button>
        
        <button className="border border-border text-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200 px-8 py-4 rounded-lg text-lg font-semibold">
          Learn More
        </button>
      </div>

      {/* Additional Info */}
      <div className="mt-12 text-sm text-muted-foreground">
        <p>Coming soon to iOS and Android • Join the waiting list</p>
      </div>
    </section>
  );
}