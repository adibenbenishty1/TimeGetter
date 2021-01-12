const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
//const port =  3000;

app.get('/', (req, res) => {
  res.send('Hello World AdiB!')
});

app.get('/gettime', (req, res) => {
    let date_ob = new Date();

    // current date
    // adjust 0 before single digit date
    let date = ("0" + date_ob.getDate()).slice(-2);
    
    // current month
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    
    // current year
    let year = date_ob.getFullYear();
    
    // current hours
    let hours = date_ob.getHours();
    
    // current minutes
    let minutes = date_ob.getMinutes();
    
    // current seconds
    let seconds = date_ob.getSeconds();
    

    // prints date & time in YYYY-MM-DD HH:MM:SS format
    let dateTime= year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
    


    res.send(dateTime)
  });
  


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});