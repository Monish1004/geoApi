const express = require('express');
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.status(200).json({
        message : "Hello World"
    })
})

app.post('/getReq' , (req , res) => {
    try {
        const data = req.body;
        console.log(data);
        res.status(200).json({
            message : "Data Received",
            data : data
        })
    } catch (error) {
         res.status(500).json({
            message : "Internal Server Error",
            error : error
        })
    }
})

app.listen(port , () => {
    console.log('Server started at ' , port);
})