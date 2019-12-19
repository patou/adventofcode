let tab = [109,424,203,1,21101,11,0,0,1105,1,282,21101,0,18,0,1106,0,259,1202,1,1,221,203,1,21101,0,31,0,1105,1,282,21102,1,38,0,1106,0,259,20101,0,23,2,22102,1,1,3,21101,1,0,1,21101,0,57,0,1106,0,303,1202,1,1,222,21002,221,1,3,21001,221,0,2,21102,1,259,1,21101,80,0,0,1105,1,225,21102,1,117,2,21102,1,91,0,1105,1,303,1202,1,1,223,20102,1,222,4,21101,0,259,3,21101,0,225,2,21101,225,0,1,21101,118,0,0,1105,1,225,21001,222,0,3,21101,20,0,2,21102,1,133,0,1105,1,303,21202,1,-1,1,22001,223,1,1,21101,0,148,0,1106,0,259,2101,0,1,223,20102,1,221,4,21001,222,0,3,21101,0,16,2,1001,132,-2,224,1002,224,2,224,1001,224,3,224,1002,132,-1,132,1,224,132,224,21001,224,1,1,21102,195,1,0,105,1,108,20207,1,223,2,21002,23,1,1,21102,-1,1,3,21101,0,214,0,1105,1,303,22101,1,1,1,204,1,99,0,0,0,0,109,5,1201,-4,0,249,22102,1,-3,1,22101,0,-2,2,21202,-1,1,3,21102,1,250,0,1106,0,225,22102,1,1,-4,109,-5,2105,1,0,109,3,22107,0,-2,-1,21202,-1,2,-1,21201,-1,-1,-1,22202,-1,-2,-2,109,-3,2106,0,0,109,3,21207,-2,0,-1,1206,-1,294,104,0,99,21202,-2,1,-2,109,-3,2105,1,0,109,5,22207,-3,-4,-1,1206,-1,346,22201,-4,-3,-4,21202,-3,-1,-1,22201,-4,-1,2,21202,2,-1,-1,22201,-4,-1,1,21201,-2,0,3,21101,343,0,0,1105,1,303,1105,1,415,22207,-2,-3,-1,1206,-1,387,22201,-3,-2,-3,21202,-2,-1,-1,22201,-3,-1,3,21202,3,-1,-1,22201,-3,-1,2,21201,-4,0,1,21101,0,384,0,1105,1,303,1105,1,415,21202,-4,-1,-4,22201,-4,-3,-4,22202,-3,-2,-2,22202,-2,-4,-4,22202,-3,-2,-3,21202,-4,-1,-2,22201,-3,-2,1,22101,0,1,-4,109,-5,2105,1,0]
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
  //console.log(message)
}

function calc(tab, input = []) {
  log(tab)
  //let input = []
  //input.push(...yield)
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
        log(`INP: tab[${getAddress(tab, pos, 1, parameters, base)}] = ${input[0]}`)
        tab[getAddress(tab, pos, 1, parameters, base)] = input.shift()
        pos += 2
        break;
      case 4:
        log(`OUT: ${first}`)
        output = first
        log(output)
        //let n = yield output
        //input.push(...n)
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


async function play() {
  let next = 0
  let max = 2000;
  let size = 99;
  let map = new Array(max)
  let number = 0;
  let result = 0;
  let minstart = 0;
  start: for (let y = 0; y < map.length; y++) {
    map[y] = new Array(max).fill(0)
    let found = false;
    for (let x = minstart; x < map[y].length; x++) {
      next = calc([...tab], [x, y])
      map[y][x] = next;
      if (next === 1) {
        if (!found) minstart = x - 1;
        found = true
        if (x < 50 && y < 50)
          number++
        else {
          if (x > size && y > size && map[y - size][x] === 1 && map[y][x - size] === 1 && map[y - size][x - size] === 1) {
            result = 10000 * (x - size) + (y - size);
            break start;
          }
        }
      }
      else {
        if (found) break;
      }
      //console.log(`${y}:${x} ${next}`)
    }
  }
  //display(map)
  console.log(`part 1 = ${number}`)
  console.log(`part 2 = ${result}`)
}

function display(map) {
  process.stdout.write('\033c')
  console.log(map.map(l => l.map(n => n === 1 ? '#' : '.').join('')).join('\n'))
}
play()