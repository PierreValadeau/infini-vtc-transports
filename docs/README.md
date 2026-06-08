# Infini VTC - Site Vitrine

Site vitrine pour un service de chauffeur privé premium sur la Côte d'Azur.

## Technologies

- **React** avec Vite
- **Tailwind CSS** pour les styles
- **Shadcn/ui** pour les composants UI
- **react-i18next** pour l'internationalisation (FR/EN)
- **EmailJS** pour le formulaire de contact
- **Lucide React** pour les icônes

## Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Prévisualiser le build
npm run preview
```

## Configuration EmailJS

1. Créer un compte sur [EmailJS](https://www.emailjs.com/)
2. Configurer un service email
3. Créer un template d'email
4. Copier `.env.example` vers `.env`
5. Remplir les variables d'environnement avec vos identifiants EmailJS

## Structure du projet

```
src/
├── components/
│   ├── layout/          # Header, Footer
│   ├── sections/        # Hero, Services, Vehicle, About, Coverage, Contact
│   ├── ui/              # Composants Shadcn/ui
│   └── common/          # Composants réutilisables
├── lib/
│   ├── utils.js         # Utilitaires
│   └── i18n.js          # Configuration i18n
├── locales/             # Traductions FR/EN
├── styles/              # Styles globaux
└── assets/              # Images et médias
```

## Fonctionnalités

- ✅ Design responsive (mobile-first)
- ✅ Navigation smooth scroll
- ✅ Menu burger sur mobile
- ✅ Multilingue (FR/EN)
- ✅ Formulaire de contact
- ✅ Bouton téléphone fixe sur mobile
- ✅ Animations au scroll
- ✅ SEO optimisé

## À faire

- [ ] Configurer EmailJS avec les vraies credentials
- [ ] Ajouter les vraies photos (véhicule, chauffeur)
- [ ] Ajouter le vrai logo Infini
- [ ] Configurer le nom de domaine
- [ ] Tester le formulaire de contact
- [ ] Optimiser les images
- [ ] Déployer sur OVH

## Déploiement

```bash
# Build le projet
npm run build

# Le dossier dist/ contient les fichiers statiques à uploader sur OVH via FTP
```

## Contact

- Email : infini@mhvtransports.com
- Téléphone : 06 73 65 22 02
