/*
  constructor(deck, trucks, wheels) {
    this.deck = deck;
    this.trucks = trucks;
    this.wheels = wheels;
    this.skateboard = `You need a killer ${this.deck} with ${this.trucks} and sweet ${this.wheels}`;
  }
}*/

class Skateboard {
  constructor(deck, trucks, wheels, bearings) {
    this.deck = deck;
    this.trucks = trucks;
    this.wheels = wheels;
    this.bearings = bearings;
  }
  complete() {
    return `You need a killer ${this.deck} with ${this.trucks} trucks and sweet ${this.wheels} wheels with lightning quick ${this.bearings} swiss bearings!`;
  }
}

class Complete1 extends Skateboard {
  constructor(deck, trucks, wheels, bearings) {
    super(deck, trucks, wheels);
    this.bearings = bearings;
  }
  completeSkateboard() {
    return `You need a killer ${this.deck} with ${this.trucks} trucks and sweet ${this.wheels} wheels with lightning quick ${this.bearings} swiss bearings!`;
  }
}

const tonyHawk = new Complete1("Hawk", "GNS", "SpitFire", "MiniLogo");

console.log(tonyHawk.completeSkateboard());
