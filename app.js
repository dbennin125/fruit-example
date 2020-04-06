import fruits from './data.js';

const fruitContainer = document.getElementById('container');
//const fruitList = document.getElementById('list');

for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];
    
    const li = document.createElement('li');
    //const img = document.createElement('img');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');

    
    p.textContent = fruit.price;
    //li.textContent = fruit.id;
    //img.src = fruit.image;
    h3.textContent = fruit.name;

    
    li.classList.add('fruit');

    li.appendChild(h3);
    li.appendChild(p);

    fruitContainer.appendChild(li);

}    