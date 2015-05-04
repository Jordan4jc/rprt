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
	total_sessions_comparison: [
		[
			{
				metricNumber: "26%",
				metricText: "September",
				metricStyle: "height: 26%"
			},
			{
				metricNumber: "22%",
				metricText: "October",
				metricStyle: "height: 22%"
			},
		],
		[
			{
				metricNumber: "74%",
				metricText: "September",
				metricStyle: "height: 74%"
			},
			{
				metricNumber: "78%",
				metricText: "October",
				metricStyle: "height: 78%"
			}
		]
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
	facebook: [
		{
			metricNumber: "0",
			metricLabel: "12AM-7AM",
			metricClass: "metric yellow__shade-3",
			metricStyle: "width: 5%"
		},
		{
			metricNumber: "0",
			metricLabel: "7AM-12PM",
			metricClass: "metric yellow__shade-2",
			metricStyle: "width: 5%"
		},
		{
			metricNumber: "4",
			metricLabel: "12PM-5PM",
			metricClass: "metric yellow__shade-1",
			metricStyle: "width: 12%"
		},
		{
			metricNumber: "7",
			metricLabel: "5PM-12AM",
			metricClass: "metric yellow",
			metricStyle: "width: 78%"
		}
	],
	referrals: [
		{
			metricNumber: "0",
			metricLabel: "Twitter",
			metricClass: "metric blue__shade-3",
			metricStyle: "width: 5%"
		},
		{
			metricNumber: "10",
			metricLabel: "Facebook",
			metricClass: "metric blue__shade-2",
			metricStyle: "width: 15%"
		},
		{
			metricNumber: "62",
			metricLabel: "Direct",
			metricClass: "metric blue__shade-1",
			metricStyle: "width: 25%"
		},
		{
			metricNumber: "149",
			metricLabel: "Other",
			metricClass: "metric blue",
			metricStyle: "width: 55%"
		}
	],
	age_range_1: [
		{
			metricNumber: "27.5%",
			metricClass: "metric blue",
			metricStyle: "width: 27.5%"
		}
	],
	age_range_1_text: [0,100],
	age_range_2: [
		{
			metricNumber: "15.5%",
			metricClass: "metric blue",
			metricStyle: "width: 15.5%"
		}
	],
	age_range_2_text: [0,100],
	age_range_3: [
		{
			metricNumber: "33.5%",
			metricClass: "metric blue",
			metricStyle: "width: 33.5%"
		}
	],
	age_range_3_text: [0,100],
	age_range_4: [
		{
			metricNumber: "76.5%",
			metricClass: "metric yellow",
			metricStyle: "width: 76.5%"
		}
	],
	age_range_4_text: [0,100],
});
