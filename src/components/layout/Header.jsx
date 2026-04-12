import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import LanguageSwitcher from '@/components/common/LanguageSwitcher'

export default function Header() {
  const { t } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { label: t('nav.services'), id: 'services' },
    { label: t('nav.vehicle'), id: 'vehicle' },
    { label: t('nav.about'), id: 'about' },
    { label: t('nav.coverage'), id: 'coverage' },
    { label: t('nav.contact'), id: 'contact' },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-bold text-white hover:text-gray-300 transition-colors"
          >
            Infini
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-gold transition-colors text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
            <LanguageSwitcher />
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm md:hidden z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <nav className="fixed top-0 right-0 h-screen w-4/5 max-w-sm bg-black border-l border-gold/20 md:hidden z-50 shadow-2xl animate-slide-in">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-800">
                  <span className="text-2xl font-bold text-gold">Menu</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gold hover:text-gold-light"
                  >
                    <X size={24} />
                  </Button>
                </div>

                {/* Menu Items */}
                <div className="flex-1 overflow-y-auto py-6">
                  {navItems.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="w-full text-left px-6 py-4 text-lg text-white hover:text-gold hover:bg-gold/5 transition-all border-l-4 border-transparent hover:border-gold"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-gray-800">
                  <p className="text-sm text-gray-light text-center">
                    Infini by MHV
                  </p>
                </div>
              </div>
            </nav>
          </>
        )}
      </div>
    </header>
  )
}
