import { Link } from "react-router-dom";

import styles from "../Landing/Landing.module.scss";

const Landing = () => {
    return (
        <div className={styles.container}>
            <h1>Landing Page</h1>
            <Link to="/home"><button>Home</button></Link>
        </div>
    );
}

export default Landing;