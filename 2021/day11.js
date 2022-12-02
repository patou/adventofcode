let test = [
    `5483143223
    2745854711
    5264556173
    6141336146
    6357385478
    4167524645
    2176841721
    6882881134
    4846848554
    5283751526`,
    `5433566276
    6376253438
    8458636316
    6253254525
    7211137138
    1411526532
    5788761424
    8677841514
    1622331631
    5876712227`
];

import {getTab, getTabLine, log} from './util.js';

let tab = getTabLine(test).map(line => line.split('').map(n => parseInt(n)))

log(tab.map(line => line.join('')).join('\n'))

function incr(tab, i, j) {
    if (i >= 0 && j >= 0 && i < tab.length && j < tab[i].length) {
        //log(`${i}:${j} ${tab[i][j]}`)
        tab[i][j]++;
        if (tab[i][j] > 9) {
            tab[i][j] = -10
            let res = 1;
            for (let k = -1; k <= 1; k++)
                for (let l = -1; l <= 1; l++)
                    res += incr(tab, i + k, j + l)
            return res
        }
    }
    return 0
}

function compute(tab) {
    let flash = 0;
    for (let step = 1; step <= 1000; step++) {
        log(`Step ${step}`)
        for (let i = 0; i < tab.length; i++) {
            for (let j = 0; j < tab[i].length; j++) {
                flash += incr(tab, i, j)
            }
        }
        let octopus = 0
        for (let i = 0; i < tab.length; i++)
            for (let j = 0; j < tab[i].length; j++)
                if (tab[i][j] < 0) {
                     tab[i][j] = 0;
                     octopus++;
                }
        if (octopus === 100) {
            console.log('Résultat 2: ', step)
            break;
        }
        if (step <= 10) log(tab.map(line => line.join('')).join('\n'))
        if (step === 100) console.log('Résultat 1: ', flash)
    }
}

compute(tab)
