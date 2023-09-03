import { NavLink } from "react-router-dom";
import styles from './Nav.module.scss';
import SearchBar from '../SearchBar/SearchBar';
import { useLocation } from "react-router-dom";

const Nav = () => {
    const {pathname} = useLocation();
    return (
        <div>
            <div className={styles.navfix}>
                <div className={styles.navbar}>
                    <div className={styles['navbar-nav']}>
                        <NavLink to="/home" ><button disabled={pathname === '/home'} className={styles['navbar-item']}>Home</button></NavLink>
                        <NavLink to="/about" ><button disabled={pathname === '/about'} className={styles['navbar-item']}>About me</button></NavLink>
                        <NavLink to="/create" ><button disabled={pathname === '/create'} className={styles['navbar-item']}>Create</button></NavLink>
                    </div>
                    <SearchBar />
                </div>
            </div>
        </div>
    )
}

export default Nav;