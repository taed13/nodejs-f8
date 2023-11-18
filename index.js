const route = require("./src/routes");

// Connect to DB
const db = require("./src/config/db");
db.connect();

const path = require("path");

const express = require("express");
const app = express();
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const port = 3000;

app.use(express.static(path.join(__dirname, "./src/public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTTP logger
// app.use(morgan("combined"));

// template engine
app.engine(
  "hbs",
  exphbs.engine({
    extname: ".hbs",
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