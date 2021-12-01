let test = [
`Player 1:
9
2
6
3
1

Player 2:
5
8
4
7
10`,
`Player 1:
50
14
10
17
38
40
3
46
39
25
18
2
41
45
7
47
36
1
30
32
8
31
12
5
28

Player 2:
9
6
37
42
22
4
21
15
44
16
29
43
19
11
13
24
48
35
26
23
27
33
20
49
34`
];

import {getTab, log} from './util.js';
let tab = getTab(test).split("\n\n").map(part => part.split('\n').slice(1).map(n => parseInt(n)));

log(tab);

function run([player1, player2]) {
    while(player1.length > 0 && player2.length > 0) {
        let cart1 = player1.shift();
        let cart2 = player2.shift();

        if (cart1 > cart2) {
            player1.push(cart1, cart2);
        }
        else {
            player2.push(cart2, cart1);
        }

    }
    return [...player1, ...player2].reverse().reduce((res, value, index) => res + value * (index + 1));
}

console.log(`Result 1: ${run(tab)}`);