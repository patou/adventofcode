let tab = [3,8,1005,8,310,1106,0,11,0,0,0,104,1,104,0,3,8,1002,8,-1,10,101,1,10,10,4,10,1008,8,0,10,4,10,1001,8,0,29,1,2,11,10,1,1101,2,10,2,1008,18,10,2,106,3,10,3,8,1002,8,-1,10,1001,10,1,10,4,10,1008,8,1,10,4,10,102,1,8,67,2,105,15,10,3,8,1002,8,-1,10,101,1,10,10,4,10,1008,8,0,10,4,10,1001,8,0,93,2,1001,16,10,3,8,102,-1,8,10,1001,10,1,10,4,10,1008,8,1,10,4,10,102,1,8,119,3,8,1002,8,-1,10,1001,10,1,10,4,10,1008,8,1,10,4,10,101,0,8,141,2,7,17,10,1,1103,16,10,3,8,1002,8,-1,10,101,1,10,10,4,10,108,0,8,10,4,10,102,1,8,170,3,8,1002,8,-1,10,1001,10,1,10,4,10,1008,8,1,10,4,10,1002,8,1,193,1,7,15,10,2,105,13,10,1006,0,92,1006,0,99,3,8,1002,8,-1,10,101,1,10,10,4,10,108,1,8,10,4,10,101,0,8,228,1,3,11,10,1006,0,14,1006,0,71,3,8,1002,8,-1,10,101,1,10,10,4,10,1008,8,0,10,4,10,101,0,8,261,2,2,2,10,1006,0,4,3,8,102,-1,8,10,101,1,10,10,4,10,108,0,8,10,4,10,101,0,8,289,101,1,9,9,1007,9,1049,10,1005,10,15,99,109,632,104,0,104,1,21101,0,387240009756,1,21101,327,0,0,1105,1,431,21101,0,387239486208,1,21102,1,338,0,1106,0,431,3,10,104,0,104,1,3,10,104,0,104,0,3,10,104,0,104,1,3,10,104,0,104,1,3,10,104,0,104,0,3,10,104,0,104,1,21102,3224472579,1,1,21101,0,385,0,1106,0,431,21101,0,206253952003,1,21102,396,1,0,1105,1,431,3,10,104,0,104,0,3,10,104,0,104,0,21102,709052072296,1,1,21102,419,1,0,1105,1,431,21102,1,709051962212,1,21102,430,1,0,1106,0,431,99,109,2,21202,-1,1,1,21102,1,40,2,21102,462,1,3,21102,452,1,0,1105,1,495,109,-2,2105,1,0,0,1,0,0,1,109,2,3,10,204,-1,1001,457,458,473,4,0,1001,457,1,457,108,4,457,10,1006,10,489,1101,0,0,457,109,-2,2105,1,0,0,109,4,2102,1,-1,494,1207,-3,0,10,1006,10,512,21101,0,0,-3,22101,0,-3,1,21202,-2,1,2,21102,1,1,3,21101,531,0,0,1105,1,536,109,-4,2106,0,0,109,5,1207,-3,1,10,1006,10,559,2207,-4,-2,10,1006,10,559,21202,-4,1,-4,1105,1,627,22102,1,-4,1,21201,-3,-1,2,21202,-2,2,3,21102,1,578,0,1105,1,536,21202,1,1,-4,21102,1,1,-1,2207,-4,-2,10,1006,10,597,21101,0,0,-1,22202,-2,-1,-2,2107,0,-3,10,1006,10,619,21201,-1,0,1,21102,1,619,0,106,0,494,21202,-2,-1,-2,22201,-4,-2,-4,109,-5,2106,0,0]

function getParameters(tab, pos, param, parameters, base) {
  for (let p = param; p > 1; p--) parameters = Math.trunc(parameters / 10)
  let mode = parameters % 10
  let address = tab[pos + param]
  if (mode == 1) return tab[pos + param] || 0;
  if (mode == 2) address = base + address;
  if (tab.length < address) {
    return 0;
  }
  else
    return tab[address] || 0
}

function getAddress(tab, pos, param, parameters, base) {
  for (let p = param; p > 1; p--) parameters = Math.trunc(parameters / 10)
  let mode = parameters % 10
  let address = tab[pos + param]
  if (mode == 2) return base + address
  return address
}
function log(message) {
  //console.error(message)
}

