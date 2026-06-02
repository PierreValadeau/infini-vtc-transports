import { useTranslation } from 'react-i18next'
import { Switch } from '@/components/ui/switch'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const toggleLanguage = (checked) => {
    const newLang = checked ? 'en' : 'fr'
    i18n.changeLanguage(newLang)
  }

  return (
    <div className="flex items-center gap-2">
      <span className={`text-sm font-medium transition-colors ${i18n.language === 'fr' ? 'text-gold' : 'text-gray-light'}`}>
        FR
      </span>
      <Switch
        checked={i18n.language === 'en'}
        onCheckedChange={toggleLanguage}
        aria-label="Changer de langue"
      />
      <span className={`text-sm font-medium transition-colors ${i18n.language === 'en' ? 'text-gold' : 'text-gray-light'}`}>
        EN
      </span>
    </div>
  )
}
