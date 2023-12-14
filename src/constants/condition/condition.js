import deepFreeze from '../../utils/deepFreeze.js';

const CONDITION = deepFreeze({
  min_date: 1,
  max_date: 31,
  min_order_price: 25000,
  money_seperate_standard: 1000,
  essential_order_category: '메인',
  min_index: 1,
  max_index: 12,
});

export default CONDITION;
