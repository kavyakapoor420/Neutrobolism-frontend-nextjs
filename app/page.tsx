import HeroSection from '@/Components/HeroSection'
import Header from '@/Components/Header'
import PrototypeMockupSection from '@/Components/PrototypeMockupSection'
import HowItWorksSection from '@/Components/HowItWorksSections'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header/>
      <HeroSection/>
      <PrototypeMockupSection/>
      <HowItWorksSection/>  
      
    </div>
  );
}
