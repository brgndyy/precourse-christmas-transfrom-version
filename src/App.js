import OutputView from './views/OutputView.js';
import asyncFunctionHandlerWithError from './utils/asyncFunctionHandlerWithError.js';
import InputView from './views/InputView.js';
import VisitDateValidator from './validators/VisitDateValidator.js';
import OrderableMoneyValidator from './validators/OrderableMoneyValidator.js';
import OrderMachine from './domain/OrderMachine.js';
import DiscountMachine from './domain/DiscountMachine.js';
import PROGRESS_MESSAGE from './constants/messages/progressMessage.js';
import EventBadgeChecker from './domain/EventBadgeChecker.js';

class App {
  #visitDate;

  #orderableMoney;

  #totalOrderedList;

  #discountListExceptFreeGift;

  #totalPriceBeforeDiscount;

  #totalDiscountPrice;

  async run() {
    this.#printStartMessage();
    await asyncFunctionHandlerWithError(this.#readVisitDate, this);
    await asyncFunctionHandlerWithError(this.#readOrderableMoney, this);
    this.#printStartOfResultMessage();
    this.#printOrderMenuList();
    this.#printTotalDiscountList();
    this.#printExpectedPaymentPrice();
    this.#printEventBadge();
  }

  #printStartMessage() {
    OutputView.printStartMessage();
    OutputView.divideLine();
  }

  async #readVisitDate() {
    this.#visitDate = await InputView.readVisitDate();
    VisitDateValidator.validateVisitDate(this.#visitDate);

    OutputView.divideLine();
  }

  async #readOrderableMoney() {
    this.#orderableMoney = await InputView.readOrderableMoney();
    OrderableMoneyValidator.validateOrderableMoney(this.#orderableMoney);
    OutputView.divideLine();
    OutputView.printOrderableMoney(this.#orderableMoney);
    OutputView.divideLine();
  }

  #printStartOfResultMessage() {
    OutputView.printStartOfResultMessage(this.#visitDate);
    OutputView.divideLine();
  }

  #printOrderMenuList() {
    const orderMachine = new OrderMachine(this.#orderableMoney);
    const orderedList = orderMachine.generateRandomOrderList();

    this.#totalOrderedList = orderedList.orderedList;
    this.#totalPriceBeforeDiscount = this.#totalOrderedList.reduce(
      (acc, cur) => acc + cur.price,
      0,
    );

    OutputView.printTotalPriceBeforeDiscount(this.#totalPriceBeforeDiscount);
    OutputView.divideLine();
    OutputView.printTotalOrderedList(this.#totalOrderedList);
    OutputView.divideLine();
  }

  #printTotalDiscountList() {
    const discountMachine = new DiscountMachine(this.#visitDate, this.#totalOrderedList);
    const discountList = discountMachine.calculateTotalDiscount();
    const filteredDiscountList = discountList.filter((list) => list.discountPrice > 0);
    this.#totalDiscountPrice = filteredDiscountList.reduce(
      (acc, cur) => acc + cur.discountPrice,
      0,
    );
    this.#discountListExceptFreeGift = filteredDiscountList.filter(
      (list) => list.event !== PROGRESS_MESSAGE.free_gift_event,
    );

    this.#printDiscountDetails(filteredDiscountList);
  }

  #printDiscountDetails(filteredDiscountList) {
    OutputView.printTotalDisountList(filteredDiscountList);
    OutputView.divideLine();
    OutputView.printTotalDiscountPrice(this.#totalDiscountPrice);
    OutputView.divideLine();
  }

  #printExpectedPaymentPrice() {
    const totalExpectedPaymentPrcie = this.#discountListExceptFreeGift.reduce(
      (acc, cur) => acc + cur.discountPrice,
      0,
    );
    const totalPrice = this.#totalPriceBeforeDiscount - totalExpectedPaymentPrcie;

    OutputView.printTotalExpectedPaymentPrice(totalPrice);
    OutputView.divideLine();
    this.#printAllChange(this.#totalPriceBeforeDiscount - totalPrice);
  }

  #printAllChange(change) {
    OutputView.printChange(change);
    OutputView.divideLine();
  }

  #printEventBadge() {
    const eventBadge = EventBadgeChecker.getEventBadge(this.#totalDiscountPrice);

    OutputView.printEventBadge(eventBadge);
  }
}

export default App;
