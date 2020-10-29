
// scroll detect on CV icon to shrink into nav bar //

const cvimg = document.getElementById('cvimg');
const faviconimg = document.getElementById('faviconimg');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    cvimg.style.width = '30px';
    cvimg.style.height = '30px';
    faviconimg.style.top = 0;
    faviconimg.style.left = 0;
    faviconimg.style.width = '100%';
    faviconimg.style.backgroundColor = '#c7d1d1';
    faviconimg.style.backgroundImage = "url('../images/beige-paper.png')";
  } else {
    cvimg.style.width = '100px';
    cvimg.style.height = '100px';    
  }
}



