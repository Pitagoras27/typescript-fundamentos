class Album {
  #_id: number;
  #_name: string;
  public product: string;

  constructor(id: number, name: string, product: string) {
    this.#_id = id;
    this.#_name = name;
    this.product = product;
  }

  get id() {
    return this.#_id;
  }

  set name(n: string) {
    this.#_name = n;
  }

  get name() {
    return this.#_name;
  }

  public toString(): string {
    return `Your name is: ${this.name} and ID is: ${this.id}`;
  }
}

const instanceAlbum: Album = new Album(2790, "Carlos", "LineCard");
console.log(instanceAlbum.toString());
console.log("access to atribute with get method->", instanceAlbum.id);

instanceAlbum.name = "Carklo";
console.log("access to atribute name->", instanceAlbum.name);
