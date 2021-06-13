const personal = require("./content.personal");

export default {
	hi: "Hi, I'm",
	hello_there: "Well hello there !",
	nice_to_meet_you: "Nice to meet you !",
	what_i_do: "What I do",
	what_ive_done: "What I've done",
	projects: {
		gigi_retzo: {
			title: "Gigi Retzo",
			short_desc: "The website of a talented artist based in Montreal, Canada.",
			features: {
				"0": "Full e-commerce allowing them to process orders and payments for their work",
				"1": "CMS allows them to edit their portfolio, resume and vital information, and keep their visitors informed of their whereabouts",
			},
		},
		bokkle: {
			title: "Bokkle",
			short_desc:
				"A homemade version of the popular game Boggle. Our family wanted to have a game that we could use at night while the young ones were sleeping.",
			features: {
				"0": "PWA capability : install as an app on your device and play offline",
				"1": "Customizable grid size and timer length",
				"2": "Dictionary UI connected to the Merriam-Webster API to validate words",
				"3": "Create a game and play remotely with friends !",
			},
		},
	},
	features: "Features",
	made_with: "Made using",
	details: "Details",
	view_live: "View Live",
	content_personal: { ...personal.default },
	work: "Work",
	personal: "Personal",
};
