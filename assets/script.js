// assign each icon element to a variable
var honey = document.getElementById("honey");
var egg = document.getElementById('egg');
var avocado = document.getElementById("avocado");
var lemon = document.getElementById('lemon');
var yogurt = document.getElementById("yogurt");

// assign text element to a variable
var title = document.getElementById("recipeTitle"); 
var subtitle = document.getElementById("recipeSubtitle");
var text = document.getElementById("recipeText");

// add eventlistener to each icon
honey.addEventListener("click", iconClick);
egg.addEventListener("click", iconClick);
avocado.addEventListener("click", iconClick);
lemon.addEventListener("click", iconClick);
yogurt.addEventListener("click", iconClick);

function resetStyles() {
  honey.style.boxShadow = "";
  honey.style.borderRadius = "";

  egg.style.boxShadow = "";
  egg.style.borderRadius = "";

  avocado.style.boxShadow = "";
  avocado.style.borderRadius = "";

  lemon.style.boxShadow = "";
  lemon.style.borderRadius = "";

  yogurt.style.boxShadow = "";
  yogurt.style.borderRadius = "";

  
}
// iconClick function 
function iconClick(event){
  resetStyles();
  // storing id of the image being clicked
  var clickedImage = event.target.id;
  
  switch (clickedImage) {
    case "honey" :
      // honey.style.transform = "scale(1.2)";
      honey.style.boxShadow = "3px 3px 3px 3px #F2A03D";
      honey.style.borderRadius = "12px"
      displayTitle("Honey");
      displaySubtitle("moisturize, refresh and rejuvenate");
      displayText(["Mash the banana",
     "Add honey to the mashed banana in a bowl", 
      "Mix the two ingredients", 
      "Apply mask on face" ,
      "After 10min, rinse the mask off face."]);
    break; 
    case "egg" :
      egg.style.boxShadow = "3px 3px 3px 3px #FFFFFF";
      egg.style.borderRadius = "12px"
      displayTitle("Egg");
      displaySubtitle("tighten and nourish the skin");
      displayText(["Beat egg until foam appears",
      "Mix with 1 teaspoon of lemon juice and 1 tsp of honey",
      "Mix well",
      "Apply on face with cotton ball",
      "Rinse off with warm water after 15min."]);
    break; 
    case "avocado" :
      avocado.style.boxShadow = "3px 3px 3px 3px #BBBF3F";
      avocado.style.borderRadius = "12px"
      displayTitle("Avocado");
      displaySubtitle("exfoliate, anti-aging and Good for the skin");
      displayText(["Mash avocado", 
      "Mix with 1 cup of plain yogurt",
      "Mix until texture is smooth",
      "Apply on face for 15min.",
      "Rinse off"]);
    break; 
    case "lemon" :
      lemon.style.boxShadow = "3px 3px 3px 3px #F2B90C";
      lemon.style.borderRadius = "12px"
      displayTitle("Lemon");
      displaySubtitle("glowy, bright and elastic skin");
      var lemonRecipe = ["Press lemon in a container to get lemon juice",
      "Pour water into the same container - equal amount of lemon juice and water",
      "Slice cucumber and lemon",
      "Put the slices in the juice",
      "Refrigerate mix for a few hours",
      "Dip cotton ball in the juice mix and apply as needed."];
      displayText(lemonRecipe)
    break; 
    case "yogurt" :
      yogurt.style.boxShadow = "3px 3px 3px 3px #52D5F2";
      yogurt.style.borderRadius = "12px"
      displayTitle("Yogurt");
      displaySubtitle("clean skin and less imperfections");
      displayText(["Mix 1 cup of yogurt with a few drops of lemon juice",
      "Mix well",
      "Apply on face for approx. 10min",
      "Rinse off face"]);
    break; 
    default : 
      displayTitle("Skincare Recipes");
      displaySubtitle("less waste, better planet, best skin");
      displayText("Select one of the items displayed")
  }
}
 
// function display content changes
function displayTitle(title){
  recipeTitle.textContent = title; 
}
function displaySubtitle(subtitle){
  recipeSubtitle.textContent = subtitle; 
}
function displayText(text) {
  var recipeText = document.getElementById("recipeText");

  if (Array.isArray(text)) {
    recipeText.innerHTML = "<ul style='text-align: left;'>" + text.map(item => "<li>" + item + "</li>").join("") + "</ul>";
  } else {
    recipeText.textContent = text;
  }
}
