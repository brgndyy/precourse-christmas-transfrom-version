import deepFreeze from '../../utils/deepFreeze.js';

const ERROR_MESSAGES = deepFreeze({
  not_integer: '방문 날짜는 정수여야해요!',
  invalid_date: '방문날짜는 1일 이상 31일 이하여야해요!',
  invalid_standard_money: '주문 금액은 1000원 단위어야해요!',
  out_of_range_order_money: '최소 주문 금액은 25000원 이상이에요!',
});

export default ERROR_MESSAGES;
