import { MapPin, Phone, Mail, MessageCircle, Clock } from 'lucide-react';
import { ContactInquiryForm } from '../contact/ContactInquiryForm';

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground">
            Get in touch with us for bookings, queries, or any assistance. We're here to help you plan your perfect journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column: Contact Information & Form */}
          <div className="space-y-6">
            {/* Contact Information Card */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-bold text-foreground mb-6">Get In Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Address</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Tea Garden, New Bus Stand<br />
                      Katra, Jammu and Kashmir<br />
                      India – 182301
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone / WhatsApp</h4>
                    <a
                      href="tel:+919906109003"
                      className="text-sm text-primary hover:underline"
                    >
                      +91 9906109003
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <a
                      href="mailto:nakul.vd@gmail.com"
                      className="text-sm text-primary hover:underline"
                    >
                      nakul.vd@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Working Hours</h4>
                    <p className="text-sm text-muted-foreground">
                      24/7 Available for Bookings & Support
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <a
                  href="https://wa.me/919906109003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-success text-white rounded-lg font-semibold hover:bg-success/90 transition-colors"
                >
                  <MessageCircle size={20} />
                  <span>Book via WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Contact Inquiry Form */}
            <ContactInquiryForm />
          </div>

          {/* Right Column: Google Map */}
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3363.8!2d74.93!3d32.99!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDU5JzI0LjQiTiA3NMKwNTUnNDguMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shree Ram Holidays – Tour & Travel Company Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
