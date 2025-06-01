import AddComfortToYourLiving from "@/components/AddComfortToYourLiving";
import Banner from "@/components/Banner";
import ExploreCategories from "@/components/ExploreCategories";
import FeaturedSection from "@/components/FeaturedSection";
import NewArrivalsSection from "@/components/NewArrivalsSection";
import NewsletterSection from "@/components/NewsletterSection";
import SaleSection from "@/components/SaleSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import VideoContainer from "@/components/VideoContainer";
import Widgets from "@/components/Widgets";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Banner />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AddComfortToYourLiving />
        <Widgets />
      </div>
      <VideoContainer />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <ExploreCategories />
        <SaleSection />
        <FeaturedSection />
        <NewArrivalsSection />
        <TestimonialsSection />
      </div>
      <NewsletterSection />
    </div>
  );
}
