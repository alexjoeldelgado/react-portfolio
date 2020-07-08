const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const enforce = require('express-sslify');

const app = express();
const port = process.env.PORT || 5000;

// require("./route")(app);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Use enforce.HTTPS({ trustProtoHeader: true }) in case you are behind
// a load balancer (e.g. Heroku). See further comments below
app.use(enforce.HTTPS({ trustProtoHeader: true }));

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