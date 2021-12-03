const express = require("express");
const sequelize = require('./config/connection');
const session = require("express-session")
const SequelizeStore = require("connect-session-sequelize")
const path = require("path");
const hbs = require("express-handlebars");
const router = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

const SessionStore = SequelizeStore(session.Store);


app.engine('handlebars', hbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// uncomment the below when there's static stuf to send
app.use(express.static(path.join(__dirname, "public")));

app.use(session({
   secret: "some secret for env",
   resave: false,
   saveUninitialized: true,
   store: new SessionStore({
       db: sequelize,
       tableName: "session"
   })
}))
// when we have routes, we'll "use" them here.
app.use(router);

sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`listning on ${PORT}`))
})