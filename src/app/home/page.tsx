import Hero from "@/components/Hero";
import CommunityPartnerships from "@/components/CommunityPartnerships";
import Ourprogram from "@/components/Ourprogram";
import Whoweare from "@/components/Whoweare";
import Focusarea from "@/components/Focusarea";
import Contact from "@/components/Contact";
import Callaction from "@/components/Callaction";
import WorkingWithCommunity from '@/components/WorkingWithCommunity';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Whoweare />
      <Ourprogram />
      <Contact />
      <WorkingWithCommunity />
      <CommunityPartnerships />
      <Focusarea />
      <Callaction />
      
      {/* Add other home page sections/components here */}
    </main>
  );
}