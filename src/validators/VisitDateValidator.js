import ERROR_MESSAGES from '../constants/messages/errorMessage.js';
import AppError from '../error/AppError.js';
import CONDITION from '../constants/condition/condition.js';

class VisitDateValidator {
  static validateVisitDate(visitDate) {
    if (!Number.isInteger(visitDate)) {
      throw new AppError(ERROR_MESSAGES.not_integer);
    }

    if (visitDate < CONDITION.min_date || visitDate > CONDITION.max_date) {
      throw new AppError(ERROR_MESSAGES.invalid_date);
    }
  }
}

export default VisitDateValidator;
