# Formation Drupal

## Installation

### Prérequis : 

Un serveur web (apache) avec PHP et Bases de données

Une base de données (BDD) (au choix mais MySQL/MariaDB ça marche)

Un utilisateur BDD avec au moins les droits suivants : 
SELECT, INSERT, UPDATE, DELETE, 
CREATE, DROP, FILE, INDEX, ALTER, 
CREATE TEMPORARY TABLES, CREATE VIEW, 
EVENT, TRIGGER, SHOW VIEW, CREATE ROUTINE, 
ALTER ROUTINE, EXECUTE

Un répertoire pour accueillir les fichiers de drupal, 
situé dans le répertoire qui représente le localhost de votre serveur web.
WAMP dans Disque d'installation de wamp\wamp64\www
Mamp dans Disque d'installation de MAMP:\MAMP puis chercher un répertoire HTDOCS
XAMPP dans Disque d'installation de XAMPP:\xampp\htdocs 

### Extensions simplifiants la configuration / l'utilisation.

Si l'installation est sur un ordinateur local ou un serveur un peu casse pieds (protégé, firewall, etc)
Préférer l'installer en anglais, on met en place la langue ensuite.

Si au contraire le fichiert cacert.pem et le SSH est configuré, 
il est possible de directement installer Drupal en français
(la doc est en lien si l'installation en français plante)

#### Extensions native a activer
- Media
- Media library
- Configuration Translation
- Interface Translation
- Language

#### Extensions pratiques recommandées pour commencer

- Admin toolbar
	Activer les modules suivants : 
	- Admin Toolbar
	- Admin Toolbar Extra Tools
	- Admin Toolbar Search
- ctools (chaos tools)
	Activer les modules suivants : 
	- Chaos Tools
	- Chaos Tools Blocks
	- Chaos Tools Views
- token
- pathauto

##### Changer la langue

1. 	ajouter la langue
		Accueil > Administration > Configuration > Régionalisation et langue > Langues
2. 	Configurer la langue par défaut
	Accueil > Administration > Configuration > Régionalisation et langue > Ajouter une langue

3.	Si la langue ne se charge pas (faible pourcentage de traductions de l'interface)
	Télécharger le fichier adapté en extention .fr.po (pour français par exemple)
	https://localize.drupal.org/translate/languages/fr
	
3. 	a - 	Accueil > Administration > Configuration > Régionalisation et langue > Traduction de l'interface utilisateur
	Onglet "Importer"
	Importer le fichier pour la langue choisie

### Configuration du contenu

#### Formats de texte et éditeurs

Quand on utilise la media library, le champ image du ckeditor reste dans la barre d'outils accessible pour les formats de texte HTML simple et HTML Complet.

Si cet outils est utilisé lors de la rédacrtion de contenu, le fichier qui sera téléversé ne sera pas accessible depuis la media library, donc difficilement réutilisable si besoin est.

Il faut alors modifier la barre d'outils de ces deux format de texte afin de remplacer l'outils image par l'outil Drupal Media

1. aller dans Accueil > Administration > Configuration > Rédaction de contenu > Formats de texte et éditeurs
2. cliquer sur configurer pour les deux éditeurs
3. Cocher la case "intégrer un media"
4. remplacer dans la barre image par drupal media

#### Configurer les alias d'url pour les type de contenu existants

Accueil > Administration > Configuration > Recherche et metadonnées > Alias d'URL
Onglet "Motifs"

1. Cliquer sur "Ajouter un motif Pathauto"
2. Pour "type de motif" sélectionner "Contenu"
3. Ecrire le chemin en utilisant un ou des tokens
4. Sélectionner le ou les types de contenus concernés par cet alias d'url automatique
5. Indiquer un libellé pour reconnaître facilement le motif dans la liste des motifs
6. Vérifier si la case "Activé" est cochée
7. Enregistrer la configuration

#### Modifier le type de contenu de base article

Par défaut, le type de contenu de base "Article" contient un champ image, qui n'utilise pas la media library de Drupal, ce qui va générer de l'enregistrement d'image non réutilisable via la media library

Accueil > Administration > Structure > Types de contenu > Article > gérer les champ

1. supprimer le champ image 
2. Créer un nouveau champ
3. Remplir le formulaire
	3. 1. Un libellé (soyez générique car ce champs peut être réutilisé dans d'autre type de contenu)
	3. 2. Choisir le type de champs (ici Media)
	3. 3. enregistrer la configuration
4. Configurer le champ
	4. 1. Pour un champ image unique, limité à 1 média, et seulement les media de type image
	4. 3. enregistrer la configuration
5. Gérer l'affichage du formulaire (remettre le champs media à lancienne place du champ image)
6. Gérer l'affichage du contenu (remettre le champs media à lancienne place du champ image)