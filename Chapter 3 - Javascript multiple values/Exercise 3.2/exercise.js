let shoppingList = [];

console.log(shoppingList);

shoppingList.push("Milk");
shoppingList.push("Bread");
shoppingList.push("Apples");

console.log(shoppingList);

shoppingList.splice(1,1,"Bananas","Eggs");

console.log(shoppingList);

shoppingList.pop();
console.log(shoppingList);

shoppingList.sort();

let milk = shoppingList.indexOf("Milk");
console.log(milk);

shoppingList.splice(1,0,"Carrots","Lettuce");
console.log(shoppingList);

let arr2 = ["Juice" , "Pop"];

shoppingList = shoppingList.concat(arr2);
shoppingList = shoppingList.concat(arr2);

console.log(shoppingList);

console.log(shoppingList.lastIndexOf("Pop"));