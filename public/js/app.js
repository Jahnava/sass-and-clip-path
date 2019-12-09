var btns = document.querySelectorAll('.buttons button');
var snowman = document.getElementsByClassName('snowman')[0];

for (i = 0; i < btns.length; i++){
  btns[i].addEventListener('click', manageSnowClasses);
}

function manageSnowClasses() {
  if (this.getAttribute('data-add')) {
  snowman.classList.add(this.getAttribute('data-add'));
}

if (this.getAttribute('data-remove')) {
snowman.classList.remove(this.getAttribute('data-remove'));
}
}
