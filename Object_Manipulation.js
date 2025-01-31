/*
2.Task: Object Manipulation

Create An Array Of Objects Representing Books With Properties Like Title, Author, And Year. Write A Function That Takes The Array And Returns A New Array With Only The Book Titles. Print The Result.
*/

const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "One Hundred Years of Solitude", author: "Gabriel Garcia Marquez", year: 1967 },
    { title: "Moby Dick", author: "Herman Melville", year: 1851 }
  ];
  

  const getBookTitles = (booksArray) => {
    return booksArray.map(book => book.title);
  };
  

  const bookTitles = getBookTitles(books);
  

  console.log(bookTitles);