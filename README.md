# sso_project

## Contexte
```
Browser: sign with google or facebook (auth/provider) --> server express app (node) : auth handler --> permission
receive user detail from provider / lookup create user in own database / creat unique cookie --> 
browser stores cookie --> decode cookie & retrieve user information
```

## Configuration
Authentification google - facebook lié au compte utilisateur

ne pas oublier de créer le fichier .env à la racine pour avoir les accès
```
FACEBOOK_CLIENT_ID=[CODE_ID]
FACEBOOK_CLIENT_SECRET=[CODE_SECRET]
GOOGLE_CLIENT_ID=[CODE_ID]
GOOGLE_CLIENT_SECRET=[CODE_SECRET]
```
## Utilisation
npm install
après, node app.js
