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
// Arrays genéricos:
var heroesGnericSintax = ["Flash", "Batman", "Superman"];
heroesGnericSintax.push("Acuaman");
var heroesExplicitSintax = ["Flash", "Batman", "Superman"];
heroesExplicitSintax.push("Wolverine");
console.log("generic array->", heroesGnericSintax);
console.log("explicit array->", heroesExplicitSintax);
// Clases genéricas
var Scuare = /** @class */ (function () {
    // Es necesario asignar los valores a los miembros de la clase desde la instancia. Por ello no puede prescindir el uso del constructor.
    function Scuare(width, height) {
        this.width = width;
        this.height = height;
    }
    Scuare.prototype.area = function () {
        // Se utiliza el operador + para castear el tipo de dato
        return +this.width * +this.height;
    };
    return Scuare;
}());
// En el caso de tener una clase genérica es necesario indicar el tipo que van a utilizar sus miembros. Esto ayuda en la codificación ya que TS indicará cualquier error
var scuareString = new Scuare("10", "3");
console.log("scuareString->", scuareString.area());
var scuareNumber = new Scuare(10, 3);
console.log("scuareNumber->", scuareNumber.area());
