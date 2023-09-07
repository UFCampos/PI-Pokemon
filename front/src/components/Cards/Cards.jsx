import styles from './Cards.module.scss'
import Card from '../Card/Card'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTypes, filterByType, setCurrentPage } from '../../redux/actions'
import { useEffect, useState } from 'react'
import Filters from '../Filters/Filters'
import Pagination from '../Pagination/Pagination'
import Loading from '../Loading/Loading.jsx'


// This function component renders a list of Pokemon cards.
// It fetches data from the Redux store and handles pagination and filtering.

const Cards = () => {
    const dispatch = useDispatch(); // Retrieve the dispatch function from the Redux store
    const pokemonByStorage = useSelector(state => state.pokemonByStorage); // Retrieve the 'allPokes' state from the Redux store
    const filteredPokemons = useSelector(state => state.filteredPokemons); // Retrieve the 'filteredPokemons' state from the Redux store
    const pagedPokemons = useSelector(state => state.pagedPokemons); // Retrieve the 'pagedPokemons' state from the Redux store
    const currentPage = useSelector(state => state.currentPage); // Retrieve the 'currentPage' state from the Redux store
    const [loadingFlag, setLoadingFlag] = useState(true); // Set up a state variable to track the loading status

    // Fetch the types of Pokemon from an API when the component mounts
    useEffect(() => {
        dispatch(fetchTypes());

    },[]);

    // Update the loading status when the state variables 'allPokes' or 'filteredPokemons' change
    useEffect(() => {
        setLoadingFlag(true);

        if (pokemonByStorage.length > 0) {
            setLoadingFlag(false);
        }
    },[pokemonByStorage, filteredPokemons]);

    // Handle the page change event
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            {loadingFlag ? <Loading /> :
            <div className={styles.container}>
                <div className={styles.buttonsContainer}>
                    <Filters />
                    <Pagination 
                        currentPage={currentPage} 
                        handlePageChange={handlePageChange} 
                        filteredPokemons={filteredPokemons} 
                        pokemonByStorage={pokemonByStorage} 
                    />
                </div>
                <div className={styles.cards}>
                    {pagedPokemons.map((pokemon) => {
                        return <Card key={pokemon.id} {...pokemon} />;
                    })}
                </div>
                <Pagination 
                    currentPage={currentPage} 
                    handlePageChange={handlePageChange} 
                    filteredPokemons={filteredPokemons} 
                    allPokemons={pokemonByStorage} 
                />
            </div>}
        </>
    );
}
export default Cards