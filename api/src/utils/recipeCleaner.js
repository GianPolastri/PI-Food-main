

const recipeCleaner = (recipes) => {
    const cleanRecipes = recipes.map( elem => {
        const steps = elem.analyzedInstructions && elem.analyzedInstructions[0];
        const recipe = {
          id: elem.id,
          title: elem.title,
          image: elem.image,
          summary: elem.summary,
          healthScore: elem.healthScore,
          steps: steps && steps.steps,
          created: false,
        };
        return recipe;
    });
    
    return cleanRecipes;

}

module.exports = recipeCleaner;