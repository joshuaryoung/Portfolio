function setSectionSizes()
{
  $("#home-section").css("height", $(window).height()+50);
  $("#portfolio-section").css("height", $(window).height()+50);
  $("#social-media-section").css("height", $(window).height());
}

$(function ()
{
    $(document).ready(setSectionSizes);
    $("li").on("click", function()
    {
        $("li").parent().find(".active").removeClass("active");
      $(this).addClass("active");
    });
    $(window).on("resize", setSectionSizes);
});

$(window).scroll(function()
{
  function elementScrolled(elem)
  {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return ((elemTop + 45 >=  docViewTop) && (elemBottom - 45 <= docViewBottom));
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
