

const recipeCleaner = (recipes) => {
    const cleanRecipes = recipes.map( elem => {
        const steps = elem.analyzedInstructions && elem.analyzedInstructions[0];
        const recipe = {
          id: elem.id,
          name: elem.title,
          imagen: elem.image,
          resume: elem.summary,
          healthScore: elem.healthScore,
          stepByStep: steps && steps.steps,
          created: false,
        };
        return recipe;
    });
    
    return cleanRecipes;

}

module.exports = recipeCleaner;