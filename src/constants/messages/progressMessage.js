import deepFreeze from '../../utils/deepFreeze.js';

const PROGRESS_MESSAGE = deepFreeze({
  start: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
  read_visit_date: '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
  read_orderable_moeny: '주문 가능하신 금액을 입력해주세요.\n',
  total_order_money: '총 주문 금액',
  orderable_money: (money) => `${money}원`,
  result_start: (date) => `12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`,
  order_list_banner: '<주문 메뉴>',
  ordered_menu: (menu) => `${menu} 1개`,
  christmas_event: '크리스마스 디데이 할인',
  weekday_event: '평일 할인',
  weekend_event: '주말 할인',
  special_event: '특별 할인',
  free_gift_event: '증정 이벤트',
  discount_list_banner: '<혜택 내역>',
  discount_list: (event, price) => `${event}: -${price}원`,
  discount_price_banner: '<총혜택 금액>',
  total_discount_price: (price) => `-${price}원`,
  total_price_before_discount_banner: '<할인 전 총주문 금액>',
  total_price_before_discount: (price) => `${price}원`,
  total_expected_payment_price_banner: '<할인 후 예상 결제 금액>',
  total_expected_payment_price: (price) => `${price}원`,
  change_banner: '<결제 후 예상 거스름 돈>',
  change: (price) => `${price}원`,
  event_badge_banner: '<12월 이벤트 배지>',
});

export default PROGRESS_MESSAGE;
