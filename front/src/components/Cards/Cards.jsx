import styles from './Cards.module.scss'
import Card from '../Card/Card'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTypes, filterByType, setCurrentPage } from '../../redux/actions'
import { useEffect, useState } from 'react'
import Filters from '../Filters/Filters'
import Pagination from '../Pagination/Pagination'
import Loading from '../Loading/Loading.jsx'


const Cards = () => {
    const dispatch = useDispatch()
    const allPokes = useSelector(state => state.allPokes)
    const filteredPokemons = useSelector(state => state.filteredPokemons)
    const pagedPokemons = useSelector(state => state.pagedPokemons)
    const currentPage = useSelector(state => state.currentPage)
    const [loadingFlag, setLoadingFlag] = useState(true)

    useEffect(() => {
        dispatch(fetchTypes())
    },[])

    useEffect(() => {
        setLoadingFlag(true)
        if (allPokes.length > 0) {
            setLoadingFlag(false)
        }
    },[allPokes, filteredPokemons])


    const handlePageChange = (page) => {
        setCurrentPage(page)
    }

    return (
        <> {loadingFlag ? <Loading /> :
        <div className={styles.container}>
            <div className={styles.buttonsContainer}>
            <Filters />
            <Pagination currentPage={currentPage} handlePageChange={handlePageChange} filteredPokemons={filteredPokemons} allPokemons={allPokes} ></Pagination>
            </div>
            <div className={styles.container}>
                {pagedPokemons.map((pokemon) => {
                    return <Card key={pokemon.id} {...pokemon} />
                })}
            </div>
            <Pagination currentPage={currentPage} handlePageChange={handlePageChange} filteredPokemons={filteredPokemons} allPokemons={allPokes} />
        </div>}
        </>
    )

}

export default Cards