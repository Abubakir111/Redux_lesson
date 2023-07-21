import { NavLink, Outlet } from 'react-router-dom'
import style from './Layout.module.css'

const Layout = () => {
  const isActive = ({ isActive }) => (isActive ? style.active : style.a)

  return (
    <>
      <header className={style.header}>
        <nav className={style.nav}>
          <NavLink className={isActive} to="/">
            Посты
          </NavLink>
          <NavLink className={isActive} to="/PageForPosts">
            Добавить пост
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  )
}
export default Layout
