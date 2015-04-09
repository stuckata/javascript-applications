(function () {
	// Instantiate a counter
	var clock = new FlipClock($('.clock'), 300, {
		clockFace: 'MinuteCounter',
		autoStart: true,
		countdown: true
	});
})();