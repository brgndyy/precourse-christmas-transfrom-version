import AppError from '../error/AppError.js';
import ERROR_MESSAGES from '../constants/messages/errorMessage.js';
import CONDITION from '../constants/condition/condition.js';

class OrderableMoneyValidator {
  static validateOrderableMoney(orderableMoney) {
    if (orderableMoney % CONDITION.money_seperate_standard) {
      throw new AppError(ERROR_MESSAGES.invalid_standard_money);
    }

    if (orderableMoney < CONDITION.min_order_price) {
      throw new AppError(ERROR_MESSAGES.out_of_range_order_money);
    }
  }
}

export default OrderableMoneyValidator;
