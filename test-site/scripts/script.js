function Accumulator(num){
  this.value = num;

  this.read = function(){
    this.value += +prompt(`How much do you want to add?`);
  }
}



let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values
