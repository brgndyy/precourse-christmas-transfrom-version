import ALL_MENU from '../datebase/allMenu.js';
import CONDITION from '../constants/condition/condition.js';
import generateRandomIndex from '../utils/generateRandomIndex.js';
import findCheapestMenuItem from '../utils/findCheapestMenu.js';

class OrderMachine {
  #orderList = [];

  #orderableMoney;

  #initialOrderableMoney;

  constructor(orderableMoney) {
    this.#initialOrderableMoney = orderableMoney;
    this.#orderableMoney = orderableMoney;
  }

  #addMainMenus() {
    while (
      !this.#orderList.filter((menu) => menu.category === CONDITION.essential_order_category).length
    ) {
      const generatedRandomMainMenu = this.#createRandomMainMenu();
      this.#orderList.push(generatedRandomMainMenu);
      this.#orderableMoney -= generatedRandomMainMenu.price;
    }
  }

  #selectValidMenu() {
    const generatedRandomAllMenu = this.#createRandomAllMenu();
    if (
      !this.#orderList.find((menu) => menu.menu === generatedRandomAllMenu.menu) &&
      this.#orderableMoney >= generatedRandomAllMenu.price
    ) {
      return generatedRandomAllMenu;
    }
    return null;
  }

  #selectAndPurchaseMenus() {
    const cheapestMenuPrice = findCheapestMenuItem(ALL_MENU).price;

    while (this.#orderableMoney >= cheapestMenuPrice && this.#orderList.length < ALL_MENU.length) {
      const validMenu = this.#selectValidMenu();
      if (validMenu) {
        this.#orderableMoney -= validMenu.price;
        this.#orderList.push(validMenu);
      }
    }
  }

  #calculateChange() {
    return this.#initialOrderableMoney - this.#orderList.reduce((acc, cur) => acc + cur.price, 0);
  }

  generateRandomOrderList() {
    this.#addMainMenus();
    this.#selectAndPurchaseMenus();
    const change = this.#calculateChange();

    return { orderedList: this.#orderList, change };
  }

  #createRandomMainMenu() {
    const allMainMenus = ALL_MENU.filter(
      (menu) =>
        menu.category === CONDITION.essential_order_category && menu.price <= this.#orderableMoney,
    );
    const randomIndexNumArr = allMainMenus.map((menu) => menu.id);
    const randomIndex = generateRandomIndex(randomIndexNumArr);
    return allMainMenus.find((menu) => menu.id === randomIndex);
  }

  #createRandomAllMenu() {
    const randomIndexNumArr = ALL_MENU.map((menu) => menu.id);
    const randomIndex = generateRandomIndex(randomIndexNumArr);

    return ALL_MENU.find((menu) => menu.id === randomIndex);
  }
}

export default OrderMachine;
