let test = [
`.#.
..#
###`,
`#.#####.
#..##...
.##..#..
#.##.###
.#.#.#..
#.##..#.
#####..#
..#.#.##`
];

import {getTab, log} from './util.js';
let tab = getTab(test).split("\n").map(line => [...line].map(n => n == '#' ? 1 : 0));

log(tab);

function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}

function print(tab, ...zs) {
    for (let z of zs) {
        log(`z=${z}`);
        for (let y = 0; y < tab[z].length; y++)
            log(tab[z][y].map(n => n ? '#' : '.').join(''));
    }
}

let size = 12 + tab.length;


function initStart(start, tab) {
    start.map(s => s.map(n => n.fill(0)));
    for (let i = 0; i < tab.length; i++)
        for (let j = 0; j < tab[i].length; j++)
            start[6][6+i][6+j] = tab[i][j];
}

function adjacent(map, z, y, x) {
    let adj = 0;
    for (const a of [-1, 0, 1])
        for (const b of [-1, 0, 1])
          for (const c of [-1, 0, 1]) {
            if (a === 0 && b === 0 && c === 0) {
              continue;
            }
            if (map[z + a][y + b][x + c] === 1) {
                adj++;
            }
          }
    return adj;
}

function run(tab) {
    let map = createArray(size, size, size);
    let next = createArray(size, size, size);
    initStart(map, tab);
    print(map, 6);
    for (var s = 1; s <= 6; s++) {
        log(`Iteration ${s}`);
        for (let z = 1; z < map.length-1; z++)
            for (let y = 1; y < map[z].length-1; y++)
                for (let x = 1; x < map[z][y].length-1; x++) {
                    let count = adjacent(map, z, y, x);
                    next[z][y][x] = (count === 3 || (count === 2 && map[z][y][x] === 1)) ? 1 : 0;
                }
        [next, map] = [map, next];
    }
    
    print(map, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);
    return map.flat(3).reduce((a,b)=>a+b,0);
}
console.log(`Result 1: ${run(tab)}`);
