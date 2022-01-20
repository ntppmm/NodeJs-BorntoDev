const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const app = express();
const port = 3000;
const path = require('path'); 

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,'/public/')))

app.set('views','./src/views'); // ตอน render ให้มา folder นี้
app.set('view engine','ejs');

app.get("/",(req,res)=>{

    res.render('index', {username: 'Nitipoom', customer: ['A','B','C']}); // render จาก app.set views ไฟล์ชื่อ index

})

app.listen(port, ()=>{
    console.log('listening on port %d', port);
})