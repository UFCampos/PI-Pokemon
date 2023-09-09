import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from './Nav.module.scss';
import SearchBar from '../SearchBar/SearchBar';
import { useLocation } from "react-router-dom";

const Nav = () => {
    const { pathname } = useLocation();

    // Hide the navbar if the screen has less than 760px width
    const [hiddenNavbar, setHideNavbar] = useState(false);

    useEffect(() => {
        setHideNavbar(true); 
        if (window.innerWidth > 760) {
            setHideNavbar(false);
        }
    }, [window.innerWidth]);    

    const showNavbar = () => {
        setHideNavbar(false);
    }

    const hideNavbar = () => {
        setHideNavbar(true);    
    }

    return (
        <div>
            <div className={styles.navButton}>
                <button onClick={() => showNavbar()}>|||</button>
            </div>
            <div className={hiddenNavbar ? styles.navbarHidden : styles.navfix}>
                {!hiddenNavbar && (
                    <button className={styles.navClose} onClick={() => hideNavbar()}>|||</button>
                )}
                <div className={styles.navbar}>
                    <div className={styles['navbar-nav']}>
                        <NavLink to="/home" className={styles['navbar-item']}>
                            <button
                                disabled={pathname === '/home'}

                            >
                                Home
                            </button>
                        </NavLink>
                        <NavLink to="/create" className={styles['navbar-item']}>
                            <button
                                disabled={pathname === '/create'}
                            >
                                Create
                            </button>
                        </NavLink>
                    </div>
                    <NavLink to="/home">
                        <SearchBar />
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Nav;