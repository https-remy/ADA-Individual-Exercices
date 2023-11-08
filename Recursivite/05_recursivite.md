Langage au choix.

Une fonction récursive est une fonction qui s'appelle elle-même dans son propre corps.

Lorsqu'une fonction récursive est appelée, elle résout un sous-problème et utilise sa propre définition pour résoudre le reste du problème.

Par exemple:

```
def inverse(chaine):
  if len(chaine) == 0:
    return chaine
  else:
    return inverse(chaine[1:]) + chaine[0]
```

Dans cet exemple, la fonction `inverse()` prend une chaîne de caractères "chaine" comme argument et renvoie la chaîne inversée en appelant récursivement la
fonction `inverse()` avec la sous-chaîne `chaine[1:]` (tous les caractères sauf le premier) jusqu'à ce qu'il ne reste plus aucun caractère dans la chaîne.

## Étape 1

Écrire une fonction `sum1` qui prend en argument un tableau d’entiers et retourne la somme de chaque élément du tableau.

## Étape 2

Écrire une function `sum2` qui retourne le même résultat que `sum1` mais en utilisant une fonction récursive.

## Étape 3

On appelle factoriel le produit de tous les entiers inférieurs ou égaux à un nombre donné.

Exemple : factoriel de 3 = 1x2x3 = 6

Écrire une fonction `factorial` qui prend en argument un entier en paramètre et calcule son factoriel récursivement.

## Étape 4

En mathématiques, la **suite de Fibonacci** est une suite de nombres entiers dont chaque terme successif représente la somme des deux termes précédents, et qui commence par 0 et 1.
Ainsi, les dix premiers termes qui la composent sont:

```
0
1
1 (0+1)
2 (1+1)
3 (1+2)
5 (2+3)
8 (3+5)
13 (5+8)
21 (8+13)
34 (13+21)
```
Écrire une fonction `fibonacci` qui prend un entier `x` en paramètre et résoudre la suite de Fibonacci.