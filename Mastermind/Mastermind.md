# Enoncé

Un grand classique des jeux de société ! Ce jeu se joue avec un joueur qui choisit une combinaison de pions de couleur et un autre joueur qui doit deviner les couleurs de ces pions et dans quel ordre - un codemaker et un codebreaker.

À chaque tour, le codebreaker doit faire une proposition, le codemaker doit lui répondre en indiquant le nombre de couleurs bien placées et le nombre de bonnes couleurs mais mal placées.


## Exemple

Soit un jeu de 4 pions, le code secret du  codemaker est : `[blue, red, yellow, green]`

1er tour : proposition du codebreaker `[blue, yellow, purple, red]` -> réponse du codemaker `[1,2]`
=> 1 pion bien placé et bonne couleur (le premier `blue`) et 2 pions mal placés mais de bonnes couleurs (les deuxième et quatrième, `yellow` et `red`).

2ème tour : proposition `[blue, yellow, red, green]` -> réponse `[2, 2]`
=> 2 pions de bonnes couleurs et bien placés (`blue` et `green`) et deux pions de bonne couleurs mais mal placés (`yellow` et `red`).


Et ainsi de suite jusqu'à l'obtention du code secret - ou au bout d'un nombre de tentatives déterminées, au choix.


## Contraintes

- Langage : JS ou Python.
- Une fonctionnalité = une fonction.


## Étape 1

Commençons avec une version simplifiée du jeu.

Nous imposerons la combinaison à deviner. Elle doit être composée de 2 pions de couleurs différentes.

4 choix de couleurs possibles.

Vous devez écrire au moins 3 fonctions pour gérer :

- Si la proposition est bien composée uniquement des 4 couleurs possibles et rien d’autre
- Une fonction qui retourne `true` ou `false` si la bonne combinaison est trouvée ou non
- Une fonction qui gère la partie (continuer tant que/fin si gagné)


## Étape 2

Gardons la même logique mais cette fois-ci nous aurons une combinaison de 4 couleurs différentes et un choix de 8 couleurs possibles.


## Étape 3

Maintenant, la combinaison à deviner peut avoir plusieurs fois la même couleur.

Ex : Le code secret : [blue, blue, yellow, green].


## Étape 4

Désormais, ce n’est plus nous mais l’ordinateur qui va proposer une combinaison à deviner. À vous de trouver comment générer de manière aléatoire ce code.


## Étape 5

Proposer une interface graphique pour que l’on puisse voir visuellement les couleurs et jouer à votre jeu de manière plus ludique !