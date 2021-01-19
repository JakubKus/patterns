interface CoffeeFactory {
  createCoffeeMachine(): AbstractCoffeeMachine;
  createAltBrewers(): AbstractAlternativeCoffee;
}

interface AbstractCoffeeMachine {
  brewEspresso(): string;
  brewCappuccino(): string;
}

interface AbstractAlternativeCoffee {
  brewFrenchPressCoffee(): string;
  brewDripCoffee(): string;
}

class Home implements CoffeeFactory {
  createCoffeeMachine(): AbstractCoffeeMachine {
    return new HomeExpress();
  }

  createAltBrewers(): AbstractAlternativeCoffee {
    return new HomeAltBrewers();
  }
}

class Cafe implements CoffeeFactory {
  createCoffeeMachine(): AbstractCoffeeMachine {
    return new CafeExpress();
  }

  createAltBrewers(): AbstractAlternativeCoffee {
    return new CafeAltBrewers();
  }
}

class HomeExpress implements AbstractCoffeeMachine {
  brewEspresso(): string {
    return 'Espresso brewed at home';
  }

  brewCappuccino(): string {
    return 'Cappuccino brewed at home';
  }
}

class CafeExpress implements AbstractCoffeeMachine {
  brewEspresso(): string {
    return 'Espresso from coffee machine brewed in a cafe';
  }

  brewCappuccino(): string {
    return 'Cappuccino from coffee machine brewed in a cafe';
  }
}

class HomeAltBrewers implements AbstractAlternativeCoffee {
  brewFrenchPressCoffee(): string {
    return 'Coffee from french press brewed at home';
  }

  brewDripCoffee(): string {
    return 'Coffee from drip brewed at home';
  }
}

class CafeAltBrewers implements AbstractAlternativeCoffee {
  brewFrenchPressCoffee(): string {
    return 'Coffee from french press brewed in a cafe';
  }

  brewDripCoffee(): string {
    return 'Coffee from drip brewed in a cafe';
  }
}

const coffee = (coffeeFactory: CoffeeFactory) => {
  const toOrderedString = (...items: string[]) => items.map((x, i) => `${i + 1}. ${x}`).join('\n');
  const coffeeMachine = coffeeFactory.createCoffeeMachine();
  const altBrewers = coffeeFactory.createAltBrewers();

  const expressCoffees = toOrderedString(coffeeMachine.brewEspresso(), coffeeMachine.brewCappuccino());
  console.log(`Coffees from coffee machine:\n${expressCoffees}`);

  const frenchPressCoffees = toOrderedString(altBrewers.brewFrenchPressCoffee(), altBrewers.brewDripCoffee());
  console.log(`Coffees using alternative methods:\n${frenchPressCoffees}`);
};

console.log('[Brewing coffee at home]');
coffee(new Home());

console.log('');

console.log('[Getting coffee in a cafe]');
coffee(new Cafe());

/*
 Result:
 [Brewing coffee at home]
 Coffees from coffee machine:
 1. Espresso brewed at home
 2. Cappuccino brewed at home
 Coffees using alternative methods:
 1. Coffee from french press brewed at home
 2. Coffee from drip brewed at home

 [Getting coffee in a cafe]
 Coffees from coffee machine:
 1. Espresso from coffee machine brewed in a cafe
 2. Cappuccino from coffee machine brewed in a cafe
 Coffees using alternative methods:
 1. Coffee from french press brewed in a cafe
 2. Coffee from drip brewed in a cafe
*/
