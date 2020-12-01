function checkPass(pass) {
  if (pass.length != 6) return false;
  let nbDouble = 1;
  let hasDouble = false;
  let lastChar = '';
  for (const c of pass) {
    //console.log(c)
    if (c == lastChar) {
      nbDouble++;
      //console.log("nbDouble++")
    }
    else if (nbDouble == 2)
    {
      hasDouble = true;
      //console.log("has double")
    }
    else {
      nbDouble = 1;
      //console.log("nbDouble=1")
    }

    if (c < lastChar) return false;
    lastChar = c;
  }
  return hasDouble || nbDouble == 2
}

console.log(checkPass(process.argv[2] || "123456"))

let count = 0
for (let n = 254032; n < 789860; n++) {
  if (checkPass(n.toString())){
    count++;
    console.log(n)
  }
}
console.log(count)
