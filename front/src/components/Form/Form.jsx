import axios from 'axios'
import modalStyles from '../Modal/Modal.module.scss'
import styles from './Form.module.scss'
import { useEffect, useState } from 'react'
import validation from '../../utils/validation.js'

const Form = () => {
    const [pokemon, setPokemon] = useState({
        name: '',
        image: '',
        types: [],
        hp: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: ''
    })

    const [errors, setErrors] = useState({
        name: '',
        image: '',
        hp: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: ''
    })


    const handleSubmit = async (e) => {
        e.preventDefault()
        const { name, image, types, hp, attack, defense, speed, height, weight } = pokemon
        const newPokemon = { name, image, types, hp, attack, defense, speed, height, weight }
        await axios.post('http://localhost:3001/pokemon', newPokemon)
    }

    const handleChange = (e) => {
        const key = e.target.name
        const value = e.target.value
        setPokemon({ ...pokemon, [key]: value })
        validation({ ...pokemon, [key]: value }, errors, setErrors)
    }

    return (
        <>
        <div><h1>Crea tu Pokemon</h1></div>
        <form action="" method="POST" className={styles.form}>

            <div>
                <label htmlFor="">Nombre: </label>
                <input type="text" value={pokemon.name} onChange={handleChange} name="name" placeholder='Nombre' />
                {errors.name && <p>{errors.name}</p>}
            </div>

            <div>
                <label htmlFor="">Imagen: </label>
                <input type="text" value={pokemon.image} onChange={handleChange} name="image" placeholder='Imagen' />
                {errors.image && <p>{errors.image}</p>}
            </div>

            <div>
                <label htmlFor="">Tipos: </label>
                <input type="text" value={pokemon.types} onChange={handleChange} name="types" placeholder='Tipos' />
                {errors.types && <p>{errors.types}</p>}
            </div>

            <div>
                <label htmlFor="">Puntos de Salud: </label>
                <input type="text" value={pokemon.hp} onChange={handleChange} name="hp" placeholder='HP' />
                {errors.hp && <p>{errors.hp}</p>}
            </div>

            <div>
                <label htmlFor="">Puntos de Ataque: </label>
                <input type="text" value={pokemon.attack} onChange={handleChange} name="attack" placeholder='Ataque' />
                {errors.attack && <p>{errors.attack}</p>}
            </div>

            <div>
                <label htmlFor="">Puntos de Defensa: </label>
                <input type="text" value={pokemon.defense} onChange={handleChange} name="defense" placeholder='Defensa' />
                {errors.defense && <p>{errors.defense}</p>}
            </div>

            <div>
                <label htmlFor="">Velocidad: </label>
                <input type="text" value={pokemon.speed} onChange={handleChange} name="speed" placeholder='Velocidad' />
                {errors.speed && <p>{errors.speed}</p>}
            </div>

            <div>
                <label htmlFor="">Altura: </label>
                <input type="text" value={pokemon.height} onChange={handleChange} name="height" placeholder='Altura' />
                {errors.height && <p>{errors.height}</p>}
            </div>

            <div>
                <label htmlFor="">Peso: </label>
                <input type="text" value={pokemon.weight} onChange={handleChange} name="weight" placeholder='Peso' />
                {errors.weight && <p>{errors.weight}</p>}
            </div>

            <button>Crear</button>
        </form>
        </>
    )
}

export default Form