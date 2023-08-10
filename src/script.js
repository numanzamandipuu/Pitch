$(function() {
    var taeb = $(".taeb-switch");
    taeb.find(".taeb").on("click", function() {
      var $this = $(this);
  
      if ($this.hasClass("active")) return;
  
      var direction = $this.attr("taeb-direction");
  
      taeb.removeClass("left middle right").addClass(direction);
      taeb.find(".taeb.active").removeClass("active");
      $this.addClass("active");
  
      var tab = $this.attr("taeb-direction");
      $(".tab-content").hide();
      $("#" + tab + "-content").show();
    });
  });
  
  document.getElementById("toggleButtont20").addEventListener("click", function() {
    var buttonText = this.innerText;
    var initialCard = document.getElementById("t20Initial");
  
    if (buttonText === "View More") {
      this.innerText = "View Less";
      initialCard.classList.remove("ranking-card");
      initialCard.classList.add("initial-ranking-card");
    } else {
      this.innerText = "View More";
      setTimeout(function() {
        initialCard.classList.add("ranking-card");
        initialCard.classList.remove("initial-ranking-card");
      }, 400);
    }
  });
  

  document.getElementById("toggleButtonodi").addEventListener("click", function() {
    var buttonText = this.innerText;
    var initialCard = document.getElementById("odiInitial");
  
    if (buttonText === "View More") {
      this.innerText = "View Less";
      initialCard.classList.remove("ranking-card");
      initialCard.classList.add("initial-ranking-card");
    } else {
      this.innerText = "View More";
      setTimeout(function() {
        initialCard.classList.add("ranking-card");
        initialCard.classList.remove("initial-ranking-card");
      }, 400);
    }
  });
  

  document.getElementById("toggleButtontest").addEventListener("click", function() {
    var buttonText = this.innerText;
    var initialCard = document.getElementById("testInitial");
  
    if (buttonText === "View More") {
      this.innerText = "View Less";
      initialCard.classList.remove("ranking-card");
      initialCard.classList.add("initial-ranking-card");
    } else {
      this.innerText = "View More";
      setTimeout(function() {
        initialCard.classList.add("ranking-card");
        initialCard.classList.remove("initial-ranking-card");
      }, 400);
    }
  });
  