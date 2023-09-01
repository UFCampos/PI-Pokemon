import styles from '../Card/Card.module.css'

const Card = ({name, id, img, types, speed, weight, height, hp, attack, defense}) => {

    const eachType = types.map(type => type.name)

    return (
        <div className={styles['card-wrap']}>
        <div className={styles.card}>
            <h2>{name}</h2>
            <img src={img} alt={name}/>
            <p>Types: {eachType} </p>
            {/* <p>Types: {eachType}</p>
            <p>Speed: {speed}</p>
            <p>Weight: {weight}</p>
            <p>Height: {height}</p>
            <p>HP: {hp}</p>
            <p>Attack: {attack}</p>
            <p>Defense: {defense}</p> */}
        </div>
        </div>
    )
}

export default Card