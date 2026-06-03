import { useTranslation } from 'react-i18next'
import { MapPin, Plane, Train } from 'lucide-react'
import { Card } from '@/components/ui/card'

export default function Coverage() {
  const { t } = useTranslation()

  const areas = [
    t('coverage.areas.saintTropez'),
    t('coverage.areas.monaco'),
    t('coverage.areas.cannes'),
    t('coverage.areas.antibes'),
    t('coverage.areas.nice'),
  ]

  return (
    <section id="coverage" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gold mb-16">
          {t('coverage.title')}
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main areas */}
          <Card className="p-8 bg-black/50 border-gray-800">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="text-gold flex-shrink-0" size={24} />
              <h3 className="text-xl font-semibold text-white">Zones principales</h3>
            </div>
            <div className="flex flex-col gap-3">
              {areas.map((area, index) => (
                <div
                  key={index}
                  className="w-full px-8 py-4 bg-gold/10 rounded-lg text-center text-white border border-gold/20 hover:border-gold/50 transition-colors"
                >
                  {area}
                </div>
              ))}
            </div>
          </Card>

          {/* Airports */}
          <Card className="p-8 bg-black/50 border-gray-800">
            <div className="flex items-start gap-4">
              <Plane className="text-gold flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Aéroports</h3>
                <p className="text-gray-light">{t('coverage.airports')}</p>
              </div>
            </div>
          </Card>

          {/* Train stations */}
          <Card className="p-8 bg-black/50 border-gray-800">
            <div className="flex items-start gap-4">
              <Train className="text-gold flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Gares</h3>
                <p className="text-gray-light">{t('coverage.stations')}</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
