const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

require('./routes')(app);

require('./controllers/authController')(app)

const port = process.env.PORT || 8080;


app.listen(port, (err)=> {
    if(err) {
        console.log(err)
    }else {
        console.log(`connected server http://localhost:${port}`)
    }
})
