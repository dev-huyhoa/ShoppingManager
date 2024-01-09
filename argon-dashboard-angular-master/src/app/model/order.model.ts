export class OrderModel {
    id: string
    customerId: string
    paymentMethodId: number
    totalAmout: number
    shippingCharges: number
    amountReduced: number
    amoutPaid: number
    createAt: Date
    status: boolean
}