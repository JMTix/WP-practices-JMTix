//JMTix

// 0- Get the recipes JSON
// 1- Asign every recipe, input and output to their asigned tile
// 2- calculate how many of that material you can make per minute 
// 3- Add a minute multiplier

const recipeObject = document.querySelector(".recipe-object")
const recipeList = document.querySelector("#recipe-list");
const recipeBook = document.querySelector("#recipe-book");

const overlay = document.querySelector(".overlay");

async function loadRecipes(recipes) {
    const response = await fetch("recipes.JSON");
    recipes = await response.json();

    console.log(recipes);
    fillRBook(recipes);
}

function fillRBook(json) {
    json.forEach(recipe => {
        const item = document.createElement("button");
        item.classList.add("recipe");
        item.textContent = recipe.id;

        item.addEventListener("click", function() {
            choseRecipe(recipe);

        });

        recipeList.appendChild(item);
    });
}


function choseRecipe(recipe) {
   const object = document.querySelector(".recipe-object");

   const objectText = document.querySelector(".recipe-placeholder");
   objectText.textContent = recipe.id;

    setInputs(recipe);
}

function setInputs(recipe) {
    const input = document.querySelector(".input-placeholder");

    input.textContent = Object.entries(recipe.inputs)
        .map(([name, amount]) => `${amount} x ${name}`)
        .join(", ");

    console.log(input.textContent);
}

// Events
if (recipeBook) {
    recipeBook.addEventListener("click", function() {
        recipeList.classList.toggle("hidden");
        if (!recipeList.classList.contains("hidden")) {
             overlay.classList.add("active");

        } else {
            overlay.classList.remove("active");
        }
    })
}


overlay.addEventListener("click", function(event) {
    if (event.target === overlay) {
        overlay.classList.remove("active");
    } 
})

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    overlay.classList.remove("active");
  }
});

//Start
loadRecipes()
