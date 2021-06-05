//import dependencies
const express = require ('express');
const routes = require ('./controllers');
const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');
const sequelize = require('./config/connection');

//express setup
const app = express();
const PORT = process.env.PORT || 3001;

// Handlebars setup as default template engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
//app.use(express.static(path.join(__dirname, 'public')));

//turn on routes
app.use(routes);


// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log("Now listening"));
});