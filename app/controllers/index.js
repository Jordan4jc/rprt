import Ember from 'ember';

export default Ember.ArrayController.extend({
	// Bar Graph Component Data
	total_sessions: [
			{
				metricText: "New Sessions",
				metricNumber: "22%",
				metricClass: "new-sessions metric blue",
				metricStyle: "width: 22%"
			},
			{
				metricText: "Return Sessions",
				metricNumber: "78%",
				metricClass: "new-sessions metric yellow",
				metricStyle: "width: 78%"
			}
	],
	mobile_sessions: [
		{
			metricNumber: "45",
			metricClass: "metric blue",
			metricStyle: "width: 20%"
		}
	],
	mobile_sessions_bar_text: [0,221],
	desktop_sessions: [
		{
			metricNumber: "176",
			metricClass: "metric yellow",
			metricStyle: "width: 79%"
		}
	],
	desktop_sessions_bar_text: [0,221]
});
