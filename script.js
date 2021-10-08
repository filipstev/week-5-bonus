const hamburger = document.querySelector('.hamburger-container');
const tabNav = document.querySelector('.tab-nav');
const tabNavList = document.querySelectorAll('.tab-nav li');
const tabList = document.querySelectorAll('.tab-body');
const questions = document.querySelectorAll('.question');
const logoContainer = document.querySelector('.logo-container');
let toggle = false;

hamburger.addEventListener('click', function () {
  const hamburger = document.querySelector('.hamburger');
  const navList = document.querySelector('.nav-list');
  const logo = document.querySelector('.svg-fill');
  toggle = !toggle;
  let srcHam = './images/icon-hamburger.svg';
  let srcClose = './images/icon-close.svg';
  hamburger.src = toggle ? srcClose : srcHam;
  navList.classList.toggle('active');
  logoContainer.classList.toggle('active');
  document.body.style.position = toggle ? 'fixed' : 'static';
  toggle
    ? logo.classList.add('svg-fill-active')
    : logo.classList.remove('svg-fill-active');
});

tabNavList.forEach((item) => {
  item.addEventListener('click', () => {
    tabNav.querySelector('.active').classList.remove('active');
    item.classList.add('active');

    if (item.classList.contains('one')) {
      tabList[0].classList.add('active');
      tabList[2].classList.remove('active');
      tabList[1].classList.remove('active');
    }

    if (item.classList.contains('two')) {
      tabList[1].classList.add('active');
      tabList[0].classList.remove('active');
      tabList[2].classList.remove('active');
    }

    if (item.classList.contains('three')) {
      tabList[2].classList.add('active');
      tabList[1].classList.remove('active');
      tabList[0].classList.remove('active');
    }
  });
});

const form = document.querySelector('form');
const input = document.querySelector('.submit-email');
const spanErr = document.querySelector('.error-msg');
const button = document.querySelector('.submit');

function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

input.addEventListener('invalid', (e) => {
  e.preventDefault();
  spanErr.classList.add('showError');
  input.classList.add('submit-email-error');
  button.classList.add('submit-flex');
});
input.addEventListener('input', () => {
  spanErr.classList.remove('showError');
  input.classList.remove('submit-email-error');
  button.classList.remove('submit-flex');
});
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateEmail(input.value)) {
    alert('Thank you for your submission!');
    input.value = '';
  } else {
    console.log('e');
    spanErr.classList.add('showError');
    input.classList.add('submit-email-error');
    button.classList.add('submit-flex');
  }
});

questions.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('open');
  });
});
