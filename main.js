console.log('---------5');
let x;
//Сложение
x = 4 + 4;
console.log(`Сложение: ${x}`);
//Вычитание
x = 10 - 3;
console.log(`Вычитание: ${x}`);
//Умножение
x = 5 * 7;
console.log(`Умножение: ${x}`);
//Деление
x = 10 / 2;
console.log(`Деление: ${x}`);

console.log('-----------6');
for (let i = 1; i <= 5; i++) {
    console.log(i)
}

console.log('----------7');
for (let i = 5; i >= 1; i--) {
    console.log(i)
}
console.log('----------8');

function getMarkInfo(condition) {

    if (condition == 10) {
        console.log('У вас максимальный балл');
    } else {
        console.log('У вас средний балл');
    }

}

getMarkInfo(10)
getMarkInfo(1)

console.log('----------9');

function getDayInfo(position) {



    switch (position) {
        case 0:
            console.log('Sunday');
            break;
        case 1:
            console.log('Monday');
            break;
        case 2:
            console.log('Tuesday');
            break;
        case 3:
            console.log('Wednesday');
            break;
        case 4:
            console.log('Thursday');
            break;
        case 5:
            console.log('Friday');
            break;
        case 6:
            console.log('Saturday');
            break;
        default:
            console.log('Wrong data')
    }
}
getDayInfo(0)
getDayInfo(1)
getDayInfo(2)
getDayInfo(3)
getDayInfo(4)
getDayInfo(5)
getDayInfo(6)


console.log('----------10');
const arr = ['a', 'b', 'c'];
arr.push(1, 2, 3);
console.log(arr);

console.log('----------11');
var a = [1, 2, 3];
var b = [4, 5, 6];
var c = a.concat(b);
console.log(c);

console.log('----------12');
let z = 0;
let information = 'Введите любое целое положительное число';

function countNumber(number) {
    if (number < 0) {
        console.log(information);
    } else if (Number.isInteger(number)) {
        for (let i = 1; i <= number; i++) {
            z += i;
        }
        console.log(z);
    } else {
        console.log(information);
    }
}
