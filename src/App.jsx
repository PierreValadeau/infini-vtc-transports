import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Vehicle from './components/sections/Vehicle'
import About from './components/sections/About'
import Coverage from './components/sections/Coverage'
import Contact from './components/sections/Contact'

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
        <Services />
        <Vehicle />
        <About />
        <Coverage />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
