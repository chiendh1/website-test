let i = 1;
function autoHover() {
    $('ul.projects').addClass('isHovering');
    setTimeout(function() {
        $('.projectsLi').removeClass('hover'); 
        $('.projectsLi a').removeClass('isHovered');
        $(`.projectsLi-${i}`).addClass('hover');
        $(`.projectsLi-${i} a`).addClass('isHovered');
        if (i <= 8) { // 8 thẻ li
            i++;
            autoHover();
        }
    }, 1500);
    setTimeout(function() {
        if (i > 8) {
            $('.projectsLi').removeClass('hover'); 
            $('.projectsLi a').removeClass('isHovered');
        }
    }, 3000)
}
$('.services').click(function () {
    autoHover();
})