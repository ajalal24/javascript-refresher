const student1 = { firstName: 'Annie', lastName: 'Cresta', gpa: 3.8, playsVolleyball: true }
const student2 = { firstName: 'James', lastName: 'Bond', gpa: 2.8, playsVolleyball: false }

// console.table(student1);

// console.log('I know ' + student1.firstName + ' ' + student1.lastName + '!');
// console.log(`I know ${student1.firstName} ${student1.lastName} !`);

// if (student2.playsVolleyball) {
//     console.log(student2.firstName + ' ' + student2.lastName + ' plays volleyball.');
// } else {
//     console.log(student2.firstName + ' ' + student2.lastName + ' doesn\'t play volleyball.');
// }

const students = [];
students.push(student1, student2);
// console.log(students);

students.push( { firstName: 'Tony', lastName: 'Stark', gpa: 4.0, playsVolleyball: false } );
console.table(students);

console.log('I know ' + students[2].firstName + ' ' + students[2].lastName + '!');