import PartnershipsHero from "@/components/partnershipshero";
import CommunityPartnershipsIntro from "@/components/CommunityPartnershipsIntro";
import WhoWePartnerWith from "@/components/WhoWePartnerWith";
import HowPartnershipsSupportYouth from "@/components/HowPartnershipsSupportYouth";
import PartnerSupportedPrograms from "@/components/PartnerSupportedPrograms";
import ImprovingAccessThroughPartnerships from "@/components/ImprovingAccessThroughPartnerships";
import Callaction from "@/components/Callaction";
import Focusarea from "@/components/Focusarea";

export default function Page() {
  return (
    <>
      <PartnershipsHero />
      <CommunityPartnershipsIntro />
      <Focusarea />
      <WhoWePartnerWith />
      <HowPartnershipsSupportYouth />
      <PartnerSupportedPrograms />
      <ImprovingAccessThroughPartnerships />
      <Callaction />
    </>
  );
}
