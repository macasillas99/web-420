/**
 * Author: Maxine Casillas
 * Date: 06/29/2026
 * File: app.js
 * Description: Express web server and API routes for the In-N-Out-Books application.
 */

const express = require('express');
const createError = require('http-errors');
const books = require('../database/books');
const Collection = require('../database/collection');

const app = express();
const bookCollection = new Collection(books);

app.use(express.json());

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>In-N-Out-Books</title>
    </head>
    <body>
      <h1>In-N-Out-Books</h1>
      <p>Your simple online bookstore for popular books, authors, and reading inspiration.</p>
    </body>
    </html>
  `);
});

/**
 * GET /api/books
 * Returns an array of books from the mock database.
 */
app.get('/api/books', (req, res, next) => {
  try {
    const allBooks = bookCollection.find();
    res.json(allBooks);
  } catch (err) {
    next(err);
  }
});

/**
 * GET /api/books/:id
 * Returns one book matching the numeric id from the mock database.
 */
app.get('/api/books/:id', (req, res, next) => {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      throw createError(400, 'Input must be a number');
    }

    const book = bookCollection.findOne({ id });

    if (!book) {
      throw createError(404, 'Book not found');
    }

    res.json(book);
  } catch (err) {
    next(err);
  }
});

app.use((req, res, next) => {
  next(createError(404, 'The requested page could not be found.'));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  });
});

module.exports = app;
