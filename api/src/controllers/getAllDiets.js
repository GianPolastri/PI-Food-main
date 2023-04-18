const axios = require('axios');
require('dotenv').config();
const {DB_USER, DB_HOST, DB_PASSWORD} = process.env;
const { Diet } = require('../db');


// (req, res) => {
//     res.send('Obtiene todos los tipos de dietas existentes.');
// }



module.exports = async (req, res) => {
    try {
        // await dietsToDB();
        const diets = await Diet.findAll();
        console.log(diets);
        res.status(200).json(diets);
    } catch (error) {
        res.status(400).json({error: error.message});
    }    
}

// await axios.get(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/food`);