const userRouter = require("./routes/user");
const cors = require('cors');
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const collectionRouter = require("./routes/collection");
const itemCollectionsRouter = require("./routes/item-collections")
const commentsRouter = require("./routes/comments")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({
    origin: '*'
}));
app.use("/users", userRouter);
app.use("/collections", collectionRouter);
app.use("/collections/items", itemCollectionsRouter);
app.use("/collections/items/comments", commentsRouter);

const models = require('./models');
models.sequelize.sync({ force: true })
    .then(() => {
        app.listen(8000, function () {
            console.log("Сервер ожидает подключения...");
        });
    })
    .catch((err) => {
        console.log(err, 'Something went wrong with the Database Update!');
    });
