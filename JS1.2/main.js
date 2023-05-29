// 1. Реализовать представленную блок-схему посредством Java Script

let otgadki = 0;
function orvet2(zagadka, otvet) {
  if (zagadka === otvet) {
    otgadki += 1;
    return `Верно, ${otgadki}`;
  } else {
    return `Ошибка, ${otgadki}`;
  }
}

console.log(orvet2('n', 'n'));
console.log(orvet2('n', 'n'));
console.log(orvet2('n', 'c'));

// 2.Напишите программу на Java Script, которая считает от 1 до 10.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 3.Создайте программу для застолий, которая будет предлагать «Еще по одной?» пока пользователь не введет единицу.

let question = '';
while (question != 1) {
  question = prompt('«Еще по одной?»');
}

// 4.Вычислите факториал числа (вашего порядкового номера в журнале).

function factorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}

console.log(factorial(4));


// 5.Напишите программу, которая проверяет вашу фамилию на палиндром.

function isPolidrom(fio) {
  if (fio.split('').reverse().join('') === fio) {
    return true;
  } else {
    return false;
  }
}

// Пример isPolidrom ('madam')

// 6.Выведите все простые числа от 1 до вашего порядкового номера в журнале.

function simpleNumber(num) {
  if (num / 1 && num / num) {
    for (let i = 1; i <= num; i++) {
      console.log(i);
    }
  }
  return false;
}

// Пример simpleNumber ('16')
