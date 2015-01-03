var bench = new Benchmark.Suite('foo', {
	'onStart': onStart,

	'onCycle': onCycle,

	'onAbort': onAbort,
	
	'onError': onError,	

	'onReset': onReset,

	'onComplete': onComplete

});


function onStart() {

}

function onCycle() {
	
}


