new TypeIt("#main_title", {
  strings: "THIS IS VELOCITY",
  speed: 50,
  waitUntilVisible: true,
  cursor: false,
}).go();

// Show the first tab and hide the rest
$("#tabs-nav .tab:first-child .link").addClass("active");
$(".tab-content").hide();
$(".tab-content:first").show();

// Click function
$("#tabs-nav .link").click(function () {
  $("#tabs-nav .link").removeClass("active");
  $(this).addClass("active");
  $(".tab-content").hide();

  const activeTab = $(this).attr("href");
  $(activeTab).fadeIn();
  return false;
});
