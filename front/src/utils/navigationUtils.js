const URL_BASE = "http://localhost:3001/pokemons";
import axios from 'axios'

const onSearch = async (query) => {
    try {
        if (isNaN(query)) {
            const { data } = await axios.get(`${URL_BASE}?name=${query}`);
            return window.alert(`${data.name}`);
        }
        const { data } = await axios.get(`${URL_BASE}/${query}`);
        if (data.name) {
            window.alert(`${data.name}`);
        } else {
            window.alert(`No existe el nombre/id ${query}`);
        }
    } catch (error) {
        console.error(error);
        return alert(`No existe el nombre/id ${query}`);
    }
}

export default onSearch;