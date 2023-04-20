const recipesToDB = require("../utils/recipesToDB");
const getByID = require("../controllers/getByID");

module.exports = async (req, res) => {
  // await recipesToDB();
  const { idRecipe } = req.params;
  const source = isNaN(idRecipe) ? "db" : "api";
  try {
    const recipeSend = await getByID(idRecipe, source);

    res.status(200).json(recipeSend[0]);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};
