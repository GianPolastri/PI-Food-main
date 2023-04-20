require("dotenv").config();
const axios = require("axios");
const { API_URL, API_KEY, ADD_REC_INFO } = process.env;
const { Recipe } = require("../db");
const recipeCleaner = require("../utils/recipeCleaner");
const { Op } = require("sequelize");

const getByName = async (name) => {
  const dbRecipes = await Recipe.findAll({
    where: {
      title: {
        [Op.substring]: `${name}`,
      },
    },
  })



  const rawApiRecipes = await axios
    .get(
      `${API_URL}/complexSearch?apiKey=${API_KEY}&&number=20&&${ADD_REC_INFO}&&instructionsRequired=true`
    )
    .then((response) => response.data)
    .then((data) => data.results);

  const filtredApiRecipes = rawApiRecipes.filter((rec) =>
    rec.title.includes(name)
  );

  const cleanApiRecipes = recipeCleaner(filtredApiRecipes);

  const setApiRecipes = new Set(cleanApiRecipes);

  
  const cleanDbRecipes = recipeCleaner(dbRecipes);

  const setDbRecipes = new Set(cleanDbRecipes);
  
  // console.log(setDbRecipes);
//   console.log(cleanDbRecipes);
  // const filtredDbRecipes = dbRecipes.filter(rec => rec.dataValues);
  // const filtredDbRecipes = dbRecipes.dataValue
  // console.log(filtredDbRecipes);

  const recipesSet  = new Set([...setDbRecipes, ...setApiRecipes])

  console.log(recipesSet);
};

getByName("Soup");
