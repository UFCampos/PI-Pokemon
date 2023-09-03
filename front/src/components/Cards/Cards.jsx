import styles from './Cards.module.scss'
import Card from '../Card/Card'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTypes, filterByType } from '../../redux/actions'
import { useEffect, useState } from 'react'


const Cards = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTypes())
    },[])
    //Filtering by type
    const allTypes = useSelector(state => state.allTypes)


    const allPokemons = useSelector(state => state.allPokes)
    const filteredPokemons = useSelector(state => state.filteredPokemons)
    //pagination of allPokemons, 12 items per page
    const [currentPage, setCurrentPage] = useState(1) 
    const pokemonsPerPage = 12
    const indexOfLastPokemon = currentPage * pokemonsPerPage
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage
    const pagedPokemons = filteredPokemons.length ? filteredPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon) : allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon)
    
    //calculation for first and last page
    const lastPage = filteredPokemons.length ? Math.ceil(filteredPokemons.length / pokemonsPerPage) : Math.ceil(allPokemons.length / pokemonsPerPage)
    const firstPage = 1

    //Change page
    const handlePageChange = (page) => {
        setCurrentPage(page)
    }

    //Page reset when component mounts
    useEffect(() => {
        setCurrentPage(1)
    },[filteredPokemons])

    return (
        <div className={styles.container}>
            <div>
                <select className={styles.filter} name="Type" onChange={(e) => dispatch(filterByType(e.target.value))}>
                    {allTypes.map((type) => {
                        return <option value={type.name} name={type.name}>{type.name}</option>
                    })}
                    <option value={'all'}>ALL</option>
                </select>
            </div>
            <div className={styles.container}>
            {pagedPokemons.map((pokemon) => {
                return <Card key={pokemon.id} {...pokemon} />
            })}
            </div>
            <div className={styles.pagination}>
                <button onClick={() => {handlePageChange(firstPage)}} disabled={currentPage === firstPage}>Primera</button>
                <button onClick={() => {handlePageChange(currentPage - 1)}} disabled={currentPage === 1}>Anterior</button>
                <button onClick={() => {handlePageChange(currentPage + 1)}} disabled={ filteredPokemons.length >= 1 ? indexOfLastPokemon >= filteredPokemons.length : indexOfLastPokemon >= allPokemons.length}>Siguiente</button>
                <button onClick={() => {handlePageChange(lastPage)}} disabled={currentPage === lastPage}>Última</button>
            </div>
        </div>
    )
}

export default Cards