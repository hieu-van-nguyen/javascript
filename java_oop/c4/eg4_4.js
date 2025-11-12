function Hero(name) {
    this.name = name;
    this.occupation = 'Ninja';
    this.whoAreYou = function() {
        return `I'm ${this.name} and I'm a ${this.occupation}`;
    }
}

const h1 = new Hero('Michelangelo');
console.log(h1.whoAreYou());

const h2 = new Hero('Donatello');
console.log(h2.whoAreYou());