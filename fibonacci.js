

const fibRec = function (x, index = 0, result = [0, 1]) {
  if(x <= 2) return result;
  if(x === index + 2) return result;

  if (x > 2) {
    result.push(result[index] + result[index + 1]);
    fibRec(x, index + 1, result);
  }

  return result;

}

function fibs(num) {
  let unitairies = [0, 1];
  if(num <= 2) return unitairies;
  for(let i = 3; i <= num; i++) {
    let next = unitairies[unitairies.length - 1] 
    + unitairies[unitairies.length - 2];
    unitairies.push(next);
  }

  return unitairies;
}


// export { fibRec, fibs};