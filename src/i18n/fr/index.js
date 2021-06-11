const personal = require("./content.personal");

export default {
	hi: "Salut, moi c'est",
	hello_there: "Dites bonjour !",
	nice_to_meet_you: "Ravi de vous rencontrer ! 😉",
	what_i_do: "Ce que je fais",
	what_ive_done: "Ce que j'ai fait",
	projects: {
		gigi_retzo: {
			title: "Gigi Retzo",
			short_desc: "Le site web d'une artiste talentueuse basée à Montréal, Québec, Canada.",
			features: {
				"0": "",
				"1": "",
			},
		},
		bokkle: {
			title: "Bokkle",
			short_desc: "Jeu de Boggle réinventé",
			features: {
				"0": "PWA capability : install as an app on your device and play offline",
				"1": "Customizable grid size and timer length",
				"2": "Dictionary UI connected to the Merriam-Webster API to validate words",
				"3": "Create a game and play remotely with friends !",
			},
		},
	},
	features: "Particularités",
	made_with: "Fait avec",
	details: "Détails",
	view_live: "Voir en action",
	content_personal: { ...personal.default },
	work: "Travail",
	personal: "Personnel",
};
