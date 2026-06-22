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
          max-width: 1000px;
          margin: 40px auto;
          padding: 25px;
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }

        section {
          margin-bottom: 35px;
        }

        h1, h2 {
          color: #4b2e16;
        }

        header h1 {
          color: white;
        }

        .book-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }

        .book-card {
          border: 1px solid #ddd;
          border-radius: 6px;
          padding: 15px;
          background-color: #fafafa;
        }

        .book-card h3 {
          margin-top: 0;
          color: #4b2e16;
        }

        .info-box {
          background-color: #f8f3ec;
          border-left: 5px solid #4b2e16;
          padding: 15px;
          margin-top: 10px;
        }

        footer {
          text-align: center;
          padding: 20px;
          background-color: #2f1b0c;
          color: white;
        }
      </style>
    </head>

    <body>
      <header>
        <h1>In-N-Out-Books</h1>
        <p>Your simple online bookstore for popular books, authors, and reading inspiration.</p>
      </header>

      <nav>
        <a href="/">Home</a>
        <a href="/">Top Sellers</a>
        <a href="/">Hours</a>
        <a href="/">Contact</a>
      </nav>

      <main>
        <section>
          <h2>Welcome to In-N-Out-Books</h2>
          <p>
            In-N-Out-Books is an online bookstore designed to help readers find popular books,
            discover new authors, and browse recommended titles. Our goal is to make book shopping
            simple, organized, and enjoyable for every reader.
          </p>
        </section>

        <section>
          <h2>Top Selling Books</h2>

          <div class="book-grid">
            <article class="book-card">
              <h3>The Midnight Library</h3>
              <p><strong>Author:</strong> Matt Haig</p>
              <p><strong>Genre:</strong> Fiction</p>
            </article>

            <article class="book-card">
              <h3>Atomic Habits</h3>
              <p><strong>Author:</strong> James Clear</p>
              <p><strong>Genre:</strong> Self-Improvement</p>
            </article>

            <article class="book-card">
              <h3>Project Hail Mary</h3>
              <p><strong>Author:</strong> Andy Weir</p>
              <p><strong>Genre:</strong> Science Fiction</p>
            </article>
          </div>
        </section>

        <section>
          <h2>Hours of Operation</h2>

          <div class="info-box">
            <p><strong>Monday - Friday:</strong> 9:00 AM - 8:00 PM</p>
            <p><strong>Saturday:</strong> 10:00 AM - 6:00 PM</p>
            <p><strong>Sunday:</strong> 12:00 PM - 5:00 PM</p>
          </div>
        </section>

        <section>
          <h2>Contact Information</h2>

          <div class="info-box">
            <p><strong>Email:</strong> support@innoutbooks.com</p>
            <p><strong>Phone:</strong> (555) 555-1234</p>
            <p><strong>Address:</strong> 123 Reader Lane, Booktown, USA</p>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 In-N-Out-Books. All rights reserved.</p>
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