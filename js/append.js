//? where to add
const placeslist=document.getElementById('places-list');
//? what to be add
const li=document.createElement('li');
li.innerText='phartoli Bon';
//? add to child
placeslist.appendChild(li);

//? where to add
const mainContainer=document.getElementById('main-container');
//?what to be add
const section=document.createElement('section');
const h1=document.createElement('h1');
h1.innerText='My Food List';
section.appendChild(h1);
const ul=document.createElement('ul');
const li1=document.createElement('li');
li1.innerText='briyani';
ul.appendChild(li1);
const li2=document.createElement('li');
li2.innerText='borhani';
ul.appendChild(li2);
const li3=document.createElement('li');
li3.innerText='salad';
ul.appendChild(li3);
section.appendChild(ul);



//! set innerHTML directly
const sectionDress=document.createElement('section');
sectionDress.innerHTML=`
<h1>My Dress section</h1>
<ul>
    <li>T-shirt</li>
    <li>Lungi</li>
    <li> Sando genji</li>
</ul>
`
mainContainer.appendChild(sectionDress)
