var SalesLeft = $('.sales-left');
var SalesDetailsLeft = $('.sales__details-left');

var buttonClickHandler = function (){
	var currentState = SalesDetailsLeft.attr('data-state');

	if (currentState =='active') {
		SalesDetailsLeft.attr('data-state', 'inactive');
	} else {
		SalesDetailsLeft.attr('data-state', 'active');
	}
};

SalesLeft.on('click', buttonClickHandler);

var SalesRight = $('.sales-right');
var SalesDetailsRight = $('.sales__details-right');

var buttonClickHandler = function (){
	var currentState = SalesDetailsRight.attr('data-state');

	if (currentState =='active') {
		SalesDetailsRight.attr('data-state', 'inactive');
	} else {
		SalesDetailsRight.attr('data-state', 'active');
	}
};

SalesRight.on('click', buttonClickHandler);