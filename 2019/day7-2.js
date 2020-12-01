let test= [
[`3,26,1001,26,-4,26,3,27,1002,27,2,27,1,27,26,27,4,27,1001,28,-1,28,1005,28,6,99,0,0,5`, [9,8,7,6,5]],
[`3,52,1001,52,-5,52,3,53,1,52,56,54,1007,54,5,55,1005,55,26,1001,54,-5,54,1105,1,12,1,53,54,53,1008,54,0,55,1001,55,1,55,2,53,55,53,4,53,1001,56,-1,56,1005,56,6,99,0,0,0,0,10`,[9,7,8,5,6]],
]

const input = process.argv[3] || 5

function getParameters(tab, pos, param, parameters) {
  for (let p = param; p > 1; p--) parameters = Math.trunc(parameters / 10)
  let mode = parameters % 10
  let address = tab[pos + param]
  return mode == 1 ? address : tab[address]
}

function* calc(tab, inputs) {
  //console.error(tab)
  //console.error(inputs)
  let pos = 0;
  let output;
  inputs.push(yield)
  while(true) {
    let opcode = tab[pos] % 100
    let parameters = Math.trunc(tab[pos] / 100)
    //console.error(`opcode ${tab[pos]}`)
    switch (opcode) {
      case 99: return
      case 1:
        tab[tab[pos+3]] = getParameters(tab, pos, 1, parameters) + getParameters(tab, pos, 2, parameters)
        pos += 4
        break;
      case 2:
        tab[tab[pos+3]] = getParameters(tab, pos, 1, parameters) * getParameters(tab, pos, 2, parameters)
        pos += 4
        break;
      case 3:
        tab[tab[pos+1]] = inputs.shift()
        pos += 2
        break;
      case 4:
        output = getParameters(tab, pos, 1, parameters)
        console.log(output)
        pos += 2
        inputs.push(yield output)
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
        //console.error(`${tab[pos]} OPCODE ${opcode} not exist with ${parameters}`)
        return undefined;
    }
  }
}

function runAmp(prog, inputs) {
  let computers = inputs.map(seq => {
    let computer = calc(prog.split(',').map(n => parseInt(n)), [seq])
    computer.next()
    return computer
  })
  //console.log(`runAmp("...", [${inputs}])`)

  let output = 0
  let finished = false
  while(!finished)
    for (let computer of computers) {
      let next = computer.next(output)
      output = next.done ? output : next.value
      finished = next.done
    }
  return output
}

const version = process.argv[2] || 0
if (version < test.length) {
  let inputs = test[version][1]
  runAmp(test[version][0], inputs)
}
else {
  let max = 0
  let prog = `3,8,1001,8,10,8,105,1,0,0,21,46,63,76,97,118,199,280,361,442,99999,3,9,102,4,9,9,101,2,9,9,1002,9,5,9,101,4,9,9,102,2,9,9,4,9,99,3,9,101,5,9,9,102,3,9,9,101,3,9,9,4,9,99,3,9,1001,9,2,9,102,3,9,9,4,9,99,3,9,1002,9,5,9,101,4,9,9,1002,9,3,9,101,2,9,9,4,9,99,3,9,1002,9,5,9,101,3,9,9,1002,9,5,9,1001,9,5,9,4,9,99,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,1,9,4,9,3,9,101,1,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,99,3,9,1002,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,101,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,102,2,9,9,4,9,99,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,101,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,101,1,9,9,4,9,99,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,1001,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,101,2,9,9,4,9,99,3,9,101,1,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,101,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,101,2,9,9,4,9,99`
  for (let i = 5; i <= 9; i++)
    for (let j = 5; j <= 9; j++)
      for (let k = 5; k <= 9; k++)
       for (let l = 5; l <= 9; l++)
         for (let m = 5; m <= 9; m++) {
            let inputs = [i, j, k, l, m]
            //console.log(inputs)
            if (new Set(inputs).size == inputs.length) {
             let result = runAmp(prog, inputs)
             if (result == undefined) {
               console.error(`seq ${inputs} not work`)
               continue
             }
             max = Math.max(max, result)
            }
          }
  console.log(`max=${max}`)
}