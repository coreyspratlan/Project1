
var queryURL = "https://www.thecocktaildb.com/api/json/";
var apiKey = "v2/9973533"
<<<<<<< HEAD
var alcoholic = queryURL + apiKey + "/filter.php?a=Alcoholic"; // List of all the alcoholic drinks.
var nonAlcoholic = queryURL + apiKey + "/filter.php?a=Non_Alcoholic"; // List of all the non-alcoholic drinks --- possibly for sober adults/underage.
var drinkId = queryURL + apiKey + "/lookup.php?i=";// We will add the drink ID in the second $ajax call with var codeDrinkId = response.drinks[bookVariable#].idDrink (url: drinkId + codeDrinkId,) Do we need to change codeDrinkId into a string?

var drinkContainer;
//first $ajax call // make this variable empty and put in the first $ajax call.
var drinkIdNumber; // = response.drinks[drinkValue].idDrink;  // how will we connect the book.js value to the rest of the drink.js ?

////second $ajax call ... make these empty variables and put in the second $ajax call.
var drinkName; // = response.drinks.strDrink;
var measurements; // = response.drinks.strMeasure(#1 -?); // how do we run through the #'s we want to include and exclude the null values? A for loop? 
var ingredients; // = response.drinks.strIngredient(#1 -?); // how do we run through the #'s we want to include and exclude the null values? A for loop? 
var drinkInstructions; // = repsonse.drinks.strInstructions;
=======
var alcoholic = queryURL + apiKey + "/filter.php?a=Alcoholic";
var nonAlcoholic = queryURL + apiKey + "/filter.php?a=Non_Alcoholic";
var drinkId = queryURL + apiKey + "/lookup.php?i=";

var drinkContainer;
var drinkIdNumber; 
var drinkName;
var measurements;
var ingredients;
var drinkInstructions;
>>>>>>> b726c4e97fd249e93c4d09b6825b0777ec9502cf
var totalDrinkInfo;
var drinkUrl;
var drinkImg;
var savedDrinkArr = [];

var drinkTitle = $("#drinkTitleEl");
var recipe = $("#recipeList");
var instructions = $("#instructions");
var drinkImgDiv = $("#drinkImgDiv");
var ingredientHeader = $('#ingredientsHeader');
var instructionHeader = $('#insructionsHeader')
var drinkCol = $('#drinkCol');
var searchBtn = $('#search-btn');


var decider;

<<<<<<< HEAD
if (containsAlcohol) {
    decider = alcoholic;
} else {
    decider = nonAlcoholic
}

var searchBtn = $('#search-btn');

