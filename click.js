// JavaScript File
let response=document.getElementById("response");
document.getElementById("Button").onclick = function() {Click()};
function Click() {
  let answer=document.getElementById("answer");
  let answerValue;
  answerValue = Number(answer.value);
  let answer2=document.getElementById("answer2");
  answer2 = String(answer2.value);
  if ((answerValue>12 && answerValue<21) || (answer2 == "Tuesday" || answer2 == "Thursday")) { // This if statement checks to see if your age is between 12 and 21, OR that it is Tuesday or Thursday.
  document.getElementById("myimage").src="./images/check.png";
  response.innerHTML="You can get the student discount!"; // This innerHTML line returns that the discount is available.
}
  else {
  document.getElementById("myimage").src="./images/X.png";
  response.innerHTML="You can't get the student discount."; // This innerHTML line returns that the discount is unavailable.
  }
}

 
