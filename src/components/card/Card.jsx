import { Link } from 'react-router-dom';
import s from './Card.module.css';
import { useState } from 'react';
import { OrderModal } from '../orderModal/OrderModal';
export function Card({ id, img, name, price, count, addToCart }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    function showModal() {
        setModalIsOpen(true);
    }

    return (
        <>
            <div className={s.card}>
                <img src={img} alt="tovar" />
                <h3>{name}</h3>
                <p>Остаток: {count}</p>
                <div className={s.card__inner}>
                    <p className={s.price}>{price} ₽</p>
                    <Link className='btn' to={`${id}`}>Подробнее</Link>
                    {
                        count > 0 ?
                            <button onClick={addToCart} className='btn'>В корзину</button>
                            :
                            <button onClick={showModal} className='btn'>Заказать</button>
                    }
                </div>
            </div>
            <OrderModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
        </>
    )
}