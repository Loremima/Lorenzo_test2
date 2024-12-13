import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ServicesSection } from '@/components/services-section'
import { PortfolioSection } from '@/components/portfolio-section'
import { BlogSection } from '@/components/blog-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import { LeftNavigation } from '@/components/navigation/left-navigation'
import { RightNavigation } from '@/components/navigation/right-navigation'
import { VideoContainer } from '@/components/video/video-container'

const sections = [
  { id: "home", Component: HeroSection },
  { id: "about", Component: AboutSection },
  { id: "services", Component: ServicesSection },
  { id: "portfolio", Component: PortfolioSection },
  { id: "blog", Component: BlogSection },
  { id: "contact", Component: ContactSection },
  { id: "footer", Component: Footer }
];

export default function Home() {
  return (
    <main className="scroll-container bg-background">
      <div className="fixed inset-0 z-0">
        <VideoContainer />
      </div>
      {sections.map(({ id, Component }) => (
        <section
          key={id}
          id={id}
          // Removed forced height and overflow hidden (handled in CSS)
          className={`scroll-section relative z-10 ${
            id === 'home' || id === 'footer' ? 'px-4' : 'px-4 sm:px-8 md:px-16 lg:px-36'
          }`}
        >
          <Component />
        </section>
      ))}
      <LeftNavigation />
      <RightNavigation />
    </main>
  );
}
