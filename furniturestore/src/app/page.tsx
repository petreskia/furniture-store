import AddComfortToYourLiving from "@/components/AddComfortToYourLiving";
import Banner from "@/components/Banner";
import VideoContainer from "@/components/VideoContainer";
import Widgets from "@/components/Widgets";

export default function Home() {
  return (
    <div>
      <Banner />
      <AddComfortToYourLiving />
      <Widgets />
      <VideoContainer />
    </div>
  );
}
