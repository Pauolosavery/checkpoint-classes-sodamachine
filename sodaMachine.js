class SodaMachine {
  constructor(args = {}) {
    this.sodas = args.sodas;
    this.cash = args.cash;
  }

  currentInventoryCount() {
    return this.sodas.length;
  }

  findSoda(sodaBrand) {
    return this.sodas.find((obj) => obj.brand === sodaBrand);
  }

  sell(sodaBrand) {
    const elem = this.sodas.find((obj) => obj.brand === sodaBrand);
    if (elem) {
      this.sodas.splice(this.sodas.indexOf(elem), 1);
      this.cash += elem.price;
      return elem;
    }
    return undefined;
  }
}

module.exports = { SodaMachine };
