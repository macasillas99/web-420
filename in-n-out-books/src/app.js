/**
 * Author: Maxine Casillas
 * Date: 06/22/2026
 * File: app.js
 * Description: Express web server for the In-N-Out-Books application.
 */

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>In-N-Out-Books</title>
      <style>
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background-color: #f4f1ea;
          color: #2c2c2c;
        }

        header {
          background-color: #4b2e16;
          color: white;
          padding: 30px;
          text-align: center;
        }

        nav {
          background-color: #2f1b0c;
          padding: 12px;
          text-align: center;
        }

        nav a {
          color: white;
          margin: 0 15px;
          text-decoration: none;
          font-weight: bold;
        }

        main {
          max-width: 900px;
          margin: 40px auto;
          padding: 25px;
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }

        h1 {
          margin-bottom: 10px;
        }

        .books {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
          margin-top: 25px;
        }

        .book-card {
          border: 1px solid #ddd;
          border-radius: 6px;
          padding: 15px;
          background-color: #fafafa;
        }

        .book-card h3 {
          color: #4b2e16;
        }

        footer {
          text-align: center;
          padding: 20px;
          color: #555;
        }
      </style>
    </head>
    <body>
      <header>
        <h1>In-N-Out-Books</h1>
        <p>Your simple online bookstore</p>
      </header>

      <nav>
        <a href="/">Home</a>
        <a href="/">Books</a>
        <a href="/">Authors</a>
        <a href="/">About</a>
      </nav>

      <main>
        <h2>Welcome to In-N-Out-Books</h2>
        <p>
          In-N-Out-Books is a sample bookstore application built with Node.js
          and Express. This landing page introduces the project and confirms
          that the Express web server is running successfully.
        </p>

        <section class="books">
          <div class="book-card">
            <h3>Featured Books</h3>
            <p>Browse popular titles and discover new books to read.</p>
          </div>

          <div class="book-card">
            <h3>Authors</h3>
            <p>Learn more about the authors behind your favorite stories.</p>
          </div>

          <div class="book-card">
            <h3>Book Details</h3>
            <p>View book information such as title, genre, and description.</p>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 In-N-Out-Books</p>
      </footer>
    </body>
    </html>
  `);
});

app.use((req, res, next) => {
  const err = new Error('The requested page could not be found.');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {},
    stack: req.app.get('env') === 'development' ? err.stack : undefined
  });
});

module.exports = app;