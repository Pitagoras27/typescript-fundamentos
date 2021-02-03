// Básicamente TS informa sobre el uso adecuado de una función que es genérica
function regresa(args) {
    return args;
}
var tryNumber = regresa(12345.1239);
var tryString = regresa("carlos");
var tryDate = regresa(new Date());
console.log(tryNumber.toFixed());
console.log(tryString.toUpperCase());
console.log(tryDate.toTimeString());
// Ejemplo de función genérica con asignación de tipos personalizados
function genericFunction(args) {
    return args;
}
var deadpool = {
    name: "Deadpool",
    realName: "Wade Winston Wilson",
    power: "regeneration"
};
// Se puede indicar a TS que tipo de dato maneje pasando el tipo como generic
// Los genéricos se reconocen visualmente porque envuelven a su tipo con <>
var isHero = genericFunction(deadpool).realName;
var isVillan = genericFunction(deadpool).power;
console.log("isHero ->", isHero);
console.log("isVillan->", isVillan);
