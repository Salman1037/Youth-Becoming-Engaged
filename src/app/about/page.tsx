import AboutSection from "@/components/AboutSection";
import AppointmentSection from "@/components/AppointmentSection";
import WorkingWithCommunity from '@/components/WorkingWithCommunity';
import Whoweare from "@/components/Whoweare";
import EngagedSection from "@/components/EngagedSection";

import Link from "next/link";
import Ourprogram from "@/components/Ourprogram";

export default function Page() {
  return (
    <>
      <AboutSection />
     
      <WorkingWithCommunity />
       <Ourprogram />
       <Whoweare />
      <EngagedSection />
      <AppointmentSection />
    </>
  );
}
