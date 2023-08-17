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
  });
  