require("dotenv").config();
const { API_URL, API_KEY, ADD_REC_INFO } = process.env;
const axios = require("axios");
const { Recipe } = require("../db");
const recipeCleaner = require("../utils/recipeCleaner");

const getById = async (id, source) => {
  const rawRecipe = [];
  console.log(id);
  let result;
  const recipe =
    source === "db"
      ? await Recipe.findByPk(id)
      : await axios
          .get(`${API_URL}/${id}/information?apiKey=${API_KEY}&&${ADD_REC_INFO}`)
          .then((response) => response.data);

    // console.log(recipe);

  if (source === "db") {
    rawRecipe.push(recipe);
    result = rawRecipe;
  } else {
    rawRecipe.push(recipe);
    
    result = recipeCleaner(rawRecipe);
    // console.log(result);
  }

  return result;
};



module.exports = getById;
