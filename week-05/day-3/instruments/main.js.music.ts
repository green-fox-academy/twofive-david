'use strict'

export {Instrument, StringedInstrument, ElectricGuitar, BassGuitar, Violin};

abstract class Instrument {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  play() {};
}


abstract class StringedInstrument extends Instrument {
  protected numberOfStrings: number;
  protected noise: string;

  constructor(name: string, stringsNo: number, noise: string) {
    super(name);
    this.numberOfStrings = stringsNo;
    this.noise = noise;
  }

  sound(): string {
    return this.noise;
  };

  play() {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}.`);
  }
}

class ElectricGuitar extends StringedInstrument {

  constructor(stringsNo = 6, name = 'Electric guitar', noise = 'Twang') {
    super(name, stringsNo, noise);
  }
}

class BassGuitar extends StringedInstrument {
  
  constructor(stringsNo = 4, name = 'Bass guitar', noise = 'Duum-duum-duum') {
    super(name, stringsNo, noise);
  }
}

class Violin extends StringedInstrument {
  
  constructor(stringsNo = 4, name = 'bass guitar', noise = 'Screech') {
    super(name, stringsNo, noise);
  }
}