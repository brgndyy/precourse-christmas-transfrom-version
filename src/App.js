import OutputView from './views/OutputView.js';
import asyncFunctionHandlerWithError from './utils/asyncFunctionHandlerWithError.js';
import InputView from './views/InputView.js';
import VisitDateValidator from './validators/VisitDateValidator.js';
import OrderableMoneyValidator from './validators/OrderableMoneyValidator.js';

class App {
  #visitDate;

  #orderableMoney;

  async run() {
    this.#printStartMessage();
    await asyncFunctionHandlerWithError(this.#readVisitDate, this);
    await asyncFunctionHandlerWithError(this.#readOrderableMoney, this);
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
}

export default App;
