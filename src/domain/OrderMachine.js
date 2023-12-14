import ALL_MENU from '../datebase/allMenu.js';
import CONDITION from '../constants/condition/condition.js';
import generateRandomIndex from '../utils/generateRandomIndex.js';
import findCheapestMenuItem from '../utils/findCheapestMenu.js';

class OrderMachine {
  static orderList = [];

  static orderableMoney;

  static initialOrderableMoney;

  constructor(orderableMoney) {
    OrderMachine.initialOrderableMoney = orderableMoney;
    OrderMachine.orderableMoney = orderableMoney;
  }

  static addMainMenus() {
    while (
      !OrderMachine.orderList.filter((menu) => menu.category === CONDITION.essential_order_category)
        .length
    ) {
      const generatedRandomMainMenu = OrderMachine.createRandomMainMenu();
      OrderMachine.orderList.push(generatedRandomMainMenu);
      OrderMachine.orderableMoney -= generatedRandomMainMenu.price;
    }
  }

  static selectValidMenu() {
    const generatedRandomAllMenu = OrderMachine.createRandomAllMenu();
    if (
      !OrderMachine.orderList.find((menu) => menu.menu === generatedRandomAllMenu.menu) &&
      OrderMachine.orderableMoney >= generatedRandomAllMenu.price
    ) {
      return generatedRandomAllMenu;
    }
    return null;
  }

  static selectAndPurchaseMenus() {
    const cheapestMenuPrice = findCheapestMenuItem(ALL_MENU).price;

    while (
      OrderMachine.orderableMoney >= cheapestMenuPrice &&
      OrderMachine.orderList.length < ALL_MENU.length
    ) {
      const validMenu = OrderMachine.selectValidMenu();
      if (validMenu) {
        OrderMachine.orderableMoney -= validMenu.price;
        OrderMachine.orderList.push(validMenu);
      }
    }
  }

  static calculateChange() {
    return (
      OrderMachine.initialOrderableMoney -
      OrderMachine.orderList.reduce((acc, cur) => acc + cur.price, 0)
    );
  }

  generateRandomOrderList() {
    OrderMachine.addMainMenus();
    OrderMachine.selectAndPurchaseMenus();
    const change = OrderMachine.calculateChange();

    return { orderedList: OrderMachine.orderList, change };
  }

  static createRandomMainMenu() {
    const allMainMenus = ALL_MENU.filter(
      (menu) =>
        menu.category === CONDITION.essential_order_category &&
        menu.price <= OrderMachine.orderableMoney,
    );
    const randomIndexNumArr = allMainMenus.map((menu) => menu.id);
    const randomIndex = generateRandomIndex(randomIndexNumArr);
    return allMainMenus.find((menu) => menu.id === randomIndex);
  }

  static createRandomAllMenu() {
    const randomIndexNumArr = ALL_MENU.map((menu) => menu.id);
    const randomIndex = generateRandomIndex(randomIndexNumArr);

    return ALL_MENU.find((menu) => menu.id === randomIndex);
  }
}

export default OrderMachine;
