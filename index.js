var express = require('express');

var app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

var data = {count:0, count2:4};


app.get('/', function(req,res){
  data.count++;
   res.render('ejs1', data);
});



console.log(__dirname);

app.listen(3000, function(){
  console.log('Server On!');
});
