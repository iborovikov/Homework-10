import cardsTemplate from './menu-card.hbs';
import menuItems from './menu.json'

const menuListRef = document.querySelector('.js-menu');
const menuMarkup = createMenuMarkup(menuItems);

menuListRef.insertAdjacentHTML('beforeend', menuMarkup);

function createMenuMarkup(menuItems) {
  return cardsTemplate(menuItems);
}