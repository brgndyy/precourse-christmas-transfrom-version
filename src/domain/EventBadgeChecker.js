import CONDITION from '../constants/condition/condition.js';

class EventBadgeChecker {
  static getEventBadge(totalDiscountPrice) {
    if (totalDiscountPrice > CONDITION.santa_event_badge_price) {
      return CONDITION.santa;
    }
    if (totalDiscountPrice > CONDITION.tree_event_badge_price) {
      return CONDITION.tree;
    }
    if (totalDiscountPrice > CONDITION.star_event_badge_price) {
      return CONDITION.star;
    }

    return CONDITION.none;
  }
}

export default EventBadgeChecker;
