$('.countdown').downCount({
	date: '29 january 2018 00:00:00',
	offset: +3,
	regional:"ru",
	format:"on"
}, function () {
	alert('Распродажа закончилась!');
});