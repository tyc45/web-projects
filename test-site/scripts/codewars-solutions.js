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
