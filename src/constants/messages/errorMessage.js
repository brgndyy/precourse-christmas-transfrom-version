import deepFreeze from '../../utils/deepFreeze.js';

const ERROR_MESSAGES = deepFreeze({
  not_integer: '방문 날짜는 정수여야해요!',
  invalid_date: '방문날짜는 1일 이상 31일 이하여야해요!',
});

export default ERROR_MESSAGES;
