import deepFreeze from '../utils/deepFreeze.js';

const ALL_MENU = deepFreeze([
  {
    id: 1,
    menu: '양송이수프',
    category: '에피타이저',
    price: 6000,
    isFreeGift: false,
  },
  {
    id: 2,
    menu: '타파스',
    category: '에피타이저',
    price: 5500,
    isFreeGift: false,
  },
  {
    id: 3,
    menu: '시저샐러드',
    category: '에피타이저',
    price: 8000,
    isFreeGift: false,
  },
  {
    id: 4,
    menu: '티본스테이크',
    category: '메인',
    price: 55000,
    isFreeGift: false,
  },
  {
    id: 5,
    menu: '바비큐립',
    category: '메인',
    price: 54000,
    isFreeGift: false,
  },
  {
    id: 6,
    menu: '해산물파스타',
    category: '메인',
    price: 35000,
    isFreeGift: false,
  },
  {
    id: 7,
    menu: '크리스마스파스타',
    category: '메인',
    price: 25000,
    isFreeGift: false,
  },
  {
    id: 8,
    menu: '초코케이크',
    category: '디저트',
    price: 15000,
    isFreeGift: false,
  },
  {
    id: 9,
    menu: '아이스크림',
    category: '디저트',
    price: 5000,
    isFreeGift: false,
  },
  {
    id: 10,
    menu: '제로콜라',
    category: '음료',
    price: 3000,
    isFreeGift: false,
  },
  {
    id: 11,
    menu: '레드와인',
    category: '음료',
    price: 60000,
    isFreeGift: false,
  },
  {
    id: 12,
    menu: '샴페인',
    category: '음료',
    price: 25000,
    isFreeGift: true,
  },
]);

export default ALL_MENU;
