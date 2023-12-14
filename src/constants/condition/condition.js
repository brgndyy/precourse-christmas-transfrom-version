import deepFreeze from '../../utils/deepFreeze.js';

const CONDITION = deepFreeze({
  min_date: 1,
  max_date: 31,
  min_order_price: 25000,
  money_seperate_standard: 1000,
});

export default CONDITION;
