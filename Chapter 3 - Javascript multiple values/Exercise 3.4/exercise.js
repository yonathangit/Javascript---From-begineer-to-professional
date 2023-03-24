let myCar = {
    name: "Toyota",
    make: "Executive",
    model: "Hybrid",
    forSale: false, 
    color: "White",
    hasAirBag: true,
    price: 1000
};

let variable = "color";
myCar[variable] = "black";

console.log(myCar);


variable = "forSale";
myCar[variable] = true;

console.log(myCar);

console.log(myCar.make);
console.log(myCar.model);
console.log(myCar.forSale);
