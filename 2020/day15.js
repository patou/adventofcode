import {getTab, log, version} from './util.js';


function find2020Number(tab, max) {
    let step = 0;
    let res = 0;
    let last = 0;
    let map = new Map();
    while (step < max) {
        last = res;
        if (step < tab.length) {
            res = tab[step];
        } else if (map.has(res)) {
            res = step - map.get(res);
        } else {
            res = 0;
        }
        //log( `Turn ${step}: ${res}` );
        map.set(last, step);
        step++;
    }

    return res;
}

if (version == 'last') {
    
    console.log(`Result 1: ${find2020Number([19,0,5,1,10,13], 2020)}`); // 1015
    console.log(`Result 2: ${find2020Number([19,0,5,1,10,13], 30000000)}`); // 1015


}
else {
    console.log(`Result 0,3,6: ${find2020Number([0,3,6], 2020)}`); // 436
    console.log(`Result 1,3,2: ${find2020Number([1,3,2], 2020)}`); // 1
    console.log(`Result 2,1,3: ${find2020Number([2,1,3], 2020)}`); // 10
    console.log(`Result 1,2,3: ${find2020Number([1,2,3], 2020)}`); // 27
    console.log(`Result 2,3,1: ${find2020Number([2,3,1], 2020)}`); // 78
    console.log(`Result 3,2,1: ${find2020Number([3,2,1], 2020)}`); // 438
    console.log(`Result 3,1,2: ${find2020Number([3,1,2], 2020)}`); // 1836

    console.log(`Result 0,3,6: ${find2020Number([0,3,6], 30000000)}`); // 175594
    //console.log(`Result 1,3,2: ${find2020Number([1,3,2], 30000000)}`); // 2578
    //console.log(`Result 2,1,3: ${find2020Number([2,1,3], 30000000)}`); // 3544142
    //console.log(`Result 1,2,3: ${find2020Number([1,2,3], 30000000)}`); // 261214
    //console.log(`Result 2,3,1: ${find2020Number([2,3,1], 30000000)}`); // 6895259
    //console.log(`Result 3,2,1: ${find2020Number([3,2,1], 30000000)}`); // 18
    //console.log(`Result 3,1,2: ${find2020Number([3,1,2], 30000000)}`); // 362
}
