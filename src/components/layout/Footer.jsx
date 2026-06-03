import { lazy, Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { Mail, Phone, Instagram } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

const LegalNotice = lazy(() => import('@/components/sections/LegalNotice'))

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Logo */}
          <div>
            <h3 className="text-2xl font-bold text-gold mb-4">Infini</h3>
            <p className="text-gray-light text-sm">
              by MHV Transport
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('contact.title')}</h4>
            <div className="space-y-3">
              <a
                href="tel:0673652202"
                className="flex items-center gap-2 text-gray-light hover:text-gold transition-colors"
              >
                <Phone className="w-6 h-6 md:w-5 md:h-5" />
                <span>06 73 65 22 02</span>
              </a>
              <a
                href="mailto:infini@mhvtransports.com"
                className="flex items-center gap-2 text-gray-light hover:text-gold transition-colors"
              >
                <Mail className="w-6 h-6 md:w-5 md:h-5" />
                <span>infini@mhvtransports.com</span>
              </a>
              <a
                href="https://instagram.com/infinitransports"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-light hover:text-gold transition-colors"
                aria-label="Instagram Infini Transports"
              >
                <Instagram className="w-6 h-6 md:w-5 md:h-5" />
                <span>@infinitransports</span>
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-light">
          <p>{t('footer.copyright')}</p>
          <Suspense fallback={<span className="text-gold">...</span>}>
            <LegalNotice />
          </Suspense>
        </div>
      </div>
    </footer>
  )
}
