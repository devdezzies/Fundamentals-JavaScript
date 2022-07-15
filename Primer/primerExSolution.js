// ARRAY TO STORE BOOK NAMES

var favoriteBooks = [];

// TODO: Define an `addFavoriteBook(..)` function that receives a single parameter, called `bookName`.
// TODO: If the provided `bookName` string does *NOT* have the word "Great" in it, add it to the `favoriteBooks` array.

function addFavoriteBook(bookName) {
    if (!bookName.includes("Great" || "great")) {
        favoriteBooks.push(bookName);
    }
}

// TODO: Define a `printFavoriteBooks()` function that receives no parameters.
// TODO:  `printFavoriteBooks()` should loop through the `favoriteBooks` array and print out each value.

function printFavoriteBooks() {
    console.log(`Favorite Books: ${favoriteBooks.length}`);
    for (let bookName of favoriteBooks) {
        console.log(bookName)
    }
}

addFavoriteBook("ali");
addFavoriteBook("the Great gatsby");

// PRINT OUT FAVORITE BOOKS

printFavoriteBooks();
