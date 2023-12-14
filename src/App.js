import OutputView from './views/OutputView.js';

class App {
  #visitDate;

  async run() {
    this.#printStartMessage();
  }

  #printStartMessage() {
    OutputView.printStartMessage();
    OutputView.divideLine();
  }
}

export default App;
