class Bookshelf {
	constructor() {
		this.favoriteBooks = [];
	}

	// TODO: define methods `addFavoriteBook(..)`
	// and `printFavoriteBooks()`

	addFavoriteBook(bookName) {
		if (!bookName.includes("Great")) {
			this.favoriteBooks.push(bookName);  // push bookName to array (favoriteBooks) inside the class method and remember to use 'this'
		}
	}
	
	printFavoriteBooks() {
		console.log(`Favorite Books: ${ String(this.favoriteBooks.length) }`);
		for (let bookName of this.favoriteBooks) {
			console.log(bookName);
		}
	}
}


function loadBooks(theBookshelf) {
	// TODO: call fakeAjax( .. );
	fakeAjax(BOOK_API, function onBooks(bookNames){
		for (let bookName of bookNames) {
			theBookshelf.addFavoriteBook(bookName);
		}
		theBookshelf.printFavoriteBooks();
	});
}

var BOOK_API = "https://some.url/api";
var myBooks = new Bookshelf();
loadBooks(myBooks);  // Create an instance of `Bookshelf` class, and pass it as an argument to `loadBooks(..)

// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url,cb) {  // cb as callback
	setTimeout(function fakeLoadingDelay(){
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}


// TIP TO SUCCEED IN THIS COURSE: REPEAT EVERY SINGLE EXERCISE AND START IT FROM SCRATCH AND MAKE SURE YOU UNDERSTAND! 
// AND YOU ALSO CAN MAKE A FEW MODIFICATIONS TO TRY AS A EXPERIMENT

// "Learning JavaScript other than just writing JavaScript" - Kyle Simpson



