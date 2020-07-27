var $cursor = $('.cursor');
var $cursorHover = $('.cursorHover');

// move effect
function cursorMover(e) {
    gsap.to($cursor, {
        x: e.clientX,
        y: e.clientY,
        stagger: 0.002,
    });
    gsap.to($cursorHover, {
        x: e.clientX,
        y: e.clientY,
    });
}

// hover effect

function cursorHover(e) {
    gsap.to($cursor, {
        scale: 0.5
    });
    gsap.to($cursorHover, {
       scale: 1.5
    });
}

// normal cursor
function cursor(e) {
    gsap.to($cursor, {
        scale: .4
    });
    gsap.to($cursorHover, {
       scale: .4
    });
}

$(window).on('mousemove', cursorMover);



$('.alert').hover(cursorHover, cursor);