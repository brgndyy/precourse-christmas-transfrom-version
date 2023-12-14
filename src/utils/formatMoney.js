const formatMoney = (orderableMoney) => {
  const formattedMoney = `${new Intl.NumberFormat('ko-KR', {
    style: 'decimal',
  }).format(orderableMoney)}`;

  return formattedMoney;
};

export default formatMoney;
