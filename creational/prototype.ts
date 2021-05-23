class CoffeePrototype {
  ingredients: string[];
  coffeeDetails: object;
  circularReference: CoffeeReference;

  clone(): this {
    const clone = Object.create(this);

    clone.coffeeDetails = Object.create(this.coffeeDetails);
    clone.circularReference = {
      ...this.circularReference,
      prototype: { ...this },
    };

    return clone;
  }
}

class CoffeeReference {
  prototype;

  constructor(prototype: CoffeePrototype) {
    this.prototype = prototype;
  }
}

function cloneCoffee() {
  const coffee1 = new CoffeePrototype();
  coffee1.ingredients = ['water', 'coffee beans', 'grinder'];
  coffee1.coffeeDetails = { country: 'Brazil', roastedIn: 'Poland' };
  coffee1.circularReference = new CoffeeReference(coffee1);

  const coffee2 = coffee1.clone();

  if (coffee1.ingredients === coffee2.ingredients) { /* true */ }
  if (coffee1.coffeeDetails === coffee2.coffeeDetails) { /* false */ }
  if (coffee1.circularReference === coffee2.circularReference) { /* false */ }
  if (coffee1.circularReference.prototype === coffee2.circularReference.prototype) { /* false */ }
}

cloneCoffee();
