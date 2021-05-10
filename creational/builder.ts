interface CoffeeBrewingSteps {
  brewEspresso(): void;
  addWater(): void;
  addMilk(): void;
}

class HomeCoffeeBrewing implements CoffeeBrewingSteps {
  private coffeeProducer: CoffeeBrewingProcess;

  constructor() {
    this.reset();
  }

  brewEspresso(): void {
    this.coffeeProducer.brewingSteps.push('Brew an espresso at home');
  }

  addMilk(): void {
    this.coffeeProducer.brewingSteps.push('Add milk from a local store');
  }

  addWater(): void {
    this.coffeeProducer.brewingSteps.push('Add hot water from a kettle');
  }

  serve(): CoffeeBrewingProcess {
    const result = this.coffeeProducer;
    this.reset();
    return result;
  }

  reset(): void {
    this.coffeeProducer = new CoffeeBrewingProcess();
  }
}

const toOrderedString = (...items: string[]) => items.map((x, i) => `${i + 1}. ${x}`).join('\n');

class CoffeeBrewingProcess {
  brewingSteps: string[] = [];

  showSteps(): void {
    console.log(`${toOrderedString(...this.brewingSteps)}\n`);
  }
}

class CoffeeCreator {
  private coffeeBrewingSteps: CoffeeBrewingSteps;

  setBrewingMethod(coffeeBrewingSteps: CoffeeBrewingSteps): void {
    this.coffeeBrewingSteps = coffeeBrewingSteps;
  }

  brewAmericano(): void {
    this.coffeeBrewingSteps.brewEspresso();
    this.coffeeBrewingSteps.addWater();
  }

  brewFlatWhite(): void {
    this.coffeeBrewingSteps.brewEspresso();
    this.coffeeBrewingSteps.addMilk();
  }
}

function brewCoffees(coffeeCreator: CoffeeCreator) {
  const homeCoffeeBrewing = new HomeCoffeeBrewing();
  coffeeCreator.setBrewingMethod(homeCoffeeBrewing);

  console.log('[Brew an espresso]');
  homeCoffeeBrewing.brewEspresso();
  homeCoffeeBrewing.serve().showSteps();

  console.log('[Brew an americano]');
  coffeeCreator.brewAmericano();
  homeCoffeeBrewing.serve().showSteps();

  console.log('[Brew a flat white]');
  coffeeCreator.brewFlatWhite();
  homeCoffeeBrewing.serve().showSteps();
}

const coffeeCreator = new CoffeeCreator();
brewCoffees(coffeeCreator);

/*
 Result:
 [Brew an espresso]
 1. Brew an espresso at home

 [Brew an americano]
 1. Brew an espresso at home
 2. Add hot water from a kettle

 [Brew a flat white]
 1. Brew an espresso at home
 2. Add milk from a local store
*/
