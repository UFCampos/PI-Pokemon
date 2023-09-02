import { useLocation } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useEffect} from "react"
import { fetchContent } from "../../redux/actions"
import loading from "../../assets/detailBackground.webp"
import styles from './Detail.module.scss'

const Detail = () => {
    const location = useLocation()
    const dispatch = useDispatch()

    const id = location.pathname.split('/')[2]
    useEffect(() => {
        dispatch(fetchContent(id))
        return () => {
            console.log('cleanup');
            dispatch(fetchContent(''))
        }
    },[id])
    const {name, img, types, hp, attack, defense, speed, height, weight} = useSelector(state => state.modalContent)
    
    if (!name) {
        return (
            <div className={styles.container}>
                <img className={styles.loading} src={loading} alt="" />
            </div>
        )
    }
    const eachType = types.map(type => type.name)


    return (
        <div className={styles.container}>
            <img src={img} alt={name} />
            <div className={styles.detail}>
                <h1>{name}</h1>
                <p>Types: {eachType} </p>
                <p>HP: {hp} </p>
                <p>Attack: {attack} </p>
                <p>Defense: {defense}</p>
                {speed && <p>Speed: {speed} </p>}
                {height && <p>Height: {height} </p>}
                {weight && <p>Weight: {weight} </p>}
            </div>
        </div>
    )

}

export default Detail