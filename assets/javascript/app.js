window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("header2").style.fontSize = "30px";
    document.getElementById("header2").style.display = "fixed";
    // document.getElementById("header").style.height = "50px";
    document.getElementById("header1").style.display = "none";
    document.getElementById("title").style.display = "none";
    document.getElementById("subtitle").style.display = "none";
    document.getElementById("symbol").style.display = "none";
  } else {
    document.getElementById("header1").style.display = "flex";
    document.getElementById("header1").style.fontSize = "90px";
    document.getElementById("header1").style.height = "1000px";
    document.getElementById("title").style.display = "flex";    
    document.getElementById("subtitle").style.display = "flex";    
    document.getElementById("symbol").style.display = "flex";    
  }
}