let login = prompt("Who're you?");
if (login == "Admin"){
  let mdp = prompt("Password please?");
  if (mdp == "TheMaster"){
    alert("Welcome!");
  }
  else if (mdp == "" || mdp == null){
    alert("Cancelled!");
  }
  else{
    alert("Wrond Password!")
  }
}
else if (login == "" || null){
  alert("Cancelled!");
}
else{
  alert("I don't know you!");
}
