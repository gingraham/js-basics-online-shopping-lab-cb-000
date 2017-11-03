var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var itemPrice = Math.floor((Math.random() * 100) + 1);
 var itemName = item
 var items = new Object({[itemName]: itemPrice});
 cart.push(items)
 console.log(`${itemName} has been added to your cart.`)
 return cart
}


function viewCart() {
  var cart_items=[];
  // write your code here
  if (!cart.length){
  console.log('Your shopping cart is empty.');
} else {
  const cart_items =[];
  const l = cart.length
  for (let i = 0; i <l; i++){
    let item_price = cart[i];
    let item = Object.keys(item_price)[0];
    let price = item_price[item];
    cart_items.push(`${item} at \$${price}`);
  }
    var last = cart_items.pop();
    var twoitem_list = cart_items.join(', ') + ' and ' + last+'.';
    var mulitem_list = cart_items.join(', ') + ', and ' + last+'.';
    var item_list = cart_items.join(', ') + last+'.';
    var cart_view = cart.length == 1 ?  `In your cart, you have ${item_list}` : cart.length == 2 ? `In your cart, you have ${twoitem_list}` : `In your cart, you have ${mulitem_list}`;
  	 console.log(cart_view);
    }
}
viewCart();

/*Alternate viewCart function//////
function viewCart() {
  var cart_items=[];
  // write your code here
  if (!cart.length){
  console.log('Your shopping cart is empty.');
} else {
  var merged = Object.assign.apply(Object, cart);
    for (const [key, value] of Object.entries(merged)) {
      cart_items.push(`${key} at $${value}`);
      }
      var last = cart_items.pop();
      var item_list = cart_items.join(', ') + ' and ' + last+'.';
      return `In your cart, you have ${item_list}`
    }
}
viewCart();
/////////////////*/

function total() {
  // write your code here
  const cart_items =[];
  const l = cart.length
  for (let i = 0; i <l; i++){
    let item_price = cart[i]
    let item = Object.keys(item_price)[0]
    let price = item_price[item]
    cart_items.push(price)
    var total= cart_items.reduce(function(sum, value) {
      return sum + value;
    }, 0);

}
return total
}


function removeFromCart(item){
   for(var i = 0, l = cart.length; i < l; i++){
   for(var list in cart[i]){
       if(item === list){
         cart.splice(i,1)
         return cart
        }
     }
   }

   console.log("That item is not in your cart.")
   return cart
 }

removeFromCart("bananas")

var cart = [{ "bananas": 17 }, { "pancake batter": 5 }, { "eggs": 49 },{ "butter": 22 }];
function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined){
    console.log('Sorry, we don\'t have a credit card on file for you.')
  }else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
    return cart
  }
  }
placeOrder(75430382)
