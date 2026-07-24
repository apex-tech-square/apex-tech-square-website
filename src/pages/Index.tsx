import ApexHeader from "@/components/ApexHeader";
import ApexHero from "@/components/ApexHero";
import ApexServices from "@/components/ApexServices";
import ApexPortfolio from "@/components/ApexPortfolio";
import ApexSlider from "@/components/ApexSlider";
import ApexAbout from "@/components/ApexAbout";
import ApexBenefits from "@/components/ApexBenefits";
import ApexProcess from "@/components/ApexProcess";
import ApexPricing from "@/components/ApexPricing";
import ApexTestimonials from "@/components/ApexTestimonials";
import ApexFAQ from "@/components/ApexFAQ";
import ApexCTA from "@/components/ApexCTA";
import ApexContact from "@/components/ApexContact";
import ApexFooter from "@/components/ApexFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ApexHeader />
      <main>
        <ApexHero />
        <ApexServices />
        <ApexPortfolio />
        <ApexSlider />
        <ApexAbout />
        <ApexBenefits />
        <ApexProcess />
        <ApexPricing />
        <ApexTestimonials />
        <ApexFAQ />
        <ApexCTA />
        <ApexContact />
      </main>
      <ApexFooter />
    </div>
  );
};

export default Index;
