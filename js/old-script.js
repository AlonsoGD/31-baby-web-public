$(document).ready(function() {
  var $html = $("html");
  var $body = $("body");
  var $allButtons = $("button");
  var $allMainButtons = $(".mainbuttonskin");
  var $allBackButtons = $(".homebutton");
  var $allScreens = $(".screen");
  var $pagelayout = $(".pagelayout");
  var $buttonsObj = {
    aboutmeb: $("#aboutb"),
    skillsb: $("#skillsb"),
    portfoliob: $("#portfoliob"),
    previousexpb: $("#didbeforeb"),
    contactb: $("#contactb")
  };
  var $screensObj = {
    mainpage: $("#mainpage"),
    aboutme: $("#aboutme"),
    skills: $("#skills"),
    portfolio: $("#porfolio"),
    previusexp: $("#previousexp"),
    contact: $("#contact")
  };
  var $titles = $(".titles");

  function introAnimation() {
    function animationWithTimeout(element, delay) {
      setTimeout(function() {
        element.css("opacity", "1");
        element.addClass("animated fadeInRight");
      }, delay);
    }

    hideAllPages();
    showElement($screensObj.mainpage);
    $titles.addClass("animated fadeInUp");

    var delay = 500;
    for (var key in $buttonsObj) {
      if ($buttonsObj.hasOwnProperty(key)) {
        animationWithTimeout($buttonsObj[key], delay);
        delay += 100;
      }
    }
  }

  function hideAllPages() {
    hideElement($allScreens);
  }

  function hideElement(element) {
    element.hide();
    element.css("opacity", "0");
  }

  function showElement(element) {
    element.show();
    element.css("opacity", "1");
  }

  function toggleBackground() {
    $html.toggleClass("background-transition");
    //$body.toggleClass("darken");
  }

  function hideMainPage() {
    hideElement($screensObj.mainpage);
    toggleBackground();
  }

  function goBack() {
    hideAllPages();
    showElement($screensObj.mainpage);
    toggleBackground();
  }

  // Thumb nail code//
  $(".zoom-gallery").magnificPopup({
    delegate: "a",
    type: "image",
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: "mfp-with-zoom mfp-img-mobile",
    image: {
      verticalFit: true,
      titleSrc: function(item) {
        return item.el.attr("title") + " &middot;";
      }
    },
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function(element) {
        return element.find("img");
      }
    }
  });

  // MAIN PAGE //

  introAnimation();

  //Click listeners for the animations and page changes
  //Animations when main menu buttons clicked
  $allButtons
    .mousedown(function() {
      $(this).addClass("clicked");
    })
    .mouseup(function() {
      $(this).removeClass("clicked");
    });

  //Clicking about me button
  $buttonsObj.aboutmeb.click(function() {
    hideMainPage();
    showElement($screensObj.aboutme);
    history.pushState(null, null, "aboutme");
  });

  //Clicking skills button
  $buttonsObj.skillsb.click(function() {
    hideMainPage();
    showElement($screensObj.skills);
    history.pushState(null, null, "skills");
  });
  //Clicking porfolio button
  $buttonsObj.portfoliob.click(function() {
    hideMainPage();
    showElement($screensObj.portfolio);
    history.pushState(null, null, "portfolio");
  });
  //Clicking previous experience button
  $buttonsObj.previousexpb.click(function() {
    hideMainPage();
    showElement($screensObj.previusexp);
    history.pushState(null, null, "previousexp");
  });
  //Clicking contact button
  $buttonsObj.contactb.click(function() {
    hideMainPage();
    showElement($screensObj.contact);
    history.pushState(null, null, "contact");
  });
  //Clicking any of the BACK Buttons;
  $allBackButtons.click(function() {
    $titles.removeClass("animated fadeInRight");
    $allMainButtons.removeClass("animated fadeInRight");
    history.pushState(null, null, "index.html");
    goBack();
  });
  window.addEventListener("popstate", function(e) {
    $titles.removeClass("animated fadeInRight");
    $allMainButtons.removeClass("animated fadeInRight");
    goBack();
  });
});
