class Transporte {
  private velocidad: number
  private mobilidad: string

  constructor(velocidad: number, mobilidad: string) {
    this.velocidad = velocidad;
    this.mobilidad = mobilidad;
  }

  getVelocidad() {
    return this.velocidad;
  }

  setVelocidad(velocidad: number) {
    this.velocidad = velocidad;
  }

  getMobilidad() {
    return this.mobilidad;
  }

  setMobilidad(mobilidad: string) {
    this.mobilidad = mobilidad;
  }
}

const transporte: Transporte = new Transporte(100, 'terrestre');

class Auto extends Transporte {
  private cantidadPuertas: number;

  constructor(velocidad: number, mobilidad: string, cantidadPuertas: number) {
    super(velocidad, mobilidad)
    this.cantidadPuertas = cantidadPuertas;
  }

  getVelocidad() {
    return super.getVelocidad() + 10;
  }

  getCantidadPuertas() {
    return this.cantidadPuertas = this.cantidadPuertas;
  }

  setCantidadPuertas(puertas: number) {
    this.cantidadPuertas = puertas;
  }
}

const auto: Auto = new Auto(100, 'hibrido', 2);
console.log('Auto->', auto.getVelocidad());
console.log('Auto->', auto.getCantidadPuertas());
auto.setCantidadPuertas(4);
console.log('Auto->', auto.getCantidadPuertas());

