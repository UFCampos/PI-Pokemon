import { useState, useEffect } from 'react'
import { fetchContent, openModal } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import Modal from '../Modal/Modal.jsx'
import styles from './SearchBar.module.scss'

const SearchBar = () => {
    const isModalOpen = useSelector(state => state.isModalOpen)
    const modalContent = useSelector(state => state.modalContent)
    const dispatch = useDispatch()


    //Local state to store input
    const [input, setInput] = useState('')

    //Function to handle input change
    const handleChange = (event) => {
        setInput(event.target.value)
    }

    const dispatchSearch = (input) => {
        dispatch(openModal())
        dispatch(fetchContent(input))
    }

    return (
        <div className={styles.search}>
            <div><Modal isOpen={isModalOpen} children={modalContent}/></div>
            <input type="text" placeholder="ID o Nombre de Pokemon" value={input} onChange={handleChange} />
            <button onClick={() => dispatchSearch(input)}>&#x1F50E;</button>
        </div>
    )
}

export default SearchBar;