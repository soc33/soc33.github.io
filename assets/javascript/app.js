window.onload = function () { loadFunction() };

function loadFunction() {
  // $("#nameAnimation").css("display", "block");
  $("#nameAnimation").animate({ opacity: "1", "margin-top": "5%" }, 5000)
  // $("#nameAnimation").animate({}, )
}
$(document).ready(function () {

  $("button").on("click", function (event) {
    event.preventDefault();
    $(".topics").hide();
    var name = this.val();
    $("#" + name).show();
  })
  // $("#").on("click", function (event) {
  //   event.preventDefault();
  //   $(".topics").hide();
  //   var name = this.val();
  //   name.show();
  // })
  // $("#").on("click", function (event) {
  //   event.preventDefault();
  //   $(".topics").hide();
  //   var name = this.val();
  //   name.show();
  // })
  // $("#").on("click", function (event) {
  //   event.preventDefault();
  //   $(".topics").hide();
  //   var name = this.val();
  //   name.show();
  // })
  // $("#").on("click", function (event) {
  //   event.preventDefault();
  //   $(".topics").hide();
  //   var name = this.val();
  //   name.show();
  // })
  // $("#").on("click", function (event) {
  //   event.preventDefault();
  //   $(".topics").hide();
  //   var name = this.val();
  //   name.show();
  // })

  var projectArrayOfObjects = [
    project1 = {
      name: "Cheezy Puff Game",
      picture: "images/cheezypuffgame.png",
      text: "Cheezy puff game I made on Scratch. First game I ever coded. ",
      link: "https://scratch.mit.edu/projects/255625000/"
    },
    project2 = {
      name: "WireFrame Trial",
      picture: "images/wireframes-simple.png",
      text: "First real homework assignment in the bootcamp, making Wireframes. ",
      link: "https://soc33.github.io/HW-Wireframe/"
    },
    project3 = {
      name: "Basic Portfolio",
      picture: "images/portfolio.jpg",
      text: "First attempt at making a portfolio ",
      link: "https://soc33.github.io/Basic-Portfolio/"
    },
    project4 = {
      name: "Responsive Portfolio",
      picture: "images/responsive.jpg",
      text: "Making my portfolio mobile and screen size responsive ",
      link: "https://soc33.github.io/responsive-portfolio/"
    },
    project5 = {
      name: "Rock Paper Scissors!",
      picture: "images/rps.jpg",
      text: "Pretty self explanatory here its Rock Paper Scissors! ",
      link: "https://soc33.github.io/rock-paper-scissors/"
    },
    project6 = {
      name: "Adventure Game",
      picture: "images/dnd.jpg",
      text: "An adventure game I made out of alerts! ",
      link: "https://soc33.github.io/adventure-game/"
    },
    project7 = {
      name: "Psychic Game",
      picture: "images/psychic.jpg",
      text: "Cool Psychic Game I made to play with Javascript for the first time! ",
      link: "https://soc33.github.io/Psychic-game/"
    },
    project8 = {
      name: "Word Guess Game",
      picture: "images/wordGuess.jpg",
      text: "A word guessing game I made about fruits and veggies, be sure to check out the links! ",
      link: "https://soc33.github.io/Word-Guess-Game/"
    },
    project9 = {
      name: "Unit 4 Games",
      picture: "images/question.jpg",
      text: "Starts with a simple coin collector game to save the princess, but then there is a surprise if you get to 5 wins! ",
      link: "https://soc33.github.io/unit-4-game/"
    },
    project10 = {
      name: "Minecraft Trivia",
      picture: "images/minecraft.jpg",
      text: "Test your luck at my Minecraft Trvia Game! ",
      link: "https://soc33.github.io/total-trivia/"
    },
    project11 = {
      name: "New York Times Search",
      picture: "images/nyt.png",
      text: "First true group project! Manipulating the NYT API do search for articles ",
      link: "https://soc33.github.io/NYTsearch/"
    },
    project12 = {
      name: "GIF search",
      picture: "images/giphy.gif",
      text: "Using GIPHY API to search for GIFS ",
      link: "https://soc33.github.io/Giftastic/"
    },
    project13 = {
      name: "To Do List",
      picture: "images/toDo.png",
      text: "First time manipulating locale storage to save a to-do list ",
      link: "https://soc33.github.io/to-do-list/"
    },
    project14 = {
      name: "jQuery Calculator",
      picture: "images/calculator.png",
      text: "Working Calculator with jQuery ",
      link: "https://soc33.github.io/Jquery-Calculator/"
    },
    project15 = {
      name: "Train Schedule",
      picture: "images/train.jpg",
      text: "A train scheule using Firebase to have data persisting over multiple users! ",
      link: "https://soc33.github.io/train-schedule/"
    },
    project16 = {
      name: "Safely",
      picture: "images/safetyfirst.jpg",
      text: "First group project! Helping people determine their safest areas! ",
      link: "https://soc33.github.io/Safely/"
    },
    project17 = {
      name: "Coming Soon",
      picture: "images/coming-soon.png",
      text: "Another project is underway! ",
      link: "https://warm-journey-33090.herokuapp.com/ "
    }

  ];
  for (i = 0; i < projectArrayOfObjects.length; i++) {
    var newRow = $("<div class='row'>");
    var newCard = $("<div class='card mb-4 col-5' style='width: 18rem; '>");
    var newCard2 = $("<div class='card mb-4 col-5 mx-4' style='width: 18rem; '>");
    var newImg = $("<img class='card-img-top img-fluid'>").attr("src", projectArrayOfObjects[i].picture);
    var newDiv = $("<div class='card-body'>");
    var newText = $("<p class='card-text'>").text(projectArrayOfObjects[i].text);
    var newTitle = $("<h1 class='card-header'>").text(projectArrayOfObjects[i].name);
    var newLink = $("<a>").attr("href", projectArrayOfObjects[i].link).text("Click here to check out project " + parseInt(i + 1));
    if (i < projectArrayOfObjects.length -1) {
      newText.append(newLink);
    }
    newDiv.append(newText);
    newCard.append(newImg);
    newCard2.append(newTitle);
    newCard2.append(newDiv);

    newRow.append(newCard, newCard2);
    $("#project-view").prepend(newRow);
    // $("#project-info").prepend(newCard2);
  }
});