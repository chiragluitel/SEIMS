export type BoundingBox = [number, [number, number, number, number], number]

export interface Product {
    id: string,
    name: string,
    price: number,
    image: string
}

export interface CartItem extends Product {
    quantity: number
} 

export interface CartState {
    items: CartItem[]
    total: number
    discount: number
}

