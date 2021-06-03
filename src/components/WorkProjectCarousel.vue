<template>
	<q-card class="project q-pa-xl q-mb-xl">
		<div class="row items-center">
			<div class="col-6">
				<div :class="['screenshots_carousel', `current_${current}`]" @click="nextScreenshot()">
					<q-img contain :src="require(`../assets/screenshot_${id}_01.jpg`)" v-if="screenshotExists(1)" />
					<q-img contain :src="require(`../assets/screenshot_${id}_02.jpg`)" v-if="screenshotExists(2)" />
					<q-img contain :src="require(`../assets/screenshot_${id}_03.jpg`)" v-if="screenshotExists(3)" />
					<q-img contain :src="require(`../assets/screenshot_${id}_04.jpg`)" v-if="screenshotExists(4)" />
				</div>
			</div>
			<div class="col-6">
				<slot />
			</div>
		</div>
	</q-card>
</template>

<script>
export default {
	name: "WorkBackgrounds",
	props: {
		id: {
			type: String,
			required: true,
		},
	},
	data: () => ({
		current: 1,
	}),
	methods: {
		screenshotExists(num) {
			try {
				const exists = require(`../assets/screenshot_${this.id}_0${num}.jpg`);
				return true;
			} catch (e) {
				return false;
			}
		},
		nextScreenshot() {
			if (this.current >= 4) {
				this.current = 1;
			} else {
				this.current++;
			}
		},
	},
	created() {},
};
</script>

<style lang="scss">
@mixin screenshotPos1 {
	transform: rotate3d(1, -4, 0, -12deg) translate3d(150px, 120px, 200px);
	z-index: 4;
	opacity: 1;
}

@mixin screenshotPos2 {
	transform: rotate3d(1, -4, 0, -12deg) translate3d(100px, 70px, 100px);
	z-index: 3;
	opacity: 0.7;
}

@mixin screenshotPos3 {
	transform: rotate3d(1, -4, 0, -12deg) translate3d(50px, 20px, 0px);
	z-index: 2;
	opacity: 0.7;
}

@mixin screenshotPos4 {
	transform: rotate3d(1, -4, 0, -12deg) translate3d(0px, -30px, -100px);
	z-index: 1;
	opacity: 0;
}

.project {
	.title {
		a {
			color: #fff;

			&:hover {
				color: $primary;
			}
			&:after {
				box-shadow: 1px 1px 1px #000, 1px 1px 1px #000, 1px 1px 1px #000, 1px 1px 1px #000;
			}
		}
	}
	.techs {
		.q-img {
			width: 30px;
			height: 30px;
			margin: auto 10px;
		}
	}
}

.screenshots_carousel {
	min-height: 400px;
	position: relative;
	transform-style: preserve-3d;
	perspective: 600px;

	.q-img {
		position: absolute;
		left: 0;
		top: 0;
		transform: rotate3d(1, -4, 0, -12deg);
		max-width: 50%;
		transition: transform 0.3s ease-out, opacity 0.3s ease-out;
		border-radius: 4px;
		max-height: 200px;
	}

	&.current_1 {
		.q-img {
			&:nth-child(1) {
				@include screenshotPos1;
			}
			&:nth-child(2) {
				@include screenshotPos2;
			}
			&:nth-child(3) {
				@include screenshotPos3;
			}
			&:nth-child(4) {
				@include screenshotPos4;
			}
		}
	}

	&.current_2 {
		.q-img {
			&:nth-child(1) {
				@include screenshotPos4;
			}
			&:nth-child(2) {
				@include screenshotPos1;
			}
			&:nth-child(3) {
				@include screenshotPos2;
			}
			&:nth-child(4) {
				@include screenshotPos3;
			}
		}
	}

	&.current_3 {
		.q-img {
			&:nth-child(1) {
				@include screenshotPos3;
			}
			&:nth-child(2) {
				@include screenshotPos4;
			}
			&:nth-child(3) {
				@include screenshotPos1;
			}
			&:nth-child(4) {
				@include screenshotPos2;
			}
		}
	}

	&.current_4 {
		.q-img {
			&:nth-child(1) {
				@include screenshotPos2;
			}
			&:nth-child(2) {
				@include screenshotPos3;
			}
			&:nth-child(3) {
				@include screenshotPos4;
			}
			&:nth-child(4) {
				@include screenshotPos1;
			}
		}
	}
}
</style>
