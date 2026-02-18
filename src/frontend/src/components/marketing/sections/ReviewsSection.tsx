import { Star } from 'lucide-react';

export function ReviewsSection() {
  const reviews = [
    {
      name: 'Rajesh Kumar',
      location: 'Delhi',
      rating: 5,
      text: 'Excellent service for our Vaishno Devi trip! The driver was very professional and the vehicle was clean and comfortable. Highly recommend Shree Ram Holidays – Tour & Travel Company.',
      date: 'January 2026',
    },
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      text: 'We booked a Kashmir tour package and it was absolutely wonderful. Everything was well-organized and the team was very helpful throughout our journey.',
      date: 'December 2025',
    },
    {
      name: 'Amit Patel',
      location: 'Ahmedabad',
      rating: 5,
      text: 'Best taxi service in Katra! Punctual pickup from Jammu airport and safe journey to our hotel. The driver knew all the local routes and gave us great tips.',
      date: 'January 2026',
    },
    {
      name: 'Sunita Reddy',
      location: 'Hyderabad',
      rating: 5,
      text: 'Our family had an amazing Leh Ladakh trip organized by them. Professional service, comfortable vehicles, and reasonable pricing. Will definitely book again!',
      date: 'November 2025',
    },
    {
      name: 'Vikram Singh',
      location: 'Chandigarh',
      rating: 5,
      text: 'Reliable and trustworthy travel agency. Used their services multiple times for Katra to Srinagar trips. Always satisfied with their service quality.',
      date: 'December 2025',
    },
    {
      name: 'Meera Joshi',
      location: 'Pune',
      rating: 5,
      text: 'Perfect honeymoon package to Manali! The team took care of everything from accommodation to sightseeing. Thank you for making our trip memorable.',
      date: 'January 2026',
    },
  ];

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} size={16} className="fill-warning text-warning" />
      ))}
    </div>
  );

  return (
    <section id="reviews" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Customer Reviews
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it - hear what our satisfied customers have to say about their experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-foreground">{review.name}</h4>
                  <p className="text-sm text-muted-foreground">{review.location}</p>
                </div>
                <StarRating rating={review.rating} />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">"{review.text}"</p>
              <p className="text-xs text-muted-foreground">{review.date}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/20 rounded-lg">
            <Star size={20} className="fill-warning text-warning" />
            <span className="font-semibold text-foreground">4.9/5 Average Rating</span>
            <span className="text-muted-foreground">from 500+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
