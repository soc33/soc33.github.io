window.onload = function () { loadFunction() };
function loadFunction() {
  // $("#nameAnimation").css("display", "block");
  $("#nameAnimation").animate({ opacity: "1", "margin-top": "15%" }, 5000)
  // $("#nameAnimation").animate({}, )
}
function showLinks() {
  $("#indexOptions").animate({opacity: "1"}, 3000);
}
setTimeout(showLinks, 5000);
$(document).ready(function () {
  console.log(projectArrayOfObjects.length);

  for (i = 0; i < projectArrayOfObjects.length; i++) {
    var newRow = $("<div class='row'>");
    var newCard = $("<div class='card mb-4 col-5' style='width: 18rem; '>");
    var newCard2 = $("<div class='card mb-4 col-5 mx-4' style='width: 18rem; '>");
    var newImg = $("<img class='card-img-top img-fluid'>").attr("src", projectArrayOfObjects[i].picture);
    var newDiv = $("<div class='card-body'>");
    var newText = $("<p class='card-text'>").text(projectArrayOfObjects[i].text);
    var newTitle = $("<h1 class='card-header'>").text(projectArrayOfObjects[i].name);
    var newLink = $("<a class='projectLink'>").attr("href", projectArrayOfObjects[i].link).text("Click here to check out project " + parseInt(i + 1));
    if (i < projectArrayOfObjects.length - 1) {
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