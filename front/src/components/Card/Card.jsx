import styles from '../Card/Card.module.scss'
import { Link } from 'react-router-dom'

const Card = ({name, id, image, types}) => {

    const eachType = types.map(type => type.name)


    return (
        <div className={styles['card-wrap']}>
            <Link className={styles.card} to={`/pokemon/${id}`}>
                <div >
                    <h2>{name}</h2>
                    <img src={image} alt={name} />
                    <p>Types: {eachType} </p>
                </div>
            </Link>
        </div>
    )
}

export default Card