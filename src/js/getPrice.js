function getPrice(currencies, currentCurrency) {
  if (currencies.length > 0) {
    const currentPrice = currencies.filter((item) => {
      return item.currency.label === currentCurrency;
    });
    return currentPrice[0].amount;
  }

  return "";
}

export default getPrice;
