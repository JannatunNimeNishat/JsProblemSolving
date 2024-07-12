/*
1.Task: Array Filtering And Mapping

Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.
*/

const people = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Charlie", age: 22, gender: "male" },
  { name: "Diana", age: 28, gender: "female" },
  { name: "Eve", age: 35, gender: "female" },
  { name: "Frank", age: 40, gender: "male" },
];

const getMaleNames = (peopleArray) => {
  return peopleArray
    .filter((person) => person.gender !== "female")
    .map((person) => person.name);
};

const maleNames = getMaleNames(people);

console.log(maleNames);
