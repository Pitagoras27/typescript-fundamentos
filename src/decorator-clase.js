// function personExtend(target) {
//   return class extends target {
//     constructor(name:string, lastName:string) {
//       super(name, lastName);
//     }
//     sayMyName() {
//       return `${this.name} ${this.lastName}`;
//     }
//   }
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @personExtend
// class Person {
//   private name: string;
//   private lastName: string;
//   constructor(name: string, lastName: string){
//     this.name = name;
//     this.lastName = lastName;
//   }
//   sayMyName(){}
// }
// const instancePerson: Person = new Person('Carlos', 'Gutierrez');
// console.log(instancePerson.sayMyName());
function personExtend(target) {
    return class extends target {
        constructor() {
            super(...arguments);
            this.name = 'Carlos';
            this.lastName = 'Gutiérrez';
        }
        sayMyName() {
            return `${this.name} ${this.lastName}`;
        }
    };
}
let Person = class Person {
    constructor() { }
    sayMyName() { }
};
Person = __decorate([
    personExtend
], Person);
const instancePerson = new Person();
console.log(instancePerson.sayMyName());
