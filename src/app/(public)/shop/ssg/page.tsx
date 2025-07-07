import { ProductCard, type IProduct } from '@/components/ProductCard'
import { API_URL } from '@/constans'

export default async function ShopSSGPage() {
    const response = await fetch(API_URL)
    const products = (await response.json()) as IProduct[]

    return (
        <div className="grid grid-cols-4 gap-4">
            {products.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    )
}
