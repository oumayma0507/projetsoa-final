# 🧑‍💻 Projet SOA – Gestion des Personnes

## 📌 Description du projet

Ce projet est une application web de gestion des personnes développée dans le cadre du module SOA (Service-Oriented Architecture).
L’objectif principal est de consommer des services REST développés en Java afin de gérer des personnes via les fonctionnalités suivantes :

- Ajouter une personne
- Modifier une personne
- Supprimer une personne
- Afficher la liste des personnes
- Rechercher une personne par nom ou par identifiant

L’application repose sur une architecture client / serveur avec une séparation claire entre le frontend, le backend et la base de données.

---

## 🛠️ Technologies utilisées

### Frontend
- React
- JavaScript
- HTML5
- CSS3
- Bootstrap
- Fetch API

### Backend
- Java
- JAX-RS (Jersey)
- Hibernate / JPA
- Maven

### Base de données
- MySQL
- Nom de la base de données : person_db

---

## 🏗️ Architecture du projet

Le projet est divisé en trois couches principales :

- Frontend : interface utilisateur développée avec React
- Backend : services REST développés en Java (JAX-RS)
- Base de données : stockage des données avec MySQL

### Organisation du Backend

- Package com.person.config  
  Contient la configuration générale du backend et le filtre CORS.

- Package com.person.model  
  Contient les entités du projet.  
  La classe Person représente la table person avec les attributs :
  nom, email, âge, téléphone.

- Package com.person.dao  
  Responsable de l’accès à la base de données.  
  Opérations CRUD :
  - findAll
  - findById
  - findByName
  - save
  - update
  - delete

- Package com.person.service  
  Contient la logique métier et sert d’intermédiaire entre le DAO et les services REST.

- Package com.person.router  
  Contient les services REST exposés.
  URL de base : /persons  
  Consomme et produit des données au format JSON.

---

## ⚙️ Instructions pour exécuter le projet

### Prérequis
- Java JDK 8 ou plus
- Maven
- MySQL
- Node.js et npm
- Apache Tomcat

---

### Étape 1 : Base de données

Créer la base de données MySQL :

CREATE DATABASE person_db;

Vérifier la configuration de connexion dans le fichier persistence.xml.

---

### Étape 2 : Backend

1. Importer le projet backend dans un IDE (Eclipse ou IntelliJ).
2. Vérifier la configuration du fichier web.xml.
3. Déployer le projet sur Apache Tomcat.
4. Tester l’API REST via un navigateur ou Postman :

http://localhost:8080/nom-du-projet/api/persons

---

### Étape 3 : Frontend

1. Accéder au dossier frontend :
cd parson-frontend

2. Installer les dépendances :
npm install

3. Lancer l’application React :
npm start

4. Accéder à l’application :
http://localhost:3000



