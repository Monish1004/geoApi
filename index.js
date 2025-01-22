const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    return res.send('Hello World');
})

app.post('/getReq' , (req , res) => {
    try {
        const data = req.body;
        console.log(data);
        return res.status(200).send(data);
    } catch (error) {
        return res.status(500).send("Error");
    }
})

app.listen(port , () => {
    console.log('Server started at ' , port);
})