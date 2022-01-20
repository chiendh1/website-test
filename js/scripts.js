let i = 1;
function autoHover() {
  $("ul.projects").addClass("isHovering");
  let timeout = 200;
  if (i > 1) {
    timeout = 1000;
  }

  setTimeout(function () {
    $(".projectsLi").removeClass("hover");
    $(".projectsLi a").removeClass("isHovered");
    $(`.projectsLi-${i}`).addClass("hover");
    $(`.projectsLi-${i} a`).addClass("isHovered");
    if (i <= 8) {
      // 8 thẻ li
      i++;
      autoHover();
    } else {
      $(".projectsLi").removeClass("hover");
      $(".projectsLi a").removeClass("isHovered");
    }
  }, timeout);
}
$(".services").click(function () {
  if (i > 8) {
    i = 1;
  }

  if (i !== 1) {
    return;
  }
  autoHover();
});