function* calc(tab, inputs) {
  log(tab)
  yield
  let input = []
  let pos = 0;
  let base = 0;
  let output;
  while(true) {
    let opcode = tab[pos] % 100
    let parameters = Math.trunc(tab[pos] / 100)

    let first = getParameters(tab, pos, 1, parameters, base)
    let second = getParameters(tab, pos, 2, parameters, base)
    let address = getAddress(tab, pos, 3, parameters, base)
    log(`${pos}:${base} - ${tab[pos]} - opcode ${opcode} with ${parameters} : ${first || 0} ${second || 0} ${address || 0} / ${tab[pos + 1] || 0},${tab[pos + 2] || 0},${tab[pos + 3] || 0}`)
    switch (opcode) {
      case 99:
      return output
      case 1:
        log(`ADD: tab[${address}] = ${first} + ${second}`)
        tab[address] = first + second
        log(`=${tab[address]}`)
        pos += 4
        break;
      case 2:
        log(`MUL: tab[${address}] = ${first} * ${second}`)
        tab[address] = first * second
        log(`=${tab[address]}`)
        pos += 4
        break;
      case 3:
        log(`INP: tab[${getAddress(tab, pos, 1, parameters, base)}] = 1`)
        tab[getAddress(tab, pos, 1, parameters, base)] = inputs.shift()
        log(`=${tab[address]}`)
        pos += 2
        break;
      case 4:
        log(`OUT: ${first}`)
        output = first
        log(output)
        yield output
        pos += 2
        break;
      case 5:
        log(`NZE: if (${first} !== 0) pos = ${second}`)
        if (first !== 0)
          pos = second
        else
          pos += 3
        break;
      case 6:
        log(`IZE: if (${first} === 0) pos = ${second}`)
        if (first === 0)
          pos = second
        else
          pos += 3
        break;
      case 7:
        log(`ILT: tab[${address}] = (${first} < ${second}) ? 1 : 0`)
        tab[address] = first < second ? 1 : 0
        log(`=${tab[address]}`)
        pos += 4
        break;
      case 8:
        log(`IEQ: tab[${address}] = (${first} == ${second}) ? 1 : 0`)
        tab[address] = first === second ? 1 : 0
        log(`=${tab[address]}`)
        pos += 4
        break;
      case 9:
        log(`BIN: base = ${base} + ${first}`)
        base += first;
        pos += 2
        break;
      default:
        log(`${tab[pos]} OPCODE ${opcode} not exist with ${parameters}`)
        return undefined;
    }
  }
}
let input = []
let program = calc(tab, input)
program.next()

const map = new Array(60);
for (let i = 0; i < 60; i++) map[i] = new Array(80).fill(null);

let finished = false
let y = 25;
let x = 60;
let direction = '^'
let counted = 1;
minx = 0;
miny = 0;
maxx = 0;
maxy = 0;
map[y][x] = process.argv[2];
while (true) {
  minx = Math.min(minx, x)
  miny = Math.min(miny, y)
  maxx = Math.max(maxx, x)
  maxy = Math.max(maxy, y)
  input.push(map[y][x] || 0)
  let output = program.next()
  if (output.done) break;
  //if (!map[x]) map[x] = new Array(60).fill(null);
  if (map[y][x] === null) counted++
  map[y][x] = output.value;
  //console.log(`${x}:${y} ${output.value}`)
  output = program.next()
  if (output.done) break;
  switch(direction) {
    case "^":
      if (output.value) {
        x++;
        direction = "<"
      }
      else {
        x--;
        direction = ">"
      }
      break;
    case "<":
      if (output.value) {
        y++;
        direction = "v"
      }
      else {
        y--;
        direction = "^"
      }
      break;
    case "v":
      if (output.value) {
        x--;
        direction = ">"
      }
      else {
        x++;
        direction = "<"
      }
      break;
    case ">":
      if (output.value) {
        y--;
        direction = "^"
      }
      else {
        y++;
        direction = "v"
      }
      break;
  }
  //console.log(`${direction}`)
}

console.log(counted);
console.log(`${minx} ${miny} ${maxx} ${maxy}`)
console.log(map.map(tab => tab.map(val => val ? '█' : ' ').join('') ).join('\n'))