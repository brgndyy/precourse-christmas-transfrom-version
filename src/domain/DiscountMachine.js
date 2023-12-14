import CONDITION from '../constants/condition/condition.js';
import getDayFromDecember from '../utils/getDayFromDecember.js';
import PROGRESS_MESSAGE from '../constants/messages/progressMessage.js';

class DiscountMachine {
  #visitDate;

  #totalOrderedList;

  #totalOrderdPrice;

  #totalDiscountList;

  constructor(visitDate, totalOrderedList) {
    this.#visitDate = visitDate;
    this.#totalOrderedList = totalOrderedList;
    this.#totalOrderdPrice = this.#totalOrderedList.reduce((acc, cur) => acc + cur.price, 0);
    this.#totalDiscountList = [];
  }

  calculateTotalDiscount() {
    this.#checkChristmasPeriod();
    this.#checkWeekPeriod();
    this.#checkSpecialPeriod();
    this.#checkFreeGiftEvent();

    return this.#totalDiscountList;
  }

  #checkChristmasPeriod() {
    if (
      this.#visitDate >= CONDITION.christmas_sale_start_date &&
      this.#visitDate <= CONDITION.christmas_sale_end_date
    ) {
      const discountPrice =
        CONDITION.christmas_sale_basic_price +
        (this.#visitDate - 1) * CONDITION.christmas_sale_price;

      this.#totalDiscountList.push({
        event: PROGRESS_MESSAGE.christmas_event,
        discountPrice,
      });
    }
  }

  #checkWeekPeriod() {
    const dayNumber = getDayFromDecember(this.#visitDate);

    if (dayNumber >= CONDITION.sunday && dayNumber <= CONDITION.thursday) {
      this.#calculateWeekDayDiscount();
    }

    if (dayNumber === CONDITION.friday || dayNumber === CONDITION.saturday) {
      this.#calculateWeekendDiscount();
    }
  }

  #calculateWeekDayDiscount() {
    const amountOfDessertMenu = this.#totalOrderedList.filter(
      (menu) => menu.category === CONDITION.dessert,
    ).length;

    this.#totalDiscountList.push({
      event: PROGRESS_MESSAGE.weekday_event,
      discountPrice: amountOfDessertMenu * CONDITION.weekday_sale_price,
    });
  }

  #calculateWeekendDiscount() {
    const amountOfMainMenu = this.#totalOrderedList.filter(
      (menu) => menu.category === CONDITION.main,
    ).length;

    this.#totalDiscountList.push({
      event: PROGRESS_MESSAGE.weekend_event,
      discountPrice: amountOfMainMenu * CONDITION.weekend_sale_price,
    });
  }

  #checkSpecialPeriod() {
    if (CONDITION.special_event_date_arr.includes(this.#visitDate)) {
      this.#totalDiscountList.push({
        event: PROGRESS_MESSAGE.special_event,
        discountPrice: CONDITION.special_discount_price,
      });
    }
  }

  #checkFreeGiftEvent() {
    if (this.#totalOrderdPrice > CONDITION.free_gift_event_price) {
      this.#totalDiscountList.push({
        event: PROGRESS_MESSAGE.free_gift_event,
        discountPrice: CONDITION.free_gift_discount_price,
      });
    }
  }
}

export default DiscountMachine;
