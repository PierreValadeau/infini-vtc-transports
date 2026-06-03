import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import heroVideoMp4 from '@/assets/images/video-aerienne.mp4'
import heroVideoWebm from '@/assets/images/video-aerienne.webm'
import videoPoster from '@/assets/images/video-poster.webp'

export default function Hero() {
  const { t } = useTranslation()
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    // Load video after initial paint to improve LCP
    const timer = setTimeout(() => {
      setVideoLoaded(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

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

      {/* Hero background - Image first, then video */}
      <div className="absolute inset-0">
        {!videoLoaded ? (
          <img
            src={videoPoster}
            alt="Côte d'Azur vue aérienne"
            width="1920"
            height="1080"
            className="w-full h-full object-cover object-center"
            fetchpriority="high"
          />
        ) : (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={videoPoster}
            preload="metadata"
            className="w-full h-full object-cover object-center"
          >
            <source src={heroVideoWebm} type="video/webm" />
            <source src={heroVideoMp4} type="video/mp4" />
          </video>
        )}
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
    </section>
  )
}
