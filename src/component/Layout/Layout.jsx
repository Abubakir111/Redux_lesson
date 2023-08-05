import { NavLink, Outlet } from 'react-router-dom';
import style from './Layout.module.css';
import { useSelector } from 'react-redux';

const Layout = () => {
  const ProductQuantities = useSelector((state) => state.basket.products);

  return (
    <div>
      <header className={style.container}>
        <nav className={style.nav}>
          <NavLink to="/">Продукты</NavLink>
          <div className={style.basketCotainer}>
            <NavLink to="/basket">Корзинка</NavLink>
            <div className={style.basketNumber}>{ProductQuantities.length}</div>
          </div>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
