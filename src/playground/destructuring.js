/*const book = {
  title:"Ego is the enemy",
  author:"Ryan Holiday",
  publisher:{
    name:"Penguin"
  }
};
const{name:publishername = "Self-Published"} = book.publisher;
console.log(publishername);
const person ={
  name: 'Andrew',
  age: 26,
  location: {
    city:'Philadelphia',
    temp: 92
  }};
const {name:firstname = "Anonymous", age} = person;
console.log('${firstname} is ${age}.');
const{city, temp:temperature} = person.location;
if(city && temperature){
console.log('It is ${temperature} and ${city}.');}*/
//Array Destructuring
const address =['1299 S Juniper Street','Philadelphia','Pennsylvania','19147'];
const [, city, state] = address;
console.log('You are in ${city} ${state}.');
/* if you wanna skip first and last item in array destructuring then remove last one easily and for first leave the comma*/
//we can even use default in array like city=New York
