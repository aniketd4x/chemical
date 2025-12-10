import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";

const IMAGE_URL = "https://kilaweb.com/images/event.jpg";

const blogs = [
  {
    title: "10 Hidden Chemicals in Your Kitchen You Should Avoid",
    excerpt: "Discover the harmful chemicals lurking in your everyday kitchen products and learn safe alternatives.",
    category: "Kitchen Safety",
    readTime: "5 min read",
    url: "/blogs/hidden-chemicals-kitchen",
  },
  {
    title: "Natural Remedies for Digestive Health",
    excerpt: "Explore traditional herbs and natural solutions for common digestive problems without chemicals.",
    category: "Digestion",
    readTime: "7 min read",
    url: "/blogs/natural-digestive-remedies",
  },
  {
    title: "Why PCOS is Rising in Indian Women",
    excerpt: "Understanding the link between chemical exposure and hormonal disorders affecting women today.",
    category: "Women's Health",
    readTime: "8 min read",
    url: "/blogs/pcos-chemical-link",
  },
  {
    title: "Chemical-Free Skincare: A Complete Guide",
    excerpt: "Everything you need to know about transitioning to natural, toxin-free skincare products.",
    category: "Skin Health",
    readTime: "6 min read",
    url: "/blogs/chemical-free-skincare",
  },
  {
    title: "How to Read Product Labels for Hidden Toxins",
    excerpt: "Learn to decode ingredient lists and identify harmful chemicals in everyday products.",
    category: "Awareness",
    readTime: "4 min read",
    url: "/blogs/reading-product-labels",
  },
  {
    title: "The Impact of Chemicals on Children's Health",
    excerpt: "Why children are most vulnerable to chemical toxicity and how to protect them naturally.",
    category: "Kids Health",
    readTime: "6 min read",
    url: "/blogs/chemicals-children-health",
  },
];

export function BlogsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Blog
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Knowledge Hub
          </h2>
          <p className="text-lg text-muted-foreground">
            Stay informed with our latest articles on chemical-free living and natural health.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <Link
              key={blog.title}
              to={blog.url}
              className="glass-card overflow-hidden hover-lift group rounded-xl border border-border bg-card shadow-sm"
            >
              {/* Blog Image (Same Everywhere) */}
              <div className="overflow-hidden">
                <img
                  src={IMAGE_URL}
                  alt={blog.title}
                  className="aspect-video w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Blog Text */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded">
                    {blog.category}
                  </span>

                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {blog.readTime}
                  </span>
                </div>

                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {blog.title}
                </h3>

                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {blog.excerpt}
                </p>

                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Read More <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

