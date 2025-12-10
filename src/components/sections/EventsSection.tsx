import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const upcomingEvents = [
  {
    title: "Chemical-Free Living Workshop",
    date: "December 15, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Mehdipatnam Community Hall, Hyderabad",
    type: "Workshop",
  },
  {
    title: "Natural Health Awareness Camp",
    date: "December 22, 2024",
    time: "9:00 AM - 1:00 PM",
    location: "Banjara Hills, Hyderabad",
    type: "Camp",
  },
  {
    title: "Women's Health Seminar",
    date: "January 8, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "Jubilee Hills Convention Center",
    type: "Seminar",
  },
];

const pastEvents = [
  {
    title: "Digestive Health Awareness Camp",
    date: "November 2024",
    attendees: "500+ families",
  },
  {
    title: "Chemical-Free Kitchen Workshop",
    date: "October 2024",
    attendees: "300+ attendees",
  },
  {
    title: "Kids Health Seminar",
    date: "September 2024",
    attendees: "250+ parents",
  },
];

export function EventsSection() {
  return (
    <section className="py-24 nature-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Events
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Awareness Events
          </h2>
          <p className="text-lg text-muted-foreground">
            Join our workshops, seminars, and awareness camps to learn about chemical-free living.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Upcoming Events */}
          <div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              Upcoming Events
            </h3>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="glass-card p-6 hover-lift">
                  <div className="flex items-start justify-between mb-4">
                    <span className="px-3 py-1 text-xs font-medium bg-secondary/20 text-secondary rounded-full">
                      {event.type}
                    </span>
                    <Button variant="ghost" size="sm" className="text-primary">
                      Register <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                  <h4 className="font-display text-lg font-semibold text-foreground mb-3">
                    {event.title}
                  </h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      {event.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Past Events */}
          <div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              Past Events
            </h3>
            <div className="glass-card p-6">
              <div className="space-y-6">
                {pastEvents.map((event, index) => (
                  <div key={index} className="flex items-center justify-between pb-6 border-b border-border/50 last:border-0 last:pb-0">
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{event.title}</h4>
                      <p className="text-sm text-muted-foreground">{event.date}</p>
                    </div>
                    <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {event.attendees}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
