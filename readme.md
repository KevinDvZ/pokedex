# Pokedex

Base pour la création d'un pokédex interactif, premier exercice Javascript au sein de Simplon.
Dans le but de maîtriser au mieux les bases de Javascript, j'ai décidé aussi d'apposer mes notes dans le markdown de ce projet.

Par soucis de confort, j'ai abrégé Javascript en JS.

Le langage, les termes peuvent être erronés : ce mardown est la piste de réflexion d'un débutant total en JS. Il est quasi inévitable que ce document sera bourrés de fausses interprétations et d'erreurs. N'hésitez pas à le commenter, pour que je les corrige.

**Mes excuses pour les fôtes d'ortograf**

## L'APPEL JAVASCRIPT

Dans la page html, au bas du body,juste après le main, il faut appeler notre script.js avec :

`<script src="script.js"></script>`

Dans le projet, il y a un fichier avec l'extension .js qui contient tous nos script écrit en JS. Ce bout de code permet de l'activer dans la page. Il est en général préférable de placer cet appel toujours à cet endroit du html.

## LE DOM

Le _DOM_ est une représentation du document HTML source. Il s’agit pour l'essentiel d’une conversion de la structure et du contenu du document HTML en **un modèle objet utilisable par divers programmes** (dans notre cas, JS) .

La structure d'objet du DOM est représentée par ce qu'on appelle une **"arborescence de noeuds"** (node tree). On l'appelle ainsi parce qu'il peut être considéré comme un arbre qui se ramifie en plusieurs branches enfants, chacune pouvant avoir des feuilles. Le premier parent est l'élément racine `<html>`, les "branches" enfants sont les éléments imbriqués et les "feuilles" sont le contenu des éléments.

![Shema node DOM](https://la-cascade.io/content/images/2018/12/node-tree-example-compressor.png)
_Noeuds courants et basiques en HTML_

Sur la doc en Mozilla, on retrouve toutes les fonctions JS qui permettent d'agir sur les noeuds de ce DOM :

https://developer.mozilla.org/fr/docs/Web/API/Document

On utilisera l'objet `Document.` pour créer des intéractions avec les noeuds. Voici les scripts liés à cet objet qui vont nous servir pour la création du pokédex :

`document.getElementById("icijemetleIDdunebalisedelapageHTML");`

Script permettant de récupérer toutes les "parties" de codes HTML présent dans la page ayant le id entré dans les parenthèses.Si on met une égalité avec variable devant, celà pose le contenu dans une variable. Dans le cas du pokédex, tout en haut du fichier JS, on a :

### Choper un noeud du DOM

`const list = document.getElementById("list");`

Celà veut dire que l'on va chercher les balises < id=list> (il y en a qu'une dans la page HTML du pokédex), et que l'on met son contenu dans la variable list.

_ALERTE SUBTILITE :_ la variable ne contiendra pas que du simple texte. Ici c'est une variable qui contiendra une classe _Element_. **L'élément** est un objet avec ses propriétés et ses fonctions pour le manipuler, qui découlent du DOM.

**Grossomodo un noeud du DOM = un élément. Il comporte des caractéristique, ce n'est pas seulement les balises HTML**

Ici, le noeud list est unique dans la page HTML du pokédex, c'est celui avec l'id list, de type `<li>`.

_Plus de détails sur les éléments :_ [OPENCLASSROOM](https://openclassrooms.com/fr/courses/5543061-ecrivez-du-javascript-pour-le-web/5577476-accedez-aux-elements-du-dom)

[TUTO COMPLET SUR LES NOEUDS PAR ICI](https://www.gchagnon.fr/cours/dhtml/introdom.html#quoinoeud)

Apparté : La déclaration const permet de créer une constante nommée accessible uniquement en lecture. Mais attention, le terme peut être trompeur : cela ne signifie pas que la valeur contenue est immuable, **uniquement que l'identifiant ne peut pas être réaffecté** (en l'occurence _list_ ici). Autrement dit la valeur d'une constante ne peut pas être modifiée par des réaffectations ultérieures. Une constante ne peut pas être déclarée à nouveau.

Plus concrètement, on ne pourra pas mettre un autre element dans la variable list, mais on peut toujours modifier l'élément en lui même.

### Créer un noeud dans une variable

`document.createElement("li")`
