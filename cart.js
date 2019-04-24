// 輸入是一個 items 的陣列，長得像這樣：
// [
//   {id: 1, name: "iPhone 7 case", price: 200, amount: 3}
// ]
// 回傳 items 的總金額
function totalPrice(items) {
  
  return items.map(function(x){return x.price * x.amount})
  .reduce(function(prev, element) {return prev + element;}, 0);
} 

// 回傳打折後的總金額
// 打折的規則：
//   超過 1000 元 -> 九折
//   超過 3000 元 -> 八折
//   其它原價
function discountedTotal(items) {
  var TotalPrice = items.map(function(x){return x.price * x.amount})
  .reduce(function(prev, element) {return prev + element;}, 0);
  
    if(TotalPrice > 3000){
      return TotalPrice *0.8;
    }else if(TotalPrice > 1000){
      return TotalPrice *0.9;
    }else{
      return TotalPrice;
    }

}

// 回傳一張訂單，是一個物件，
// 裡面有
// 1. orderTime: 目前時間 (查一下 Date 文件，用 new)
// 2. items: 傳進來的 iterms
// 3. total: 打折後的總金額
// 4. id: 1
function toOrder(items) {
  var order = {
  orderTime: new Date(),
  items: items,
  total: discountedTotal(items),
  id: 1
  }
  return order;
}

// 如果需要的話，你可以定義自己的輔助用函式

module.exports = {totalPrice, discountedTotal, toOrder}
