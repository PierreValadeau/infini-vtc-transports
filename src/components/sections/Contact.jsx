import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser'
import { Mail, Phone, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'
import LegalNotice from '@/components/sections/LegalNotice'

export default function Contact() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: 'Jean Dupont',
    email: 'jean.dupont@example.com',
    phone: '0612345678',
    message: 'Bonjour, je souhaite réserver un transfert de l\'aéroport de Nice vers Saint-Tropez pour le 25 janvier. Merci de me contacter.',
  })
  const [gdprConsent, setGdprConsent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Vérifier le consentement RGPD
    if (!gdprConsent) {
      setSubmitStatus('consent-required')
      setTimeout(() => setSubmitStatus(null), 5000)
      return
    }

    setIsSubmitting(true)

    try {
      // Check if EmailJS is configured
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        // If EmailJS is not configured, simulate success for demo
        console.warn('EmailJS not configured. Add credentials to .env file.')
        await new Promise(resolve => setTimeout(resolve, 1000))
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        // Send email with EmailJS
        const emailData = {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_email: 'infini@mhvtransports.com',
        }

        console.log('Sending email with data:', emailData)

        // Envoyer l'email et attendre la réponse
        const response = await emailjs.send(
          serviceId,
          templateId,
          emailData,
          publicKey
        )

        console.log('EmailJS response:', response)

        // Afficher le succès seulement si l'envoi a réussi
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '' })
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-light">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="space-y-6">
            <Card className="p-6 bg-black/50 border-gray-800 hover:border-gold/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-gold/10">
                  <Phone className="text-gold" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-light mb-1">{t('contact.phone')}</p>
                  <a
                    href="tel:0673652202"
                    className="text-xl font-semibold text-white hover:text-gold transition-colors"
                  >
                    06 73 65 22 02
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-black/50 border-gray-800 hover:border-gold/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-gold/10">
                  <Mail className="text-gold" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-light mb-1">{t('contact.email')}</p>
                  <a
                    href="mailto:infini@mhvtransports.com"
                    className="text-lg font-semibold text-white hover:text-gold transition-colors break-all"
                  >
                    infini@mhvtransports.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-black/50 border-gray-800 hover:border-gold/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-gold/10">
                  <MessageCircle className="text-gold" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-light mb-1">WhatsApp</p>
                  <a
                    href="https://wa.me/33673652202"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold text-white hover:text-gold transition-colors"
                  >
                    Message WhatsApp
                  </a>
                </div>
              </div>
            </Card>

            {/* Mobile phone button */}
            <a
              href="tel:0673652202"
              className="md:hidden fixed bottom-6 right-6 z-40 p-4 rounded-full bg-gold hover:bg-gold-light text-black shadow-lg transition-all hover:scale-110"
            >
              <Phone size={24} />
            </a>
          </div>

          {/* Contact form */}
          <Card className="p-8 bg-black/50 border-gray-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-white">
                  {t('contact.form.name')}
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-white">
                  {t('contact.form.email')}
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-white">
                  {t('contact.form.phone')}
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-white">
                  {t('contact.form.message')}
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="mt-2"
                />
              </div>

              {/* RGPD Consent */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="gdpr-consent"
                  checked={gdprConsent}
                  onChange={(e) => setGdprConsent(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded border-gray-600 bg-black text-gold focus:ring-gold focus:ring-offset-black cursor-pointer"
                  required
                />
                <label htmlFor="gdpr-consent" className="text-sm text-gray-light cursor-pointer">
                  {t('contact.form.gdpr.text')}{' '}
                  <LegalNotice />
                  <span className="text-red-500 ml-1">*</span>
                </label>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || !gdprConsent}
                className="w-full bg-gold hover:bg-gold-light text-black font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Envoi...' : t('contact.form.submit')}
              </Button>

              {submitStatus === 'success' && (
                <p className="text-white text-center">{t('contact.form.success')}</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-500 text-center">{t('contact.form.error')}</p>
              )}
              {submitStatus === 'consent-required' && (
                <p className="text-red-500 text-center">{t('contact.form.gdpr.required')}</p>
              )}
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
