// Your code here
const nameElement = document.querySelector('#name'),
  add = document.querySelector('#add'),
  ul = document.querySelector('#shopping-list');

add.addEventListener('click', e => {
  e.preventDefault();
  const li = document.createElement('li');
  li.textContent = nameElement.value;
  ul.appendChild(li);
});
