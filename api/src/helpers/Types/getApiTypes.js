const {URL_TYPES} = require('../../utils/api_urls');

const axios = require('axios');

const getApiTypes = async () => {
    const { data } = await axios(URL_TYPES);

    const responses = await Promise.all(
        data.results.map(
            (type) => axios(type.url)
        )
    )

    const types = responses.map((response) => {
        let { name } = response.data;
        return name
    })

    return types;
}

module.exports = getApiTypes