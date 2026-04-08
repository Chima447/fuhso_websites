const express = require("express");
const app = express();
const path = require("path");
const indexRouter = require('./routes/indexRouter');
const port = 3333;



app.use(express.static("asset"));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

app.use('/', indexRouter);

app.use((req, res) => {
  res.status(404).render("error", {
    hero_title: "404!!! NOT FOUND",
    hero_subtitle: "The page you are looking for is NOT available",
  });
});

app.use(() => {
  console.error(err.stack);
  res.status(500).render("error", {
    hero_title: "Ops 500 Internal Server Error",
    hero_subtitle: "There is a server error from our end",
  });
});

app.listen(process.env.port || +port);

console.log("Server is running at Port " + port);
