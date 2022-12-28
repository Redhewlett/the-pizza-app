import pizzaStyles from '../pages/api/data/pizzaStyle.json'

export type pizzaObject = {
  id: number
  name: string
  description: string
  traditionalToppings: string[]
  howToMakeIt: string
}
// all styles
export function getAllPizzaStyles() {
  const pizzaStyleArray: pizzaObject[] = pizzaStyles
  return pizzaStyleArray
}
// one style with index
export function getOnePizzaStyle(index: number) {
  return pizzaStyles[index]
}
