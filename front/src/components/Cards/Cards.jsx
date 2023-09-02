import styles from './Cards.module.scss'
import Card from '../Card/Card'
import { useSelector } from 'react-redux'
import { useState } from 'react'


const Cards = () => {
    const allPokemons = useSelector(state => state.allPokes)
    //pagination of allPokemons, 12 items per page
    const [currentPage, setCurrentPage] = useState(1) 
    const pokemonsPerPage = 12
    const indexOfLastPokemon = currentPage * pokemonsPerPage
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage
    const pagedPokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon)
    
    //calculation for first and last page
    const lastPage = Math.ceil(allPokemons.length / pokemonsPerPage)

    const handlePageChange = (page) => {
        setCurrentPage(page)
    }

    return (
        <div className={styles.container}>
            {pagedPokemons.map((pokemon) => {
                return <Card key={pokemon.id} {...pokemon} />
            })}
            <div className={styles.pagination}>
                <button onClick={() => {handlePageChange(currentPage - 1)}} disabled={currentPage === 1}>Anterior</button>
                <button onClick={() => {handlePageChange(currentPage + 1)}} disabled={currentPage === lastPage}>Siguiente</button>
            </div>
        </div>
    )
}

export default Cards