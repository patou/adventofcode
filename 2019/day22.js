let test = [
  {
    rules: `deal with increment 7
    deal into new stack
    deal into new stack`,
    max: 10,
    result: '0 3 6 9 2 5 8 1 4 7'
  },
  {
    rules: `cut 6
    deal with increment 7
    deal into new stack`,
    max: 10,
    result: '3 0 7 4 1 8 5 2 9 6'
  },
  {
    rules: `deal with increment 7
    deal with increment 9
    cut -2`,
    max: 10,
    result: '6 3 0 7 4 1 8 5 2 9'
  },
  {
    rules: `deal into new stack
    cut -10`,
    max: 20,
    result: '9 8 7 6 5 4 3 2 1 0 19 18 17 16 15 14 13 12 11 10'
  },
  {
    rules: `deal into new stack
    cut -2
    deal with increment 7
    cut 8
    cut -4
    deal with increment 7
    cut 3
    deal with increment 9
    deal with increment 3
    cut -1`,
    max: 10,
    result: '9 2 5 8 1 4 7 0 3 6'
  },
  {
    rules: `deal with increment 73
    cut -6744
    deal into new stack
    cut 9675
    deal with increment 63
    cut -8047
    deal with increment 21
    cut -4726
    deal with increment 39
    cut -537
    deal with increment 39
    cut -6921
    deal with increment 15
    cut 2673
    deal into new stack
    cut 2483
    deal with increment 66
    deal into new stack
    cut 1028
    deal with increment 48
    deal into new stack
    cut -418
    deal with increment 15
    cut 9192
    deal with increment 62
    deal into new stack
    deal with increment 23
    cut 2840
    deal with increment 50
    cut 6222
    deal with increment 20
    deal into new stack
    cut -6855
    deal with increment 50
    cut -1745
    deal with increment 27
    cut 4488
    deal with increment 71
    deal into new stack
    deal with increment 28
    cut -2707
    deal with increment 40
    deal into new stack
    deal with increment 32
    cut 8171
    deal with increment 74
    deal into new stack
    cut -2070
    deal with increment 61
    deal into new stack
    deal with increment 46
    cut 4698
    deal with increment 23
    cut -3480
    deal with increment 30
    cut -6662
    deal with increment 53
    cut -5283
    deal with increment 43
    deal into new stack
    cut -1319
    deal with increment 9
    cut -8990
    deal into new stack
    deal with increment 9
    deal into new stack
    cut -5058
    deal with increment 28
    cut -7975
    deal with increment 57
    cut 2766
    deal with increment 19
    cut 8579
    deal into new stack
    deal with increment 22
    deal into new stack
    cut 9835
    deal with increment 36
    cut -2485
    deal with increment 52
    cut -5818
    deal with increment 9
    cut 5946
    deal with increment 51
    deal into new stack
    cut -5600
    deal with increment 75
    cut -9885
    deal with increment 27
    cut -2942
    deal with increment 68
    cut 3874
    deal with increment 36
    deal into new stack
    deal with increment 20
    cut -2565
    deal with increment 17
    cut -9109
    deal with increment 62
    cut 2175`,
    max: 10007,
    result: ''
  }
]
let version = process.argv[2] || 0
let input = test[version]
let versionPart = test.length - 1

let deck = new Array(input.max).fill(0).map((el, index) => index)
console.log(`Init:\t\t${deck.join(' ')}`)
function buildRules(rules) {
  return rules.split('\n').map(line => {
    let type
    let valueMatch = line.match( /-?\d+/g )
    if (line.includes('deal with increment')) type = 'increment'
    if (line.includes('deal into new stack')) type = 'reverse'
    if (line.includes('cut')) type = 'cut'
    return { type, value: valueMatch ? parseInt(valueMatch[0]) : 0 }
  })
}

function shuflle(rules, deck) {
  for (rule of rules) {
    switch (rule.type) {
      case 'reverse':
        deck = deck.reverse();
        break;
      case 'cut':
        deck = deck.slice(rule.value).concat(deck.slice(0, rule.value))
        break;
      case 'increment':
        let res = new Array(deck.length)
        for (let i = pos = 0; i < deck.length; i++, pos = (pos + rule.value) % deck.length) {
          res[pos] = deck[i]
        }
        deck = res;
        break;
    }
    console.log(`${rule.type} (${rule.value}):\t${deck.slice(0, 100).join(' ')}`)
  }
  return deck;
}

let rules = buildRules(input.rules);

console.log(rules)

deck = shuflle(rules, deck)
if (version < versionPart) {
  console.log()
  console.log(`Result:\t\t${deck.join(' ')}`)

  if (input.result)
    console.log(`Correction:\t${input.result}`)
}
else {
  console.log(deck.indexOf(2019))
}