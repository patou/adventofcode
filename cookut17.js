/*
L'ancêtre Louis a vécu pendant notre ère.
L'année de sa naissance et celle de sa mort sont différentes.
Mais ces années sont constituées des mêmes chiffres.
La somme de ces chiffres donne le siècle de sa mort.
Le produit de ces chiffres donne l`âge qu'il avait à sa mort.

Alors en quelle année Louis est il né
*/

let res = 0
for (let n = 1800; n < 2000; n++) {
   const digits = String(n)
  .split('')
  .map(Number);
  const sum = digits.reduce((a, b) => a + b, 0)
  const product = digits.reduce((a, b) => a * b, 1)
  const siecle = digits[0] * 10 + digits[1] + 1
  if (sum ===  siecle && product > 50 && product < 100) {
    if ((n - product) % 100 === digits[3] * 10 + digits[2]) {
      console.log(`${n - product} => ${n}`)
      res = digits[2]
    }
  }
}
console.log(res)
