import { useLocation } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useEffect} from "react"
import { fetchContentId } from "../../redux/actions"
import loading from "../../assets/detailBackground.webp"
import styles from './Detail.module.scss'
const Detail = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const {name, image, types, hp, attack, defense, speed, height, weight} = useSelector(state => state.modalContent)

    const id = location.pathname.split('/')[2]
    useEffect(() => {
        document.title = 'Guessing pokemon...'
        dispatch(fetchContentId(id))
        return () => {
            dispatch(fetchContentId(''))
        }
    },[id])
    
    if (!name) {
        return (
            <div className={styles.container}>
                <div className={styles.modal}><h1>Who's that </h1></div>
                <img className={styles.loading} src={loading} alt="" />
            </div>
        )
    }
    const eachType = types.map(type => type.name)

    {document.title = name}

    return (
        <div className={styles.container}>
            <img src={image} alt={name} />
            <div className={styles.detail}>
                <h1>{name}</h1>
                <p className={styles.types}>Types: {eachType.map((type, index) => {
                    return (
                        <div>
                            <span key={index} className={styles.type}>
                                {type}
                            </span>
                            <br />
                        </div>
                    )
                })} </p>
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