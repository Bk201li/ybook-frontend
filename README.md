# ybook-frontend


## A SAVOIR

Le login register fonctionne mais la connexion n'est pas maintenue dans le frontend, donc tous les id sont passés en dur (à savoir pour les tests)

Authentification:
Terminé mais connexion non maintenue dans le frontend

Posts:
Terminé

Profil (settings):
Terminé

Amitiés (id de l'utilisateur connecté en dur):
- Ajout d'amis : terminé
- Affichage des amis à ajouter : terminé
- Recherche d'amis : non fait
- Affichage des amis : terminé
- Affichage des invitations : terminé
- Pouvoir accepter un ami : non fait
- Pouvoir refuser un ami : non fait
- Pouvoir supprimer un ami : non fait

Messagerie:
Page faite uniquement en statique (Fonctionnalité non faite)

Notifications:
Uniquement en statique (Fonctionnalité non faite)


## ENV
AWS KEYS : SEE MOODLE

```
VITE_API_BASE_URL=http://localhost:3000
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```