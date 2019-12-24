let test = [
`....#
#..#.
#..##
..#..
#....`,
`#..#.
#.#.#
...#.
....#
#.#.#`
]

const version = process.argv[2] || 0
let input = test[version].split('\n').map(l => l.split('').map(c => c === '#' ? 1 : 0))

console.log(input)

function tohash(input) {
  let res = ''
  for (let i = input.length - 1; i >= 0; i--)
    for (let j = input[i].length - 1; j >= 0; j--)
      res += input[i][j]
  return res
}

function get(input, i, j) {
  return input[i] && input[i][j] ? input[i][j] : 0
}

function countAdj(input, i, j) {
  return get(input, i - 1, j) + get(input, i + 1, j) + get(input, i, j - 1) + get(input, i, j + 1)
}

function run(input) {
  let layouts = new Set()
  let hash = ''
  do {
    layouts.add(hash)
    let futur = new Array(input.length);
    for (let i = 0; i < input.length; i++) {
      futur[i] = new Array(input[i].length);
      for (let j = 0; j < input[i].length; j++) {
        let adj = countAdj(input, i, j);
        if (input[i][j] == 1 && adj != 1) futur[i][j] = 0
        else if (input[i][j] == 0 && (adj == 1 || adj == 2)) futur[i][j] = 1
        else futur[i][j] = input[i][j]
      }
    }
    input = futur
    console.log(input)
    hash = tohash(input)
  } while (!layouts.has(hash))
  console.log(input)
  console.log(parseInt(hash, 2))
}

run(input)

