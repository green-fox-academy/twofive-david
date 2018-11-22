'use strict'
export { Sharpie };

class Sharpie {
  color: string;
  width: number;
  inkAmount = 100;

  constructor(color: string, width: number) {
    this.color = color;
    this.width = width;
  }

  use(): void {
    this.inkAmount -= 1;
  }
}
