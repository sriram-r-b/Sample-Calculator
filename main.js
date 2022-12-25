let temp=0;
let curr=0;
const prevShower = document.querySelector(".prev-shower");
document
  .querySelector(".num-button-container")
  .addEventListener("click", function (event) {
  console.log(`You clicked on button ${event.target.innerText}`);
  temp=(temp*10)+(parseInt(event.target.innerText));
  prevShower.innerText=String(temp);
});
let stack =[];


const plusButton = document.querySelector(".plus-button");
plusButton.addEventListener("click", function () {
  curr=temp;
  temp=0;
  stack.push('+');
});
const minusButton = document.querySelector(".minus-button");
minusButton.addEventListener("click", function () {
  curr=temp;
  temp=0;
  stack.push('-');
});
const multiplyButton = document.querySelector(".multiply-button");
multiplyButton.addEventListener("click", function () {
  curr=temp;
  temp=0;
  stack.push('*');
});
const divideButton = document.querySelector(".divide-button");
divideButton.addEventListener("click", function () {
  curr=temp;
  temp=0;
  stack.push('/');
});
const equalButton = document.querySelector(".equal-button");
equalButton.addEventListener("click", function () {
  console.log(curr)
  let currOp=stack.pop();
  switch(currOp){
    case '+':
      curr=curr+temp;
      break;
    case '-':
      curr=curr-temp;
      break;
    case '*':
      curr=curr*temp;
      break;
    case '/':
      curr=curr/temp;
      break;
    default:
      curr=temp;
  }
  prevShower.innerText=String(curr);
  temp=0;
});

const clearButton = document.querySelector(".divide-button");
clearButton.addEventListener("click", function () {
  curr=0;
  temp=0;
  prevShower.innerText=String(curr);
});
const backspaceButton = document.querySelector(".divide-button");
backspaceButton.addEventListener("click", function () {
  temp=Math.trunc(temp/10);
  prevShower.innerText=String(temp);
});