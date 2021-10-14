function difference(a, b){
  return Math.abs(a - b);
}

function jumpingNumber(n){
  let stringedN = n.toString();
  for(i = 0; i < stringedN.length -1; i++){
    if(difference(stringedN.charAt(i), stringedN.charAt(i+1)) != 1){
      return "Not!!";
    }
  }
  return "Jumping!!";
}

//alert(difference(+prompt(`a?`), +prompt(`b?`)));

n = +prompt(`n = ?`);
alert(jumpingNumber(n));
