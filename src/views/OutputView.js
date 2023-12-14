import { Console } from '@woowacourse/mission-utils';
import DELIMITER from '../constants/delimiters/delimiter.js';
import PROGRESS_MESSAGE from '../constants/messages/progressMessage.js';
import formatMoney from '../utils/formatMoney.js';

const OutputView = {
  printStartMessage() {
    Console.print(PROGRESS_MESSAGE.start);
  },

  printOrderableMoney(orderableMoney) {
    const formattedMoney = formatMoney(orderableMoney);
    Console.print(PROGRESS_MESSAGE.total_order_money);
    Console.print(PROGRESS_MESSAGE.orderable_money(formattedMoney));
  },

  printStartOfResultMessage(date) {
    Console.print(PROGRESS_MESSAGE.result_start(date));
  },

  printTotalPriceBeforeDiscount(price) {
    Console.print(PROGRESS_MESSAGE.total_price_before_discount_banner);
    Console.print(PROGRESS_MESSAGE.total_price_before_discount(formatMoney(price)));
  },

  printTotalOrderedList(orderedList) {
    Console.print(PROGRESS_MESSAGE.order_list_banner);
    orderedList.forEach((menu) => {
      Console.print(PROGRESS_MESSAGE.ordered_menu(menu.menu));
    });
  },

  printTotalDisountList(filteredDiscountList) {
    Console.print(PROGRESS_MESSAGE.discount_list_banner);
    filteredDiscountList.forEach((list) => {
      const formattedPrice = formatMoney(list.discountPrice);
      Console.print(PROGRESS_MESSAGE.discount_list(list.event, formattedPrice));
    });
  },

  printTotalDiscountPrice(totalDiscountPrice) {
    Console.print(PROGRESS_MESSAGE.discount_price_banner);
    Console.print(PROGRESS_MESSAGE.total_discount_price(formatMoney(totalDiscountPrice)));
  },

  printTotalExpectedPaymentPrice(price) {
    Console.print(PROGRESS_MESSAGE.total_expected_payment_price_banner);

    Console.print(PROGRESS_MESSAGE.total_expected_payment_price(formatMoney(price)));
  },

  printChange(change) {
    Console.print(PROGRESS_MESSAGE.change_banner);

    Console.print(PROGRESS_MESSAGE.change(formatMoney(change)));
  },

  printEventBadge(eventBadge) {
    Console.print(PROGRESS_MESSAGE.event_badge_banner);
    Console.print(eventBadge);
  },

  printErrorMessage(message) {
    Console.print(message);
  },

  divideLine() {
    Console.print(DELIMITER.space);
  },
};

export default OutputView;
