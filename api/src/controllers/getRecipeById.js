const axios = require("axios");
require("dotenv").config();
const { API_URL, API_KEY, ADD_REC_INFO } = process.env;
const recipesToDB = require('./recipesToDB')

module.exports = async (req, res) => {
  const { idRecipe } = req.params;
  // await recipesToDB();
  try {
    let recipes = await axios
      .get(`${API_URL}?apiKey=${API_KEY}${ADD_REC_INFO}`)
      .then((response) => response.data)
      .then((data) => data.results);

    const recipe = recipes.filter((receta) => receta.id == idRecipe);

    const objRecipe = recipe[0];

    const steps = objRecipe.analyzedInstructions && objRecipe.analyzedInstructions[0];
    const recipeSend = {
      id: objRecipe.id,
      name: objRecipe.title,
      imagen: objRecipe.image,
      resume: objRecipe.summary,
      healthScore: objRecipe.healthScore,
      stepByStep: steps && steps.steps,
    };

  res.status(200).json(recipeSend);
  
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: error.message });
  }
};


