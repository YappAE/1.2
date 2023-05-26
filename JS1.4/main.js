// 1.	Скопируйте код объекта и проанализируйте его работу:
let user = {
  name: 'Джон',
  age: 30,
};
// Добавим метод для объекта
user.sayHi = function () {
  alert('Привет!');
};

user.sayHi(); // Привет!

// 2.Создайте объект – информация о покупателе (не менее 5 строк) и выведите три из них.

let userInfo = {
  name: 'Альберт',
  email: 'alba@mail.com',
  phone: '+7 (973) 134-45-67',
  city: 'Москва',
  street: 'ул. Гоголя, д. 3, кв. 34',
};

// console.log(userInfo.name);
// console.log(userInfo.phone);
// console.log(userInfo.street);

// 3.Создайте объекты пользователи, заказы и рестораны с соответствующими значениями. Организуйте вывод информации из объектов по условию.

// Создаем объекты пользователей
const user1 = {
  id: 1,
  name: 'Tim',
  email: 'Tim@example.com',
  street: '32 Main St',
  city: 'Los Angeles',
  state: 'LS',
  zip: '13401',
};

const user2 = {
  id: 2,
  name: 'Maria',
  email: 'maria@example.com',
  street: '6 Main St',
  city: 'Batymi',
  state: 'GE',
  zip: '95401',
};

// Создаем объекты заказов
const order1 = {
  id: 1,
  userId: 1,
  restaurant: 'Burger King',
  items: ['Shaorma', ' Burger'],
  total: 11.99,
};

const order2 = {
  id: 2,
  userId: 2,
  restaurant: 'Pizza Please',
  items: ['Pizza', 'Kebab'],
  total: 17.99,
};

const order3 = {
  id: 3,
  userId: 1,
  restaurant: 'Macdonalds',
  items: [' Sandwich', 'Chicken'],
  total: 3.99,
};

// Создаем объекты ресторанов
const restaurant1 = {
  name: 'Burger House',
  street: '789 Main St',
  city: 'Paris',
  state: 'France',
  zip: '23502',
};

const restaurant2 = {
  name: 'Kebab House',
  street: '1010 Elm St',
  city: 'London',
  state: 'US',
  zip: '3402',
};

// Функция для вывода информации о заказах пользователей в указанном ресторане
function printOrdersInRestaurant(NameOfRestorant) {
  // Фильтруем заказы по ресторану
  const ordersInRestaurant = [order1, order3].filter(
    (order) => order.restaurant === NameOfRestorant
  );

  // Для каждого заказа в ресторане выводим информацию о пользователе и о заказе
  ordersInRestaurant.forEach((order) => {
    const user = [user1, user2].find((user) => user.id === order.userId);
    console.log(
      'User:',
      user.name,
      '| Email:',
      user.email,
      '| Order ID:',
      order.id,
      '| Items:',
      order.items.join(', '),
      '| Total:',
      order.total
    );
  });
}

// Выводим информацию о заказах пользователей в ресторане Burger House
// console.log("Orders in Burger House:");
// printOrdersInRestaurant("Burger House");

// 4.При помощи функции-конструктора и оператора "new" создайте функцию, выводящую имена вашей группы:
function User1(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User1('Тимур');

alert(user.name); // Тимур
alert(user.isAdmin); // false
// 5.Используя конструктор, создайте объект – студент. Передайте конструктору параметры, определяющие, как создавать объект, и что в него записывать:
function User(name) {
  this.name = name;
  this.sayHi = function () {
    alert('Меня зовут: ' + this.name);
  };
}

let tim = new User('Тимур');

tim.sayHi(); // Меня зовут: Тимур

tim = {
  name: 'Тимур',
  sayHi: () => User(this.name),
};
