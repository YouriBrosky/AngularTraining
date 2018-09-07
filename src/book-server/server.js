console.log('loading libraries');
let express = require('express');
let cors = require('cors');
let app = express();
let http = require('http').Server(app);
let bodyParser = require('body-parser');

let maxId = 10;
let overview = [
  {
    "id": 100004,
    "title": "Keyword Mastery",
    "author": "O'Rly?",
    "genre": "misc",
    "img": "assets/google.jpg",
    "price": 9.95,
    "reserved": false
  },
  {
    "id": 100005,
    "title": "Refactoring 2.0",
    "author": "O'Rly?",
    "genre": "programming",
    "img": "assets/ignore.jpg",
    "price": 14.95,
    "reserved": true
  },
  {
    "id": 100006,
    "title": "Bigger Data",
    "author": "O'Rly?",
    "genre": "programming",
    "img": "assets/such-data.jpg",
    "price": 11.95,
    "reserved": false
  },
  {
    "id": 100007,
    "title": "Application Design",
    "author": "O'Rly?",
    "genre": "programming",
    "img": "assets/app-design.jpg",
    "price": 18.95,
    "reserved": true
  }
];

(function StockService() {
  initHttpServer();
})();

function initHttpServer() {
  console.log('starting http on 3004');
  app.use(cors());
  app.use(bodyParser.json());

  app.listen('3004', function () {
    console.log('started http on 3004');

  });

  app.get('/overview', handleOverview);

  function handleOverview(request, response) {
    response.json(overview.concat([]));
  }

  app.get('/book/:id', handleDetail);

  function handleDetail(request, response) {
    let detail = overview.find(function (entry) {
      return entry.id == request.params.id
    });

    if (detail) {
      response.json(detail);
    } else {
      response.status(404).json({detail: `Book: ${book.id} could not be found`})
    }
  }

  app.get('/book/exists/:title', handleExists);

  function handleExists(request, response) {
    let detail = overview.find(function (entry) {
      return entry.title.startsWith(request.params.title);
    });

    response.json(detail);
  }

  app.delete('/book/:id', handleDelete);

  function handleDelete(request, response) {
    let detail = overview.find(function (entry) {
      return entry.id == request.params.id
    });

    if (detail) {
      overview.splice(overview.indexOf(detail), 1);
      response.status(204);
    } else {
      response.status(404).json({detail: `Book: ${book.id} could not be found`, deleted: false});
    }
  }

  app.post('/store', handleStore);

  function handleStore(request, response) {
    console.log('store reached');
    if (request.body.title && request.body.author) {
      let exists = overview.find(function (entry) {
        return entry.title === request.params.title && entry.author === request.params.author;
      });

      if (exists) {
        response.status(422).json({request: request.body, message: "Book is already stored"})
      }

      let book = {
        id: 10000 + (maxId++),
        title: request.body.title,
        author: request.body.author,
        img: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
        genre: request.body.genre,
        price: request.body.price,
        reserved: request.body.reserved
      };

      overview.push(book);
      console.log(`store pushed ${request.body.title}`);

      response.json(book)
    } else {
      response.status(422).json({request: request.body, message: "title and author are required"})
    }
  }
}
