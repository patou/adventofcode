let test = [
`16
10
15
5
1
11
7
19
6
12
4`,
`28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3`,
`71
30
134
33
51
115
122
38
61
103
21
12
44
129
29
89
54
83
96
91
133
102
99
52
144
82
22
68
7
15
93
125
14
92
1
146
67
132
114
59
72
107
34
119
136
60
20
53
8
46
55
26
126
77
65
78
13
108
142
27
75
110
90
35
143
86
116
79
48
113
101
2
123
58
19
76
16
66
135
64
28
9
6
100
124
47
109
23
139
145
5
45
106
41`
];
import {getTab, log} from './util.js';
let tab = getTab(test).split('\n').map(n => parseInt(n.trim()));

log(tab);

function findJoltageDifference(tab) {
    tab.sort((a, b) => a-b);
    let joltage1 = 0;
    let joltage3 = 1;
    let last = 0;
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] - last == 1) joltage1++;
        if (tab[i] - last == 3) joltage3++;
        last = tab[i];
    }
    return joltage1 * joltage3;
}
console.log(`Result 1: ${findJoltageDifference(tab)}`); 