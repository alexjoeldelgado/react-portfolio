const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// require("./route")(app);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Heroku fix to serve the build react app
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});