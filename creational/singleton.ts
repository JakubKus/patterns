class CoffeeMachine {
  private static coffeeMachine: CoffeeMachine;

  static getCoffeeMachine(): CoffeeMachine {
    if (!CoffeeMachine.coffeeMachine) {
      CoffeeMachine.coffeeMachine = new CoffeeMachine();
    }

    return CoffeeMachine.coffeeMachine;
  }
}

function createCoffeeMachine() {
  const coffeeMachine1 = CoffeeMachine.getCoffeeMachine();
  const coffeeMachine2 = CoffeeMachine.getCoffeeMachine();

  if (coffeeMachine1 === coffeeMachine2) { /* true */ }
}

createCoffeeMachine();
