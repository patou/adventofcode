let test= [
`1,9,10,3,2,3,11,0,99,30,40,50`,
`1,0,0,0,99`,
`2,3,0,3,99`,
`2,4,4,5,99,0`,
`1,1,1,4,99,5,6,0,99`,
`1101,100,-1,4,0`,
`1002,4,3,4,33`,
`3,9,8,9,10,9,4,9,99,-1,8`,
`3,9,7,9,10,9,4,9,99,-1,8`,
`3,3,1108,-1,8,3,4,3,99`,
`3,3,1107,-1,8,3,4,3,99`,
`3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9`,
`3,3,1105,-1,9,1101,0,0,12,4,12,99,1`,
`3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99`,
`3,225,1,225,6,6,1100,1,238,225,104,0,1101,40,27,224,101,-67,224,224,4,224,1002,223,8,223,1001,224,2,224,1,224,223,223,1101,33,38,225,1102,84,60,225,1101,65,62,225,1002,36,13,224,1001,224,-494,224,4,224,1002,223,8,223,1001,224,3,224,1,223,224,223,1102,86,5,224,101,-430,224,224,4,224,1002,223,8,223,101,6,224,224,1,223,224,223,1102,23,50,225,1001,44,10,224,101,-72,224,224,4,224,102,8,223,223,101,1,224,224,1,224,223,223,102,47,217,224,1001,224,-2303,224,4,224,102,8,223,223,101,2,224,224,1,223,224,223,1102,71,84,225,101,91,40,224,1001,224,-151,224,4,224,1002,223,8,223,1001,224,5,224,1,223,224,223,1101,87,91,225,1102,71,19,225,1,92,140,224,101,-134,224,224,4,224,1002,223,8,223,101,1,224,224,1,224,223,223,2,170,165,224,1001,224,-1653,224,4,224,1002,223,8,223,101,5,224,224,1,223,224,223,1101,49,32,225,4,223,99,0,0,0,677,0,0,0,0,0,0,0,0,0,0,0,1105,0,99999,1105,227,247,1105,1,99999,1005,227,99999,1005,0,256,1105,1,99999,1106,227,99999,1106,0,265,1105,1,99999,1006,0,99999,1006,227,274,1105,1,99999,1105,1,280,1105,1,99999,1,225,225,225,1101,294,0,0,105,1,0,1105,1,99999,1106,0,300,1105,1,99999,1,225,225,225,1101,314,0,0,106,0,0,1105,1,99999,1107,226,677,224,1002,223,2,223,1006,224,329,101,1,223,223,8,226,226,224,1002,223,2,223,1005,224,344,101,1,223,223,1007,677,226,224,102,2,223,223,1005,224,359,101,1,223,223,8,226,677,224,102,2,223,223,1005,224,374,101,1,223,223,1107,677,677,224,1002,223,2,223,1005,224,389,1001,223,1,223,108,226,677,224,102,2,223,223,1005,224,404,1001,223,1,223,108,677,677,224,1002,223,2,223,1006,224,419,101,1,223,223,107,677,677,224,102,2,223,223,1006,224,434,101,1,223,223,108,226,226,224,1002,223,2,223,1006,224,449,1001,223,1,223,8,677,226,224,1002,223,2,223,1005,224,464,101,1,223,223,1108,226,677,224,1002,223,2,223,1006,224,479,1001,223,1,223,1108,677,677,224,1002,223,2,223,1005,224,494,101,1,223,223,7,677,677,224,1002,223,2,223,1005,224,509,101,1,223,223,1007,677,677,224,1002,223,2,223,1005,224,524,101,1,223,223,7,677,226,224,1002,223,2,223,1005,224,539,101,1,223,223,1107,677,226,224,102,2,223,223,1006,224,554,101,1,223,223,107,226,677,224,1002,223,2,223,1005,224,569,101,1,223,223,107,226,226,224,1002,223,2,223,1005,224,584,101,1,223,223,1108,677,226,224,102,2,223,223,1006,224,599,1001,223,1,223,1008,677,677,224,102,2,223,223,1006,224,614,101,1,223,223,7,226,677,224,102,2,223,223,1005,224,629,101,1,223,223,1008,226,677,224,1002,223,2,223,1006,224,644,101,1,223,223,1007,226,226,224,1002,223,2,223,1005,224,659,1001,223,1,223,1008,226,226,224,102,2,223,223,1006,224,674,1001,223,1,223,4,223,99,226`
]

const input = process.argv[3] || 5

function getParameters(tab, pos, param, parameters) {
  for (let p = param; p > 1; p--) parameters = Math.trunc(parameters / 10)
  let mode = parameters % 10
  let address = tab[pos + param]
  return mode == 1 ? address : tab[address]
}

function calc(tab) {
  let pos = 0;
  while(true) {
    let opcode = tab[pos] % 100
    let parameters = Math.trunc(tab[pos] / 100)
    //console.error(`opcode ${tab[pos]}`)
    switch (opcode) {
      case 99: return tab
      case 1:
        tab[tab[pos+3]] = getParameters(tab, pos, 1, parameters) + getParameters(tab, pos, 2, parameters)
        pos += 4
        break;
      case 2:
        tab[tab[pos+3]] = getParameters(tab, pos, 1, parameters) * getParameters(tab, pos, 2, parameters)
        pos += 4
        break;
      case 3:
        tab[tab[pos+1]] = input
        pos += 2
        break;
      case 4:
        console.log(getParameters(tab, pos, 1, parameters))
        pos += 2
        break;
      case 5:
        //console.error(`pos = (${getParameters(tab, pos, 1, parameters)} != 0) ? ${getParameters(tab, pos, 1, parameters)} : pos + 2`)
        if (getParameters(tab, pos, 1, parameters) != 0)
          pos = getParameters(tab, pos, 2, parameters)
        else
          pos += 3
        break;
      case 6:
        //console.error(`pos = (${getParameters(tab, pos, 1, parameters)} == 0) ? ${getParameters(tab, pos, 1, parameters)} : pos + 2`)
        if (getParameters(tab, pos, 1, parameters) == 0)
          pos = getParameters(tab, pos, 2, parameters)
        else
          pos += 3
        break;
      case 7:
        tab[tab[pos+3]] = (getParameters(tab, pos, 1, parameters) < getParameters(tab, pos, 2, parameters)) ? 1 : 0
        pos += 4
        break;
      case 8:
        tab[tab[pos+3]] = (getParameters(tab, pos, 1, parameters) == getParameters(tab, pos, 2, parameters)) ? 1 : 0
        pos += 4
        break;
      default:
        console.error(`${tab[pos]} OPCODE ${opcode} not exist with ${parameters}`)
        return tab;
    }
  }
}
const version = process.argv[2] || 0
let tab = test[version].split(",").map(n => parseInt(n))
if (version != test.length - 1) console.log(tab)

let result = calc(tab)
if (version != test.length - 1) console.log(result)