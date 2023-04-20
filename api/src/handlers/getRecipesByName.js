const getByName = require('../controllers/getByName');

module.exports = async (req, res) => {
    const {name} = req.query;
    
    try {
        const recipes = await getByName(name);
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

// res.send(
//     `NIY: Esta ruta traera todas las recetas que contengan el nombre solicitado. (${name})`
//   );