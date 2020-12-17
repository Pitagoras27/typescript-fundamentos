class Album {
    constructor(id, name, product) {
        this._id = id;
        this._name = name;
        this.product = product;
    }
    get id() {
        return this._id;
    }
    set name(n) {
        this._name = n;
    }
    get name() {
        return this._name;
    }
    toString() {
        return `Your name is: ${this.name} and ID is: ${this.id}`;
    }
}
const instanceAlbum = new Album(2790, 'Carlos', 'LineCard');
console.log(instanceAlbum.toString());
console.log('access to atribute whith get method->', instanceAlbum.id);
instanceAlbum.name = 'Magaly';
console.log('access to atribute name->', instanceAlbum.name);
