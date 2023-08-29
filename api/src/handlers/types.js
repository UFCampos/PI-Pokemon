const {Type} = require('../db');

const getApiTypes = require('../helpers/Types/getApiTypes.js');



const getTypes = async (req, res) => {
    try {
        //Fetch all types from the external API
        const types = await getApiTypes();

        //Store every type in the database
        const typeDB = [] ;
        for (const type of types) {
            const [newType] = await Type.findOrCreate({
                where: {
                    name: type
                },
                defaults: {
                    name: type
                }
            });
            typeDB.push(newType);   
        }

        
        return res.status(200).json(typeDB);
    } catch (error) {
        res.status(500).send(error.message); // Use 500 for internal server errors
    }
}

module.exports = getTypes