// Coding by Anelka MD

function num2Letters(number) {
    if (isNaN(number) || number < 0 || 999 < number) {
        return 'Veuillez entrer un nombre entier compris entre 0 et 999.';
    }
    let units2Letters = ['', 'un', 'deux', 'trois', 'quatre',
        'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze',
        'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit',
        'dix-neuf'],
        tens2Letters = ['', 'dix', 'vingt', 'trente', 'quarante',
            'cinquante', 'soixante', 'soixante', 'quatre-vingt', 'quatrevingt'];
    let units = number % 10,
        tens = (number % 100 - units) / 10,
        hundreds = (number % 1000 - number % 100) / 100;
    let unitsOut, tensOut, hundredsOut;
    if (number === 0) {
        return 'zéro';
    } else {
        // Operation des unités
        unitsOut = (units === 1 && tens > 0 && tens !== 8 ? 'et-' :
            '') + units2Letters[units];
        // Operation des dizaines
        if (tens === 1 && units > 0) {
            tensOut = units2Letters[10 + units];
            unitsOut = '';
        } else if (tens === 7 || tens === 9) {
            tensOut = tens2Letters[tens] + '-' + (tens === 7 && units
                === 1 ? 'et-' : '') + units2Letters[10 + units];
            unitsOut = '';
        } else {
            tensOut = tens2Letters[tens];
        }
        tensOut += (units === 0 && tens === 8 ? 's' : '');
        // Operation des centaines
        hundredsOut = (hundreds > 1 ? units2Letters[hundreds] + '-'
            : '') + (hundreds > 0 ? 'cent' : '') + (hundreds > 1 && tens == 0 &&
                units == 0 ? 's' : '');
        // Retour Finale
        return hundredsOut + (hundredsOut && tensOut ? '-' : '') +
            tensOut + (hundredsOut && unitsOut || tensOut && unitsOut ? '-' : '')
            + unitsOut;
    }
}
let userEntry;
while (userEntry = prompt('Veuillez saisir le nombre à écrire en toutes lettres (entre 0 et 999) :')) {
    alert(num2Letters(parseInt(userEntry, 10)));
}