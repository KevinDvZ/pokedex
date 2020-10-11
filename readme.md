# Pokédex : les pas à pas d'un débutant en JS pour parvenir à la fin de l'exercice.

Bases pour la création d'un pokédex interactif, premier exercice Javascript au sein de l'école Simplon.
Dans le but de maîtriser au mieux les bases de Javascript, j'ai décidé aussi d'apposer mes notes dans le markdown de ce projet.

Ce document est écrit en collaboration avec Elodie.

Par soucis de rapidité, j'ai abrégé Javascript en JS.

Le langage, les termes, les expressions employés, ou les pistes de réflexion en elle même peuvent être erronés : ce markdown suis le cheminement des recherches pour parvenir à la fin de l'exercice. Il est quasi inévitable que ce document sera bourrés de fausses interprétations et d'erreurs. N'hésitez pas à le commenter, pour que je les corrige.

**Mes excuses pour les fôtes d'ortograf**

## L'APPEL JAVASCRIPT

Dans la page html, au bas du body,juste après le main, il faut appeler notre script.js avec :

`<script src="script.js"></script>`

Dans le projet, il y a un fichier avec l'extension .js qui contient tous nos script écrit en JS. Ce bout de code permet de l'activer dans la page. Il est en général préférable de placer cet appel toujours à cet endroit du html.

## LES APIS

JS fonctionne avec des api directement appelable de base. Celle de Pokémon n'est pas de base, il faut l'apeller. Voici la liste des api atteignable.

