function log(target, key) {
  console.log('decorator of sayName method', key);
}

class Person {
  private name: string;

  constructor(name: string) {
    this.name = name
  }

  @log
  sayName() {
    console.log(this.name);
  }
}

const instancePerson: Person = new Person('carlos');
instancePerson.sayName();
