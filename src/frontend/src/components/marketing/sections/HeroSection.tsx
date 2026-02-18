import { Phone, MessageCircle, MapPin } from 'lucide-react';

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-bg.dim_1920x1080.png"
          alt="Mountain valley road"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full text-primary-foreground mb-6">
            <MapPin size={16} />
            <span className="text-sm font-medium">Based in Katra, Jammu & Kashmir</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Best Katra Taxi Service & Tour Packages
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your trusted travel partner for Vaishno Devi pilgrimage, Kashmir valleys, Himachal hills, and Leh Ladakh adventures. Safe, comfortable, and affordable travel across North India.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+919906109003"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
            >
              <Phone size={20} />
              <span>Call Now</span>
            </a>
            <a
              href="https://wa.me/919906109003"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-success text-white rounded-lg font-semibold text-lg hover:bg-success/90 transition-all hover:scale-105 shadow-lg"
            >
              <MessageCircle size={20} />
              <span>WhatsApp Booking</span>
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { label: 'Years Experience', value: '10+' },
              { label: 'Happy Customers', value: '5000+' },
              { label: 'Tour Packages', value: '50+' },
              { label: 'Vehicles', value: '25+' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
