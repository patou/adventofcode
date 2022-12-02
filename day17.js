let test = [
    ``,
    ``
];

import {getTabLine, log} from './util.js';

let tab = getTabLine(test).map(n => parseInt(n))

log(tab);

function compute(tab) {
    return 0;
}

function compute2(tab) {
    return 0;
}

console.log('Résultat 1: ', compute(tab))
console.log('Résultat 2: ', compute2(tab))

