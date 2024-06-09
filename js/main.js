
$(document).ready(function () {
  // add all to same gallery
  $(".section-etudes a").attr("data-fancybox", "mygallery");
  // assign captions and title from alt-attributes of images:
  $(".section-etudes a").each(function () {
      $(this).attr("data-caption", $(this).attr("title"));
      // $(this).attr("title", $(this).attr("title"));
  });
  // start fancybox:
  $(".section-etudes a").fancybox();


  // start mouseevent:
  var cursor = $(".cursor");

  $(window).mousemove(function(e) {
    cursor.css({
      top: e.clientY - cursor.height()/2,
      left: e.clientX - cursor.width()/2
    });

  });

  $("a")
    .mouseenter(function() {
      cursor.addClass('is-zooming');
    })
    .mouseleave(function() {
      cursor.removeClass('is-zooming');
    });

});

var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});

