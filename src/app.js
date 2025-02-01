/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird", "My mom"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
]; //write your code here
// <!--new code line-->
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("randomNumber", getRandomInt(0, 4));

window.onload = function() {
  console.log("Hello Rigo from the console!");
  document.querySelector("#excuse").innerHTML =
    who[getRandomInt(0, who.length - 1)] +
    " " +
    action[getRandomInt(0, action.length - 1)] +
    " " +
    what[getRandomInt(0, what.length - 1)] +
    " " +
    when[getRandomInt(0, when.length - 1)];
};
