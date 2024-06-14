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

Si l'installation est sur un ordinateur local ou un serveur un peu casse pieds (protégé, firewall, etc)
Préférer l'installer en anglais, on met en place la langue ensuite.

Si au contraire le fichiert cacert.pem et le SSH est configuré, 
il est possible de directement installer Drupal en français
(la doc est en lien si l'installation en français plante)

## Configuration

### Extensions simplifiants la configuration / l'utilisation.

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
6. Gérer l'affichage du contenu (remettre le champs media à l'ancienne place du champ image)

## Mise en place des contenus spécifiques au site

### Les type de contenus

Sur Ce drupal (adresse local www.fallout-4.local), nous allons créer les type de contenu suivants : 

#### Quête
- Nom de quête (Titre par défaut)
- Type de quête (principale ou annexe => taxonomie type de quête, DLC ou non)
- Personnages importants
- Résumé de la quête
- Déroulé de la quête

#### Personnage
- Nom (titre par défaut)
- Quêtes en relation
- Factions
- Biographie

#### Faction
- Nom (titre par défaut)
- Personnages Membres
- Description
- Chronologie

##### Pour créer un type de contenu
Accueil > Administration > Structure > Types de contenu > Ajouter un type de contenu

Dans ce drupal, tous les types de contenus auront le champ Étiquettes

1. Création du nom de contenu et sa configuration générale
	Nom
	Description
	Libellé du titre (si différent de titre)
	Options de publication
	Paramètres de langues
	Paramètre d'affichage
	Paramètres du menu
2. Gérer les champs
	Ajouter les champs nécessaire à la rédaction du contenu
3. Gérer l'affichage du formulaire
	Ordonner la hiérarchie de saisie du contenu
4. Gérer l'affichage
	Hierarchie d'affichage du contenu sur le site
5. Gérer les droits
	Indiquer les droits d'ajout, modification, suppression et révision du contenu pour les rôles d'utilisateurs du site

### Les taxonomies

#### Type de quête
- FALLOUT 4 - Principale
- FALLOUT 4 - Annexe
- DLC - Nuka World
- DLC - Far Harbor
- DLC - Automatron

##### Pour créer une taxonomie

Accueil > Administration > Structure > Taxonomie > Ajouter un vocabulaire

1. Indiquer le nom
2. Indiquer le but du vocabulaire
3. Préciser si besoin la langue utilisée pour le vocabulaire
4. Préciser la langue des termes si différente de celle du site

Une fois enregistré, on est redirigé vers la liste des termes du vocabulaire

Il faut maintenant ajouter des termes au vocabulaire

1. Ajouter un terme
2. Son nom
3. Sa description
4. Si il faut enregistrer un autre terme, on clique sur "enregistrer"
4. Si on a fini, on clique sur "enregistrer et aller à la liste"

### Les vues
Créer une vue regroupant chaque type de contenu.
Ce sont ces vues qui seront visible dans le menu principal de navigation

#### Vue Articles

#### Vue Quêtes

#### Vue Personnages

#### Vue Factions

##### Création d'une vue Page

Accueil > Administration > Structure > Vues > Ajouter une vue

1. Nom de la vue
2. Configurer le type de contenu a afficher
3. Configurer la page d'affichage : 
	- Cocher la case "Créer une page"
	- Titre de la page
	- Chemin de la page
	- Paramètre d'affichage de la page
	- Configuration pagination
	- Créer ou non un lien de menu
		- si lien, configurer le texte du lien
	- enregistrer la configuration
4. Configuration de la vue, permet de : 
	- Format de l'affichage des éléments dans la vue
	- choisir le contenu des élément affichés dans la vue
	- Ajouter des filtres dans la vue
	- Apparence de la pagination
	- etc.

##### Création d'une vue Block

A la création d'une vue, si un bloc est nécéssaire aussi, le créer en même temps.

Les réglages sont les mêmes que pour une vue.

### les alias d'url

Dès qu'un type de contenu est créé, du contenu, de la taxonomie, une vue, on crée un pathauto en suivant.

## L'apparence graphique
On installe un thème, j'ai choisi bootstrap5
https://www.drupal.org/project/bootstrap5

Ce thème permet de créer rapidement un thème enfant préconfiguré pour bootstrap.

On installe le thème puis on va créer un thème enfant.

### Modifier le thème enfant

#### Activer le débug de thème
Dans le répertoire sites > default créer une copie du fichier default.services.yml et le renommer services.yml

Trouver les lignes correspondant au débugg du moteur de template twig

Ces lignes commencent à la clef ```twig.config``` dans le fichier

```
82 debug: true
91 auto_reload: true
102 cache: false
```

#### Surcharger le thème

Une fois le débig activé, chaque élément affiché sur la page se vois, dans le code html (à l'inspecteur de code par exemple), entouré d'un commentaire qui ressemble à ça : 

```
<!-- FILE NAME SUGGESTIONS:
   * block--falloutfansiteb5-main-navigation.html.twig
   * block--system-menu-block--main.html.twig
   x block--system-menu-block.html.twig
   * block--system.html.twig
   * block.html.twig
-->
<!-- BEGIN OUTPUT from 'themes/bootstrap5/templates/block/block--system-menu-block.html.twig' -->

<elementHtml>
</elementHtml>

<!-- END OUTPUT from 'themes/bootstrap5/templates/block/block--system-menu-block.html.twig' -->
```

Le x indique le template actuellement utilisé.

Les autres noms sont des suggestions de nom de fichier a utiliser dans le thème enfant afin de surcharger le twig original.

En dessus est indiqué l'endroit tu template twig utilisé

Pour surcharger ici ```block--system-menu-block.html.twig```, 
il faut recréer dans le répertoire template de notre thème la même arborescence de dossiers

```/templates/block/```

Dans ce dossier ```block```, on y copie ```block--system-menu-block.html.twig``` que l'on renome selon les choix proposés, ils sont pragmatiquement générés pour avoir du sens et surtout permettre se savoir rapidement quelle partie du template est surchargée.

En le renommant par exemple ```block--falloutfansiteb5-main-navigation.html.twig```, je sais qu'il s'agit du template de la navigation principale de mon site.

Car dans drupal (et avec twig en général), les templates sont créés de façon a être réutilisés de multiple fois, l'apparence qu'ils arborent dépend des données renvoyé dans leur vue par les controller de Drupal (Drupal est sur une base symfony, donc le templating twig y suis la logique MVC : Modèle Vue Contrôleur)