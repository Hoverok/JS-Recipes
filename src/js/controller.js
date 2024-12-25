import 'core-js/stable';
import 'regenerator-runtime/runtime';
import icons from 'url:../img/icons.svg';

import * as model from './model.js';
import recipeView from './views/recipeView.js';

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2
// 5ed6604591c37cdc054bc886
// 664c8f193e7aa067e94e8297
// 664c8f193e7aa067e94e897b
// split into model and recipeView

///////////////////////////////////////

const url =
  'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886';

const displayRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();
    await model.loadRecipe(id);
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.error(err);
  }
};

const init = function () {
  recipeView.handleRecipe(displayRecipe);
};

init();
