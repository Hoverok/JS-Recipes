export const state = {
  recipe: {},
};

const getJSON = async function (url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} status code: ${res.status}`);
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    const recipe = data.data.recipe;
    state.recipe = {
      id: recipe.id,
      publisher: recipe.publisher,
      ingredients: recipe.ingredients,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      title: recipe.title,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
    };
    console.log(state.recipe);
  } catch (err) {
    throw err;
  }
};
