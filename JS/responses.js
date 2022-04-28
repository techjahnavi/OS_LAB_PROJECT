function getBotResponse(input) {
	//rock paper scissors
	a = input.toLowerCase();
	if (a == "concurrency" || a == "what is concurrency") {
		// return "paper";
		return (window.location = "concurrency_info.html");
	} else if (a == "deadlock" || a == "what is deadlock" || a == "about deadlock") {
		return (window.location = "deadlock_info.html");
	} else if (a == "peterson" || a == "peterson algorithm" || a == "peterson algo" || a == "peterson simulation") {
		return (window.location = "peterson_algo_viz.html");
	} else if (a == "producer" || a == "producer consumer" || a == "producer consumer algorithm") {
		return (window.location = "producer_consumer_viz.html");
	} else if (a == "test" || a == "test set lock" || a == "tsl" || a == "test and set lock") {
		return (window.location = "tsl_viz.html");
	} else if (a == "banker" || a == "bankers" || a == "bankers algorithm") {
		return (window.location = "bankers_algo_viz.html");
	}
}
