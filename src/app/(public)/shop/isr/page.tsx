import { ProductCard, type IProduct } from '@/components/ProductCard'
import { API_URL } from '@/constans'

// better choose ISR

// for apolo client
// export const revalidate = 300

export default async function ShopISRPage() {
    const response = await fetch(API_URL, { next: { revalidate: 300 } })
    const products = (await response.json()) as IProduct[]

    return (
        <div className="grid grid-cols-4 gap-4">
            {products.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    )
}
