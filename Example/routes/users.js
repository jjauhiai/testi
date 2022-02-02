var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('Hello');
  
});


router.get('/toka', function(req, res) {
  console.log("Olen toka :D !");
  res.send('Tokapa hyvinkin...')
});
router.get('/kolmas/:name', function(req, res) {
  console.log("Syötettiin nimi "+req.params.name);
  res.send('Terve '+req.params.name);
});

router.use(
  function(req,res,next){
      console.log('The common middleware 1 called');
      next();
  }
)

router.use(
  function(req,res,next){
      console.log('The common middleware 1b called');
      next();
  }
)

router.get('/neljas/:fname/:lname', function(req, res) {
  //console.log(req.params.name);
  res.send('Terve '+req.params.fname +" "+req.params.lname);
  console.log('Terve '+req.params.fname +" "+req.params.lname);
  
});

router.use(
  function(req,res,next){
      console.log('The common middleware 2 called');
      next();
  }
);



router.post('/',function(request,response){
  response.send(request.body.lname+" "+request.body.fname);
  console.log(request.body.lname+" "+request.body.fname);
});


router.put ('/:id',function(request,response){
  response.send("Henkilölle "+request.params.id+" muutetaan nimeksi "+request.body.fname);
  console.log("Henkilölle "+request.params.id+" muutetaan nimeksi "+request.body.fname);
  
});



module.exports = router;
