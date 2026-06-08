import { useTranslation } from 'react-i18next'
import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import heroVideoMp4 from '@/assets/images/video-aerienne.mp4'
import heroVideoWebm from '@/assets/images/video-aerienne.webm'
import videoPoster from '@/assets/images/video-poster.webp'
import videoPosterMobile from '@/assets/images/video-poster-mobile.jpg'

export default function Hero() {
  const { t } = useTranslation()
  const [videoVisible, setVideoVisible] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      const video = videoRef.current
      if (!video) return
      video.play()
        .then(() => setVideoVisible(true))
        .catch(() => { /* autoplay bloqué — l'image reste, pas de bouton play */ })
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

      {/* Hero background - image toujours visible, vidéo par-dessus si autoplay autorisé */}
      <div className="absolute inset-0">
        <img
          src={videoPoster}
          srcSet={`${videoPosterMobile} 640w, ${videoPoster} 1280w`}
          sizes="100vw"
          alt="Côte d'Azur vue aérienne"
          width="1920"
          height="1080"
          className="w-full h-full object-cover object-center"
          fetchpriority="high"
        />
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="metadata"
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${videoVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <source src={heroVideoWebm} type="video/webm" />
          <source src={heroVideoMp4} type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4">
        <h1 className="text-7xl md:text-9xl font-light text-gold mb-6 animate-fade-in tracking-widest" style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}>
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
