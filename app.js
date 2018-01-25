const express = require('express');
const app = express();

//routes
app.get('/', function(req, res){
  res.send('First message');
});

app.listen(3000, function(){
  console.log('App listening')
})
