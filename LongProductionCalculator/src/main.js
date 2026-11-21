//JMTix

// 0- Get the recipes JSON
// 1- Asign every recipe, input and output to their asigned tile
// 2- calculate how many of that material you can make per minute 
// 3- Add a minute multiplier
let recipes = [];

const recipeText = document.querySelector(".recipe-text");
const recipeList = document.querySelector("#recipe-list");
const recipeBook = document.querySelector("#recipe-book")

async function loadRecipes() {
    const response = await fetch("recipes.JSON");
    recipes = await response.json();

    console.log(recipes);
}

loadRecipes()

function fillRecipes() {
    for (recipe in recipes) {
        const item = document.createElement("li");
        item.textContent = recipes.id;

        recipes.push(item);

        item.addEventListener("click", function() {
            choseRecipe(item);

        });

        recipeList.appendChild(item);
    } 
}


function choseRecipe(text) {
   const object = document.querySelector(".recipe-object");

   const objectText = document.createElement("p");
   objectText.textContent = text.textContent;

    object.appendChild(objectText);
}


// Events

if (recipeBook) {
    recipeBook.addEventListener("click", function() {
        recipeList.classList.toggle("hidden");
    })
}

