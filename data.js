// Your code here
const nameElement = document.querySelector('#name'),
  add = document.querySelector('#add'),
  ul = document.querySelector('#shopping-list'),
  type = document.querySelector('#type');

add.addEventListener('click', e => {
  e.preventDefault();
  const li = document.createElement('li');
  li.textContent = nameElement.value;
  li.setAttribute('data-type', type.value);
  ul.appendChild(li);
});
