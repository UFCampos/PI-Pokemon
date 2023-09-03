import styles from '../Cards/Cards.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTypes, filterByType, sortByName } from '../../redux/actions'
import { useEffect } from 'react'

const Filters = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTypes())
    },[])

    const allTypes = useSelector(state => state.allTypes)

    return (
        <div>
            <select className={styles.filter} name="Type" onChange={(e) => dispatch(filterByType(e.target.value))}>
                <option value={'all'}>ALL</option>
                {allTypes.map((type) => {
                    return <option value={type.name} key={type.name}>{type.name}</option>
                })}
            </select>

            <select name="Sort" onChange={(e) => {dispatch(sortByName(e.target.value))}} >
                <option value={'asc'}>A-Z</option>
                <option value={'desc'}>Z-A</option>
            </select>
        </div>
    )
}

export default Filters

