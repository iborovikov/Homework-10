const bodyRef = document.querySelector('body');
const checkBoxRef = document.querySelector('#theme-switch-toggle');
const value = localStorage.getItem('theme-color');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

checkBoxRef.addEventListener('change', onCheckBoxChange);

value === Theme.DARK ? checkBoxRef.checked = true : checkBoxRef.checked = false;

value ? bodyRef.classList.add(value) : bodyRef.classList.add(Theme.LIGHT);

function onCheckBoxChange(e) {
  checkBoxRef.checked ?
    localStorage.setItem('theme-color', Theme.DARK) :
    localStorage.setItem('theme-color', Theme.LIGHT);

  if (bodyRef.classList.contains(Theme.DARK)) {
    bodyRef.classList.replace(Theme.DARK, Theme.LIGHT)
  } else if (bodyRef.classList.contains(Theme.LIGHT)) {
    bodyRef.classList.replace(Theme.LIGHT, Theme.DARK)
  };
}