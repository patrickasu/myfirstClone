const express = require('express');
const router = express.Router();

// post request
router.post('/booking', function(req, res){
	console.log(req.body);
	res.send({
		type: 'POST',
		name: req.body.name,
		position: req.body.position
	});
});

module.exports = router;