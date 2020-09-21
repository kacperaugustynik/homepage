console.log("elo elo!");
const name = "Kacper";
const age = 24;
console.log(`Siema jestem ${name} i mama ${age} lata.`);
//alert(`Siema jestem ${name} i mama ${age} lata.`)

const title = document.querySelector('.about-me__title');
console.log(title.innerHTML);
console.log(title);

title.innerHTML = 'elo elo';
console.log(title.innerHTML);
console.log(title);

function greet (name, age) {
console.log(`Czesc, jestem ${name} i mam ${age}`);
}

greet(`Kacper`,24);

const greetSec = (name,age) => console.log(`Czesc, jestem ${name} i mam ${age}`);

greetSec(`Kacper`,25)

function contentChanger (querySelector, content) {

    const element = document.querySelector(querySelector);
    element.innerHTML = content;
}

contentChanger(`.main-header__description`,`WTF`);