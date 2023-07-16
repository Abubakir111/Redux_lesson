import { NavLink, Outlet } from "react-router-dom"
import style from './Laout.module.css'
const Laout = () => {
    const isActive = ({ isActive }) => isActive ? style.active : ""
    return <>
        <header className={style.header}>
            <nav className={style.nav}>
                <NavLink className={isActive} to="/">Каталог товаров</NavLink>
                {/* Добавил два  компонента - novelties, Shares - только ради  для навигационного меню*/}
                <NavLink className={isActive} to="/novelties">Новинки</NavLink>
                <NavLink className={isActive} to="/Shares">Акций</NavLink>

            </nav>
        </header>
        <Outlet />
    </>
}
export default Laout
