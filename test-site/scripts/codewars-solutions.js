// Basic even or odd function

function even_or_odd(number) {
  if(number % 2 == 0) return "Even";
  return "Odd";
}


// Traffic light

function updateLight(current) {
  if(current === "green"){
    return "yellow";
  }
  else if(current === "yellow"){
    return "red";
  }
  return "green";
}


// Convering an Hex string to decimals

function hexToDec(hexString){
  return parseInt(hexString, 16);
}


// Converting every word in a string to "sex" (because Freud)

function toFreud(string) {
  let result = "";
  if(string && string.length > 0){
  result += "sex";
  for(i = 1; i < string.split(" ").length; i++){
    result += " sex";
  }
  }
return result;
}


// Getting the square's area from a circle arc

function squareArea(A){
  let result = ((4 * A) / (2 * Math.PI)) ** 2;
  return (Math.round(result * 100) / 100);
}


// Multiplication table generator

function multiTable(n) {
  let table = "";
  for(let i = 1; i <= 10; i++){
    if(table){
      table += "\n" + i + " * " + n + " = " + (i * n);
    }
    else{
      table += i + " * " + n + " = " + (i * n);
    }
  }
  return table;
}
