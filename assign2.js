

var Product=prompt("Enter product name");
console.log("Product: 1kt Diamond Ring");

var Price=prompt("Enter Price");
console.log("Price: $" +750);

var Quantity=prompt("Enter the quantity")
console.log("Quantity: 1");

var Age=prompt("Enter your age");
console.log("Age= 42");





// Exercise Sale price

var diamondRing="1kt Diamond Ring";
document.write("1kt Diamond Ring" + "<br>");

var price = 750;
document.write("Original Price: $" +price.toFixed(2)+"<br>");

var tax = 0.16;
document.write("Tax: "+tax+"%<br>");

var totalTax = (price * tax); 
document.write("Total Tax: $"+totalTax.toFixed(2)+"<br>");

var totalPrice = price + totalTax;
document.write("Total Price: $" +totalPrice.toFixed(2) +"<br>");


