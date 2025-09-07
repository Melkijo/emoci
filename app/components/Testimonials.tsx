import { Heart, MessageCircle, Share, MoreHorizontal } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      handle: "@sarahchen",
      avatar: "SC",
      review: "Emoci has been a game-changer for my mental health journey. The conversations feel so natural and supportive. I finally found a safe space to process my emotions without judgment. 💜",
      likes: 42,
      replies: 8,
      timeAgo: "2h"
    },
    {
      id: 2,
      name: "Marcus Johnson",
      handle: "@marcusj",
      avatar: "MJ",
      review: "The Story Mode feature is incredible! Seeing my emotional growth over time through these personal stories has been eye-opening. It's like having a personal therapist available 24/7.",
      likes: 28,
      replies: 5,
      timeAgo: "4h"
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      handle: "@elenar",
      avatar: "ER",
      review: "I was skeptical about AI therapy, but Emoci feels different. The voice conversations are so natural, and the summaries help me remember key insights. Highly recommend! ✨",
      likes: 67,
      replies: 12,
      timeAgo: "6h"
    },
    {
      id: 4,
      name: "David Kim",
      handle: "@davidkim",
      avatar: "DK",
      review: "The conversation history feature is brilliant. I can see patterns in my emotions and track my progress. It's like having a personal emotional journal that talks back.",
      likes: 35,
      replies: 7,
      timeAgo: "8h"
    },
    {
      id: 5,
      name: "Amanda Foster",
      handle: "@amandaf",
      avatar: "AF",
      review: "As someone who struggles with anxiety, Emoci has been a lifeline. The smart summaries help me process complex feelings, and the app is always there when I need it most.",
      likes: 89,
      replies: 15,
      timeAgo: "1d"
    },
    {
      id: 6,
      name: "James Wilson",
      handle: "@jamesw",
      avatar: "JW",
      review: "The voice feature is amazing! Sometimes I just need to talk through my thoughts out loud, and Emoci listens and responds thoughtfully. It's like having a wise friend who's always available.",
      likes: 54,
      replies: 9,
      timeAgo: "1d"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What people are saying about{' '}
            <span className="text-primary">Emoci</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of users who have transformed their emotional well-being with Emoci
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-background rounded-2xl border border-border p-6 hover:shadow-lg transition-shadow duration-200"
            >
              {/* Twitter-style Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  {/* Avatar */}
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </h3>
                    <p className="text-muted-foreground text-xs">
                      {testimonial.handle} · {testimonial.timeAgo}
                    </p>
                  </div>
                </div>
                <button className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>

              {/* Review Text */}
              <div className="mb-4">
                <p className="text-foreground leading-relaxed text-sm">
                  {testimonial.review}
                </p>
              </div>

              {/* Twitter-style Actions */}
              <div className="flex items-center justify-between text-muted-foreground">
                <div className="flex items-center space-x-6">
                  <button className="flex items-center space-x-1 hover:text-primary transition-colors duration-200 group">
                    <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-xs">{testimonial.replies}</span>
                  </button>
                  
                  <button className="flex items-center space-x-1 hover:text-red-500 transition-colors duration-200 group">
                    <Heart className="w-4 h-4 group-hover:scale-110 transition-transform duration-200 group-hover:fill-red-500" />
                    <span className="text-xs">{testimonial.likes}</span>
                  </button>
                  
                  <button className="flex items-center space-x-1 hover:text-primary transition-colors duration-200 group">
                    <Share className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      
      </div>
    </section>
  );
}
