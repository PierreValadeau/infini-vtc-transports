import { useTranslation } from 'react-i18next'
import { Plane, Clock, Sparkles } from 'lucide-react'
import ServiceCard from '@/components/common/ServiceCard'

export default function Services() {
  const { t } = useTranslation()

  const services = [
    {
      icon: Plane,
      title: t('services.transfers.title'),
      description: t('services.transfers.description'),
    },
    {
      icon: Clock,
      title: t('services.availability.title'),
      description: t('services.availability.description'),
    },
    {
      icon: Sparkles,
      title: t('services.events.title'),
      description: t('services.events.description'),
    },
  ]

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gold mb-16">
          {t('services.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
