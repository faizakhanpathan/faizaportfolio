import HeroSection from '../components/sections/HeroSection/HeroSection';
import ServicesSection from '../components/sections/ServicesSection/ServicesSection';
import SkillsSection from '../components/sections/SkillsSection/SkillsSection';
import SocialPresenceSection from '../components/sections/SocialPresenceSection/SocialPresenceSection';
import TestimonialsSection from '../components/sections/TestimonialsSection/TestimonialsSection';
import CTASection from '../components/sections/CTASection/CTASection';

export default function Home() {
  return (
    <div className="page-wrapper">
      <HeroSection />
      <ServicesSection />
      <SkillsSection />
      <SocialPresenceSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
