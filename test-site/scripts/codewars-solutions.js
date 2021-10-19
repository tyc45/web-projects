// Basic even or odd function

function even_or_odd(number) {
  if (number % 2 == 0) return "Even";
  return "Odd";
}


// Traffic light

function updateLight(current) {
  if (current === "green") {
    return "yellow";
  } else if (current === "yellow") {
    return "red";
  }
  return "green";
}


// Convering an Hex string to decimals

function hexToDec(hexString) {
  return parseInt(hexString, 16);
}


// Converting every word in a string to "sex" (because Freud)

function toFreud(string) {
  let result = "";
  if (string && string.length > 0) {
    result += "sex";
    for (i = 1; i < string.split(" ").length; i++) {
      result += " sex";
    }
  }
  return result;
}


// Getting the square's area from a circle arc

function squareArea(A) {
  let result = ((4 * A) / (2 * Math.PI)) ** 2;
  return (Math.round(result * 100) / 100);
}


function multiTable(n) {
  let table = "";
  for (let i = 1; i <= 10; i++) {
    table += i + " * " + n + " = " + (i * n) + (i < 10 ? "\n" : "");
  }
  return table;
}


function opposite(number) {
  return (-number);
}


function makeNegative(num) {
  return num > 0 ? -num : num;
}


function boolToWord( bool ){
  return bool? 'Yes' : 'No';
}


function century(year) {
  return (Math.trunc((year -1) / 100 + 1) );
}


// Return the area of a square or the perimeter of a rectangle

function areaOrPerimeter(l , w) {
  return (l != w) ? (l + w) * 2 : l ** 2;
}


// Something about reversed animals

function fixTheMeerkat(arr) {
 let result = [arr[2], arr[1], arr[0]];
  return (result);
}


// A stupid batch of code for writing: return n ** 3  ◔_◔

function rowSumOddNumbers(n) {
  let count = 1;
  let result = [];
  for(i = 1; i <= n; i++){
    let currentRowSum = 0;
    for(j = 0; j < i; j++){
      currentRowSum += count;
      count += 2;
    }
    result.unshift(currentRowSum);
  }
  return result[0];
}


// Getting the sum of all Integers in an interval


function getSum( a,b )
{
   return ((Math.abs(a - b) + 1) * (a + b))/2;
}


// A function that returns the difference between 2 numbers

function difference(a, b){
  return Math.abs(a - b);
}


// A function that tells if a number is jumping or not

function jumpingNumber(n){
  let arr = n.toString().split('')
  for(i=0; i < arr.length-1; i++){
    if(Math.abs(arr[i] - arr[i+1]) !== 1 ){
      return 'Not!!'
    }
  }
  return 'Jumping!!'
}


// Checks for number consisting only of char from 0 to 5

function specialNumber(n){
  let re = /([6-9])/;
  return re.exec(n.toString()) ? "NOT!!" : "Special!!";
}


// Tells if a number is Automorphic

function automorphic(n){
  return (String(n*n).indexOf(String(n)) != -1) ? "Automorphic" : "Not!!";
}


function tidyNumber(n){
  let stringed = String(n);
  for(i = 0; i < stringed.length -1; i++){
    if(stringed.charAt(i) > stringed.charAt(i+1)) return false;
  }
  return true;
}


function isPrime(n){
  for(j = 2; j < n; j++){
    if(n%j == 0) return false;
  }
  return n > 1;
}


// Calculate the primorial of n

function numPrimorial(n){
  let result = 1;

  for(i = 0, count = 0; count < n; i++){
    if(isPrime(i)){
      result *= i;
      count++;
    }
  }
  return result;
}


// Copies a string s n times

function repeatStr (n, s) {
  let result = ``;
  for(i = 0; i < n; i++){
    result += s;
  }
  return result;
}


function removeChar(str){
 return str.slice(1, str.length -1);
};


function positiveSum(arr) {
  let result = 0;
  for(i = 0; i < arr.length; i++)
    {
      if(arr[i] > 0) result += arr[i];
    }
  return result;
}


class SmallestIntegerFinder {
  findSmallestInt(args) {
    let result = args[0];
    for(let i = 1; i < args.length; i++){
      if (args[i] < result) result = args[i];
    }
    return result;
  }
}
