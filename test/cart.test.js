let {totalPrice, discountedTotal, toOrder} = require('../cart.js')

let items1 = [
  {id: 1, name: 'iPhone 7 殼', price: 800, amount: 3},
  {id: 2, name: '乖乖', price: 20, amount: 25},
  {id: 3, name: '生茶', price: 40, amount: 14}
]

let items2 = [
  {id: 5, name: 'Pragmatic programmer', price: 1250, amount: 1},
  {id: 6, name: 'Programming Elixir', price: 800, amount: 1},
  {id: 7, name: 'Types and Programming Languages', price: 2500, amount: 1},
  {id: 8, name: 'Tango and all that jazz', price: 450, amount: 1}
]

test('totalPrice', () => {
  expect(totalPrice(items1)).toEqual(3460)

  expect(totalPrice(items2)).toEqual(5000)
})

test('discountedTotal', () => {
  expect(discountedTotal(items1)).toEqual(2768)

  expect(discountedTotal(items2)).toEqual(4000)
})

test('toOrder', () => {
  let order1 = toOrder(items1)
  expect(order1.items).toEqual(items1)
  expect(order1.orderTime instanceof Date).toBeTruthy()
  expect(order1.id).toBe(1)
  expect(order1.total).toBe(2768)

  let order2 = toOrder(items2)
  expect(order2.items).toEqual(items2)
  expect(order2.orderTime instanceof Date).toBeTruthy()
  expect(order2.id).toBe(1)
  expect(order2.total).toBe(4000)
})
