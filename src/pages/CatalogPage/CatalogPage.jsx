import { Catalog } from "../../components/catalog/Catalog"

export function CatalogPage({ cart, addToCart }) {
    return (
        <section>
            <Catalog cart={cart} addToCart={addToCart}/>
        </section>
    )
}