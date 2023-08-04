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
  