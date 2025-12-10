import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SolutionPage from "./pages/SolutionPage";
import ShopPage from "./pages/ShopPage";
import FoundationPage from "./pages/FoundationPage";
import AwarenessPage from "./pages/AwarenessPage";
import BenefitsPage from "./pages/BenefitsPage";
import CategoriesPage from "./pages/CategoriesPage";
import GalleryPage from "./pages/GalleryPage";
import VideosPage from "./pages/VideosPage";
import BlogsPage from "./pages/BlogsPage";
import EventsPage from "./pages/EventsPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import ContactPage from "./pages/ContactPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/foundation" element={<FoundationPage />} />
          <Route path="/awareness" element={<AwarenessPage />} />
          <Route path="/benefits" element={<BenefitsPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/solution/:slug" element={<SolutionPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
