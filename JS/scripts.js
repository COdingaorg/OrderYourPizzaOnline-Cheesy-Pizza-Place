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
  type: 'crisp',
  price: 120
}
var stuffed = {
  type: 'stuffed',
  price: 190
}
var glutenFree = {
  type: 'glutenFree',
  price: 220
}
//pizza different sizes
var small = {
  size: 'small',
  toppings: [chicken, beef, pork],
  crust: [crisp, stuffed, glutenFree],
  price: 200
}
var medium = {
  size: 'medium',
  toppings: [chicken, beef, pork],
  crust: [crisp, stuffed, glutenFree],
  price: 300
}
var large = {
  size: 'large',
  toppings: [chicken, beef, pork],
  crust: [crisp, stuffed, glutenFree],
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
function Crust(type, price) {
  this.Type = type;
  this.Price = price;
}
//construct to create topping objects
function Topping(name, price) {
  this.Name = name;
  this.Price = price;
}
//construct to create pizza objects
function Pizza(size, price) {
  this.Size = size;
  this.Price = price;
  this.Toppings = [];
  this.Crusts = [];
}
//get total price for a selected pizza
Pizza.prototype.pizzaTotal = function () {
  return (pizzaSelect.Price + pizzaSelect.Toppings[0].Price + pizzaSelect.Crusts[0].Price)
}
//get crust type
Pizza.prototype.pizzaCrust = function () {
  return (pizzaSelect.Crusts[0].Type)
}
//get topping chosen
Pizza.prototype.pizzaTopping = function () {
  return (pizzaSelect.Toppings[0].Name)
}
//user Logic
// $(document).ready(function(){
//   $('form#pizzaorder').submit(function(){
//Collencting input from form
var pizzasize = 'small';//$('select#size').val();
var pizzatopping = 'beef'//$('input#topping').val();
var pizzacrust = 'crisp'//$('select#crust').val();
//determine crust price
var crustPrice = function () {
  if (pizzacrust == 'crisp') {
    return 120
  } else if (pizzacrust == 'stuffed') {
    return 190
  } else if (pizzacrust == 'glutenFree') {
    return 220
  }
}
//create objects using construct
var crustSelect = new Crust(pizzacrust, crustPrice())

//determine toppings price
var topPrice = function () {
  if (pizzatopping == 'chicken') {
    return 200
  } else if (pizzatopping == 'beef') {
    return 250
  } else if (pizzatopping == 'pork') {
    return 320
  }
}//create topping object
var toppingSelect = new Topping(pizzatopping, topPrice())

//create Pizza object
//determince pizza price
var pizzaPrice = function () {
  if (pizzasize == 'small') {
    return 180
  } else if (pizzasize == 'medium') {
    return 220
  } else if (pizzasize == 'large') {
    return 330
  }
}
var pizzaSelect = new Pizza(pizzasize, pizzaPrice())

//add toppings and crust objects to Pizza object
pizzaSelect.Toppings.push(toppingSelect);
pizzaSelect.Crusts.push(crustSelect);

//show order to HTML
$('#orderSummary').append('<div class="summaries"><h3>Pizza Selected : </h3><p>' + pizzaSelect.Size + '</p>' +
                          '<h3>Toppings: </h3><p>' + pizzaTopping() + '</p>' +
                          '<h3>Crust Type: </h3><p>' + pizzaCrust() + '</p>' +
                          '<h2>SUB-TOTAL' + pizzaTotal+'</div>')
//calculate delivery
var delivery = $('input#delivery').val();
var deliveryPrice = function(){
  if(delivery == 'delivery'){
    return 350
  }else if(delivery == 'no-delivery'){
    return 0
  }
}
var totalAmount = deliveryPrice()+pizzaTotal();
var location = $('input#location').val()
//display total at checkout
$('#checkout').click(function(){
  $('#orderSummary').append('<p>Your Delivery will be done to'+'<h3>'+location+'</h3>in 30 minutes</p>')
  $('#totalAmount').append('<h1>'+totalAmount+'</h1>'+'<p>Thank you for shopping with us..</p>')
})
console.log(pizzaSelect);
console.log(pizzaTotal);
    // $('#banner').click(function(){
    //   $('#testOutput').append(pizzaSelect.Toppings[0])
    // })
//   })
// })
