// JavaScript File
let response=document.getElementById("response");
function Click() {
  let answer=document.getElementById("answer");
  let answer2=document.getElementById("answer2");
  let answerValue;
  answerValue = Number(answer.value);
  answer2 = String(answer2);
  if ((answerValue>12 && answerValue<21)) { // This if statement checks to see if your age is over or equal to 17
    document.getElementById("myimage").src="./images/check.png";
    response.innerHTML="You can get the student discount!";
  }
  else if (answer2 == "Tuesday" || answer2 == "Thursday") {
    response.innerHTML="aaaaaaaaaaaaaaaaa";
  }
  else {
    document.getElementById("myimage").src="./images/X.png";
    response.innerHTML="You can't get the student discount.";
  }
}