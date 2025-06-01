import AddComfortToYourLiving from "@/components/AddComfortToYourLiving";
import Banner from "@/components/Banner";
import ExploreCategories from "@/components/ExploreCategories";
import FeaturedSection from "@/components/FeaturedSection";
import NewArrivalsSection from "@/components/NewArrivalsSection";
import SaleSection from "@/components/SaleSection";
import VideoContainer from "@/components/VideoContainer";
import Widgets from "@/components/Widgets";

export default function Home() {
  return (
    <div>
      <Banner />
      <AddComfortToYourLiving />
      <Widgets />
      <VideoContainer />
      <ExploreCategories />
      <SaleSection />
      <FeaturedSection />
      <NewArrivalsSection />
    </div>
  );
}
