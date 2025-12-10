import { useState } from "react";
import { X } from "lucide-react";

const IMAGE_URL = "https://kilaweb.com/images/event.jpg";

const galleryImages = [
  { id: 1, category: "Awareness Camp" },
  { id: 2, category: "Natural Products" },
  { id: 3, category: "Workshop" },
  { id: 4, category: "Community" },
  { id: 5, category: "Herbs & Plants" },
  { id: 6, category: "Healthy Living" },
  { id: 7, category: "Awareness Camp" },
  { id: 8, category: "Natural Products" },
  { id: 9, category: "Workshop" },
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Gallery
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Journey in Pictures
          </h2>
          <p className="text-lg text-muted-foreground">
            A glimpse into our awareness programs, workshops, and community activities.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(index)}
              className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group"
            >
              {/* Single Image Everywhere */}
              <img
                src={IMAGE_URL}
                alt={item.category}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-primary-foreground font-medium text-sm px-3 py-1 bg-primary/80 rounded-full">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-primary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" />
            </button>

            <img
              src={IMAGE_URL}
              alt={galleryImages[selectedImage].category}
              className="max-w-4xl max-h-[80vh] w-auto h-auto rounded-2xl object-contain"
            />
          </div>
        )}

      </div>
    </section>
  );
}
