// When the user chooses to exit, this will close the window
function exitGame() {
  // Closes the window tab
  if (window.confirm("Are you sure you want to leave?")) {
    window.close();
  } else {
    console.log("Leave canceled.");
  }
}

// When the user chooses to start the game, this will open the apron webpage in a new tab
function enterGame() {
  // Open a new tab with the URL of the game
  let gameWindow = window.open('apronchoice.html', '_blank');
  
  window.gameWindow = gameWindow;
}


// Once the user is done choosing, they will be brought to the dessert webpage to choose
function selectApron(apron) {
  // Show dessert options
  window.location.href = 'dessertchoice.html';
}

// Depending on which the user chose, they will be brought to the corresponding webpage
function chooseDessert(dessert) {
  localStorage.setItem('dessertType', dessert)
  if (dessert === 'cake') {
    window.location.href = 'cake.html';  
  } else if (dessert === 'icecream') {
    window.location.href = 'icecream.html'; 
  }
}

// CAKE

// If the user chooses cake, they will choose a shape, then they will be directed to the next webpage to pick a flavor
function selectShape(shape) {
  localStorage.setItem('shape', shape)
  window.location.href = 'cakeflavor.html';
}

// After the user chooses a flavor, they will be directed to the next webpage to pick a topping
function selectFlavor(flavor) {
  localStorage.setItem('flavor', flavor)
  window.location.href = 'caketoppings.html';
}

// After the user picks a topping, they will be directed to the finish page where their final decorated sweet treat will be displayed
function selectTopping(topping) {
  localStorage.setItem('topping', topping)
  window.location.href = 'finish.html';
}

// ICE CREAM

// If the user chooses icecream, they will choose a container, then they will be directed to the next webpage to pick a flavor
function selectCont(cont) {
  localStorage.setItem('container', cont);  // Store container choice
  window.location.href = 'icecreamflavor.html';
}

// After the user chooses a flavor, they will be directed to the next webpage to pick a topping
function selectICFlavor(flavor) {
  localStorage.setItem('flavor', flavor);  // Store flavor choice
  window.location.href = 'icecreamtopping.html';
}

  // After the user picks a topping, they will be directed to the finish page where their final decorated sweet treat will be displayed
  function selectICTopping(topping) {
    localStorage.setItem('topping', topping);  // Store topping choice
    window.location.href = 'finish.html';
  }

window.onload = function() {
  // Retrieve user choices from localStorage
  let dessertType = localStorage.getItem("dessertType");
  let shape = localStorage.getItem("shape");
  let container = localStorage.getItem("container");
  let flavor = localStorage.getItem("flavor");
  let topping = localStorage.getItem("topping");

  // Default placeholder image
  const defaultImage = "https://via.placeholder.com/300x300.png";
  const imageElement = document.getElementById("final-image");
  
  // Set default image before validation
  imageElement.src = defaultImage;

  // Determine which dessert to display
  if (dessertType === "cake" && shape && flavor && topping) {
    displayFinalCake(shape, flavor, topping);
  } else if (dessertType === "icecream" && container && flavor && topping) {
    displayFinalIcecream(container, flavor, topping);
  } else {
    imageElement.src = defaultImage;
  }
};

