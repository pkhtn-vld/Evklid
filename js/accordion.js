$(function () {
  $('#accordion').accordion({
    header: ".faq__btn",
    heightStyle: "content",
    collapsible: true,
    icons: false,
    active: 5,
    animate: {
      duration: 700,
      easing: 'easeInOutSine'
    }
  });
})

