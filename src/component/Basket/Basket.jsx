import { useSelector } from 'react-redux';
import style from './Basket.module.css';
import { basketAction } from '../../store/BasketSlice';
import { useDispatch } from 'react-redux';
// import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

const Basket = () => {
  const dataBasket = useSelector((state) => state.basket.products);
  const dispath = useDispatch();

  return (
    <div>
      {dataBasket.length > 0 ? (
        dataBasket.map((product) => (
          <div className={style.container} key={product._id}>
            <img className={style.img} src={product.picture} alt="" srcset="" />
            <div>
              {' '}
              <span className={style.span}>Название:</span>
              {product.name}{' '}
            </div>
            <div className={style.price}>
              {' '}
              <span className={style.span}>Цена:</span>
              {product.price}{' '}
            </div>
            <div>
              <button
                onClick={() =>
                  dispath(basketAction.quantityDecrement(product._id))
                }
                className={style.btnIncrem}
              >
                -
              </button>
              <span className={style.spans}>{product.quantity}</span>
              <button
                onClick={() =>
                  dispath(basketAction.quantityIncrement(product._id))
                }
                className={style.btnIncrem}
              >
                +
              </button>
            </div>
            <button
              onClick={() =>
                dispath(basketAction.removeBasketPorduct(product._id))
              }
              className={style.btnDelet}
              type="button"
            >
              Удалить
            </button>
          </div>
        ))
      ) : (
        <div>Корзинка пуста</div>
      )}
    </div>
  );
};

export default Basket;
