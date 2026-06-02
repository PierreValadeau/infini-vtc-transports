import { useEffect, lazy, Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'

// Lazy load sections below the fold
const Services = lazy(() => import('./components/sections/Services'))
const Vehicle = lazy(() => import('./components/sections/Vehicle'))
const About = lazy(() => import('./components/sections/About'))
const Coverage = lazy(() => import('./components/sections/Coverage'))
const Contact = lazy(() => import('./components/sections/Contact'))

function App() {
  const { i18n } = useTranslation()

  // Synchroniser l'attribut lang avec i18n
  useEffect(() => {
    document.documentElement.lang = i18n.language
  }, [i18n.language])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Skip link pour accessibilité */}
      <a href="#main-content" className="skip-link">
        Aller au contenu principal
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <Suspense fallback={<div className="h-screen" />}>
          <Services />
          <Vehicle />
          <About />
          <Coverage />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App
