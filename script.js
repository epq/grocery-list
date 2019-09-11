/*
Change the text of the first element item
Change the class of the third item
Change the text of the last item
Change the class for all items to “cool”
Add the number of items in the list to the heading
*/

// There's lots of different ways of selecting elements and different ways to answer these questions

const firstItem = document.querySelectorAll('li')[0];
firstItem.textContent = 'lemons';

const thirdItem = document.querySelector('#three'); 
thirdItem.setAttribute('class', 'cool');

const items = document.querySelectorAll('li');
const lastElement = items[items.length - 1];
lastElement.textContent = 'pineapples';

for (let i = 0; i < items.length; i++) {
    items[i].className = 'cool';
}

const h2 = document.querySelector('h2');
h2.innerHTML += `<br/> ${items.length} items`;

/*
Remove the third item from the list
Add new item to the end of the list
Add new item to the start of the list
Create a function addItem that adds an item to the end of the ul, and use this function to add an array of items 
*/

// get the parent
const ul = document.querySelector('ul');
// remove the child
// https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild
ul.removeChild(items[2]);

const newItem = document.createElement('li');
newItem.textContent = 'fresh fish';
newItem.className = 'hot';
const oldFirstItem = items[0];
// https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
// var insertedNode = parentNode.insertBefore(newNode, referenceNode);
ul.insertBefore(newItem, oldFirstItem);

const newLastItem = document.createElement('li');
newLastItem.textContent = 'cool fish';
ul.appendChild(newLastItem);

const newItems = ['cheese', 'bread', 'cookies'];

function addItem(item) {
    const itemToAdd = document.createElement('li');
    itemToAdd.textContent = item;
    ul.appendChild(itemToAdd);
}

for (let item of newItems) {
    addItem(item);
}