let test = [
`0: 4 1 5
1: 2 3 | 3 2
2: 4 4 | 5 5
3: 4 5 | 5 4
4: "a"
5: "b"
6: 4 5

ababbb
bababa
abbbab
aaabbb
aaaabbb`,
`42: 9 14 | 10 1
9: 14 27 | 1 26
10: 23 14 | 28 1
1: "a"
11: 42 31
5: 1 14 | 15 1
19: 14 1 | 14 14
12: 24 14 | 19 1
16: 15 1 | 14 14
31: 14 17 | 1 13
6: 14 14 | 1 14
2: 1 24 | 14 4
0: 8 11
13: 14 3 | 1 12
15: 1 | 14
17: 14 2 | 1 7
23: 25 1 | 22 14
28: 16 1
4: 1 1
20: 14 14 | 1 15
3: 5 14 | 16 1
27: 1 6 | 14 18
14: "b"
21: 14 1 | 1 14
25: 1 1 | 1 14
22: 14 14
8: 42
26: 14 22 | 1 20
18: 15 15
7: 14 5 | 1 21
24: 14 1

abbbbbabbbaaaababbaabbbbabababbbabbbbbbabaaaa
bbabbbbaabaabba
babbbbaabbbbbabbbbbbaabaaabaaa
aaabbbbbbaaaabaababaabababbabaaabbababababaaa
bbbbbbbaaaabbbbaaabbabaaa
bbbababbbbaaaaaaaabbababaaababaabab
ababaaaaaabaaab
ababaaaaabbbaba
baabbaaaabbaaaababbaababb
abbbbabbbbaaaababbbbbbaaaababb
aaaaabbaabaaaaababaa
aaaabbaaaabbaaa
aaaabbaabbaaaaaaabbbabbbaaabbaabaaa
babaaabbbaaabaababbaabababaaab
aabbbbbaabbbaaaaaabbbbbababaaaaabbaaabba`,
`58: 127 99 | 105 36
56: 71 99 | 102 36
116: 36 | 99
42: 19 36 | 68 99
67: 36 71 | 99 73
117: 81 99 | 80 36
77: 99 37 | 36 83
106: 27 99 | 32 36
73: 36 99 | 99 99
126: 15 36 | 73 99
133: 99 99 | 36 116
92: 99 51 | 36 14
61: 99 21 | 36 6
6: 54 116
33: 36 103 | 99 9
131: 54 99 | 15 36
81: 36 38 | 99 78
93: 99 100 | 36 87
1: 113 99 | 129 36
36: "b"
70: 99 130 | 36 122
76: 99 4 | 36 44
79: 65 99 | 48 36
99: "a"
108: 118 99 | 96 36
15: 36 36
2: 99 102 | 36 27
103: 109 99 | 136 36
9: 23 99 | 63 36
12: 15 99 | 123 36
137: 36 54 | 99 20
13: 36 30 | 99 70
7: 99 32 | 36 102
94: 18 36 | 59 99
71: 36 99
3: 99 104 | 36 62
4: 72 99 | 114 36
32: 36 36 | 99 36
21: 27 99 | 122 36
52: 99 20 | 36 73
135: 99 116 | 36 99
31: 95 99 | 89 36
24: 99 107 | 36 125
19: 36 77 | 99 28
112: 15 36 | 15 99
89: 99 50 | 36 111
23: 99 34 | 36 73
69: 36 54 | 99 73
85: 12 99 | 25 36
53: 36 54
95: 36 76 | 99 117
124: 106 99 | 22 36
10: 102 99 | 122 36
107: 99 133 | 36 34
129: 54 99 | 71 36
16: 36 130 | 99 27
86: 36 122 | 99 102
45: 97 36 | 41 99
102: 99 99 | 116 36
25: 32 36 | 133 99
87: 99 52 | 36 115
119: 91 99 | 101 36
34: 99 99
121: 36 91 | 99 52
29: 102 36 | 27 99
20: 116 116
47: 36 36 | 99 99
49: 123 99
38: 99 98 | 36 86
123: 36 36 | 36 99
48: 36 123 | 99 54
51: 36 54 | 99 102
98: 73 99 | 47 36
26: 20 99 | 34 36
68: 36 88 | 99 108
111: 75 36 | 5 99
54: 99 36 | 99 99
109: 47 36 | 20 99
0: 8 11
17: 36 57 | 99 120
66: 99 132 | 36 35
62: 36 130 | 99 32
59: 36 130 | 99 122
44: 99 60 | 36 92
122: 99 36
74: 126 99 | 16 36
37: 82 99 | 85 36
65: 130 36 | 27 99
80: 58 36 | 43 99
55: 99 130 | 36 20
118: 66 36 | 3 99
5: 24 36 | 124 99
14: 36 54 | 99 71
11: 42 31
96: 40 99 | 61 36
22: 36 34 | 99 135
97: 36 27 | 99 20
43: 99 128 | 36 29
101: 73 36 | 133 99
91: 133 36 | 54 99
114: 36 112 | 99 52
83: 79 99 | 74 36
28: 134 99 | 39 36
72: 99 26 | 36 49
78: 36 25 | 99 90
30: 102 99 | 133 36
27: 99 36 | 36 99
35: 99 27 | 36 15
84: 2 36 | 64 99
75: 1 36 | 119 99
115: 130 36 | 71 99
39: 99 84 | 36 121
40: 99 69 | 36 110
63: 36 32
88: 17 99 | 93 36
120: 53 99 | 55 36
105: 99 133 | 36 123
127: 36 123 | 99 47
134: 99 46 | 36 45
50: 36 33 | 99 138
82: 131 99 | 59 36
104: 122 99 | 27 36
8: 42
113: 34 36 | 123 99
125: 99 123 | 36 54
64: 54 36
46: 36 10 | 99 107
130: 99 36 | 36 116
18: 36 54 | 99 34
110: 99 34 | 36 27
136: 99 15 | 36 73
132: 122 36 | 133 99
128: 15 99 | 102 36
57: 36 56 | 99 67
100: 99 63 | 36 137
60: 7 99 | 63 36
90: 36 122 | 99 133
41: 34 36
138: 99 94 | 36 13

babbbbababbbababaabaabab
aaababbaababbabbaababbabbaaabaab
abaaaabbaabaaabaababbbbaabbaaaba
abbaabbbbbaaaaaabaaaaaaa
aabaaaababababababaaababbabbbaaa
aaabaaabbbabbaaabbaababb
aaabbabbabbbaababbbabbab
bbbabbbbaaabbabbbaabbaab
babbbaabbaaabbaaaabaaaabaabbbaabaabbbaaaaabbbbbb
abbaaabbabbabaaaaaaaaabb
bbbabbaaabaabbbbaaabbabbaabbbbbbbaababab
ababbbabbabbababbaabbbbbbbbabaabaabbbbbb
bbbbbbbbaabababababbbbba
aaabbbbbabbababbabbaaaaa
aaabbabbbaabbbaabaababbabbbbbbabaabaaabaababaaba
abaaaabaabaaababaabbbbbb
bbbbbabbaababbbbaabbaaba
bbbaabaabaabbbbaabbabaaabababaaaaabbbabaababaababbbbabaa
abaaaabbbbaabbbabaababab
abababbabbaabaaaabbbbaba
babbbabbbbabbabaaaababbb
aabbaabaaabbbaaabbabaaaa
abbabaaababbbbababbbbaaabbabbbaa
babababaabbaabbbbabbbbabbaaabaabbbabbbaa
abababababbbbbbbaaabaabb
bbbbbbaabaababaabbbaabba
bbabaababbababbbbaabbaba
aaaabaabaaababbbabaabbabbaaaaaaaaaaaabba
babaabaaabbababbaabbbbaa
aababbbbabaabbabbbbabbbaababbbababbaaaabbabaaaab
babaabbbbababababbababab
babababbbababbaaabbbaabaaaaabbbbaaaabaabaaabaaabaabaabbbbaaaaaaabaababab
ababbababbbbaaabbabababbabaaaabbbbaabbbbaaaaabbabbaaaabbbbbbbbbabbbaaabbaababbbaaaabbaaaabbabbba
aaabaaabaabababaabbababaabbbaabaaaabaabb
bbbbbbaabbaaabbabbaaababaaaababbbaaabbba
bbbbbaaaaabaabbaabbabaabaabbbbbababbaababaaabbabaabbabab
bbaaabbbbaabbbabbbbaaaabbabbbabaaaaaabaabbaabbbbbbbabbab
baabaaabbbbabbbabbbaaabbaabbbbbb
bbbbaabaaabbbaababbbbaaaabbbbbab
bbbabbbabbbaaabbbbbaabbb
abbbaababaababaabaaaaaaa
bbbbbabbbabbaabaabaababa
aababaaabababbabbabbbaaa
aabbabbbbbaaaabbbbaabbbbababbbbabbbaaaaa
bbabaaabbabbbbbbbbbbaabb
babbababaaabbabbbaaabbbb
abaaabbaabaaabbaaabbbbba
baababbbabbabbaabbababbbbaabaabaabababaabaabbaba
bbaabbbabaaabbaabaababab
bbbbbabbabbababbbbaabbbb
bbbbaaaaabbababaababbbaa
bababababaababaabaababbaabaaaaaa
bbbbaaaaaababaabbbbaaaaa
aababaabbaaaabbbabbabbbb
abbbababaaabbbbaabbbbbbbaabaaaaa
aaabaaaaaaabbbaabbbabbabbaaaabbbabbabbabaabbabaababaabba
bbaaabbababaaaaababaaabb
bbbabbbbbbaabbbbbabbbbbbbabbbaababaabbbbaabaaaaa
bbbbabbbabababbaaaabbaab
abaabbabaababaabbaaaabba
ababababbbbbbabbaaaaabaaabbbbbbbbababbbbaaabbbab
bbbbbbbabbbbbaabbbbabbaaaaaabbababbaabbbabbaaaab
abbbaababbaabaaaaabbbbaa
bbaaaabaaaaaaabaabababbb
babbabbbbbbbbbbbaabbbaaa
abababbaaabaabbaaaabbabbaaabbbaabaaaabaa
babaabaaabbabbabababbaab
abbababaabaaabbbaaabaaaaaaaaabbbbbbaabbb
babbabbaabbababbbaabbaba
babbabababababaaabbbaababaabbbbbaababbabbbaaaabaaaaabaaaabbbaaab
babaaaaaaaabbaaaabaaaaaa
bababaaabbbbbbbabaaababa
bbaababaaaabbbbaaabaabaabbaaabaa
abaaabbaabbabbabaababbaa
abbaaabbbaabbbaabaabbbab
bbbaaaabbbabbaabaabaabab
babbbbaaabaaabbabaaabbaaabaaabaa
bbbbbbaaaabababaababbbbb
abaabbaaabbbbbbbbabbbbba
abaabbbbbabbabbbbbbabaaa
baaaabbbabbbbbbbaaaabbba
aabababaabaabaaaabbabbba
bbaaabbababbbbabbbbbaabaaaaabbabaaabbaaaabbbbabbabbbbaababaaaaab
abbbbaabababaaaabbbaaaabaababaabbbbabbbbaaaaaaaabaaababbaaababaa
aabbabaaaabaaababaabbbab
babbabbbbbaabaaaaaabaaaababbbbbbaabbabba
abaaaabbaaabaabababbbaaa
aaaababbbbbaaaabaabbbaaa
bbbabaabbbbbabbaabaaabaa
ababbabbaababaaaabaaaabbbbaaabbbbabaabab
babbbbabaaabaaabaaaaabaaaabbabab
aababbabbabaabbbbaaabaab
aabaaababbbabaababaabbbaaabaabbabaabaaba
bbbbabbbbbaaaabaaaabbbbbbbbabababaaabaaa
abaabbbbbabaaaaaaaaababa
abbbbaaaaaababbaabbbaaaaabbababaaabbbaaababaabab
babaaabaabaababbaaabbaab
abaabbbbbbabbabaabbababbabaaabbabaaaaaaa
bababbabbaabbbbbbbbbaaab
bbbaaaabbbaabaaabaaaaaaa
bbaabbbbbbbaaaababbbabaa
baabbbbabbbbbbbbbabaaaabbaabbbbbabbbaaaabaababbaaabbbabaaaabaaabbababbbbaaabbaba
abaabbbaaabbabaabbbbaababbaaaabbaaabaabb
abbbababababababbbbabaaa
bbbabbaaaaabaababaabbbaaabbaaabbabbbaaabbbaaabbb
abbbaaaababababbaabbabbb
baabbbaaaaababbaaabaabab
aaabbbbbaaabaabaabaabaaaabaabaaaaabbaaba
bababbbbbabbaaabaaabaabaaabbbabbaabaaababbababbbbbabbbaabbbabbbaababbbaabbbababb
abbabaaaabaabaabbaaaabbbaabbbbbb
abbaabbbaaaaabbbbababbaaaabbbaba
babbabbbbabababbbaabaaba
babbabbabaababaaaabbbbab
aababaabbbbbabbbbbbbabbaabbaaabaababbaab
bbbaabbaaabaaababbabbabaaaaabbaaabbbabbbaabbabbaabaaabab
ababababababaabbbaaaaaabbabbbbabbbbbbbababababababbbbaabaaababaaaabbbbbbaabababbbbbbbaba
aaabaaababbbaabaabaabaaabbabbbab
bbabbaabbbabbababbabbbbb
ababababaababaabbaaaabab
bababaaaaaababbabbbbbaba
babbbbabbbaaababbbbbabbbbabaabbaabaabaab
ababaabbbbbbbbabbbbbbaba
abbbaaaababbaabbbabbaaab
bbbbabbaabbbaababbabaabb
bbbbbabbbbbbabbbababaaab
babbabbbbbbabaabbbbaaaba
baababaabbbbabbbbababaab
aaaabaabaaaabbbbaaabbaab
bbbaaaabbabbababababaaab
abaaaababbbbaaaaababbaba
bbbbaaaaaaabbaaaaabaabab
babababbbabbabaaaaababbb
babbbaabbbaaabababbbbaba
aaabbabaababbaaabaaaaababababbaaabaabaabaaabbbbaaaaaaabbbabbaaba
abaaaabbabaabbbabaaaabbababaaabaababaabbaaaaabbbbabaaaba
bbbbaaaaabbbbbbbbaaabaab
bbaabaaaabbaaabbabbbbbaa
abbbbbaabababababbbbbaba
bbbabbbaabaababbbbbbabaa
bbbaaaabababbabbbbabbbba
abaababbbababaaabaaaaabb
bbabaaabbbaabbbbbaabaaaa
bbbaabaabbbbbbbabaabbaab
aabbabbbbbbbbabbbbaabaab
aabbabbbaaaaabbbbbbabbbbbaababbababaaabaaaababbabbaababbbaabbaba
abbbbbbbbababaaabaababab
bbbbbbbababbbbbbaaabaabaabbbbbba
abaabbabbbbaaabbaaaaaaaa
bbaaabababaaababbbbabbbabbababba
abbababbbabbabbbabaabaabbaababaaabbbabba
abbbbbbbbbbbbaabaabaabab
bababbabbbbbbaabbaabbbab
aaaaabaaaaaaaababaababbb
aabbabbbaabaabaaabaaabaa
abbabaaabbabaabaabbababaaaabbbaabaababbaabaaaaabaaaabababbbabbab
aaabbbbbbbabbaaaabaaaaab
aaaabbbbbbbbbaabbbabbbba
ababbabbabbbabbbbabaaabb
bbbaaabbaaababbbaababbbbabaabbabbbbbaaaaaaabababaaaabaabaaabbababaabababbabbbbabbbabaaba
ababababbaababaabbbaaaba
baaabbaabbbabbbaabbabbba
abaaabbbbbaaaabbabababbbbaaabaabbabaaabb
abaaaabbababbbbabaababab
baaaabbbaaabbabbaaaabaaa
baabbbaaaabbabaababbbaaa
bbbbbbbbbaaaaaabaaababbabbbbabbbabababaaaaaaabbaabbbbbabaabaabbbaaaaababaaabbabaaaaababa
bababaaabbaaababbbbbbbbabbbbbbababbbabaa
aababaaaabbabbabbababbabbaabaaba
bbbbabbabbbbababbababaaabbbbaabb
abbaaabbbaabbbbabbbabbab
baaaabbbbaababbabababbbb
aaaabbabbabbbbbbbbabbbaa
bababbababbbbbabbbbabbab
abbabbabbbbabbaaabbbabba
ababbabbbaabbbbbababaaab
abbabbabbbabaabaabbabbababaabbaabaaaaaaa
abbbababbbaabbabaabbbaaa
aaaababbabbbbaaaabbabbaa
bbabbaaaabbbbbbbbbbabbbbbaaaaabbbbbbbaba
baabbabbbbbaabbbaabbababbbababba
baabbbaaaaaabbbbaabbabba
aababaaabababaaabbaaabbabababbaaabbaabbbababaaab
bbaabbbbaaaabaababbbababbbbabbbaaababaaaabbaaaba
abaaaabaabababaaaabaabbb
aaabaabababbabbaababaaaa
babababbbbabaaababaaabbaaaaaaaaaaaaabbababbabaaabaaaabbabaaaaabbaaababbbaaaaabaaaaabbaab
ababaaaababbbaaababbbbaababbabaabaaaabaaabaabbaaabbbaababaaababbabbaabaa
abbbbbbbbaaabbababbbbbab
abbbbaaababbabaaabbbbbba
aaabbaaaabbaabbbbaaaaaaa
aaaabaabbbbbbbabbbbbbbbbbbbbbabbbbbababa
babbabaaababaabbbabbaabbaaababbb
baabbaaabaaababaabbabbbabababbaababaaabbbbbbaaaabbaabbbbabababababaabbbb
abbababbbabaaabaaaabbbbbbbaabbbbaabababbbbbbbabaaabbaaaa
bbaabbbaabbaabbbabaaaabbaabbbbaa
aaabbbbbbababbbaabbaaaba
abbbbaaababababbaaaabbba
abbaaabbabbababaaaaaabba
abbbabbbabaaaabbbabaabbbbbabbbbaabbbaabb
abbbababbabbbabbbbaaaabb
baabaaabbbbbabbbababbabbbbbababb
bbabaaabbbaabbabbbaabbbbbbbbabbbbbbbababbbaaabaa
babbabaaaaababbbbaaababaaaaabbbbaabbbaababbaabaabbbaabab
bbbbababaabaaabaabaaaaabababbbbbbabbaaaaaabaabaa
bbbabbbaaaabbbaabbaaaabaaabbaaba
bbabaabaabaabbbbaaabbaba
bbaababaaaaabbabbbabbbaa
bbbbbbbababababaaabbbbab
abaabaaaaaabbabbbaaababb
bbaaaabababaaaaabaaaaabb
bbbaabaaabaabaaabbbbbaabbbaaababaaaaabbbabbabbbaaababbaa
baabbbbbabbbaaaaaaaaabba
aaaaaabaaabaabbaabbabbaa
abaaabbaabbaabbbbbbabbbabbaaabababaabbaaabbbaaabbaabbbab
abaabbababbababbabbbbaaaababbabbabbabbabbaababbb
abababbababbbaabbbbababa
babaabbbbbaabaaabaabaaba
bbaaabbbbbbababbaaabababaabbaaabaabaabbb
abbaaabbbabbaabbabbaabaa
abababbaaabaabbaabbbbaba
abaabaaababaabbbbbbbbbaaaabbaaba
abaababbabbabaaaaabbaabb
baababaaabbabaaaabababaabbaaabababaababaaabbabab
aaaaabaababbaababaabbaba
aaabbbbbbbbbbbaaabbbbabb
aaaabaabbbbbbabbbbbbbaba
bbbbbabbabbbbaaaababaaba
bbabbaabbabbaababbbaabbb
bbabaaabbabbabbbaabaabab
babbbaababaabbbbbabbbbbbbaaaababbbaaaaab
babbabbbababababbbbabaaa
aaaaaabaaababaaababbaababababbaabaaaabbaabbbbaba
aababaabbbabbababbbbabaa
babbaabbbabbabaaabbabbaa
babbbbabbbaabaabbaaababbbbbbbbbaabbbbbbbaaaabbbb
aabbabaaaababbbbbabbaababbbabaaa
abaabbababababbababaabab
baababaaaaabbbbaaaabaabb
bbbabbaabbabaabaabaaabaa
bbbabbbbbbbbbbabbbbbaaab
baabbbbababaaabaaaabaaaabbbaabab
aabaaababbabaaabbaabbbab
aaabbabbbbabaaabbababaaababbbbaabbaaababbabbbbbbabbbabaabbaaaaab
abaababbbabaaabababaabba
bbabbbbbbbbabaaaabaabababaababbbaabbaaabbaaababbbbbabbba
baabbabbbabbbbababbabbababbabababbaabbabaaaaabaaababaabaabababab
baaaaaababaaabbbaababbaa
aaabbbbaabababaaaaababab
baaaabbbbabaabbbbaaaabba
abbbabababbbbaaabbabbabaaabaabbbbbababba
bbaabbabbbbaaabbabababaababbbaabaabbbbaa
bababbabaabbbaabbbbbbaba
aaaabbbbbbbbbbabaabbbaba
baaabaaabbabbaaabababbbbbbbbababbbabaaabaabaabbabbbbbbababbababb
baaabbaaabaababbaabababaaaaababbbaaabaab
aababaabbbaaababbbbaabba
bbbabbbbbabbbaabbbbbbbabaaabbabaabbbbbba
ababababaabbabbbbbaabbbbaabaabbb
aabaaabaaaaabaabbabaaabb
bbbbaaaaababababbabbbbbbbabaabbbabbaaaba
bbaaaababbbabaabaababbba
bbaabbabbabaaaaabababbaababbbbbb
baaaaababaabababaaabaabbbabaabbbbabaabbbbbbbbaab
abbabaaabbbbbabbbbbaaaba
babbbabbabaabbbaaaababbb
abababaabababbbaabbaabba
babbabbbabbbaaaabbaabbaa
babbbbabbaababbaababbaba
bbbbaaaabbbbabbbbbaaabaa
bbababbbbabbbbabaaaabaabaabbbbbbaaaabbaa
bbbbbbabababbabbaaabbbaabbbaabbabaaaabab
aaabaaaaabababbabaaabaaa
ababaabbaabaabbaababbbaa
babababaabaabbaabbaaabaa
bbaaaababaabbbaaaabbbaabaababbabbbbbbaababababababbabaab
bbababbbaabaabbabbaabbbbaaabbabbbabbbaaa
aaaababbabbababbaababaaabbabbbab
bbabbaaaaabaaaabbbbabaaa
aaaaabaaaaabbbaaabbabbba
abbbaababbbbbbabbbaabababbbbaaab
babbabaaababbabbabbaaaab
babaaabaaaaaaabaabbabbbb
bababbaabbababbbaabaaababbaabbabaababbbbaabbbaabbbbababb
aaaaaaabbbbabbaaabbbabab
bbabaabaaabbabbbbaaababa
abbabbabbbbaabaaaaaababa
bbbabbbbabbbbaaabaaabbbb
babbbabbbbbbabbbaabbbbaa
baaaabbbaaababbaababaaaa
aaaaaabababbbbabbababaab
bbaabbbbabbababababbaabbbbbbabaa
baabaaabbbbaaabbaabbbbba
bbabaababbaabbbbbbbabbab
bababbabaababbabbaabbabb
aaabbabbaababaabababaaaa
baababbaabaabbbbabbbaababbababbbbaabbababbbababaabbaaaba
aababaaaaaabaaabaaaabaabaabaabbbbbbababa
abbbbaaaaaabbbbaabaabbbababaaabbababaaaa
abbbabbbaaaababbbbbbabaa
bbabbaaababaabaaaaabaabb
aabaaababbabbaaabbaabbbbaabaaaabbaaabbabbaaaaababaababbbbbaaabbb
aaabbbbabaaaabbbbbababba
aaaabbbababbabaaabbabbbbaaabbaaaabbababbbaabbbab
aaabbbaaababbbbabbbbaaab
aaaababbaaabbabbaababbba
babbbbbbbaababaabbbbbaba
abbbaaaababbbabbbabbbaaa
aabbbaabababababbbbbbbaabbbbbabbbaabbabb
aaabbbaabaaabbabaababbba
abbbaabaaaabbbbabbbbbbababbaaaba
bbbabaabbabbbabbbabababb
aaaaaaabbbababbbbbaaaaab
abbabbbbbaabbbbbaaababbbbabbbbabbaabbabb
aabaabbabbbbaabaaaaaaaabbababababaaabbaabbaababbbbbbbaaabaaaabbabbbbbaba
aaaabaababaaaaaabaaaabba
bbbaaabbababababbbbbbaaa
abbbabababaabbbabbbbaababbbaaabbbbbbbbbaaabaaabb
bbaaaabaababaabbaaabaabb
aaaabbabaaabbabbbbbbabbaabababaaabaabbabbaabbaba
bbababbbbaaaabbbababaaaa
bbababbbabaaaabababaabab
aababababaababbaabbaaaba
baabbbaaabaabbbbaabbabbbabaabbbaaaabbaab
bbbbbaabbabbabbabbbabbbbabbbbbaaaaaaabba
baaaabbbbbbabbaabbbaabab
abbbabbbbbbbbabbbabababaabbbbbbbbababaaababbaaab
abbaabaaaabbabaabbbaaabaabbbbaabaabbaababbaababbbaaabaaaaabbaaaa
baaabbabababbbabbaabaaaa
aaabaabaaababbbbababbaba
bbaabbbaaaaababbababaaaa
abbbbaaabaaaaaabbbbaabab
abbbbbaaababbbababbaabaa
ababbabbbbbabbbbbbabbabb
bbbbbbaaaaaaaabaaaabbaab
aababbababaaababbbbbaaaabbbaabbaababbaba
aaababbaabbabababbbababa
abbabbabaaaaaabaabababaababbbaabbbabbaab
aabaaababbabaaabbaaabaab
aaabbbbaabbbbbaaabaaabaa
aaabaaaababbbaabaabbaaba
abaaaabaaabbbaabaabaabab
babaabbaabbbbbbbabbabaaababaaabbbbbababa
babbaababbbaaaababbbabbbabbaaabaabbaabaa
abaabbbabbbbaaaabbbbbbbbbbbabbaaabbaaabbaabaababbaabbbab
bbaaaaaaaabbabbbabaaaabbaaaabbaa
bbaabbbbbbaababbaaaaaaaabbbaaabaaaababbbbbbaaaababbbabbababaaaabbbbaabbaabaabbbaabbaaaaa
bbabaababbaabaaababbbaaa
aaaababbaaabaaabaaaabbba
aaaabaabbabbabbabbaabaaaabbaabbbaaaaabba
bbaabbbbabaababbbabbaababbbbbbaabaabaaababaabababbbababb
aaaaabbbaabbabbbabaaabbaababbbbbaaabbbbbbbabaaabbabaaaabbbbbaabb
bbbbaababababbaaababbbabaaaabbaa
abbbbaaaaababbabbbababaaaaabbbabbbaabaabbaaabaab
abaabaaaaabaabbaaaabbaaaabbbbabb
bbabaabaaaaaaaabbbbababa
bbbbbabbabababaaabbaaaab
aaabbbabbaabababbbabbbbaabbbaaaaaaabbbab
abbababaabaabbbaaaaabaaa
bbbabbaaaabbbaabaaabaaabbbbbabaa
abbababaabaaababbbbaaaba
babaabbaabaaabbbbabbabbaaabbbaaa
aaabaabaabaaababbabbbbbbbaabbabbabbabbbbbbaabaaabbaababbaaaaaaaaaaaaaabbbbbabaaa
babbbabbabbbaaaaabbaabbabbbabbabbbababbaaabaaaaa
bbbbbbababbaaabbbaaaabab
aaaabbbbbbaabbabababbaba
abaababbbabbbbabbabbaaab
ababbaaaabbbbbaaaaabbabbbbaabbabbaababbb
aaabbbbababaaababaaabaab
bbbbbbbabbaabaaabaaaabbbbabaabbbaaabaabbbabbaaab
bbababbbbabbbaababaaaaab
baaaabbbbaabbbaabaaabbbb
abaaabbababaaaaabbababba
aaabbbaaabaabbbbbaabaaba
baabababbaababbbbaababbbaabbbbaa
aabababaaaaaaabaaaababab
aabbababaabbbbbaabbaabaabbbbbbbaaaabaababaabababbbbabaab`
];

import {getTab, log} from './util.js';
let [rulestab, tab] = getTab(test).split("\n\n").map(part => part.split('\n'));

let rules = rulestab.map(line => line.split(': ')).reduce((map, line) => {map[line[0]] = line[1].split(' | '); return map;}, {});
log(rules);
log(tab);

function zip(first, last) {
    let res = [];
    for (let start of first)
        for (let end of last)
            res.push(start+end);
    return res;
}

function buildRules(rules, rule) {
    let res = [];
    for (let part of rules[rule]) {
        if (part[0] == '"') {
            res.push(part[1]);
            break;
        }
        let r = ['']
        for (let l of part.split(' ')) {
            r = zip(r, buildRules(rules, l));
        }
        res = res.concat(r);
    }
    return res;
}

let allowedMessage = buildRules(rules, 0);

let part1 = tab.filter(line => allowedMessage.includes(line)).length;
console.log(`Result 1: ${part1}`);

rules['8'] = ['42', '42 8'];
rules['11'] = ['42 31', '42 8'];

let allowedMessage2 = buildRules(rules, 0);
let part2 = tab.filter(line => allowedMessage2.includes(line)).length;
console.log(`Result 1: ${part2}`);