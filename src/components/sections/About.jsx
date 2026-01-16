import { useTranslation } from 'react-i18next'
import { Card } from '@/components/ui/card'

export default function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gold mb-16">
          {t('about.title')}
        </h2>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Placeholder images */}
            <div className="space-y-4">
              <Card className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 flex items-center justify-center">
                <p className="text-gray-500">Photo du chauffeur</p>
              </Card>
            </div>

            {/* Text content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-light leading-relaxed">
                {t('about.description')}
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-4 bg-gold/10 rounded-lg border border-gold/20">
                  <p className="text-3xl font-bold text-gold mb-1">Premium</p>
                  <p className="text-sm text-gray-light">Véhicule neuf</p>
                </div>
                <div className="text-center p-4 bg-gold/10 rounded-lg border border-gold/20">
                  <p className="text-3xl font-bold text-gold mb-1">24/7</p>
                  <p className="text-sm text-gray-light">Disponibilité</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
