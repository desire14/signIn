import Person from "./person.js";
/*
  Here you will write your the functionality for your webpage

  I have already written the import and export statements for the Person class, so once you have it written in the other file it should be available here
*/

const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const age = document.querySelector('#age');
const submit = document.querySelector('#submit');
const greeting = document.querySelector('#greeting');


function signIn() {
  let firstPerson = new Person(fname.value, lname.value, age.value);
  greeting.innerHTML = firstPerson.name;

}
// submit.onclick() = signIn; 
submit.addEventListener('click', signIn);