/**
 * 2023 full code -  Question 4
 */

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Sample data for books
let books = [
  { id: 1, title: 'Book 1', author: 'Author 1', price: 10, availability: true, genre: 'Fiction' },
  { id: 2, title: 'Book 2', author: 'Author 2', price: 15, availability: false, genre: 'Non-fiction' }
];

// Middleware
app.use(bodyParser.json());

// List all available books
app.get('/books',(req,res) => {
    const availableBooks = books.filter(book =>book.availability === true);
    res.status(200).json(availableBooks);
});

// Search for books by title, author, or genre
app.get('/books/search', (req, res) => {
  const { title, author, genre } = req.query;
  let filteredBooks = books;

  if (title) {
    filteredBooks = filteredBooks.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
  }
  if (author) {
    filteredBooks = filteredBooks.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
  }
  if (genre) {
    filteredBooks = filteredBooks.filter(book => book.genre.toLowerCase().includes(genre.toLowerCase()));
  }

  res.json(filteredBooks);
});

// Purchase a book by ID and process the payment
app.post('/books/purchase/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const { paymentInfo } = req.body;

  const book = books.find(book => book.id === bookId);

  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  if (!book.availability) {
    return res.status(400).json({ message: 'Book not available for purchase' });
  }

  book.availability = false;

  res.json({ message: 'Purchase successful', book });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
