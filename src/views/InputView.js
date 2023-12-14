import { Console } from '@woowacourse/mission-utils';
import PROGRESS_MESSAGE from '../constants/messages/progressMessage.js';

const InputView = {
  async readVisitDate() {
    const input = await Console.readLineAsync(PROGRESS_MESSAGE.read_visit_date);

    return Number(input);
  },
  // ...
};

export default InputView;
