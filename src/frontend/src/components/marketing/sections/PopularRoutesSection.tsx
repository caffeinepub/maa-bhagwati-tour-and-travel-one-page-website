import { MapPin, Phone, MessageCircle } from 'lucide-react';

export function PopularRoutesSection() {
  const routes = [
    {
      title: 'Katra to Srinagar Taxi',
      distance: '~240 km',
      duration: '6-7 hours',
      description: 'Scenic journey from Katra to the beautiful Kashmir valley.',
    },
    {
      title: 'Jammu to Katra Pickup',
      distance: '~50 km',
      duration: '1.5 hours',
      description: 'Convenient airport and railway station pickup service.',
    },
    {
      title: 'Katra to Amritsar',
      distance: '~200 km',
      duration: '5-6 hours',
      description: 'Visit the Golden Temple and experience Punjabi culture.',
    },
    {
      title: 'Katra to Manali',
      distance: '~450 km',
      duration: '10-12 hours',
      description: 'Journey to the beautiful hill station of Manali.',
    },
    {
      title: 'Leh Ladakh Road Trips',
      distance: '~700 km',
      duration: 'Multi-day',
      description: 'Epic high-altitude adventure through the Himalayas.',
    },
  ];

  return (
    <section id="routes" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Popular Routes
          </h2>
          <p className="text-lg text-muted-foreground">
            Frequently traveled routes from Katra to major destinations. Book your Katra to Kashmir taxi or other routes with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {routes.map((route) => (
            <div
              key={route.title}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{route.title}</h3>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span>{route.distance}</span>
                    <span>•</span>
                    <span>{route.duration}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{route.description}</p>
              <div className="flex gap-2">
                <a
                  href="tel:+919906109003"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  <Phone size={14} />
                  <span>Call</span>
                </a>
                <a
                  href="https://wa.me/919906109003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-success text-white rounded-lg text-sm font-medium hover:bg-success/90 transition-colors"
                >
                  <MessageCircle size={14} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
