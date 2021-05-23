abstract class CoffeeDeviceFactory {
  public abstract createCoffeeDevice(): CoffeeDevice;

  public use(): void {
    const coffeeDevice = this.createCoffeeDevice();
    console.log(coffeeDevice.brewCoffee());
  }
}

class FrenchPressFactory extends CoffeeDeviceFactory {
  public createCoffeeDevice(): CoffeeDevice {
    return new FrenchPress();
  }
}

class CoffeeMachineFactory extends CoffeeDeviceFactory {
  public createCoffeeDevice(): CoffeeDevice {
    return new CoffeeMachine();
  }
}

interface CoffeeDevice {
  brewCoffee(): string;
}

class FrenchPress implements CoffeeDevice {
  public brewCoffee(): string {
    return 'Coffee from a french press';
  }
}

class CoffeeMachine implements CoffeeDevice {
  public brewCoffee(): string {
    return 'Coffee from a coffee machine';
  }
}

function useCoffeeDevice(coffeeDevice: CoffeeDeviceFactory) {
  coffeeDevice.use();
}

console.log('[French press Factory]');
useCoffeeDevice(new FrenchPressFactory());

console.log('');

console.log('[Coffee machine Factory]');
useCoffeeDevice(new CoffeeMachineFactory());

/*
 Result:
 [French press Factory]
 Coffee from a french press

 [Coffee machine Factory]
 Coffee from a coffee machine
*/
