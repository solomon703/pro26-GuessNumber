let random = Math.ceil(Math.random() * 100);
let userValue = document.getElementById("input");
let message = document.getElementById("displayMessage");
let given = document.getElementById("random");
function check(){
  let user = userValue.value;
  let final = parseInt(user);
  if(final > random){
    message.textContent = "Your Number is > 100"
    given.textContent =`Guessed Number = ` + random;
  }
  else if(final < random){
    message.textContent = "Your Number is < 100";
    given.textContent =`Guessed Number = ` +  random;
  }
  else if(final === random){
    message.textContent = "Your Number is = 100"; 
    given.textContent =`Guessed Number = ` +  random;
  }
  else{
    message.textContent = "Please try Once Again!";
    given.textContent =`Guessed Number = ` +  random;
  }
}