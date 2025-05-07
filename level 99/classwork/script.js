const fruitList = document.querySelector('#fruit-list ul');

const newListItem = document.createElement('li');

newListItem.textContent = 'Orange';

fruitList.insertBefore(newListItem, fruitList.firstChild);

fruitList.removeChild(fruitList.lastElementChild);

console.log(fruitList.firstElementChild.textContent);

console.log(fruitList.children[1].parentElement.textContent);
