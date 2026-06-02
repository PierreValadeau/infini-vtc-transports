import { useTranslation } from 'react-i18next'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export default function LegalNotice() {
  const { t } = useTranslation()

  return (
    <Dialog>
      <DialogTrigger className="hover:text-gold transition-colors">
        {t('footer.legal')}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t('legal.title')}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 text-white">
          {/* Éditeur du site */}
          <section>
            <h3 className="text-xl font-semibold text-gold mb-3">{t('legal.editor.title')}</h3>
            <div className="space-y-1 text-gray-light">
              <p><strong className="text-white">{t('legal.editor.company')}:</strong> MOBIL HOMES VACANCES</p>
              <p><strong className="text-white">{t('legal.editor.legalForm')}:</strong> SARL</p>
              <p><strong className="text-white">{t('legal.editor.capital')}:</strong> 8 000 €</p>
              <p><strong className="text-white">{t('legal.editor.address')}:</strong> 151 Chemin Vignaux, 83310 Grimaud</p>
              <p><strong className="text-white">{t('legal.editor.siret')}:</strong> 530 275 981 00047</p>
              <p><strong className="text-white">{t('legal.editor.rcs')}:</strong> RCS Fréjus</p>
              <p><strong className="text-white">{t('legal.editor.vat')}:</strong> FR19530275981</p>
            </div>
          </section>

          {/* Directeur de publication */}
          <section>
            <h3 className="text-xl font-semibold text-gold mb-3">{t('legal.director.title')}</h3>
            <p className="text-gray-light">
              <strong className="text-white">{t('legal.director.name')}:</strong> Thierry GODBILLE, Gérant
            </p>
          </section>

          {/* Contact */}
          <section>
            <h3 className="text-xl font-semibold text-gold mb-3">{t('legal.contact.title')}</h3>
            <div className="space-y-1 text-gray-light">
              <p><strong className="text-white">{t('legal.contact.phone')}:</strong> 06 73 65 22 02</p>
              <p><strong className="text-white">{t('legal.contact.email')}:</strong> infini@mhvtransports.com</p>
            </div>
          </section>

          {/* Licence VTC */}
          <section>
            <h3 className="text-xl font-semibold text-gold mb-3">{t('legal.vtc.title')}</h3>
            <div className="space-y-1 text-gray-light">
              <p><strong className="text-white">{t('legal.vtc.license')}:</strong> EVTC083260099</p>
              <p><strong className="text-white">{t('legal.vtc.prefecture')}:</strong> Var</p>
            </div>
          </section>

          {/* Assurance */}
          <section>
            <h3 className="text-xl font-semibold text-gold mb-3">{t('legal.insurance.title')}</h3>
            <div className="space-y-1 text-gray-light">
              <p><strong className="text-white">{t('legal.insurance.company')}:</strong> WAKAM</p>
              <p><strong className="text-white">{t('legal.insurance.policy')}:</strong> LP-VTC/13542</p>
              <p><strong className="text-white">{t('legal.insurance.insured')}:</strong> Thierry GODBILLE</p>
            </div>
          </section>

          {/* Hébergeur */}
          <section>
            <h3 className="text-xl font-semibold text-gold mb-3">{t('legal.host.title')}</h3>
            <div className="space-y-1 text-gray-light">
              <p><strong className="text-white">{t('legal.host.company')}:</strong> OVH</p>
              <p><strong className="text-white">{t('legal.host.address')}:</strong> 2 rue Kellermann, 59100 Roubaix, France</p>
              <p><strong className="text-white">{t('legal.host.phone')}:</strong> 1007</p>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section>
            <h3 className="text-xl font-semibold text-gold mb-3">{t('legal.ip.title')}</h3>
            <p className="text-gray-light">{t('legal.ip.content')}</p>
          </section>

          {/* Données personnelles */}
          <section>
            <h3 className="text-xl font-semibold text-gold mb-3">{t('legal.gdpr.title')}</h3>
            <div className="space-y-2 text-gray-light">
              <p>{t('legal.gdpr.intro')}</p>
              <p><strong className="text-white">{t('legal.gdpr.responsible')}:</strong> Thierry GODBILLE</p>
              <p>{t('legal.gdpr.purpose')}</p>
              <p>{t('legal.gdpr.rights')}</p>
              <p>{t('legal.gdpr.exercise')}</p>
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  )
}
