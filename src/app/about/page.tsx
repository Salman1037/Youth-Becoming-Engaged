import AboutSection from "@/components/AboutSection";
import AppointmentSection from "@/components/AppointmentSection";
import WorkingWithCommunity from '@/components/WorkingWithCommunity';
import Whoweare from "@/components/Whoweare";
import EngagedSection from "@/components/EngagedSection";

import Link from "next/link";

export default function Page() {
  return (
    <>
      <AboutSection />
     
      <WorkingWithCommunity />
       <Whoweare />
      <EngagedSection />
      <AppointmentSection />
    </>
  );
}
