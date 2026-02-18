export function GallerySection() {
  const images = [
    {
      src: '/assets/generated/gallery-vaishnodevi.dim_1200x800.png',
      alt: 'Vaishno Devi Temple pilgrimage',
      title: 'Vaishno Devi',
    },
    {
      src: '/assets/generated/gallery-kashmir.dim_1200x800.png',
      alt: 'Kashmir Dal Lake and mountains',
      title: 'Kashmir Valley',
    },
    {
      src: '/assets/generated/gallery-leh-ladakh.dim_1200x800.png',
      alt: 'Leh Ladakh Pangong Lake',
      title: 'Leh Ladakh',
    },
    {
      src: '/assets/generated/gallery-himachal.dim_1200x800.png',
      alt: 'Himachal Pradesh mountains',
      title: 'Himachal Pradesh',
    },
    {
      src: '/assets/generated/gallery-vehicle.dim_1200x800.png',
      alt: 'Clean taxi vehicle with mountains',
      title: 'Our Vehicles',
    },
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Travel Gallery
          </h2>
          <p className="text-lg text-muted-foreground">
            Glimpses of the beautiful destinations we cover and our well-maintained fleet of vehicles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[3/2] overflow-hidden rounded-xl group cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
