const path = require('path');
const express = require('express')
const exphbs = require("express-handlebars")
const routes = require("./controllers");

const app = express();
const Port = require('express');

app.engine(".hbs", exphbs({ extname: ".hbs"}));
app.set("view engine", ".hbs");
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.jpin(_dirname, 'public')));

app.use(routes);

app.listen(PORT, () => console.log('Now Listening'))

