function Timer() {
	this.countDown = 60;
}

Timer.prototype.addSeconds = function(seconds) {
	this.countDown += seconds;
};

Timer.prototype.countDown = funtion(){
	this.countDown--;
	if(this.countDown <= 0){
		
	}
};

Timer.prototype.startUp = function() {
	setInterval("countDown()", 1000);
};