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
            {hiddenNavbar ?(
                <div className={styles.navfix}>
                <button onClick={() => showNavbar()}>|||</button>
            </div>
            ) : (
                <div className={styles.navfix}>
                    {!hiddenNavbar && (
                        <button className={styles.navClose} onClick={() => hideNavbar()}>|||</button>
                    )}
                    <div className={styles.navbar}>
                        <div className={styles['navbar-nav']}>
                            <NavLink to="/home">
                                <button
                                    disabled={pathname === '/home'}
                                    className={styles['navbar-item']}
                                >
                                    Home
                                </button>
                            </NavLink>
                            <NavLink to="/about">
                                <button
                                    disabled={pathname === '/about'}
                                    className={styles['navbar-item']}
                                >
                                    About me
                                </button>
                            </NavLink>
                            <NavLink to="/create">
                                <button
                                    disabled={pathname === '/create'}
                                    className={styles['navbar-item']}
                                >
                                    Create
                                </button>
                            </NavLink>
                        </div>
                        <SearchBar />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Nav;