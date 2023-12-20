export class ProductModel {
    idProduct: string = null
    title: string = null
    price: number = 0
    priceSale: number
    description: string
    isBestseller: boolean
    isNewArrival: boolean
    isSale: boolean
    categoryId: any
    image: string
    quantity: number
    idSize: number
    isDelete: number
    product: {
        image: string
    }
}