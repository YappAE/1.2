// 1. Реализовать представленную блок-схему посредством Java Script

let clues = 0;
function answer2(riddle, answer) {
  if (riddle === answer) {
    clues += 1;
    return `Верно, ${clues}`;
  } else {
    return `Ошибка, ${clues}`;
  }
}

console.log(answer2('n', 'n'));
console.log(answer2('n', 'n'));
console.log(answer2('n', 'c'));

// 2.Напишите программу на Java Script, которая считает от 1 до 10.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 3.Создайте программу для застолий, которая будет предлагать «Еще по одной?» пока пользователь не введет единицу.

let question = '';
while (question != 1) {
  question = prompt('«Еще по одной');
}

// 4.Вычислите факториал числа (вашего порядкового номера в журнале).

function factorial(num) {
  if (num === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(4));

// 5.Напишите программу, которая проверяет вашу фамилию на палиндром.

function isPalindrome(string) {
  const length = string.length;
  for (let i = 0; i < Math.floor(length / 2); i++) {
    if (string[i] !== string[length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome('racecar'));

// 6.Выведите все простые числа от 1 до вашего порядкового номера в журнале.

function simpleNumbers(num) {
  if (num === 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

for (let i = 1; i <= 4; i++) {
  if (simpleNumbers(i)) {
    console.log(i);
  }
}
