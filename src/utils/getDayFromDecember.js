const getDayFromDecember = (date) => {
  const dateObj = new Date(date);

  return dateObj.getDay();
};

export default getDayFromDecember;
