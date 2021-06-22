<template>
	<q-page>
		<Backgrounds />
		<div class="page_content row q-pa-xl">
			<div class="col">
				<div class="row">
					<h1>{{ $t("content_personal.who_am_i") }}</h1>
				</div>
				<div class="row">
					<div class="col">
						<div :class="['cards', `qty_${cards.length}`, { loaded: cardsLoaded }, { transitioning: cardsTransitioning }]">
							<img
								:src="card_horror.src"
								:class="['card horror', `order_${card_horror.order}`, { current: card_horror.order === cardsQty }]"
								ref="card_horror"
								@click="makeTopCard('horror')"
							/>
							<img
								:src="card_soldier.src"
								:class="['card soldier', `order_${card_soldier.order}`, { current: card_soldier.order === cardsQty }]"
								ref="card_soldier"
								@click="makeTopCard('soldier')"
							/>
							<img
								:src="card_wizard.src"
								:class="['card wizard', `order_${card_wizard.order}`, { current: card_wizard.order === cardsQty }]"
								ref="card_wizard"
								@click="makeTopCard('wizard')"
							/>
						</div>
					</div>
					<div class="col q-ml-xl" style="position: relative">
						<div :class="['card_description', 'horror', { active: currentSection === 'horror' }]" v-html="$t(`content_personal.text.horror`)"></div>
						<div
							:class="['card_description', 'soldier', { active: currentSection === 'soldier' }]"
							v-html="$t(`content_personal.text.soldier`)"
						></div>
						<div :class="['card_description', 'wizard', { active: currentSection === 'wizard' }]" v-html="$t(`content_personal.text.wizard`)"></div>
					</div>
				</div>
			</div>
		</div>
	</q-page>
</template>

<script>
import Backgrounds from "../components/PersonalBackgrounds.vue";

import card_horror from "../img/card_horror.webp";
import card_soldier from "../img/card_soldier.webp";
import card_wizard from "../img/card_wizard.webp";

export default {
	name: "PagePersonal",
	components: { Backgrounds },
	data: () => ({
		topCardZIndexInc: 1,
		cardsSpread: 30,
		cardsLoaded: false,
		cardsTransitioning: false,
		cards: [
			{ order: 1, name: "horror", src: card_horror },
			{ order: 2, name: "soldier", src: card_soldier },
			{ order: 3, name: "wizard", src: card_wizard },
		],
		currentSection: false,
	}),
	computed: {
		card_horror() {
			return this.cards.find((c) => c.name === "horror");
		},
		card_soldier() {
			return this.cards.find((c) => c.name === "soldier");
		},
		card_wizard() {
			return this.cards.find((c) => c.name === "wizard");
		},
		cardsQty() {
			return this.cards.length;
		},
	},
	methods: {
		sortByOrder(a, b) {
			if (a.order > b.order) {
				return 1;
			}
			if (a.order < b.order) {
				return -1;
			}
			return 0;
		},
		getCardRotation(cardOrder) {
			// Don't ask how I got to this calculation...
			return -this.cardsSpread + ((this.cardsSpread * (cardOrder - 1)) / (this.cardsQty - 1)) * 2;
		},
		initCardsRotate() {
			let out = this.cards.sort(this.sortByOrder).map((card, inc) => {
				const cardRef = this.$refs[`card_${card.name}`];
				const rotate = this.getCardRotation(card.order);
				cardRef.style.transform = `translate(-50%, -20%) rotate(${rotate}deg)`;
				cardRef.style.zIndex = card.order;
				return card;
			});

			this.cards = [...out];

			this.$nextTick(() => {
				this.cardsLoaded = true;
			});
		},
		animTopCard(targetCardName) {
			const topCard = this.$refs[`card_${targetCardName}`];
			const card = this.cards.find((c) => c.name === targetCardName);
			const finalTransform = `translate(-50%, -20%) rotate(${this.getCardRotation(card.order)}deg)`;

			topCard.style.transform = `${finalTransform} translateY(-110%)`;

			setTimeout(() => {
				topCard.style.zIndex = 10;
				topCard.style.transform = finalTransform;
				this.cardsTransitioning = false;
			}, 500);
		},
		makeTopCard(targetCardName) {
			this.currentSection = targetCardName;
			this.cardsTransitioning = true;

			let inc = 1;
			const out = this.cards.sort(this.sortByOrder).map((card) => {
				if (card.name === targetCardName) {
					card.order = this.cardsQty;
				} else {
					const rotate = this.getCardRotation(inc);
					const cardRef = this.$refs[`card_${card.name}`];
					cardRef.style.transform = `translate(-50%, -20%) rotate(${rotate}deg)`;
					card.order = inc;
					setTimeout(() => {
						cardRef.style.zIndex = card.order;
					}, 400);
					inc++;
				}

				return card;
			});

			this.cards = [...out];

			this.$nextTick(() => {
				this.animTopCard(targetCardName);
			});
		},
	},
	mounted() {
		this.initCardsRotate();
	},
};
</script>

<style lang="scss" scoped>
body.body--dark {
	background: #000;
}

.q-page {
	min-height: 120vh;
	display: block;

	& > .row {
		z-index: 10;
		position: relative;
	}
}

.cards {
	position: relative;
	height: 60vh;
	max-height: 25vw;
	width: 100%;
	opacity: 0;
	transition: opacity 0.6s ease-out 0.8s;

	&.loaded {
		opacity: 1;
		.card {
			transition: box-shadow 0.3s, transform 0.4s ease-in-out 0.2s;

			&.current {
				pointer-events: none;
				transition-delay: 0s;
			}
		}
	}
	&.transitioning {
		.card {
			pointer-events: none;
		}
	}
}

.card {
	position: absolute;
	object-fit: contain;
	max-width: 100%;
	max-height: 100%;
	bottom: -20%;
	left: 50%;
	transform-origin: center bottom;
	cursor: pointer;
	box-shadow: 4px 4px 10px #000;
	border-radius: 14px;
	transform: translate(-50%, -20%) rotate(0deg);
	z-index: 0;
	user-select: none;

	&:hover {
		box-shadow: 0 0 30px #ff0, 0 0 30px #ff0;
	}
}

@keyframes appear {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

.card_description {
	display: block;
	opacity: 0;
	position: absolute;
	width: 100%;
	height: 100%;
	transition: opacity 0.8s ease-out;
	left: 0;
	top: 0;

	&.active {
		position: relative;
		opacity: 1;
		height: auto;
	}

	.subtitle {
		margin-top: 0;
	}
}
</style>

<style lang="scss">
.card_description {
	.subtitle {
		margin-top: 0;
	}
}
</style>
