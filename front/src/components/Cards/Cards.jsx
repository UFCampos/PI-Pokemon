import styles from './Cards.module.css'
import Card from '../Card/Card'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'


const Cards = () => {
    console.log(useSelector(state => state));
    const pokemons = useSelector(state => state.allPokes)
    return (
        <div className={styles.container}>
            {pokemons.map((pokemon) => {
                return <Card key={pokemon.id} {...pokemon} />
            })}
        </div>
    )
}

export default Cards