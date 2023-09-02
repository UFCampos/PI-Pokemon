import styles from '../Card/Card.module.scss'
import { Link } from 'react-router-dom'

const Card = ({name, id, img, types}) => {

    const eachType = types.map(type => type.name)

    return (
        <div className={styles['card-wrap']}>
            <Link to={`/pokemon/${id}`}>
        <div className={styles.card}>
            <h2>{name}</h2>
            <img src={img} alt={name}/>
            <p>Types: {eachType} </p>
        </div>
            </Link>
        </div>
    )
}

export default Card