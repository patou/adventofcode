let test = [
`389125467`,
`193467258`
];

import {getTab, log} from './util.js';
let tab = getTab(test).split('').map(n => parseInt(n));

log(tab);
function get(tab, index) {
    return tab[index % tab.length];
}

function set(tab, index, value) {
    tab[index % tab.length] = value;
}

function calcDest(cup) {
    return cup == 1 ? 9 : cup - 1;
}

function run(tab) {
    let current = 0;
    for (let move = 0; move < 100; move++) {
        log(`\n-- move ${move + 1} --`);
        let currentCup = get(tab,current);
        log(`cups:  ${tab.map(n => n == currentCup ? '(' + n + ')': n).join(' ')}`)
        let pickUp = [get(tab, current + 1), get(tab, current + 2), get(tab, current + 3)];
        log(`pick up: ${pickUp.join(' ')}`)
        let dest = calcDest(currentCup);
        while(pickUp.includes(dest)) {
            dest = calcDest(dest);
        }
        log(`destination: ${dest}`);

        let n = current + 1;
        do {
            set(tab, n, get(tab, n + 3));
        } while (get(tab, n++) != dest)
        set(tab, n++, pickUp[0]);
        set(tab, n++, pickUp[1]);
        set(tab, n++, pickUp[2]);
        current++;
    }
    log(`\n-- final --\nfinal:  ${tab.join(' ')}`)
    let index1 = tab.indexOf(1);
    return tab.slice(index1 + 1).join('') + tab.slice(0, index1).join('');
}

console.log(`Result 1: ${run(tab)}`);