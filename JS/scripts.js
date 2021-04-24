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
function Pizza  (size, price) {
  this.Size = size;
  this.Price = price;
  this.Toppings = [];
  this.Crusts = [];
}

//user Logic
$(document).ready(function(){
  $('form#pizzaorder').submit(function(event){
    event.preventDefault();
    //Collecting input from form
    var pizzasize = $('select#size').val();
    var pizzatopping = $('input#topping').val();
    var pizzacrust = $('select#crust').val();
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
    var pizzaSelect = new Pizza(pizzasize, pizzaPrice());

   //add toppings and crust objects to Pizza object
    pizzaSelect.Toppings.push(toppingSelect);
    pizzaSelect.Crusts.push(crustSelect);
        
    //get total price for a selected pizza
    var pizzaTotal = (pizzaSelect.Price + pizzaSelect.Toppings[0].Price + pizzaSelect.Crusts[0].Price)
    //get crust type
    var pizzaCrust = (pizzaSelect.Crusts[0].Type)
    //get topping chosen
    var pizzaTopping = (pizzaSelect.Toppings[0].Name)
     
         
    //show order to HTML
      $('#orderSummary').append('<div class="summaries"><h5>Pizza Selected : </h5><p>' +pizzaSelect.Size+ '</p>' +
                                '<h5>Toppings: </h5><p>' +pizzaTopping+ '</p>' +
                                '<h5>Crust Type: </h5><p>' +pizzaCrust+ '</p>' +
                                '<h4>SUB-TOTAL</h4>'+pizzaTotal+'</div>')
    //show popup for adding another order
    $('#addPopup').show();
    $('#anotherOne').click(function(){
      var anotherAns = $("input[name='anotherOrder']:checked").val();
      if(anotherAns == 'addYes'){
        $('#addPopup').hide();
      }else if(anotherAns =='addNo'){
        $('#addPopup').hide();
        $('#selectDelivery').show();
      }else($('.error').show())
    })
  $('#checkout').click(function(event){  
    event.preventDefault();                     
    //calculate delivery
    var delivery = $('input[name="delivery"]:checked').val();
    var deliveryPrice = function(){
      if(delivery == 'delivery'){
        return 350
      }else if(delivery == 'no-delivery'){
        $('.location').hide()
        return 0
      }
    }
    //checking if location is added

    var totalAmount = deliveryPrice()+pizzaTotal;
    var location = $('input#location').val();
    if(delivery=='delivery'&&(location==null||location=='')){
      alert('Please enter a location')
    };
    //display total at checkout

      $('#deliveryDetails').append('<p>Your Delivery will be done to : '+'<h3>'+location+'</h3>in 30 minutes</p>')
      $('#totalAmount').append('<p> Delivery cost : '+deliveryPrice()+'</p>'+'<h1>TOTAL AMOUNT :'+totalAmount+'</h1>'+
                                '<p>Thank you for shopping with us..</p>')
      $('#checkout').hide();
      $('#seeOrder').show();                  
  })    
  }) 
})
