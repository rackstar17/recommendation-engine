userChoicesObj = {};

exports = module.exports = {};

dataset = {
	"fac1": 5 ,
	"fac2": 4 ,
	"fac3": 7
}; // later an array of objects will be taken from a database call 

exports.takeUserChoices = function(userChoices) {
		//console.log(userChoices); userchoices is an object of all the choices made by the user
		userChoicesObj = userChoices;
};

objIntersection = function(userObj,dbObj) {
	// for example if we take 3 factors into consideration
	var intersectionLength = 0;
	for(k in dbObj) {
		if(userObj[k]) { // this means whether k'th factor is present in the user choices
			if(userObj[k] == dbObj[k]) {
				intersectionLength++;
			}
		}
	}
	return intersectionLength;
}

objUnion = function(userObj,dbObj) {
	var unionLength = 0;
	for(k in dbObj) {
		if(userObj[k] && dbObj[k]) { // this means k'th factor is present in both user choices and db choice
			if(userObj[k] == dbObj[k]) {
				unionLength++;
			}
			else {
				unionLength +=2;
			}
		}
		else {
			unionLength++;
		}
	}
	return unionLength;
}

jaccardIndex = function(commonLength,fullLength) {
	return commonLength/fullLength ;
}