/*function setSectionSizes()
{
  $("#home-section").css("height", $(window).height()+50);
  $("#portfolio-section").css("height", $(window).height()+50);
  $("#social-media-section").css("height", $(window).height());
}*/

$(function ()
{
    /*$(document).ready(setSectionSizes);
    $("li").on("click", function()
    {
        $("li").parent().find(".active").removeClass("active");
      $(this).addClass("active");
    });
    $(window).on("resize", setSectionSizes);*/
    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .on("click", function() {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
          &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });
});

$(window).scroll(function()
{
  function elementScrolled(elem)
  {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return ((elemTop + 55 >=  docViewTop) && (elemBottom - 55 <= docViewBottom));
  }

  if(elementScrolled("#home-section"))
  {
    $("li").parent().find(".active").removeClass("active");
    $("#home-nav").addClass("active");
  }
  if(elementScrolled("#portfolio-section")) {
    $("li").parent().find(".active").removeClass("active");
    $("#portfolio-nav").addClass("active");
  }
  if(elementScrolled("#social-media-section")) {
    $("li").parent().find(".active").removeClass("active");
    $("#social-media-nav").addClass("active");
  }
});
