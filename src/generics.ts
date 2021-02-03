// Básicamente TS informa sobre el uso adecuado de una función que es genérica

function regresa<T>(args: T) {
  return args;
}

const tryNumber = regresa(12345.1239);
const tryString = regresa("carlos");
const tryDate = regresa(new Date());

console.log(tryNumber.toFixed());
console.log(tryString.toUpperCase());
console.log(tryDate.toTimeString());
