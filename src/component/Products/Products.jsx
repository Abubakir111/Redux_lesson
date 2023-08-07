import data from '../../Pablic/data.json';
import style from './Products.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { basketAction } from '../../store/BasketSlice';

const Products = () => {
  const dispath = useDispatch();
  const basket = useSelector((state) => state.basket.productsBasket);
  // Рендеринг  товаров
  return (
    <div className={style.containerWrap}>
      {data.map((product) => (
        <div className={style.container} key={product._id}>
          <img className={style.img} src={product.picture} alt="" srcset="" />
          <div className={style.name}>{product.name}</div>
          <div className={style.price}>{product.price}</div>
          <div className={style.btnContainer}>
            <div>
              <button className={style.btnIncrem}>-</button>
              <span className={style.span}>{}</span>
              <button className={style.btnIncrem}>+</button>
            </div>
            <button
              className={style.btnBasket}
              // События  для  добавления  товара в корзину
              onClick={() => dispath(basketAction.addBasketPorduct(product))}
              type="button"
            >
              в корзину
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
