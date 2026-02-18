import { Car, Plane, MapPin, Users, Heart, UsersRound, Settings } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: Car,
      title: 'Katra Taxi Service',
      description: 'Reliable taxi service in Katra for local travel, Vaishno Devi visits, and outstation trips.',
    },
    {
      icon: Plane,
      title: 'Airport & Railway Pickup',
      description: 'Convenient pickup and drop services from Jammu Airport and Railway Station to Katra.',
    },
    {
      icon: MapPin,
      title: 'Local Sightseeing',
      description: 'Guided local sightseeing tours covering all major attractions and hidden gems.',
    },
    {
      icon: Users,
      title: 'Family Tours',
      description: 'Specially designed family-friendly tour packages with comfortable accommodations.',
    },
    {
      icon: Heart,
      title: 'Honeymoon Packages',
      description: 'Romantic getaway packages for couples to Kashmir, Manali, and other scenic destinations.',
    },
    {
      icon: UsersRound,
      title: 'Group Tours',
      description: 'Customized group travel packages for corporate outings, school trips, and large families.',
    },
    {
      icon: Settings,
      title: 'Customized Travel Planning',
      description: 'Personalized itineraries tailored to your preferences, budget, and travel dates.',
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Taxi & Travel Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive travel solutions for all your needs - from Katra taxi service to complete tour packages across North India.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
