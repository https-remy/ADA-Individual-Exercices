import random

def retirer_allumettes(nombre):
    global tas_allumettes
    tas_allumettes -= nombre
    print(f"{nombre} allumettes retirées. Il en reste {tas_allumettes}.")


def demander_allumettes():
    while True:
        try:
            choix = int(input("Combien d'allumettes souhaitez-vous retirer (entre 1 et 6) ? "))
            if 1 <= choix <= 6:
                return choix
            else:
                print("Veuillez entrer un nombre entre 1 et 6.")
        except ValueError:
            print("Veuillez entrer un nombre valide.")


def jeu_allumettes():
    global tas_allumettes
    tas_allumettes = 50
    joueur = 1

    while tas_allumettes > 0:
        print(f"\nTour du Joueur {joueur}")
        choix = demander_allumettes()
        retirer_allumettes(choix)

        if tas_allumettes == 0:
            print(f"\nLe Joueur {joueur} a gagné !")

        joueur = 3 - joueur

def mode_multi_joueur():
    nombre_joueurs = int(input("Combien de joueurs ? "))

    for joueur in range(1, nombre_joueurs + 1):
        print(f"\n=== Joueur {joueur} ===")
        jeu_allumettes()


mode_multi_joueur()
