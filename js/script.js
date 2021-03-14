document.addEventListener("DOMContentLoaded", function(event) {
  // Your code to run since DOM is loaded and ready

  //Sections
  let pageSection = {
    languageSelection : document.getElementById("language-selection"),
    englishVersion: document.getElementById("english"),
    spanishVersion: document.getElementById("spanish"),
    navbarEnglish: document.getElementById('navbar-en'),
    navbarSpanish: document.getElementById('navbar-sp')
  }

  let button = {
    spanishButton : document.getElementById("spanish-flag"),
    englishButton : document.getElementById("english-flag")
  }



  // hide an element
  const hide = (elem) => {
    elem.classList.add('hidden');
}

  // show an element
  const show = (elem) => {
      elem.classList.remove('hidden');
  }

  function goToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  const generateMulticolorTextSP = () => {
    let message = `Baby Shower Gender reveal`;
    let colors = new Array("#0099ff","#f161c8"); // red, green, blue
    let babyshowertitle = document.getElementById("babyshower-title-sp");
  
    let spanNode = document.createElement("span");
    for (let i = 0; i < message.length; i++){
      if (i === 11){
        spanNode.innerHTML+="<br>&<br>"
      } else {
        spanNode.innerHTML+= "<span style=\"color:" + colors[(i % colors.length)] + ";\">" + message[i] + "</span>";
      }  
    }
    babyshowertitle.appendChild(spanNode)

  }

  const generateMulticolorTextEN = () => {
    let message = `Baby Shower Gender reveal`;
    let colors = new Array("#0099ff","#f161c8"); // red, green, blue
    let babyshowertitle = document.getElementById("babyshower-title-en");

    let spanNode = document.createElement("span");
    for (let i = 0; i < message.length; i++){
      if (i === 11){
        spanNode.innerHTML+="<br>&<br>"
      } else {
        spanNode.innerHTML+= "<span style=\"color:" + colors[(i % colors.length)] + ";\">" + message[i] + "</span>";
      }  
    }
    babyshowertitle.appendChild(spanNode)

  }

  generateMulticolorTextSP();
  generateMulticolorTextEN();

  history.pushState(null, null, "index.html");

  hide(pageSection.englishVersion);
  hide(pageSection.spanishVersion);
  hide(pageSection.navbarEnglish)
  hide(pageSection.navbarSpanish)

  button.spanishButton.addEventListener("click", function(){
    goToTop()
    hide(pageSection.languageSelection)
    show(pageSection.navbarSpanish)
    show(pageSection.spanishVersion);
    //history.pushState(null, null, "spanish");
  });

  button.englishButton.addEventListener("click", function(){
    goToTop()
    hide(pageSection.languageSelection)
    show(pageSection.navbarEnglish)
    show(pageSection.englishVersion);
    //history.pushState(null, null, "english");
  });
  
});