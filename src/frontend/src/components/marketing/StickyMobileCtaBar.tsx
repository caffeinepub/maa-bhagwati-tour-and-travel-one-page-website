import { Phone, MessageCircle } from 'lucide-react';

export function StickyMobileCtaBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background border-t border-border shadow-lg">
      <div className="flex items-center gap-2 p-3">
        <a
          href="tel:+919906109003"
          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          <Phone size={18} />
          <span>Call Now</span>
        </a>
        <a
          href="https://wa.me/919906109003"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-success text-white rounded-lg font-medium hover:bg-success/90 transition-colors"
        >
          <MessageCircle size={18} />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
