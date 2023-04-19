
const { Diet } = require('../db');
const dietsToDB = require('../utils/dietsToDB');

// (req, res) => {
//     res.send('Obtiene todos los tipos de dietas existentes.');
// }



module.exports = async (req, res) => {
    try {
        // await dietsToDB();
        const diets = await Diet.findAll();
        // console.log(diets);
        res.status(200).json(diets);
    } catch (error) {
        res.status(400).json({error: error.message});
    }    
}

