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

function calchash(moons, axis) {
  return moons.map(moon => pad(moon[axis]) + pad(moon['v'+axis])).reduce((a, b) => a+b)
}

let input = test[process.argv[2] || 0]
let set = new Set()

printMoon(0)
let data = {x:0, y:0, z:0};

for (let axis of ['x', 'y', 'z']){
  let initial = calchash(input.moons, axis)
  for (let step = 1; true; step++) {
    for (let moon of input.moons) {
      for (let attrMoon of input.moons) {
        if (moon === attrMoon) continue
        moon['v'+axis] += gravity(moon[axis], attrMoon[axis])
      }
    }
    for (let moon of input.moons) {
      moon[axis] += moon['v'+axis]
    }
    if (calchash(input.moons, axis) === initial) {
      data[axis] = step;
      break;
    }
  }
}

function pgcd(a, b) {
  while (b != 0) {
    let c = b;
    b = a % b;
    a = c;
  }
  return a;
}

function ppcm(a, b) {
  if (a === 0 || b === 0) return 0;
  else return (a * b) / pgcd(a, b)
}

console.log(data)
let total = ppcm(ppcm(data.x, data.y), data.z)

console.log(total);