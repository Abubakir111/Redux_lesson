import { NavLink, Outlet } from "react-router-dom"
import style from './LayoutFooter.module.css'

const LaoutFooter = () => {
    const isActive = ({ isActive }) => isActive ? style.active : ''
    return <>
        <Outlet />
        <footer className={style.footer}>
            <nav className={style.footernav}>
                {/* не забудть Link поменять  на NavLink */}
                <NavLink className={isActive} to="">footer</NavLink>
            </nav>
        </footer>

    </>
}
export default LaoutFooter
