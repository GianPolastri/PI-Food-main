require("dotenv").config();
const axios = require("axios");
const { API_URL, API_KEY, ADD_REC_INFO } = process.env;
const { Recipe } = require("../db");

const recipesToDB = async () => {
  try {
    const recetas = await axios
      .get(`${API_URL}?apiKey=${API_KEY}&number=100${ADD_REC_INFO}`)
      .then((response) => response.data)
      .then((data) => data.results);
    // console.log(recetas);
    let recetasToDB = await recetas.map((rec) => {
        const steps = rec.analyzedInstructions && rec.analyzedInstructions[0];
      return {
        name: rec.title,
        imagen: rec.image,
        resume: rec.summary,
        healthScore: rec.healthScore,
        stepByStep: steps && steps.steps,
      };
    });
    // console.log(recetasToDB);
    Recipe.bulkCreate(recetasToDB);
  } catch (error) {
    console.log(error);
  }
};

recipesToDB();

module.exports = recipesToDB;
