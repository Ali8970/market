export interface Product {
  id:1,
  title: string,
  price: number,
  category: string,
  description: string,
  image: string,
  rating: {
    rate: number,
    count: number,
  }
}
