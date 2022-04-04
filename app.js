const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const port = process.env.port || 3000;
const index = require("./routes");

app.set('view', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('short'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(index);

app.listen(port, () => {
    console.log(`Serveur lancé sur http://localhost:${port}.`);
});