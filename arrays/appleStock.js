const prices = [10,8,7,6,5];
const pricesA = [1, 8, 7, 6, 5, 100];

const highestReturn = (prices) => {
  if (prices.length < 2) return null; 
  
  let lowest = prices[0];
  let maxProfit = prices[1] - prices[0];

  for (let i = 2; i < prices.length; i++) {
    
    maxProfit = Math.max(maxProfit, prices[i] - lowest);
    lowest = Math.min(lowest, prices[i])
  }
  return maxProfit >=0 ? maxProfit : -1;
}
console.log(
  highestReturn(prices),
  highestReturn(pricesA)
)