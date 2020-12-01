let test = [
{input: `12345678`, phases: 4, result: `01029498`},
{input: `80871224585914546619083218645595`, phases: 100, result: `24176176`},
{input: `19617804207202209144916044189917`, phases: 100, result: `73745418`},
{input: `69317163492948606335995924319873`, phases: 100, result: `52432133`},
{input: `59776034095811644545367793179989602140948714406234694972894485066523525742503986771912019032922788494900655855458086979764617375580802558963587025784918882219610831940992399201782385674223284411499237619800193879768668210162176394607502218602633153772062973149533650562554942574593878073238232563649673858167635378695190356159796342204759393156294658366279922734213385144895116649768185966866202413314939692174223210484933678866478944104978890019728562001417746656699281992028356004888860103805472866615243544781377748654471750560830099048747570925902575765054898899512303917159138097375338444610809891667094051108359134017128028174230720398965960712`, phases: 100, result: ``}
]

let version = process.argv[2] || 0
let input = test[version]

function* generatePattern(position, max) {
  let i = 0;
  while (i <= max) {
    for (let p of [0, 1, 0, -1]) {
      for (let pos = 0; pos < position; pos++) {
        if (i++ == 0)
          continue
        if (i > max + 1) return
        yield p
      }
    }
  }
}
function calcPhases(input, phases){
  let signal = input.split('')
  let length = signal.length;
  for (let phase = 0; phase < phases; phase++){
    let result = new Array(length)
    for (let i = 0; i < length; i++) {
      let pattern = generatePattern(i + 1, length)
      let total = 0;
      for (let n = 0; n < length; n++) {
        let p = pattern.next();
        total += p.value * signal[n]
      }
      result[i] = Math.abs(total) % 10
    }
    signal = result;
    console.log(`${phase}: ${signal.slice(0, 8).join('')}`)
  }
  return signal.slice(0, 8).join('')
}

console.log(calcPhases(input.input, input.phases))