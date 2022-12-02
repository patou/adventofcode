let test = [
    `3,4,3,1,2`,
    `1,3,4,1,5,2,1,1,1,1,5,1,5,1,1,1,1,3,1,1,1,1,1,1,1,2,1,5,1,1,1,1,1,4,4,1,1,4,1,1,2,3,1,5,1,4,1,2,4,1,1,1,1,1,1,1,1,2,5,3,3,5,1,1,1,1,4,1,1,3,1,1,1,2,3,4,1,1,5,1,1,1,1,1,2,1,3,1,3,1,2,5,1,1,1,1,5,1,5,5,1,1,1,1,3,4,4,4,1,5,1,1,4,4,1,1,1,1,3,1,1,1,1,1,1,3,2,1,4,1,1,4,1,5,5,1,2,2,1,5,4,2,1,1,5,1,5,1,3,1,1,1,1,1,4,1,2,1,1,5,1,1,4,1,4,5,3,5,5,1,2,1,1,1,1,1,3,5,1,2,1,2,1,3,1,1,1,1,1,4,5,4,1,3,3,1,1,1,1,1,1,1,1,1,5,1,1,1,5,1,1,4,1,5,2,4,1,1,1,2,1,1,4,4,1,2,1,1,1,1,5,3,1,1,1,1,4,1,4,1,1,1,1,1,1,3,1,1,2,1,1,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,1,1,1,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,2,5,1,2,1,1,1,1,1,1,1,1,1`
];

import {getTabList, log} from './util.js';

let tab = getTabList(test)

log(tab);

function compute(tab) {
    for(let step = 1; step <= 80; step++) {
        const size = tab.length;
        for(let i = 0; i < size; i++) {
            if (tab[i] === 0) {
                tab[i] = 6;
                tab.push(8);
            }
            else {
                tab[i]--
            }
        }
        if (step <= 18)
            log(`step ${step}: ${tab.join(',')}`)
    }
    return tab.length;
}
function compute2(tab) {
    let pos = new Array(9).fill(0)
    for (const nb of tab) {
        pos[nb]++;
    }
    log(pos)
    for(let step = 1; step <= 256; step++) {
        pos[7] += pos[0]
        pos.push(pos.shift())
    }
    return pos.reduce((total, n) => total + n, 0);
}
console.log('Résultat 1: ', compute([...tab]));
console.log('Résultat 2: ', compute2(tab));

