function random(min, max){
  return parseInt(min + (max-min+1)*Math.random());
}

alert(random(10,456));
