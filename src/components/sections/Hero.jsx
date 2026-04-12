import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import heroVideo from '@/assets/images/video-aerienne.mp4'

export default function Hero() {
  const { t } = useTranslation()

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />

      {/* Hero video */}
      <div className="absolute inset-0">
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-gold mb-6 animate-fade-in">
          {t('hero.title')}
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto animate-fade-in-delay">
          {t('hero.subtitle')}
        </p>
        <Button
          size="lg"
          onClick={scrollToContact}
          className="bg-gold hover:bg-gold-light text-black font-semibold px-8 py-6 text-lg animate-fade-in-delay-2"
        >
          {t('hero.cta')}
        </Button>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-gold animate-bounce"
      >
        <ChevronDown size={32} />
      </button>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.6s both;
        }
      `}</style>
    </section>
  )
}
