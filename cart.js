// 輸入是一個 items 的陣列，長得像這樣：
// [
//   {id: 1, name: "iPhone 7 case", price: 200, amount: 3}
// ]
// 回傳 items 的總金額
function totalPrice(items) {
  return
}

// 回傳打折後的總金額
// 打折的規則：
//   超過 1000 元 -> 九折
//   超過 3000 元 -> 八折
//   其它原價
function discountedTotal(items) {
  return
}

// 回傳一張訂單，是一個物件，
// 裡面有
// 1. orderTime: 目前時間 (查一下 Date 文件，用 new)
// 2. items: 傳進來的 iterms
// 3. total: 打折後的總金額
// 4. id: 1
function toOrder(items) {
  return
}

// 如果需要的話，你可以定義自己的輔助用函式

module.exports = {totalPrice, discountedTotal, toOrder}
