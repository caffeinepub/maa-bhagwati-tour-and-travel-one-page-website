import { Award, DollarSign, Shield, Clock, Star } from 'lucide-react';

export function WhyChooseUsSection() {
  const benefits = [
    {
      icon: Award,
      title: 'Local Travel Experts',
      description: 'Deep knowledge of Katra, Kashmir, Himachal, and Ladakh routes with insider tips for the best experience.',
    },
    {
      icon: DollarSign,
      title: 'Affordable Pricing',
      description: 'Competitive rates with transparent pricing and no hidden charges. Best value for your money.',
    },
    {
      icon: Shield,
      title: 'Safe Travel',
      description: 'Well-maintained vehicles, experienced drivers, and comprehensive insurance for your peace of mind.',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for bookings, queries, and assistance during your journey.',
    },
    {
      icon: Star,
      title: 'Trusted Service',
      description: 'Years of experience serving thousands of satisfied customers with 5-star reviews and recommendations.',
    },
  ];

  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-muted-foreground">
            Your trusted travel partner in Katra with a commitment to excellence, safety, and customer satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
