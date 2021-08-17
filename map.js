  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop


// Using map()
let nums = [1, 2, 3, 4, 5];
let results = [];
const multByTwo = function(num) {
  return num * 2;
}
const mapResults = nums.map(multByTwo)
console.log(mapResults)


// Simplified w/ map()


// Simplfied w/ map() + arrow function


// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];


const studentsWithIds = students.map(student => [student.name, student.id]);
const studentsWithProfession = students.map(student => [student.name, student.profession])
console.log(studentsWithIds);
console.log(studentsWithProfession);