function drinkCalls() {
=======

function loadDrinkStorage(){
    savedDrinkArr = JSON.parse(localStorage.getItem('drinkArr'));
    if(savedDrinkArr === null) {
        saveBookArr = [];
    }
    console.log(savedDrinkArr);
}

function drinkCalls() {
    saveDrinkBtn.toggle();
    if (containsAlcohol) {
        decider = alcoholic;
    } else {
        decider = nonAlcoholic;
    }
>>>>>>> b726c4e97fd249e93c4d09b6825b0777ec9502cf
    $.ajax({
        url: decider,
        method: "GET"
    }).then(function (response) {
        drinkIdNumber = response.drinks[drinkValue].idDrink;

        $.ajax({
            url: "https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=" + drinkIdNumber,
            method: "GET"
        }).then(function (response) {
<<<<<<< HEAD
            console.log(response);
            drinkName = response.drinks[0].strDrink;
            drinkInstructions = response.drinks[0].strInstructions;

            image = response.drinks[0].strDrinkThumb;

            drinkTitle.text(drinkName); // append to a <h2>?

            instructions.text(drinkInstructions); // append to a <p>?
            img.attr("src", image); //append to image <div>?

            ingredients = [response.drinks[0].strIngredient1, response.drinks[0].strIngredient2, response.drinks[0].strIngredient3, response.drinks[0].strIngredient4, response.drinks[0].strIngredient5, response.drinks[0].strIngredient6, response.drinks[0].strIngredient7, response.drinks[0].strIngredient8, response.drinks[0].strIngredient9, response.drinks[0].strIngredient10, response.drinks[0].strIngredient11, response.drinks[0].strIngredient12, response.drinks[0].strIngredient13, response.drinks[0].strIngredient14, response.drinks[0].strIngredient15];

            measurements = [response.drinks[0].strMeasure1, response.drinks[0].strMeasure2, response.drinks[0].strMeasure3, response.drinks[0].strMeasure4, response.drinks[0].strMeasure5, response.drinks[0].strMeasure6, response.drinks[0].strMeasure7, response.drinks[0].strMeasure8, response.drinks[0].strMeasure9, response.drinks[0].strMeasure10, response.drinks[0].strMeasure11, response.drinks[0].strMeasure12, response.drinks[0].strMeasure13, response.drinks[0].strMeasure14, response.drinks[0].strMeasure15];
=======
            if (drinkImg !== undefined) {
                drinkImg.remove();
            }
            drinkName = response.drinks[0].strDrink;
            drinkInstructions = response.drinks[0].strInstructions;
            drinkImg = $('<img>');
            drinkUrl = response.drinks[0].strDrinkThumb;
            drinkImg.attr('src', drinkUrl);
            drinkImg.attr('id', 'drinkImg');
            drinkImgDiv.append(drinkImg);
            drinkTitle.text(drinkName);
            instructions.text(drinkInstructions);
            ingredientHeader.text('Ingredients:');
            instructionHeader.text('Instructions:');
            ingredients = [response.drinks[0].strIngredient1, response.drinks[0].strIngredient2, response.drinks[0].strIngredient3, response.drinks[0].strIngredient4, response.drinks[0].strIngredient5, response.drinks[0].strIngredient6, response.drinks[0].strIngredient7, response.drinks[0].strIngredient8, response.drinks[0].strIngredient9, response.drinks[0].strIngredient10, response.drinks[0].strIngredient11, response.drinks[0].strIngredient12, response.drinks[0].strIngredient13, response.drinks[0].strIngredient14, response.drinks[0].strIngredient15];
            measurements = [response.drinks[0].strMeasure1, response.drinks[0].strMeasure2, response.drinks[0].strMeasure3, response.drinks[0].strMeasure4, response.drinks[0].strMeasure5, response.drinks[0].strMeasure6, response.drinks[0].strMeasure7, response.drinks[0].strMeasure8, response.drinks[0].strMeasure9, response.drinks[0].strMeasure10, response.drinks[0].strMeasure11, response.drinks[0].strMeasure12, response.drinks[0].strMeasure13, response.drinks[0].strMeasure14, response.drinks[0].strMeasure15];

            recipe.empty();
>>>>>>> b726c4e97fd249e93c4d09b6825b0777ec9502cf

            let ingredientList = $("<ul>");
            for (let i = 0; i < ingredients.length; i++) {
                if (ingredients[i] !== null) {
                    if (measurements[i] === null) {
                        ingredientList.append($("<li>").text(ingredients[i]));
                    } else {
                        ingredientList.append($("<li>").text(measurements[i] + " " + ingredients[i]));
                    }
                }
            }
            recipe.append(ingredientList);
<<<<<<< HEAD
        });
    });

}




    // render: function(drinkName) {
    //     // code?
    // }
    // render: function(recipe) {
    //     // code?
    // } //measurements + ingredients
    // render: function(instructions) {
    //     // code
    // };
    // render: function(image) {
    //     // code
    // };




=======
            saveDrinkBtn.toggle();
           
        });
    });
>>>>>>> b726c4e97fd249e93c4d09b6825b0777ec9502cf



<<<<<<< HEAD
    // OTHER CODE NOT BEING USED RN

    // var alcoholType = queryURL + apiKey + "/filter.php?i="; // We can use this to fliter the liquor specifically if we name the alcoholName variable locally.
    // var popular = "https://www.thecocktaildb.com/api/json/v2/9973533/popular.php"; // List of poplular cocktails.
    // var alcoholeName = "vodka"; // Should we create this variable in each function call that involves a specific liquor?

    // var liquor = alcoholType + alcoholeName;

    // var list1 = "https://www.thecocktaildb.com/api/json/" + apiKey + "/list.php?c=list"; // List of drink types.  Ex: coffee/tea, shot, ordinary drinks, cocktails, beer, punch/party drink. (11)
    // var list2 = "https://www.thecocktaildb.com/api/json/" + apiKey + "/list.php?g=list"; // Glass type.  Ex: highball, champangne flute, ... (32)
    // var list3 = "https://www.thecocktaildb.com/api/json/" + apiKey + "/list.php?i=list"; // list by ingredients (475)
    // var list4 = "https://www.thecocktaildb.com/api/json/" + apiKey + "/list.php?a=list"; // Alcoholic, Non-Alcoholic, Optional Alcohol (3).

    // all elements querried
    // queryParams.q = $("# ...")
    //     .val()
    //     .trim();

    // if (bookVariable = "" ) {  //Ex: genre: horror, authorName: alpha range, bookTitle: region/release year
    //       choose this list/alcoholName
    // }
=======
>>>>>>> b726c4e97fd249e93c4d09b6825b0777ec9502cf
