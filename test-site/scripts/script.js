function bubbleSort(arr){
  let result = arr;
  for(i = arr.length - 1; i >= 0; i--){
    let sorted = true;
    for(j = 0; j < i; j++){
      if(result[j] > result[j+1]){
        sorted = false;
        let temp = result[j];
        result[j] = result[j+1];
        result[j+1] = temp;
      }
    }
    if(sorted) return result;
  }
}


let arr = [];
for(let i = 0; i < 6; i++){
  arr.push(+prompt("number?"));
}

alert(bubbleSort(arr));
