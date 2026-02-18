import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const getAppIdentifier = () => {
    if (typeof window !== 'undefined') {
      return encodeURIComponent(window.location.hostname);
    }
    return 'unknown-app';
  };

  return (
    <footer className="bg-muted/50 border-t border-border py-8 mb-16 md:mb-0">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-foreground mb-3">Shree Ram Holidays – Tour & Travel Company</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted travel partner in Katra for Vaishno Devi pilgrimage, Kashmir tours, and North India travel packages.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button
                  onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                >
                  Tour Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('fleet')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                >
                  Vehicle Fleet
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Tea Garden, New Bus Stand</li>
              <li>Katra, J&K - 182301</li>
              <li>
                <a href="tel:+919906109003" className="hover:text-primary transition-colors">
                  +91 9906109003
                </a>
              </li>
              <li>
                <a href="mailto:nakul.vd@gmail.com" className="hover:text-primary transition-colors">
                  nakul.vd@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1 flex-wrap">
            <span>© {currentYear} Shree Ram Holidays – Tour & Travel Company. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              Built with <Heart size={14} className="text-destructive fill-destructive" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${getAppIdentifier()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                caffeine.ai
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
