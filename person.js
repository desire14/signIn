/*
  in this file, write your person class to be exported to your main.js file
  take care not to unintentionally change the name of the class or the export statement!!!
*/

class Person  {
  constructor(fname, lname, age) {
  this._fname = fname;
  this._lname = lname;
  this._age = age;  
  }   
  
   get name(){
    return `Hello, ${this._fname} ${this._lname}. You are ${this._age}.`
  }
  
}

export default Person;