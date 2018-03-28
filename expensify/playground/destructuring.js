//
// Object destructuring
//

// const person = {
//     name: 'David',
//     age: 24,
//     location: {
//         city: 'Paris',
//         temp: 32
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// // const name = person.name;
// // const age = person.age;

// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-published' } = book.publisher;

// console.log(publisherName);

//
// Array destructuring
//

// const address = ['1299 S Calle 57 # 9', 'Bogotá', 'Bogotá D.C.', 'Colombia'];

// const [, city, state = 'Somewhere', country = 'France'] = address;

// console.log(`You are in ${city} in ${state} in ${country}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);
