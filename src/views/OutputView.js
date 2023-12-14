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

  printTotalOrderedList(orderedList) {
    orderedList.forEach((menu) => {
      Console.print(PROGRESS_MESSAGE.ordered_menu(menu.menu));
    });
  },

  printErrorMessage(message) {
    Console.print(message);
  },

  divideLine() {
    Console.print(DELIMITER.space);
  },
};

export default OutputView;
