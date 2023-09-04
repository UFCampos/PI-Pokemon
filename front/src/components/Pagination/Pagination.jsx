// import { useDispatch } from 'react-redux'
// import { pagedPokemons, setCurrentPage } from '../../redux/actions'
// import styles from '../Cards/Cards.module.scss'
// import { useState, useEffect } from 'react'

// const Pagination = ({ currentPage, handlePageChange, filteredPokemons, allPokemons }) => {
//     const dispatch = useDispatch()

//     const pokemonsPerPage = 12
//     const indexOfLastPokemon = currentPage * pokemonsPerPage
//     const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage
//     const pagedPokemonsArray = filteredPokemons.length ? filteredPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon) : allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon)
    
//     const lastPage = filteredPokemons.length ? Math.ceil(filteredPokemons.length / pokemonsPerPage) : Math.ceil(allPokemons.length / pokemonsPerPage)
//     const firstPage = 1
    
//     useEffect(() => {
//         dispatch(pagedPokemons(pagedPokemonsArray))
        
//     }, [currentPage])

//     useEffect(() => {
//         dispatch(setCurrentPage(1))
//     }, [filteredPokemons])

//     return (
//         <div className={styles.pagination}>
//             <button onClick={() => { dispatch(setCurrentPage(firstPage)) }} disabled={currentPage === firstPage}>Primera</button>
//             <button onClick={() => { dispatch(setCurrentPage(currentPage - 1)) }} disabled={currentPage === 1}>Anterior</button>
//             <button onClick={() => { dispatch(setCurrentPage(currentPage + 1)) }} disabled={filteredPokemons.length >= 1 ? indexOfLastPokemon >= filteredPokemons.length : indexOfLastPokemon >= allPokemons.length}>Siguiente</button>
//             <button onClick={() => { dispatch(setCurrentPage(lastPage)) }} disabled={currentPage === lastPage}>Última</button>
//         </div>
//     )
// }

// export default Pagination

import { useDispatch } from 'react-redux';
import { pagedPokemons, setCurrentPage } from '../../redux/actions';
import styles from '../Cards/Cards.module.scss';
import { useState, useEffect } from 'react';

const Pagination = ({ currentPage, handlePageChange, filteredPokemons, allPokemons }) => {
  const dispatch = useDispatch();

  const pokemonsPerPage = 12;
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const pagedPokemonsArray = filteredPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

  const lastPage = Math.ceil(filteredPokemons.length / pokemonsPerPage);
  const firstPage = 1;

  useEffect(() => {
    dispatch(pagedPokemons(pagedPokemonsArray));
  }, [currentPage, filteredPokemons]);

  useEffect(() => {
    dispatch(setCurrentPage(1));
  }, [filteredPokemons]);

  return (
    <div className={styles.pagination}>

      <button onClick={() => { dispatch(setCurrentPage(firstPage)) }} disabled={currentPage === firstPage}>Primera</button>

      <button onClick={() => { dispatch(setCurrentPage(currentPage - 1)) }} disabled={currentPage === 1}>&lt;</button>

      <button onClick={() => { dispatch(setCurrentPage(currentPage + 1)) }} disabled={indexOfLastPokemon >= filteredPokemons.length}>&gt;</button>

      <button onClick={() => { dispatch(setCurrentPage(lastPage)) }} disabled={currentPage === lastPage}>Última</button>
      
    </div>
  );
};

export default Pagination;
