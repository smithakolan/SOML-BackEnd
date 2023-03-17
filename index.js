const express = require('express');
const cors = require('cors');
const path = require('path');
//import routes
const rankingRoute = require('./src/routes/rankingRoute');


//To be changed in production
const PORT = process.env.PORT || 3000;

//Load environment variables
require('dotenv').config()

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use('/ranking', rankingRoute);

//Testing only
app.get('/', (req, res) => {
    res.send('SoML backend is active');
});


// start the server
app.listen(PORT, () => {
    console.log('listening on port', PORT);
})

module.exports = app;