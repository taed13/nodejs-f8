const route = require("./src/routes");
// Connect to DB
const db = require("./src/config/db");

db.connect();
///sth change

const path = require("path");

const express = require("express");
const app = express();
const morgan = require("morgan");
const methodOverride = require("method-override");
const exphbs = require("express-handlebars");
const port = 3000;

app.use(express.static(path.join(__dirname, "./src/public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

// HTTP logger
// app.use(morgan("combined"));

// template engine
app.engine(
  "hbs",
  exphbs.engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./src/resources/views"));

// Routes init
route(app);

app.listen(port, () => {
  console.log(
    `Example app listening on port ${port} at address: ` +
      `http://localhost:${port}`
  );
});
