import { MapPin, Calendar, Users, ArrowRight } from 'lucide-react';

export function TourPackagesSection() {
  const packages = [
    {
      title: 'Katra Vaishno Devi Tour',
      description: 'Complete pilgrimage package with comfortable accommodation, darshan arrangements, and local sightseeing. Perfect for families and devotees.',
      highlights: ['Vaishno Devi Darshan', 'Bhairon Temple', 'Local Sightseeing', 'Comfortable Stay'],
      image: '/assets/generated/gallery-vaishnodevi.dim_1200x800.png',
    },
    {
      title: 'Kashmir Tour Package',
      description: 'Explore the paradise on earth with visits to Srinagar, Gulmarg, and Pahalgam. Experience Dal Lake, snow-capped mountains, and lush valleys.',
      highlights: ['Srinagar Dal Lake', 'Gulmarg Cable Car', 'Pahalgam Valley', 'Shikara Ride'],
      image: '/assets/generated/gallery-kashmir.dim_1200x800.png',
    },
    {
      title: 'Himachal Pradesh Tour',
      description: 'Discover the beauty of Manali, Shimla, and Dharamshala. Enjoy hill stations, adventure activities, and serene mountain landscapes.',
      highlights: ['Manali Solang Valley', 'Shimla Mall Road', 'Dharamshala Monasteries', 'Rohtang Pass'],
      image: '/assets/generated/gallery-himachal.dim_1200x800.png',
    },
    {
      title: 'Leh Ladakh Adventure',
      description: 'Thrilling high-altitude adventure to Pangong Lake, Nubra Valley, and ancient monasteries. Experience the raw beauty of the Himalayas.',
      highlights: ['Pangong Lake', 'Nubra Valley', 'Khardung La Pass', 'Leh Monasteries'],
      image: '/assets/generated/gallery-leh-ladakh.dim_1200x800.png',
    },
    {
      title: 'Amritsar Religious Tour',
      description: 'Visit the Golden Temple, witness the Wagah Border ceremony, and explore the rich Sikh heritage and culture of Punjab.',
      highlights: ['Golden Temple', 'Wagah Border', 'Jallianwala Bagh', 'Local Cuisine'],
      image: '/assets/generated/gallery-vaishnodevi.dim_1200x800.png',
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="packages" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Popular Tour Packages
          </h2>
          <p className="text-lg text-muted-foreground">
            Carefully crafted tour packages for Vaishno Devi pilgrimage, Kashmir valleys, Himachal hills, and Leh Ladakh adventures. Best travel agency in Katra for North India tours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{pkg.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{pkg.description}</p>
                
                <div className="space-y-2 mb-4">
                  {pkg.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin size={14} className="text-primary flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2">
                  <a
                    href="https://wa.me/919906109003"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    <span>Book Now</span>
                    <ArrowRight size={16} />
                  </a>
                  <button
                    onClick={scrollToContact}
                    className="px-4 py-2.5 border border-border rounded-lg font-medium hover:bg-accent transition-colors"
                  >
                    Enquire
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