// Will use user input from the choices to determine the final ICECREAM img to be displayed 
function displayFinalIcecream(cont, flavor, topping) {
  if (cont === 'cup' && flavor === 'strawberry' && topping === 'cherry') {
    document.getElementById("final-image").src = "https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/cup-strawberry-cherry.png?v=1738757020723";
  } else if (cont === 'cup' && flavor === 'strawberry' && topping === 'sprinkles') {
    document.getElementById("final-image").src = "https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/cup-strawberry-sprinkles.png?v=1738757074624";
  } else if (cont === 'cup' && flavor === 'strawberry' && topping === 'marshmallow') {
    document.getElementById("final-image").src = "https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/cup-strawberry-marshmallow.png?v=1738757073832";
  } else if (cont === 'cone' && flavor === 'strawberry' && topping === 'cherry') {
    document.getElementById("final-image").src = "https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/cone-strawberry-cherry.png?v=1738757002912";
  } else if (cont === 'cone' && flavor === 'strawberry' && topping === 'sprinkles') {
    document.getElementById("final-image").src = "https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/cone-strawberry-sprinkles.png?v=1738757024869";
  } else if (cont === 'cone' && flavor === 'strawberry' && topping === 'marshmallow') {
    document.getElementById("final-image").src = "https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/cone-strawberry-marshmallow.png?v=1738756990072";
  } // chocolate flavor
  else if (cont === 'cup' && flavor === 'chocolate' && topping === 'cherry') {
    document.getElementById("final-image").src = "https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/cup-chocolate-cherry.png?v=1738757006217";
  } else if (cont === 'cup' && flavor === 'chocolate' && topping === 'sprinkles') {
    document.getElementById("final-image").src = "https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/cup-chocolate-sprinkles.png?v=1738757017992";
  } else if (cont === 'cup' && flavor === 'chocolate' && topping === 'marshmallow') {
    document.getElementById("final-image").src = "https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/cup-chocolate-marshmallow.png?v=1738757008904";
  } else if (cont === 'cone' && flavor === 'chocolate' && topping === 'cherry') {
    document.getElementById("final-image").src = "https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/cone-chocolate-cherry.png?v=1738756970819";
  } else if (cont === 'cone' && flavor === 'chocolate' && topping === 'sprinkles') {
    document.getElementById("final-image").src = "https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/cone-chocolate-sprinkles.png?v=1738756987378";
  } else if (cont === 'cone' && flavor === 'chocolate' && topping === 'marshmallow') {
    document.getElementById("final-image").src = "https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/cone-chocolate-marshmallow.png?v=1738756986447";
  } //vanilla flavor
  else if (cont === 'cup' && flavor === 'vanilla' && topping === 'cherry') {
    document.getElementById("final-image").src = "https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/cup-vanilla-cherry.png?v=1738757033903";
  } else if (cont === 'cup' && flavor === 'vanilla' && topping === 'sprinkles') {
    document.getElementById("final-image").src = "https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/cup-vanilla-sprinkles.png?v=1738757042232";
  } else if (cont === 'cup' && flavor === 'vanilla' && topping === 'marshmallow') {
    document.getElementById("final-image").src = "https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/cup-vanilla-marshmallow.png?v=1738757036954";
  } else if (cont === 'cone' && flavor === 'vanilla' && topping === 'cherry') {
    document.getElementById("final-image").src = "https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/cone-vanilla-cherry.png?v=1738756993783";
  } else if (cont === 'cone' && flavor === 'vanilla' && topping === 'sprinkles') {
    document.getElementById("final-image").src = "https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/cone-vanilla-sprinkles.png?v=1738757000263";
  } else if (cont === 'cone' && flavor === 'vanilla' && topping === 'marshmallow') {
    document.getElementById("final-image").src = "https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/cone-vanilla-marshmallow.png?v=1738756996315";
  }
  
}

// CAKE
// When the page is loaded, it retrieves the stored values from localStorage and calls the appropriate function
  // Retrieve user choices from localStorage
  let shape = localStorage.getItem("shape");
  let flavor = localStorage.getItem("flavor");
  let topping = localStorage.getItem("topping");

  // Check if the choices are available
  if (shape && flavor && topping) {
    displayFinalCake(shape, flavor, topping);
  } else {
    document.getElementById("final-image").src = "https://via.placeholder.com/300x300.png";  // Default image
  }


