var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz', direccion: __dirname});
});


router.get('/author', function (req,res,next) {
	res.render('author',{nombre : 'Javier Gangoso Alvarez', 
		foto : 'http://ciqmz5sexle2rutgetukrfbakrnfe6vbbgj27ojpy353cmzvnxnf6ma.ipfs.neocitiesops.net/foto.jpg'})
})


module.exports = router;
