import { Download, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
          Ready to start your{' '}
          <span className="text-primary">emotional journey</span>?
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Join thousands of users who have transformed their emotional well-being with Emoci. 
          Join the waiting list and be the first to experience meaningful conversations that help you grow.
        </p>

        {/* Download Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-lg text-lg font-semibold flex items-center gap-3 group shadow-lg hover:shadow-xl transition-all duration-200">
            <Download className="w-6 h-6" />
            Join the waiting list
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          
          <div className="text-sm text-muted-foreground">
            <p>Coming soon to iOS and Android</p>
            <p className="text-xs mt-1">Join the waiting list • Be the first to know</p>
          </div>
        </div>

       
      </div>
    </section>
  );
}
