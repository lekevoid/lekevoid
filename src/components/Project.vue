<template>
	<div class="project flex">
		<div class="row items-start">
			<div class="col col-12 col-md-6">
				<Screenshots :list="screenshots" />
			</div>
			<div class="col col-12 col-md-1"></div>
			<div class="col col-12 col-md-5">
				<slot />
			</div>
		</div>
	</div>
</template>

<script>
import Screenshots from "./ProjectScreenshots.vue";

export default {
	name: "Project",
	components: { Screenshots },
	props: {
		id: {
			type: String,
			required: true,
		},
	},
	data: () => ({
		screenshots: { desktop: [], mobile: [] },
	}),
	computed: {},
	methods: {
		getScreenshots() {
			for (let x = 1; x <= 9; x++) {
				try {
					const d = require(`../img/screenshots/${this.id}_0${x}_desktop.jpg`);
					this.screenshots.desktop.push(d);
				} catch (e) {
					if (this.screenshots.desktop.length === 0) {
						console.log("No Desktop screenshot available for project", this.id);
						return false;
					}
				}

				try {
					const m = require(`../img/screenshots/${this.id}_0${x}_mobile.jpg`);
					this.screenshots.mobile.push(m);
				} catch (e) {
					if (this.screenshots.mobile.length === 0) {
						console.log("No Mobile screenshot available for project", this.id);
						return false;
					}
				}
			}
		},
		/* screenshotExists(num) {
			try {
				const exists = require(`../img/screenshot_${this.id}_0${num}.jpg`);
				return true;
			} catch (e) {
				return false;
			}
		},*/
	},
	created() {
		this.getScreenshots();
	},
};
</script>

<style lang="scss" scoped>
.project {
	width: 100%;

	.row {
		width: 100%;
	}

	.col {
		position: relative;
	}
}
</style>

<!-- <style lang="scss">
$minVW: 16vw;
$minPX: 3.6rem;

@mixin screenshotPos1 {
	transform: rotate3d(1, -4, 0, -12deg)
		translate3d(min(#{$minVW * 1.5}, #{$minPX * 1.5}), min(#{$minVW * 1.2}, #{$minPX * 1.2}), min(#{$minVW * 2}, #{$minPX * 2}));
	z-index: 4;
	opacity: 1;
}

@mixin screenshotPos2 {
	transform: rotate3d(1, -4, 0, -12deg)
		translate3d(min(#{$minVW * 1}, #{$minPX * 1}), min(#{$minVW * 0.7}, #{$minPX * 0.7}), min(#{$minVW * 1}, #{$minPX * 1}));
	z-index: 3;
	opacity: 0.7;
}

@mixin screenshotPos3 {
	transform: rotate3d(1, -4, 0, -12deg)
		translate3d(min(#{$minVW * 0.5}, #{$minPX * 0.5}), min(#{$minVW * 0.2}, #{$minPX * 0.2}), min(#{$minVW * 0}, #{$minPX * 0}));
	z-index: 2;
	opacity: 0.7;
}

@mixin screenshotPos4 {
	transform: rotate3d(1, -4, 0, -12deg)
		translate3d(min(#{$minVW * 0}, #{$minPX * 0}), min(#{$minVW * -0.3}, #{$minPX * -0.3}), min(#{$minVW * -1}, #{$minPX * -1}));
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
	height: 400px;
	max-height: 50vw;
	position: relative;
	transform-style: preserve-3d;
	perspective: 600px;
	left: 2vw;

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
</style> -->
