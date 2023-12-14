import deepFreeze from '../../utils/deepFreeze.js';

const PROGRESS_MESSAGE = deepFreeze({
  start: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
  read_visit_date: '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
  read_orderable_moeny: '주문 가능하신 금액을 입력해주세요.\n',
  total_order_money: '총 주문 금액',
  orderable_money: (money) => `${money}원`,
  result_start: (date) => `12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`,
});

export default PROGRESS_MESSAGE;
