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
      $(".hide-tab-content").hide();
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
  

  // Point Table 

  document.getElementById("TableButton").addEventListener("click", function() {
    var left = document.getElementById("BottomLeftFirst");
    if (left.classList.contains("table-bottom-left")) {
      left.classList.remove("table-bottom-left");
      left.classList.add("table-bottom");
    } else {
      left.classList.remove("table-bottom");
      left.classList.add("table-bottom-left");
    }

    var right = document.getElementById("BottomRightFirst");
    if (right.classList.contains("table-bottom-right")) {
      right.classList.remove("table-bottom-right");
      right.classList.add("table-bottom");
    } else {
      right.classList.remove("table-bottom");
      right.classList.add("table-bottom-right");
    }

    var TableButton = document.getElementById("TableButton");
    if (TableButton.innerText === "View More") {
      TableButton.innerText = "View Less";
    }
    else {
      TableButton.innerText = "View More";
    }
  });


var firstTableColumns = document.getElementById("firstTable").rows[0].cells;

var secondTableColumns = document.getElementById("secondTable").rows[0].cells;

for (var i = 0; i < firstTableColumns.length; i++) {
  secondTableColumns[i].style.width = getComputedStyle(firstTableColumns[i]).width;
}

var resizeObservers = [];
for (var i = 0; i < firstTableColumns.length; i++) {
  resizeObservers[i] = new ResizeObserver(function(entries) {
    var columnIndex = Array.from(firstTableColumns).indexOf(entries[0].target);
    secondTableColumns[columnIndex].style.width = getComputedStyle(entries[0].target).width;
  });

  resizeObservers[i].observe(firstTableColumns[i]);
}
