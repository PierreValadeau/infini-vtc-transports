.PHONY: help dev prod build stop clean logs

help: ## Affiche l'aide
	@echo "Commandes disponibles :"
	@echo "  make dev     - Lancer en mode développement (port 5173)"
	@echo "  make prod    - Lancer en mode production (port 8080)"
	@echo "  make build   - Build les images Docker"
	@echo "  make stop    - Arrêter tous les containers"
	@echo "  make clean   - Nettoyer les containers et images"
	@echo "  make logs    - Voir les logs"

dev: ## Lancer en mode développement
	docker-compose up dev

prod: ## Lancer en mode production
	docker-compose up prod

build: ## Build les images Docker
	docker-compose build

stop: ## Arrêter les containers
	docker-compose down

clean: ## Nettoyer containers et images
	docker-compose down --rmi all -v

logs: ## Voir les logs
	docker-compose logs -f
