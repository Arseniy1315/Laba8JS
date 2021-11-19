//Калькулятор любви
let first_name = prompt('Введите ваше имя');
let second_name = prompt('Введите ваше имя');
results = Math.floor(Math.random() * 101);
alert(`${first_name} подходит к ${second_name} на ${results}%`);


//Калькулятор ИМТ

let h = Number(prompt('Введите ваш рост'));
let m = Number(prompt('Введите ваш вес'));
heght = Number(h / 100);
result = Number((m / (heght ** 2)));

if (result <= 18.5) {
    alert(`Недостаточный вес `)
} else if (result <= 25) {
    alert(`Нормально`)
} else if (result <= 30) {
    alert(`У вас излишек веса`)
} else if (result > 30) {
    alert(`Ожирение`)
}
console.log(result);


// Является ли год високосным

let year = prompt('Введите год')

if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
    alert(`Год високосный`)
} else {
    alert('Год не високосный')
}

//Кто оплачивает ужин?

let names = [`Дима`, `Катя`, `Петр`, `Лена`];
var rand = names[Math.floor(Math.random() * names.length)];
console.log(`За ужин будет платить ${rand}`);