[LISTE API](https://developer.mozilla.org/fr/docs/Web/API)

## LE DOM

Le _DOM_ est une représentation du document HTML source. Il s’agit pour l'essentiel d’une conversion de la structure et du contenu du document HTML en **un modèle objet utilisable par divers programmes** (dans notre cas, JS) .

La structure d'objet du DOM est représentée par ce qu'on appelle une **"arborescence de noeuds"** (node tree). On l'appelle ainsi parce qu'il peut être considéré comme un arbre qui se ramifie en plusieurs branches enfants, chacune pouvant avoir des feuilles. Le premier parent est l'élément racine `<html>`, les "branches" enfants sont les éléments imbriqués et les "feuilles" sont le contenu des éléments.

![Shema node DOM](https://la-cascade.io/content/images/2018/12/node-tree-example-compressor.png)
_Noeuds courants et basiques en HTML_

Sur la doc en Mozilla, on retrouve toutes les fonctions JS qui permettent d'agir sur les noeuds de ce DOM :

https://developer.mozilla.org/fr/docs/Web/API/Document

## L'objet Document et ses méthodes

On utilisera l'objet `Document.` pour créer des intéractions avec les noeuds. C'est ce que l'on trouve en haut du JS du pokédex. Il représente l'ensemble de l'arborescence du document analysé. Il possède de nombreuses propriétés et méthodes. Cinq de ces dernières permettent de « pointer » directement un ou plusieurs éléments dans le document.

La méthode **`getElementById`** permet de sélectionner un élément d'identifiant donné dans une page. Par exemple, si on a dans la page `<p id="intro">(...)</p>`, `document.getElementById("intro")` permettra de sélectionner précisément l'élément p en question.

La méthode **`getElementsByName`** permet de sélectionner les éléments portant un nom donné dans une page ; mais cette méthode, survivance de Netscape, n'est pas supportée par Internet Explorer

La méthode **`getElementsByTagName`** permet de sélectionner les éléments portant un nom de balise donné dans une page.

La méthode **`querySelector`**, qui prend en argument une expression CSS, permet de cibler directement le premier élément d'un ensemble de nœuds. Par exemple, `document.querySelector("#truc");` permet de sélectionner l'élément d'identifiant truc, mais `document.querySelector(".machin");` ne sélectionne que le premier élément de classe machin.

La méthode **`querySelectorAll`**, qui prend en argument une expression CSS, permet de cibler tous les éléments d'un ensemble de nœuds. Par exemple, `document.querySelectorAll("#truc");` renvoie un tableau d'un item contenant l'élément 'identifiant truc, et `document.querySelectorAll(".machin");` renvoie un tableau contenant tous les éléments de classe machin.

### A propose de const

En haut du JS pokédex se trouve :

`const list = document.getElementById("list");`

La variable ne contiendra pas que du simple texte. Ici c'est une variable qui contiendra le retour de l'élement\_. **L'élément** est un objet avec ses propriétés et ses fonctions pour le manipuler, qui découlent du DOM.

La déclaration **const** permet de créer une constante nommée accessible uniquement en lecture. Mais attention, le terme peut être trompeur : cela ne signifie pas que la valeur contenue est immuable, **mais plutôt que l'identifiant ne peut pas être réaffecté** (en l'occurence _list_ ici). Autrement dit la valeur d'une constante ne peut pas être modifiée par des réaffectations ultérieures. Une constante ne peut pas être déclarée à nouveau.

Cependant, même si on ne pourra pas mettre un autre element dans la variable list, mais **on peut toujours modifier l'élément en lui même**.

**Grossomodo un noeud du DOM = un élément. Il comporte des caractéristique, ce n'est pas seulement les balises HTML**

Ici, le noeud list est unique dans la page HTML du pokédex, c'est celui avec l'id list, de type `<li>`.

_Plus de détails sur les éléments :_ [OPENCLASSROOM](https://openclassrooms.com/fr/courses/5543061-ecrivez-du-javascript-pour-le-web/5577476-accedez-aux-elements-du-dom)

_Très complet :_ [TUTO COMPLET SUR LES NOEUDS PAR ICI](https://www.gchagnon.fr/cours/dhtml/introdom.html#quoinoeud)

### Accès relatif des noeuds

Les méthodes précédentes demandent de connaître précisément soit l'identifiant, soit le nom exact du nœud cherché. Il est aussi possible d'accéder à des collections de nœuds dont on ne connaît pas ses caractéristiques a priori.

Dans toute la suite, **elt** désignera un élément que l'on aura au préalable identifié (par exemple par une méthode getElementById).

Contrairement à la méthode **getAttribute()**, qui permet de retourner la valeur d'un attribut de nom donné, la propriété attributes renvoie à la collection complète des attributs d'un élément. Par exemple, si elt désigne l'élément img suivant, cette méthode renverra une liste constituée des nœuds src, alt, width et height (dans cet ordre) :.

### Accès aux nœuds enfants

On peut accéder à la liste des nœuds-enfants d'un élément donné. Pour cela, trois propriétés existent.

**elt.childNodes** donne la liste de tous les nœuds-enfants de l'élément elt sous la forme d'un tableau.

**elt.firstChild** est équivalent à elt.childNodes[0], et renvoie le premier nœud-enfant de l'élément elt.

**elt.lastChild** renvoie le dernier nœud-enfant de l'élément elt.

**elt.lastElementChild** renvoie le dernier élément-enfant de l'élément elt.

## La modification de la page HTML

Il est donc possible d'accéder à des nœuds particuliers dans un document HTML. Nous allons voir maintenant comment il est possible d'en modifier le contenu, d'en ajouter ou de supprimer des éléments.

### Ce que l'on veut faire en premier dans le pokédex :

Placer les noms et l'images des Pokémon dans des noeuds li qui se succéderont au sein du noeud ul de la page HTML.

### Les étapes clés

1. Récupérer le noeud visé (le noeud li) dans une variable que nous nommerons item
2. Récupérer le texte que l'on veut y inclure en visant la donnée correspondante dans la base de donnée de l'API Pokémon
3. passer la variable dans "la moulinette JSON" (voir plus loin).
4. placer le json dans le noeud li de item (possible en utilisant innerHTML)
5. Vider la variable.
6. Revenir à l'étape 1 pour le prochain Pokémon
7. Arrêter cette boucle quand les 151 pokémons sont renvoyé en se basant sur le endpoint renvoyé par l'API.

Avant toute chose, il faut qu'on comprennent le fonctionnement de "la moulinette JSON", avec ses paramètres spécifiques, et comment ils s'utilisent.

## Explication de Json

JSON pour **JavaScript Object Notation** et c'est un format de données. Autrement dit, c'est une façon de stocker des informations, un peu comme une base de données. Bien que créé indépendamment de la spécification ECMAScript, il est maintenant lié à JavaScript qui inclut un objet JSON, et de nombreux développeurs l'incorporent quasiment comme un sous-ensemble du langage. Il est présent dans le traitement des données de l'api Pokémon et l'interaction avec les noeuds.

Bien que trouvant sa source dans JavaScript, beaucoup de langages de programmation peuvent générer et lire le format JSON. Il est donc devenu très populaire pour le stockage, la lecture et le partage d'information dans les applications et services web.

Voici un exemple de syntaxe JSON :

`{ "espèce": "Dog", "race": "Labrador Retriever", "couleur": "Yellow", "âge": 6 }`

Le nom de la variable est obligatoirement entre guillemets en JSON.

JSON est un format de données consistant en paires de nom/valeur (ou clé/valeur) ayant la forme de chaînes de caractères. Les nom et valeur sont séparés par deux points : et chaque paire est séparée de la suivante par une virgule.

C'est exactement le format que l'ont reçois dans la variable api, déclarée en haut du fichier JS. La liste des 151 Pokémon en mode json.

Si on clique sur le lien et que l'on colle le contenu du json dans un interprétateur json, on peut voir les données de façon plus claire. [le site qui interprete ici](http://jsonviewer.stack.hu/) , [le texte json de la pokéapi à coller dans cet interpréteur](https://pokeapi.co/api/v2/pokemon?limit=150)
