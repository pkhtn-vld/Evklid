window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#menu').classList.toggle('is-active')
  });
  document.querySelector('#back').addEventListener('click', function () {
    document.querySelector('#menu').classList.toggle('is-active')
  });
  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#menu').setAttribute('aria-hidden', 'false');
  });
  document.querySelector('#back').addEventListener('click', function () {
    document.querySelector('#menu').setAttribute('aria-hidden', 'true');
  });
});



