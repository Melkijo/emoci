import { MessageCircle, FileText, BookOpen, History } from 'lucide-react';
import Image from 'next/image';

export default function Features() {
  const features = [
    {
      icon: MessageCircle,
      title: "Chat & Voice Conversations",
      description: "Talk to Emoci anytime — type or speak naturally. Get thoughtful responses that feel human, supportive, and engaging."
    },
    {
      icon: FileText,
      title: "Smart Summaries",
      description: "After every conversation, Emoci creates a clear summary so you can revisit your key insights without scrolling back."
    },
    {
      icon: BookOpen,
      title: "Story Mode",
      description: "Turn your conversation summaries into evolving personal stories, helping you reflect on your journey and growth."
    },
    {
      icon: History,
      title: "Conversation History",
      description: "Track your past talks with Emoci, see your emotional journey, and notice patterns that help you understand yourself better."
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Mobile Image - Left Side */}
         <Image src="/images/features-mockup.png" alt="Emoci" width={1500} height={1500} className="w-full lg:w-3/4 object-contain" />

          {/* Features Content - Right Side */}
          <div className="order-1 lg:order-2">
            <div className="max-w-lg">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Powerful features for your{' '}
                <span className="text-primary">emotional journey</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Emoci combines advanced AI with thoughtful design to create meaningful conversations 
                that help you understand and grow from your emotions.
              </p>

              <div className="space-y-6">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="flex gap-4 group">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
