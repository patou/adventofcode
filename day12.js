let test = [
{moons:processMoon(`<x=-1, y=0, z=2>
<x=2, y=-10, z=-7>
<x=4, y=-8, z=8>
<x=3, y=5, z=-1>`),steps:10, incr: 1, pad: 2, total: 179},
{moons:processMoon(`<x=-8, y=-10, z=0>
<x=5, y=5, z=10>
<x=2, y=-7, z=3>
<x=9, y=-8, z=-3>`),steps:100, incr: 10, pad: 3, total: 1940},
{moons:processMoon(`<x=-7, y=-8, z=9>
<x=-12, y=-3, z=-4>
<x=6, y=-17, z=-9>
<x=4, y=-10, z=-6>`),steps:1000, incr: 100, pad: 3, total: undefined},
]

function processMoon(input) {
  return input.split('\n').map(intp => {
    let result = intp.match(/<x=(.*), y=(.*), z=(.*)/)
    return {
      x: parseInt(result[1]),
      y: parseInt(result[2]),
      z: parseInt(result[3]),
      vx:0,
      vy:0,
      vz:0,
    }
  })
}

function gravity(x1, x2) {
  if (x1 == x2) return 0;
  if (x1 < x2) return 1;
  if (x1 > x2) return -1;
}

function pad(n) {
  return n.toString().padStart(input.pad, " ");
}

function printMoon(step) {
  console.log(`After ${step} steps:`);
  for (let moon of input.moons)
    console.log(`pos=<x=${pad(moon.x)}, y=${pad(moon.y)}, z=${pad(moon.z)}>, vel=<x=${pad(moon.vx)}, y=${pad(moon.vy)}, z=${pad(moon.vz)}>`)
  console.log('')
}

let input = test[process.argv[2] || 0]

printMoon(0)
for (let step = 1; step <= input.steps; step++) {
  for (let moon of input.moons) {
    for (let attrMoon of input.moons) {
      if (moon === attrMoon) continue
      moon.vx += gravity(moon.x, attrMoon.x)
      moon.vy += gravity(moon.y, attrMoon.y)
      moon.vz += gravity(moon.z, attrMoon.z)
    }
  }
  for (let moon of input.moons) {
    moon.x += moon.vx;
    moon.y += moon.vy;
    moon.z += moon.vz;
  }
  if (step % input.incr == 0) {
    printMoon(step)
  }
}

console.log(`Energy after ${input.steps} steps:`)
let total = 0;
for (let moon of input.moons) {
  let pot = Math.abs(moon.x) + Math.abs(moon.y) + Math.abs(moon.z)
  let kin = Math.abs(moon.vx) + Math.abs(moon.vy) + Math.abs(moon.vz)
  total += pot * kin;
  console.log(`pot: ${pad(moon.x)} + ${pad(moon.y)} + ${pad(moon.z)} = ${pad(pot)}; kin: ${pad(moon.vx)} + ${pad(moon.vy)} + ${pad(moon.vz)} = ${pad(kin)}; total: ${pad(pot)} + ${pad(kin)} = ${pad(pot * kin)}`)
}
console.log(total);