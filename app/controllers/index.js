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
	desktop_sessions_bar_text: [0,221],
	twitter: [
		{
			metricNumber: "0",
			metricLabel: "12AM-7AM",
			metricClass: "metric blue__shade-3",
			metricStyle: "width: 5%"
		},
		{
			metricNumber: "0",
			metricLabel: "7AM-12PM",
			metricClass: "metric blue__shade-2",
			metricStyle: "width: 5%"
		},
		{
			metricNumber: "2",
			metricLabel: "12PM-5PM",
			metricClass: "metric blue__shade-1",
			metricStyle: "width: 12%"
		},
		{
			metricNumber: "97",
			metricLabel: "5PM-12AM",
			metricClass: "metric blue",
			metricStyle: "width: 78%"
		}
	],
});
