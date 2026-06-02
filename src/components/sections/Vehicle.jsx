import { useTranslation } from 'react-i18next'
import { Users, Luggage, Star, Tv, Circle, Baby } from 'lucide-react'
import { Card } from '@/components/ui/card'
import photo1 from '@/assets/images/photo-van/photo-avant-exterieur.jpeg'
import photo2 from '@/assets/images/photo-van/photo-arriere-exterieur.jpeg'
import photo3 from '@/assets/images/photo-van/photo-avant-volant2.jpeg'
import photo4 from '@/assets/images/photo-van/photo-arriere-interieur.jpeg'

export default function Vehicle() {
  const { t } = useTranslation()

  const features = [
    { icon: Users, text: t('vehicle.features.passengers') },
    { icon: Luggage, text: t('vehicle.features.luggage') },
    { icon: Star, text: t('vehicle.features.roof') },
    { icon: Tv, text: t('vehicle.features.tv') },
    { icon: Circle, text: t('vehicle.features.exterior') },
    { icon: Baby, text: t('vehicle.features.seats') },
  ]

  return (
    <section id="vehicle" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold mb-4">
            {t('vehicle.title')}
          </h2>
          <p className="text-2xl text-white">
            {t('vehicle.subtitle')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Vehicle images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { src: photo1, alt: 'Mercedes Classe V - Avant extérieur' },
              { src: photo2, alt: 'Mercedes Classe V - Arrière extérieur' },
              { src: photo3, alt: 'Mercedes Classe V - Intérieur volant' },
              { src: photo4, alt: 'Mercedes Classe V - Intérieur arrière' },
            ].map((photo, index) => (
              <Card key={index} className="overflow-hidden border-gray-700 hover:border-gold/50 transition-colors">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                    decoding="async"
                    style={{ imageRendering: 'high-quality' }}
                  />
                </div>
              </Card>
            ))}
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-lg bg-black/50 border border-gray-800 hover:border-gold/50 transition-colors"
              >
                <div className="text-gold mt-1">
                  <feature.icon size={24} />
                </div>
                <p className="text-white">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
