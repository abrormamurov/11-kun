// const names = [
//   { name: "John", age: 13 },
//   { name: "Mark", age: 56 },
//   { name: "Rachel", age: 45 },
//   { name: "Nate", age: 67 },
//   { name: "Jeniffer", age: 65 },
// ].sort((a, b) => a - b);

// console.log(names.at(-1).age - names.at().age);

// const son = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const filterSon = son.filter((son) => {
//   if () {
//     console.log([son]);
//   }
// });

// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ]
// const students = [
//   { name: "Quincy", percent: 96 },
//   { name: "Jason", percent: 84 },
//   { name: "Alexis", percent: 100 },
//   { name: "Sam", percent: 65 },
//   { name: "Katie", percent: 90 },
//   { name: "Anna", percent: 75 },
// ].map((item) => {
//   if (item.percent >= 85) {
//     return { ...item, greade: 5 };
//   } else if (item.percent <= 84 && item.percent >= 70) {
//     return { ...item, greade: 5 };
//   } else if (item.percent < 70 && item.percent >= 60) {
//     return { ...item, greade: 3 };
//   } else {
//     return { ...item, greade: 2 };
//   }
// });
// // console.log(students);

// function byGreade(students, greade) {
//   return students
//     .filter((student) => {
//       return student.greade === greade;
//     })
//     .map((student) => {
//       return student.name;
//     });
// }
// const result = byGreade(students, 5);
// console.log(result);
// const prod = products.find((id) => {
//   return id.id == 5;
// }).name;
// console.log(prod);

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => {
  return num ** 2;
});
console.log(numbers);

const text = "George Raymond Richard Martin"
  .split(" ")
  .map((t) => {
    return t.charAt();
  })
  .join("");
console.log(text);

const names = [
  { name: "John", age: 13 },
  { name: "Mark", age: 56 },
  { name: "Rachel", age: 45 },
  { name: "Nate", age: 67 },
  { name: "Jeniffer", age: 65 },
].sort((a, b) => a - b);
console.log(names.at(-1).age - names.at().age);

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumbers = number.filter((num) => {
  return num % 2 == 0;
});

const evenNumbers = number.filter((num) => {
  return num % 2 !== 0;
});
console.log(oddNumbers, evenNumbers);
