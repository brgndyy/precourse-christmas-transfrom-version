import OutputView from './views/OutputView.js';
import asyncFunctionHandlerWithError from './utils/asyncFunctionHandlerWithError.js';
import InputView from './views/InputView.js';
import VisitDateValidator from './validators/VisitDateValidator.js';

class App {
  #visitDate;

  async run() {
    this.#printStartMessage();
    await asyncFunctionHandlerWithError(this.#readVisitDate, this);
  }

  #printStartMessage() {
    OutputView.printStartMessage();
    OutputView.divideLine();
  }

  async #readVisitDate() {
    this.#visitDate = await InputView.readVisitDate();
    VisitDateValidator.validateVisitDate(this.#visitDate);
  }
}

export default App;
