import HeroSection from '@/Components/HeroSection'
import Header from '@/Components/Header'
import PrototypeMockupSection from '@/Components/PrototypeMockupSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header/>
      <HeroSection/>
      <PrototypeMockupSection/>
      
    </div>
  );
}
