$(".popup-btn").click(function (e) {
    e.preventDefault();
    var linkID = this.hash.replace("#", "");
    $(".modal").each(function () {
      var modalID = $(this).attr("id");
      if (linkID === modalID) {
        $(this).fadeIn(200);
        $("body, html").addClass("modal-open");
        $(".modal-backdrop").addClass("in");
        $(this).addClass("in");
      } else {
        $(this).fadeOut();
        $(this).removeClass("in");
      }
    });
  });
  $("body, button.close, .modal-footer button.btn").click(function () {
    $("body, html").removeClass("modal-open");
    $(".modal-backdrop").removeClass("in");
    $(".modal").fadeOut();
    $(".modal").removeClass("in");
  });
  $(".modal-content, .popup-btn, .modal-header .close, .modal-footer .btn").click(
    function (e) {
      e.stopPropagation();
    }
  );