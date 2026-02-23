import AboutSection from "@/components/AboutSection";
import AppointmentSection from "@/components/AppointmentSection";
import ServiceSection from "@/components/ServiceSection";
import Whoweare from "@/components/Whoweare";

import Link from "next/link";


export default function Page() {
  return (
    <>
      <AboutSection />
      <Whoweare />
      <ServiceSection />
      <AppointmentSection />
     
    </>
  );
}
