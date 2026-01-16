# Spécifications Projet — Infini VTC Saint-Tropez

## Contexte

Site vitrine pour un service de chauffeur privé haut de gamme sur la Côte d'Azur.

**Client** : Infini by MHV
**Activité** : VTC / Chauffeur privé premium
**Zone** : Côte d'Azur, Golfe de Saint-Tropez, Monaco, Cannes, Antibes, Nice
**Cible** : Clientèle aisée, touristes internationaux, événements, festivals

---

## Stack technique

- **Framework** : React (Vite)
- **Composants UI** : Shadcn/ui/baseui
- **Styles** : Tailwind CSS
- **Formulaire** : EmailJS ou Formspree (envoi direct par mail)
- **Déploiement** : Build statique, hébergement OVH via FTP
- **Langues** : Français + Anglais (prévoir i18n)

---

## Charte graphique

### Couleurs
- **Fond principal** : Noir `#000000`
- **Couleur accent** : Or `#D4AF37` (ou variante `#FFD700`)
- **Texte principal** : Blanc `#FFFFFF`
- **Texte secondaire** : Gris clair `#A1A1A1`

### Ambiance
- Luxe, élégance, sobriété
- Inspiration : site Millenium Transport
- Peu de texte, beaucoup de visuel
- Animations subtiles au scroll

### Typographie
- Sans-serif moderne et élégante
- Suggestions : Inter, Montserrat, ou Playfair Display pour les titres

---

## Structure du site (Single Page)

### 1. Hero Section
- Visuel plein écran (placeholder en attendant les vraies photos)
- Vue depuis l'arrière du véhicule avec toit étoilé
- Nom "Infini" qui apparaît avec animation
- Phrase d'accroche courte
- Bouton CTA vers contact

### 2. Section Prestations
- 3 cards pour les services principaux :
  - **Transferts** : Aéroports (Nice, Marseille, Toulon) et Gares (Toulon, Les Arcs-Draguignan)
  - **Mise à disposition** : Véhicule avec chauffeur à la journée
  - **Événements** : Festivals (Cannes), soirées privées, mariages, retours de plage
- Design épuré, icônes élégantes
- Pas de tarifs affichés

### 3. Section Véhicule
- Photos du Mercedes Viano Classe V extra-long (placeholders pour l'instant)
- Caractéristiques :
  - Intérieur beige, extérieur full black
  - 6 places passagers
  - Capacité bagages pour 6 personnes
  - Toit étoilé
  - TV à bord
  - Sièges auto disponibles (Groupe 1 et 2, 9-25kg)
- Mise en avant du côté premium et neuf

### 4. Section Qui sommes-nous
- Photo du chauffeur (placeholder)
- Photo du véhicule (placeholder)
- Texte de présentation court
- Mettre en confiance (véhicule premium, service personnalisé)

### 5. Section Zone desservie
- Liste ou carte stylisée des zones :
  - Golfe de Saint-Tropez
  - Monaco
  - Cannes
  - Antibes
  - Nice
- Aéroports : Nice, Marseille, Toulon
- Gares : Toulon, Les Arcs-Draguignan

### 6. Section Contact
- Téléphone : 0673652202 (cliquable)
- Mail : infini@mhvtransports.com (pas mhvcamping)
- WhatsApp : lien direct
- Formulaire de contact simple :
  - Nom
  - Email
  - Téléphone
  - Message
  - Bouton envoyer
- Mention : "Réponse dans l'heure"
- Le formulaire envoie un mail directement à l'entreprise

### 7. Footer
- Logo Infini
- Liens contact
- Lien Instagram
- Mentions légales
- Copyright

---

## Fonctionnalités

### Formulaire de contact
- Validation des champs
- Envoi via EmailJS ou Formspree
- Message de confirmation après envoi
- Pas de base de données nécessaire

### Navigation
- Menu sticky en haut
- Navigation smooth scroll vers les sections
- Menu burger sur mobile

### Responsive
- Mobile-first
- Breakpoints Tailwind standards
- Bouton téléphone cliquable fixe sur mobile

### Multilingue (i18n)
- Français par défaut
- Anglais disponible
- Switch de langue dans le header
- Utiliser react-i18next ou solution simple avec context

### SEO
- Balises title et meta description optimisées
- Open Graph pour partage réseaux sociaux
- Balises Hn hiérarchisées
- Attributs alt sur toutes les images
- Sitemap.xml
- Robots.txt

---

## Composants Shadcn à utiliser

- Button
- Card
- Input
- Textarea
- Label
- Navigation Menu
- Sheet (pour menu mobile)
- Separator
- Toast (pour confirmation formulaire)

---

## Arborescence suggérée

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── MobileMenu.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Vehicle.jsx
│   │   ├── About.jsx
│   │   ├── Coverage.jsx
│   │   └── Contact.jsx
│   ├── ui/
│   │   └── (composants Shadcn)
│   └── common/
│       ├── ServiceCard.jsx
│       └── LanguageSwitcher.jsx
├── lib/
│   └── i18n.js
├── locales/
│   ├── fr.json
│   └── en.json
├── assets/
│   └── images/
├── styles/
│   └── globals.css
├── App.jsx
└── main.jsx
```

---

## Contenu texte (à affiner)

### Hero
- **FR** : "L'excellence du voyage privé sur la Côte d'Azur"
- **EN** : "Premium private travel on the French Riviera"

### Prestations
- **Transferts** : Aéroports de Nice, Marseille et Toulon. Gares de Toulon et Les Arcs-Draguignan.
- **Mise à disposition** : Votre chauffeur privé à la journée pour tous vos déplacements.
- **Événements** : Festivals, soirées privées, mariages. Un service sur-mesure pour vos moments exceptionnels.

### Véhicule
- Mercedes Classe V extra-long
- 6 places, espace bagages généreux
- Intérieur cuir beige, toit étoilé, écran TV
- Sièges enfants disponibles sur demande

### Contact
- "Une demande ? Un devis ? Contactez-nous, réponse dans l'heure."

---

## Assets en attente

- [ ] Logo Infini (en cours de création)
- [ ] Photos du véhicule (extérieur)
- [ ] Photos du véhicule (intérieur, toit étoilé)
- [ ] Photo du chauffeur
- [ ] Nom de domaine définitif (en cours de changement)
- [ ] Adresse mail définitive

---

## Instructions pour le développement

1. Initialiser le projet avec Vite + React
2. Installer et configurer Tailwind CSS
3. Installer et configurer Shadcn/ui
4. Créer la structure des dossiers
5. Configurer les couleurs dans tailwind.config.js
6. Développer les sections une par une
7. Implémenter le responsive
8. Ajouter le système i18n (FR/EN)
9. Configurer le formulaire avec EmailJS
10. Ajouter les meta tags SEO
11. Tester et optimiser
12. Build et déploiement sur OVH

---

## Notes importantes

- Aucun tarif ne doit apparaître sur le site
- Le contact se fait uniquement par téléphone, mail ou WhatsApp
- Mettre en avant le côté premium, confiance, véhicule neuf
- Design sobre et élégant, pas de surcharge
- Utiliser des placeholders pour les images en attendant les vraies photos
