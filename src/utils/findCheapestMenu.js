const findCheapestMenuItem = (menuItems) => {
  return menuItems.reduce((cheapest, currentItem) => {
    return cheapest.price < currentItem.price ? cheapest : currentItem;
  });
};

export default findCheapestMenuItem;
