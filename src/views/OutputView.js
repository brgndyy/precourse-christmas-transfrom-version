import { Console } from '@woowacourse/mission-utils';
import DELIMITER from '../constants/delimiters/delimiter.js';
import PROGRESS_MESSAGE from '../constants/messages/progressMessage.js';

const OutputView = {
  printStartMessage() {
    Console.print(PROGRESS_MESSAGE.start);
  },

  printErrorMessage(message) {
    Console.print(message);
  },

  divideLine() {
    Console.print(DELIMITER.space);
  },
};

export default OutputView;
