let nombrePizza = 3;
let typePizza = "reine";
let pu;
let remise;

if (typePizza === "reine") {
    pu = 15;
} else if (typePizza === "calzone") {
    pu = 8;
} else if (typePizza === "fromage"){
    pu = 25;
}



if (nombrePizza >= 5 && nombrePizza < 10) {
    remise = 2;
} else if (nombrePizza > 10){
    remise = 10;
} else if (nombrePizza < 5){
    remise = 0;
}

let total = pu * nombrePizza - remise;


document.querySelector(".unité").innerHTML = `Prix unitaire : ${pu} €`;
document.querySelector(".type").innerHTML = `Vous avez commandé une pizza ${typePizza}`;
document.querySelector(".remise").innerHTML = `Vous avez une remise de ${remise} €`;
document.querySelector(".total").innerHTML = `Vous devez payer : ${total} €`;