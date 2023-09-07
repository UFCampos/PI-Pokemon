import styles from '../Cards/Cards.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTypes, filterByType, sortByName, pokemonByStorage } from '../../redux/actions'
import { useEffect } from 'react'

const Filters = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTypes())
    },[])

    const allTypes = useSelector(state => state.allTypes)

    return (
        <div className={styles['filter-container']}>
            <select className={styles.filter} name="Type" onChange={(e) => dispatch(filterByType(e.target.value))}>
                <option value={'all'}>ALL</option>
                {allTypes.map((type) => {
                    return <option value={type.name} key={type.name}>{type.name}</option>
                })}
            </select>

            <div>
                <div>
                    <input type="radio" name="storage" value='all' onChange={(e) => dispatch(pokemonByStorage(e.target.value))} defaultChecked />
                    <label>ALL</label>
                </div>
                <div>
                    <input type="radio" name="storage" value='api' onChange={(e) => dispatch(pokemonByStorage(e.target.value))} />
                    <label>API</label>
                </div>
                <div>
                    <input type="radio" name="storage" value='db' onChange={(e) => dispatch(pokemonByStorage(e.target.value))} />
                    <label>DB</label>
                </div>
            </div>

            <select name="Sort" onChange={(e) => {dispatch(sortByName(e.target.value))}} >
                <option value="placeholder">Ordenar por: </option>
                <option value={'asc'}>A-Z</option>
                <option value={'desc'}>Z-A</option>
            </select>
        </div>
    )
}

export default Filters

