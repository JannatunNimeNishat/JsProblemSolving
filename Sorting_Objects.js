/*
4.Task: Sorting Objects

Create An Array Of Objects Representing Cars With Properties Like Make, Model, And Year. Write A Function To Sort The Array Of Cars By The Year Of Manufacture In Ascending Order. Print The Sorted Array.
*/


const cars = [
    { make: "Toyota", model: "Camry", year: 2018 },
    { make: "Honda", model: "Accord", year: 2015 },
    { make: "Ford", model: "Mustang", year: 2020 },
    { make: "Tesla", model: "Model S", year: 2019 },
    { make: "BMW", model: "X5", year: 2017 }
  ];
  

  const sortCarsByYear = (carsArray) => {
    return carsArray.sort((car1, car2) => car1.year - car2.year);
  };

  const sortedCars = sortCarsByYear(cars);
  

  console.log(sortedCars);
  