const axios = require("axios");
require("dotenv").config();
const { API_URL, API_KEY, ADD_REC_INFO } = process.env;
const recipesToBD = require('./recipesToBD')

module.exports = async (req, res) => {
  const { idRecipe } = req.params;
  await recipesToBD();
  try {
    let recipes = await axios
      .get(`${API_URL}?apiKey=${API_KEY}${ADD_REC_INFO}`)
      .then((response) => response.data)
      .then((data) => data.results);

    const recipe = recipes.filter((receta) => receta.id == idRecipe);

    console.log(recipe);    
    res.status(200).json(recipe);
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: error.message });
  }
};


