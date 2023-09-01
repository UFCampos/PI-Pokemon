import { NavLink } from "react-router-dom";
import styles from './Nav.module.css';
import SearchBar from '../SearchBar/SearchBar';

const Nav = () => {
    return (
        <div>
            <div className={styles.navfix}>
                <div className={styles.navbar}>
                    <div className={styles['navbar-nav']}>
                        <button className={styles['navbar-item']}><NavLink to={'/about'}>About Me</NavLink></button>
                        <button className={styles['navbar-item']}><NavLink to={'/home'}>Home</NavLink></button>
                    </div>
                    <SearchBar />
                </div>
            </div>
        </div>
    )
}

export default Nav;