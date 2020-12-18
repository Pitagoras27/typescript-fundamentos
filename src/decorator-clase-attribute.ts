function atributeDecorator(target: any, key: any) {
  let _val = target[key];

  const getName = (): void => {
    return _val;
  }

  const setName = (name: string): any => {
    _val = name;
  }

  const objectReturn = {
    get: getName,
    set: setName,
  }

  Object.defineProperty(target, key, objectReturn);
}

class Persons {
  @atributeDecorator
  public _name: string;

  constructor(name: string) {
    this._name = name;
  }
}

const instancePersons: Persons = new Persons('Carlos');
instancePersons._name = 'Magaliuuu';
console.log(instancePersons._name);