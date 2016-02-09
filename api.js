var reco = require('./reco');

function createUserChoicesObject(fac1,fac2,fac3) {
	this.fac1 = fac1;
	this.fac2 = fac2;
	this.fac3 = fac3;
};

module.exports = function(app,express) {
	var api = express.Router();

	// below are all the REST Api's 

	api.post('/userchoices', function(req,res) {
		
		var userChoicesObject = new createUserChoicesObject(req.body.fac1, req.body.fac2, req.body.fac3);
		res.send(reco.takeUserChoices(userChoicesObject).toString());
		//res.send('user choices successfully taken');
	});

	return api;
};
