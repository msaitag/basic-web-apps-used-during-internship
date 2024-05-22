let data = [
    {
        name: 'Busra',
        age: '23'
    },
    {
        name: 'Sait',
        age: '27'
    },
    {
        name: 'Sultan',
        age: '22'
    },
    {
        name: 'Muhammet',
        age: '26'
    }
];

const info = document.querySelector('#info');

let details = data.map((item) => {
    console.log(item);
    return `<div>${item.name} is ${item.age} years old.</div>`;
});
console.log(details);
info.innerHTML = details.join('\n');