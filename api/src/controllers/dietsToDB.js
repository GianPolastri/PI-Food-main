require("dotenv").config();
const axios = require("axios");
const { Diets } = require("../db");
const { API_KEY, API_URL, ADD_REC_INFO } = process.env;

const dietsToDB = async () => {
  try {
    const dietsRaw = await axios
      .get(`${API_URL}?apiKey=${API_KEY}&number=100${ADD_REC_INFO}`)
      .then((response) => response.data)
      .then((data) => data.results)
      .then((results) => results.flatMap((r) => r.diets));
      
    console.log(dietsRaw);

    const setDiets = new Set(dietsRaw);

    console.log(setDiets);
    const diets = [...setDiets, 'vegetarian'];

    console.log(diets);

    Diets.bulkCreate(diets);
  } catch (error) {
    console.log(error);
  }
};

dietsToDB();