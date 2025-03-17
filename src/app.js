import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //declarar constantes
const nombre = ["Carlos", "Andres", "David"];
const action = ["estudia", "enseña", "suspende"];
const what = ["programación", "arquitectura", "contabilidad"];

// indices random
const randomName = nombre[Math.floor(Math.random() * nombre.length)];
const randomAction = action[Math.floor(Math.random() * action.length)];
const randomWhat = what[Math.floor(Math.random() * what.length)];

console.log(`${randomName} ${randomAction} ${randomWhat}`);
  console.log("Hello Rigo from the console!");
};
