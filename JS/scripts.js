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
// $(document).ready(function(){
//   $('form#pizzaorder').submit(function(){
    //Collencting input from form
    var pizzesize = 'small';//$('select#size').val();
    var pizzatopping = 'beef'//$('input#topping').val();
    var pizzacrust = 'crisp'//$('select#crust').val();
    //determine crust price
    var crustPrice = function(){
      if(pizzacrust == 'crisp'){
        return 120
      }else if(pizzacrust == 'stuffed'){
        return 190
      }else if(pizzacrust == 'glutenFree'){
        return 220
      }
    }
    //create objects using construct
    var crustSelect = new Crust(pizzacrust, crustPrice())
    
    //determine toppings price
    var topPrice = function(){
      if(pizzatopping == 'chicken'){
        return 200
      }else if(pizzatopping == 'beef'){
        return 250
      }else if(pizzatopping == 'pork'){
        return 320
      }
    }//create topping object
    var toppingSelect = new Topping(pizzatopping, topPrice())

    $('#banner').click(function(){
      $('#testOutput').append(toppingSelect.Price)
    })
//   })
// })
