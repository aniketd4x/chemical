import { Play } from "lucide-react";

const videos = [
  {
    id: "dQw4w9WgXcQ",
    title: "Introduction to Chemical-Free Living",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "How Chemicals Affect Your Body",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Natural Alternatives for Everyday Products",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Success Stories from Our Community",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Tips for a Chemical-Free Kitchen",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Awareness Camp Highlights",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
  },
];

export function VideosSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Videos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Watch & Learn
          </h2>
          <p className="text-lg text-muted-foreground">
            Educational videos to guide your journey toward chemical-free living.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {videos.map((video, index) => (
            <a
              key={index}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card overflow-hidden hover-lift group"
            >
              <div
                className="relative aspect-video bg-muted bg-cover bg-center"
                style={{ backgroundImage: `url(${video.thumbnail})` }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 text-primary-foreground ml-1" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
              </div>
            </a>
          ))}

        </div>

      </div>
    </section>
  );
}
