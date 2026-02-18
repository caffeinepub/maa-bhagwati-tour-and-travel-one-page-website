import { Shield, Users, Award, Heart } from 'lucide-react';

export function AboutSection() {
  const features = [
    {
      icon: Shield,
      title: 'Trusted Local Agency',
      description: 'Based in Katra with deep knowledge of the region and years of experience serving pilgrims and tourists.',
    },
    {
      icon: Users,
      title: 'Experienced Drivers',
      description: 'Professional, courteous drivers who know every route and ensure your journey is smooth and comfortable.',
    },
    {
      icon: Award,
      title: 'Safe & Affordable',
      description: 'Competitive pricing without compromising on safety, comfort, or quality of service.',
    },
    {
      icon: Heart,
      title: 'Family & Pilgrim Focus',
      description: 'Specialized services for families and pilgrims visiting Vaishno Devi and other sacred destinations.',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Shree Ram Holidays – Tour & Travel Company
          </h2>
          <p className="text-lg text-muted-foreground">
            Your reliable travel partner in Katra, dedicated to making your journey memorable, safe, and comfortable. We specialize in Vaishno Devi pilgrimage tours and North India travel packages.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
