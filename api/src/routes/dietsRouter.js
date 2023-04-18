const { Router } = require("express");
const getAllDiets = require("../controllers/getAllDiets");


const dietsRouter = Router();

dietsRouter.get('/', getAllDiets);

module.exports = dietsRouter;



// 📍 GET | /diets
// Obtiene un arreglo con todos los tipos de dietas existentes.
// En una primera instancia, cuando no exista ninguna dieta, deberás precargar la base de datos con las dietas de la documentación.
// Estas deben ser obtenidas de la API (se evaluará que no haya hardcodeo). Luego de obtenerlas de la API, deben ser guardadas en la base de datos para su posterior consumo desde allí.