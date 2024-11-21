import style from './CartPage.module.css';
import s from '../../components/card/Card.module.css';
import { Link } from "react-router-dom";
import { products } from "../../data/data";

export function CartPage({ cart }) {
    const cartProducts = cart.map(id => products.find(product=>product.id == id));
    const summa = cartProducts.reduce((sum, product) => sum + product.price, 0);
    return (
        <section className='container'>
            Итого к оплате: {summa} руб
            <div className={style.cart__inner}>
                {
                    cartProducts.map(product =>
                        <div className={s.card}>
                            <div className={s.card__img}>
                                <img src={product.img} alt="#" />
                            </div>
                            <h5>{product.name}</h5>
                            <p>{product.price}руб</p>
                            <Link to={`/catalog/${product.id}`} >Подробнее</Link>
                        </div>
                    )
                }
            </div>
        </section>

    )
}