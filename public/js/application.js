$(document).ready(function() {
	
console.log('hi')
	var jsonUrl = 'http://data.acgov.org/resource/8khs-56kk.json'	
	$.getJSON( jsonUrl, {
		format: 'json'
	}).done(function( data ) {
		console.log(this)
	})

})

});
