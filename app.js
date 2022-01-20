const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(morgan('combined'));

app.get("/",(req,res)=>{

    res.send('Hello World');

})

app.listen(port, ()=>{
    console.log('listening on port %d', port);
})