// Will use user input from the choices to determine the final CAKE img to be displayed 
function displayFinalCake(shape, flavor, topping) {
  if (shape === 'circle' && flavor === 'strawberry' && topping === 'strawberry') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/CIRCLE-STRAWBERRY-STRAWBERRY.png?v=1738758397627";
  } else if (shape === 'circle' && flavor === 'strawberry' && topping === 'sprinkles') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/CIRCLE-STRAWBERRY-SPRINKLES.png?v=1738758395593";
  } else if (shape === 'circle' && flavor === 'strawberry' && topping === 'cherry') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/CIRCLE-STRAWBERRY-CHERRY.png?v=1738758392696";
  } else if (shape === 'square' && flavor === 'strawberry' && topping === 'strawberry') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/SQUARE-STRAWBERRY-STRAWBERRY%20(1).png?v=1738758526659";
  } else if (shape === 'square' && flavor === 'strawberry' && topping === 'sprinkles') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/SQUARE-STRAWBERRY-SPRINKLES%20(1).png?v=1738758479788";
  } else if (shape === 'square' && flavor === 'strawberry' && topping === 'cherry') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/SQUARE-STRAWBERRY-CHERRY.png?v=1738758473975";
  } else if (shape === 'heart' && flavor === 'strawberry' && topping === 'strawberry') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/HEART-STRAWBERRY-STRAWBERRY.png?v=1738758435221";
  } else if (shape === 'heart' && flavor === 'strawberry' && topping === 'sprinkles') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/HEART-STRAWBERRY-SPRINKLES.png?v=1738758429807";
  } else if (shape === 'heart' && flavor === 'strawberry' && topping === 'cherry') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/HEART-STRAWBERRY-CHERRY.png?v=1738758427969";
    
  // chocolate
  } else if (shape === 'circle' && flavor === 'chocolate' && topping === 'strawberry') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/CIRCLE-CHOCOLATE-STRAWBERRY.png?v=1738758388422";
  } else if (shape === 'circle' && flavor === 'chocolate' && topping === 'sprinkles') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/CIRCLE-CHOCOLATE-SPRINKLES.png?v=1738758384838";
  } else if (shape === 'circle' && flavor === 'chocolate' && topping === 'cherry') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/CIRCLE-CHOCOLATE-CHERRY.png?v=1738758383397";
  } else if (shape === 'square' && flavor === 'chocolate' && topping === 'strawberry') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/SQUARE-CHOCOLATE-STRAWBERRY.png?v=1738758469258";
  } else if (shape === 'square' && flavor === 'chocolate' && topping === 'sprinkles') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/SQUARE-CHOCOLATE-SPRINKLES.png?v=1738758463481";
  } else if (shape === 'square' && flavor === 'chocolate' && topping === 'cherry') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/SQUARE-CHOCOLATE-CHERRY.png?v=1738758458422";
  } else if (shape === 'heart' && flavor === 'chocolate' && topping === 'strawberry') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/HEART-CHOCOLATE-STRAWBERRY.png?v=1738758423995";
  } else if (shape === 'heart' && flavor === 'chocolate' && topping === 'sprinkles') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/HEART-CHOCOLATE-SPRINKLES.png?v=1738758421988";
  } else if (shape === 'heart' && flavor === 'chocolate' && topping === 'cherry') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/HEART-CHOCOLATE-CHERRY.png?v=1738758417535";
     
  // vanilla
  } else if (shape === 'circle' && flavor === 'vanilla' && topping === 'strawberry') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/CIRCLE-VANILLA-STRAWBERRY.png?v=1738758409415";
  } else if (shape === 'circle' && flavor === 'vanilla' && topping === 'sprinkles') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/CIRCLE-VANILLA-SPRINKLES.png?v=1738758407331";
  } else if (shape === 'circle' && flavor === 'vanilla' && topping === 'cherry') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/CIRCLE-VANILLA-CHERRY.png?v=1738758401907";
  } else if (shape === 'square' && flavor === 'vanilla' && topping === 'strawberry') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/SQUARE-VANILLA-STRAWBERRY.png?v=1738758567638";
  } else if (shape === 'square' && flavor === 'vanilla' && topping === 'sprinkles') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/SQUARE-VANILLA-SPRINKLES.png?v=1738758562713";
  } else if (shape === 'square' && flavor === 'vanilla' && topping === 'cherry') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/SQUARE-VANILLA-CHERRY.png?v=1738758556230";
  } else if (shape === 'heart' && flavor === 'vanilla' && topping === 'strawberry') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/HEART-VANILLA-STRAWBERRY.png?v=1738758450337";
  } else if (shape === 'heart' && flavor === 'vanilla' && topping === 'sprinkles') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/HEART-VANILLA-SPRINKLES.png?v=1738758443061";
  } else if (shape === 'heart' && flavor === 'vanilla' && topping === 'cherry') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/HEART-VANILLA-CHERRY.png?v=1738758440602";
  }

}
