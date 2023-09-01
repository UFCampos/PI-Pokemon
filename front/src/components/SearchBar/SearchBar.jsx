import { useState, useEffect } from 'react'
import onSearch from '../../utils/navigationUtils.js'

const SearchBar = () => {
    //Local state to store input
    const [input, setInput] = useState('')

    //Function to handle input change
    const handleChange = (event) => {
        setInput(event.target.value)
    }

    return (
        <div>
            <input type="text" placeholder="ID o Nombre de Pokemon" value={input} onChange={handleChange} />
            <button onClick={() => onSearch(input)}>B</button>
        </div>
    )
}

export default SearchBar;