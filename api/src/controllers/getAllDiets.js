const axios = require('axios');
require('dotenv').config();
const {DB_USER, DB_HOST_, DB_PASSWORD} = process.env;
const dietsToDB = require('./dietsToDB');


// (req, res) => {
//     res.send('Obtiene todos los tipos de dietas existentes.');
// }



module.exports = async (req, res) => {
    try {
        dietsToDB();
        const diets = await axios.get(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST_}/food/diets`);
        res.status(200).json(diets);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
    
}

