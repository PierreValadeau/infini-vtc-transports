# Docker - Guide d'utilisation

Ce projet peut être lancé avec Docker sur n'importe quelle machine (Mac, Windows, Linux).

## Prérequis

Installer Docker Desktop :
- **Mac/Windows** : https://www.docker.com/products/docker-desktop
- **Linux** : https://docs.docker.com/engine/install/

## Commandes rapides

### Mode Développement (recommandé)

Lancer le serveur de développement avec hot-reload :

```bash
docker-compose up dev
```

Le site sera accessible sur : **http://localhost:5173**

Pour arrêter : `Ctrl+C` puis `docker-compose down`

### Mode Production

Lancer le site en mode production (avec Nginx) :

```bash
docker-compose up prod
```

Le site sera accessible sur : **http://localhost:8080**

### En arrière-plan

Pour lancer en arrière-plan (détaché) :

```bash
docker-compose up -d dev
```

Pour voir les logs :
```bash
docker-compose logs -f dev
```

Pour arrêter :
```bash
docker-compose down
```

## Commandes Docker (sans docker-compose)

### Développement

```bash
# Build l'image
docker build --target development -t infini-vtc-dev .

# Lancer le container
docker run -p 5173:5173 -v $(pwd):/app -v /app/node_modules infini-vtc-dev
```

### Production

```bash
# Build l'image
docker build --target production -t infini-vtc-prod .

# Lancer le container
docker run -p 8080:80 infini-vtc-prod
```

## Nettoyage

Supprimer tous les containers et images :

```bash
docker-compose down --rmi all
```

Nettoyer les volumes :

```bash
docker-compose down -v
```

## Variables d'environnement

Pour passer des variables d'environnement (EmailJS, etc.), créer un fichier `.env.local` :

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Puis dans `docker-compose.yml`, ajouter sous le service `dev` :

```yaml
env_file:
  - .env.local
```

## Déploiement de l'image

### Sur un serveur

1. Build l'image :
```bash
docker build --target production -t infini-vtc:latest .
```

2. Sauvegarder l'image :
```bash
docker save infini-vtc:latest | gzip > infini-vtc.tar.gz
```

3. Transférer le fichier sur le serveur et charger :
```bash
docker load < infini-vtc.tar.gz
docker run -d -p 80:80 --name infini-vtc infini-vtc:latest
```

### Sur Docker Hub

```bash
docker tag infini-vtc:latest username/infini-vtc:latest
docker push username/infini-vtc:latest
```

## Troubleshooting

### Port déjà utilisé
Si le port 5173 ou 8080 est déjà utilisé, modifier les ports dans `docker-compose.yml` :

```yaml
ports:
  - "3000:5173"  # Utiliser le port 3000 à la place
```

### Permissions sur Linux
Si erreur de permissions sur Linux :

```bash
sudo docker-compose up dev
```

Ou ajouter votre utilisateur au groupe docker :

```bash
sudo usermod -aG docker $USER
```

Puis redémarrer votre session.
