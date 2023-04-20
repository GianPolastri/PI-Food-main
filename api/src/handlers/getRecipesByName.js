

module.exports = async (req, res) => {
    const {name} = req.query;
    
    try {
        const recipes = await getByName(name);
        res.status(200).json(recipes);
    } catch (error) {
        
    }
}