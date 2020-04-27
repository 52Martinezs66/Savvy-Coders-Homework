let pizzaToppings = ["Sausage", "Pepperoni", "Mushrooms", "Jalapeno"];
let size = ["small", "medium", "large"];
let crust = ["thin", "thick"];

let greetCustomer = function() {
  return `"Welcome to Pizza House, our toppings are ${pizzaToppings}."`;
};
console.log(greetCustomer());

function getPizzaOrder(size, crust, pizzaToppings) {
  return `One ${size[1]} ${crust[2]} crust pizza with ${toppings[3]}, and ${toppings[0]}`;
}
