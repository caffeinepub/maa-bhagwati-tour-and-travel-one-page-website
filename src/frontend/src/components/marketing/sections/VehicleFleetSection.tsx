import { Car, Truck, Users, CheckCircle } from 'lucide-react';

export function VehicleFleetSection() {
  const vehicles = [
    {
      icon: Car,
      name: 'Sedan',
      capacity: '4 Passengers',
      description: 'Comfortable sedans perfect for couples and small families.',
      features: ['AC', 'Music System', 'Spacious Boot'],
    },
    {
      icon: Car,
      name: 'SUV',
      capacity: '6-7 Passengers',
      description: 'Spacious SUVs ideal for families and group travel.',
      features: ['AC', 'Extra Legroom', 'Large Luggage Space'],
    },
    {
      icon: Truck,
      name: 'Innova',
      capacity: '6-7 Passengers',
      description: 'Premium comfort for long-distance journeys.',
      features: ['AC', 'Reclining Seats', 'Entertainment System'],
    },
    {
      icon: Users,
      name: 'Tempo Traveller',
      capacity: '12-17 Passengers',
      description: 'Perfect for large groups and family gatherings.',
      features: ['AC', 'Push Back Seats', 'Ample Storage'],
    },
  ];

  const qualities = [
    'Clean and well-maintained AC vehicles',
    'Professional and experienced drivers',
    'Regular vehicle servicing and safety checks',
    'GPS-enabled for safe navigation',
  ];

  return (
    <section id="fleet" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Vehicle Fleet
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose from our wide range of clean, comfortable, and well-maintained vehicles for your journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {vehicles.map((vehicle) => {
            const Icon = vehicle.icon;
            return (
              <div
                key={vehicle.name}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{vehicle.name}</h3>
                <p className="text-sm text-primary font-medium mb-3">{vehicle.capacity}</p>
                <p className="text-sm text-muted-foreground mb-4">{vehicle.description}</p>
                <ul className="space-y-2">
                  {vehicle.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle size={14} className="text-success flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-8">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            Why Our Vehicles Stand Out
          </h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {qualities.map((quality) => (
              <div key={quality} className="flex items-start gap-3">
                <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={20} />
                <span className="text-foreground">{quality}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
