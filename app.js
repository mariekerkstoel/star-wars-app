const express = require('express');
const app = express();

//routes
app.get('/', function(req, res){
  res.send('First message');
});

app.get('/star_wars_episode/:episode_number?', function(req,res){
  var episode_number = req.params.episode_number;
  res.send('This is the page for episode ' + episode_number)
})

app.listen(3000, function(){
  console.log('App listening')
})
