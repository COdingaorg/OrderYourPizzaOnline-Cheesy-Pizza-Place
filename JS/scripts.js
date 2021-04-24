//sample objects
var pizzas = [small, medium, large];
//toppings
var chicken = {
  topping: 'chicken',
  price: 100
}
var beef = {
  topping: 'beef',
  price: 150
}
var pork = {
  topping: 'pork',
  price: 190
}
//crust
var crisp = {
  type:'crisp',
  price: 120
}
var stuffed = {
  type:'stuffed',
  price: 190
}
var glutenFree = {
  type:'glutenFree',
  price: 220
}
//pizza different sizes
var small = {
  size: 'small',
  toppings: [chicken, beef, pork],
  crust:[crisp, stuffed, glutenFree],
  price: 200
}
var medium = {
  size: 'medium',
  toppings: [chicken, beef, pork],
  crust:[crisp, stuffed, glutenFree],
  price: 300
}
var large = {
  size: 'large',
  toppings: [chicken, beef, pork],
  crust:[crisp, stuffed, glutenFree],
  price: 350
}
//console.log(small);
console.log(large.size);
console.log(large.price);
console.log(large.toppings[0]);
console.log(large.crust[0]);

//Business Logic
//Pizza Includes, small, medium and small, 
//each pizza has 3 types of toppings chicken beef and pork
//each pizza has 3 types of crust crisp, stuffrd and Gluten free
//each topping has a name and individual price
//each crust has a type and price

//construct to create crust objects
function Crust(type, price){
  this.Type = type;
  this.Price = price;
}
//construct to create topping objects
function Topping(name, price){
  this.Name = name;
  this.Price = price;
}
//construct to create pizza objects
function Pizza(size, price){
  this.Size = size;
  this.Price = price;
  this.Toppings = [];
  this.Crusts = [];
}

//user Logic