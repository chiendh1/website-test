var indexHover = 1;
function autoHover() {
  $("ul.projects").addClass("isHovering");

  if (indexHover == 1) {
    $(".projectsLi").removeClass("hover");
    $(".projectsLi a").removeClass("isHovered");
    $(`.projectsLi-${i}`).addClass("hover");
    $(`.projectsLi-${i} a`).addClass("isHovered");
    if (indexHover <= 8) {
      // 8 thẻ li
      indexHover++;
      autoHover();
    }
  }
  setTimeout(function () {
    $(".projectsLi").removeClass("hover");
    $(".projectsLi a").removeClass("isHovered");
    $(`.projectsLi-${i}`).addClass("hover");
    $(`.projectsLi-${i} a`).addClass("isHovered");
    if (indexHover <= 8) {
      // 8 thẻ li
      indexHover++;
      autoHover();
    }
  }, 1500);
  setTimeout(function () {
    if (indexHover > 8) {
      $(".projectsLi").removeClass("hover");
      $(".projectsLi a").removeClass("isHovered");
    }
  }, 3000);
}
$(".services").click(function () {
  if (indexHover > 8) {
    indexHover = 1;
  }
  autoHover();
});
