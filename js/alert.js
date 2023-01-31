window.addEventListener('DOMContentLoaded', function () {

  document.querySelectorAll('.how-do-we-work__btn-step').forEach(function (el) {
    el.addEventListener('click', function (event) {
      document.querySelectorAll('.how-do-we-work__btn-step').forEach(function (del) {
        del.classList.remove('alert')
        event.target.classList.add('alert')
      });
    });
  });
});


