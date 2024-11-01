/*****************************
 * 022 - Les tableaux indicés (Arrays)
 */

// 1. Initialiser un nouveau tableau
// EXERCICE 1 : Créez un tableau appelé "semaine" qui contient les noms des jours de la semaine
const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

/*
function moyenne(tests) {
    let somme = 0;
    /!*
    for (let i; i < tests.length; i++){
            somme += tests[i];
        }
    *!/table

    /!*
    for (const test of tests) {
          somme += tests;
      }
    *!/

    tests.forEach(item => {
        somme += item;
    });

    return somme / tests.length;
}

const tests = [12, 11, 14, 20];
console.log(moyenne(tests));
*/

/*
const test1 = 16;
const test2 = 10;
const test3 = 12;

const tests = [16, 10, 12];
tests.push(20);
console.log(tests);
*/

/*
for (let i; i < tests.length; i++) {
    console.log(tests[i]);
}
*/

// 2. Accéder à un élément du tableau
// EXERCICE 2 : Affichez le premier jour de la semaine et le dernier jour de la semaine en utilisant les indices du tableau
console.table(days[0]);
console.table(days[days.length - 1]);

// 3. Nombre d'éléments dans un tableau
// EXERCICE 3 : Affichez le nombre de jours dans une semaine et le dernier jour de la semaine
console.table(days.length);

// 4. Modifier les données d'un tableau
// EXERCICE 4 : Modifiez "samedi" en "saturday", réaffichez le tableau, stockez "dimanche" dans une variable jourFerie, affichez le contenu de la variable, ajoutez un nouveau jour, "dimanche2", à la fin de la semaine, puis réaffichez le tableau des jours de la semaine.
days[5] = "Saturday";
console.table(days);

const jourFerie = days[6];
console.table(jourFerie);

days.push("Dimanche 2");
console.table(days);


// 5. Un tableau peut contenir des données de différents types


// 6. Méthodes associées à un tableau
// EXERCICE 5 : Suivez les consignes pour manipuler le tableau de fruits
