interface CoffeeDeviceFactory {
  createCoffeeMachine(): AbstractCoffeeMachine;
}

interface AbstractCoffeeMachine {
  brewEspresso(): string;
  brewCappuccino(): string;
}

class HomeCoffeeFactory implements CoffeeDeviceFactory {
  createCoffeeMachine(): AbstractCoffeeMachine {
    return new HomeCoffeeMachine();
  }
}

class HomeCoffeeMachine implements AbstractCoffeeMachine {
  brewEspresso(): string {
    return 'Espresso brewed at home';
  }

  brewCappuccino(): string {
    return 'Cappuccino brewed at home';
  }
}

class CafeCoffeeFactory implements CoffeeDeviceFactory {
  createCoffeeMachine(): AbstractCoffeeMachine {
    return new CafeCoffeeMachine();
  }
}

class CafeCoffeeMachine implements AbstractCoffeeMachine {
  brewEspresso(): string {
    return 'Espresso brewed in a cafe';
  }

  brewCappuccino(): string {
    return 'Cappuccino brewed in a cafe';
  }
}

const toOrderedString = (...items: string[]) => items.map((x, i) => `${i + 1}. ${x}`).join('\n');

const brewCoffees = (coffeeDeviceFactory: CoffeeDeviceFactory) => {
  const coffeeMachine = coffeeDeviceFactory.createCoffeeMachine();
  const coffeeMachineCoffees = toOrderedString(coffeeMachine.brewEspresso(), coffeeMachine.brewCappuccino());

  console.log(coffeeMachineCoffees);
};

console.log('[Brewing coffees at home]');
brewCoffees(new HomeCoffeeFactory());

console.log('');

console.log('[Getting coffees in a cafe]');
brewCoffees(new CafeCoffeeFactory());

/*
 Result:
 [Brewing coffees at home]
 1. Espresso brewed at home
 2. Cappuccino brewed at home

 [Getting coffees in a cafe]
 1. Espresso brewed in a cafe
 2. Cappuccino brewed in a cafe
*/
