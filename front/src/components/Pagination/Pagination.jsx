import { useDispatch } from 'react-redux';
import { pagedPokemons, setCurrentPage, filterByType } from '../../redux/actions';
import styles from '../Cards/Cards.module.scss';
import { useState, useEffect } from 'react';

const Pagination = ({ currentPage, filteredPokemons, pokemonByStorage }) => {
  const dispatch = useDispatch();

  const pokemonsPerPage = 12;
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const pagedPokemonsArray = filteredPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

  const lastPage = Math.ceil(filteredPokemons.length / pokemonsPerPage);
  const firstPage = 1;

  useEffect(() => {
    dispatch(pagedPokemons(pagedPokemonsArray));
  }, [currentPage, filteredPokemons, pokemonByStorage]);

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
