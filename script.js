// Change the text of the first item
document.querySelector('#one').textContent = 'organic vegetable';
// document.getElementById('one').innerHTML = 'peanut butter';
// Change the class of the third item to something different (e.g. “cool”, “complete”)
document.getElementById('three').className = 'complete';

// Change the text of the last item
document.querySelector('#four').textContent = 'sweet vinegar';
const ul = document.querySelectorAll('li');
ul[ul.length - 1].textContent = 'special cereal';
document.querySelectorAll('li')[document.querySelectorAll('li').length - 1].textContent = 'last item'

// Change the class for all items to “cool”
// 1) Get all the items with "li"
const items = document.querySelectorAll('li');
// 2) Write a loop that gets each item and changes its class 
for (let i = 0; i < items.length; i++) {
    items[i].classList.add('cool');
}
// Add the number of items in the list to the heading
const listNumbers = document.querySelector('ul').children.length;
console.log(listNumbers);
document.querySelector('h2').textContent += ' ' + listNumbers + 'items';

// Remove the third item from the list
const thirdItem = items[2];
// thirdItem.remove();
const parent = document.querySelector('ul');
parent.removeChild(thirdItem);

// Add new item to the end of the list
const newItem = document.createElement('li');
newItem.textContent = 'tea';
parent.appendChild(newItem);

// Create a function addItem that adds an item to the end of the list 
// ( ul ), and use this function to add an array of items
const newItems = ['chocolate', 'cake', 'cookies'];
function addItem(item) {
    const newItem = document.createElement('li');
    newItem.textContent = item;
    parent.appendChild(newItem);
}

for (let i = 0; i < newItems.length; i++) {
    addItem(newItems[i]);
}