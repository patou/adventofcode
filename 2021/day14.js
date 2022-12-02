let test = [
    `NNCB

    CH -> B
    HH -> N
    CB -> H
    NH -> C
    HB -> C
    HC -> B
    HN -> C
    NN -> C
    BH -> H
    NC -> B
    NB -> B
    BN -> B
    BB -> N
    BC -> B
    CC -> N
    CN -> C`,
    `SVCHKVFKCSHVFNBKKPOC

    NC -> H
    PK -> V
    SO -> C
    PH -> F
    FP -> N
    PN -> B
    NP -> V
    NK -> S
    FV -> P
    SB -> S
    VN -> F
    SC -> H
    OB -> F
    ON -> O
    HN -> V
    HC -> F
    SN -> K
    CB -> H
    OP -> K
    HP -> H
    KS -> S
    BC -> S
    VB -> V
    FC -> B
    BH -> C
    HH -> O
    KH -> S
    VF -> F
    PF -> P
    VV -> F
    PP -> V
    BO -> H
    BF -> B
    PS -> K
    FO -> O
    KF -> O
    FN -> H
    CK -> B
    VP -> V
    HK -> F
    OV -> P
    CS -> V
    FF -> P
    OH -> N
    VS -> H
    VO -> O
    CP -> O
    KC -> V
    KV -> P
    BK -> B
    VK -> S
    NF -> V
    OO -> V
    FH -> H
    CN -> O
    SP -> B
    KN -> V
    OF -> H
    NV -> H
    FK -> B
    PV -> N
    NB -> B
    KK -> P
    VH -> P
    CC -> B
    HV -> V
    OC -> H
    PO -> V
    NO -> O
    BP -> C
    NH -> H
    BN -> O
    BV -> S
    CV -> B
    HS -> O
    NN -> S
    NS -> P
    KB -> F
    CO -> H
    HO -> P
    PB -> B
    BS -> P
    SH -> H
    FS -> V
    SF -> O
    OK -> F
    KP -> S
    BB -> C
    PC -> B
    OS -> C
    SV -> N
    SK -> K
    KO -> C
    SS -> V
    CF -> C
    HB -> K
    VC -> B
    CH -> P
    HF -> K
    FB -> V`
];

import {getTab, log} from './util.js';

let [template, rules] = getTab(test).split('\n\n').map(parts => parts.split('\n').map(line => line.trim()))

template = template[0].split('')
rules = rules.map(line => line.split(' -> ')).reduce((map, item) => {
    map.set(item[0], item[1])
    return map
}, new Map())
log(template);
log(rules);

function compute(template, rules) {
    let polymer = [...template]
    for (let step = 1; step <= 10; step++) {
        let poly = []
        for (let i = 0; i < polymer.length - 1; i++) {
            let a = polymer[i]
            let b = polymer[i + 1]
            let inter = rules.get(a + b)
            poly.push(a, inter)
        }
        poly.push(polymer[polymer.length - 1])
        polymer = poly
        if (step < 5)
            log(`Step ${step}: ${polymer.join('')}`)
    }
    let map = {}

    for (const char of polymer) {
        if (!map[char]) {
            map[char] = 0
        }
        map[char]++;
    }
    let counts = Object.values(map)
    let min = Math.min(...counts)
    let max = Math.max(...counts)
    log(`Length : ${polymer.length} min : ${min} max : ${max} `)
    return max - min;
}

console.log('Résultat 1: ', compute(template, rules));

