var express = require('express');
var app = express();
var promise = require('bluebird');
const bodyParser =require('body-parser');


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

var options = {
    promiseLib : promise
}

var pgp = require('pg-promise')(options);
var connectionString = 'postgress://localhost:5432/budget';
var db = pgp(connectionString);
app.get('/AddLabor', function(req,res){
    res.send('Hello World')
})

  app.post('/AddLabor', function(req,res) {
      let name = req.body.name;
      let category = req.body.category;
      let month1rate = req.body.month1rate;
      let month2rate = req.body.month2rate;
      let month3rate = req.body.month3rate;
      let month4rate = req.body.month4rate;
      let month5rate = req.body.month5rate;
      let month6rate = req.body.month6rate;

    db.none('INSERT INTO labor(name, category, month1rate, month2rate, month3rate, month4rate, month5rate, month6rate) values($1, $2, $3, $4, $5, $6, $7, $8)' , [name, category, month1rate, month2rate, month3rate, month4rate, month5rate, month6rate]).then(function(){
        console.log('completed labor insert: ' + Date.now() )
    })
    res.json({success: true})
  })

  app.post('/AddTravel', function(req,res) {
    let title = req.body.title;
    let destination = req.body.destination;
    let month = req.body.month;
    let days = req.body.days;
    let mileage = req.body.mileage;

  db.none('INSERT INTO travel(title, destination, month, days, mileage) values($1, $2, $3, $4, $5)' , [title, destination, month, days, mileage]).then(function(){
      console.log('completed travel insert: ' + Date.now() )
  })
  res.json({success: true})
})

app.post('/AddMaterials', function(req,res) {
    let titlem = req.body.titlem;
    let description = req.body.description;
    let monthm = req.body.monthm;
    let cost = req.body.cost;

  db.none('INSERT INTO materials(titlem, description, monthm, cost) values($1, $2, $3, $4)' , [titlem, description, monthm, cost]).then(function(){
      console.log('completed materials insert: ' + Date.now() )
  })
  res.json({success: true})
})


var server = app.listen(3001, function() {
    console.log('Listening on port 3001');
});

