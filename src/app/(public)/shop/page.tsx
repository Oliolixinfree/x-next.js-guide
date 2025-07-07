import { ProductCard, type IProduct } from '@/components/ProductCard'
import { API_URL } from '@/constans'

// for apolo client
// export const dynamic = 'force-dynamic'

export default async function ShopPage() {
    const response = await fetch(API_URL, { cache: 'no-store' })
    const products = (await response.json()) as IProduct[]

    return (
        <div className="grid grid-cols-4 gap-4">
            {products.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    )
}
