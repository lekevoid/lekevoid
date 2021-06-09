<template>
	<div :class="['screenshots', `current_${current}`]" @click="nextScreenshot()">
		<div class="device desktop" v-if="!hideDesktop">
			<q-img v-for="(img, k) in list.desktop" :src="img" :key="`ss_d_${k}`" :class="[{ current: current === k }]" />
		</div>
		<div class="device mobile" v-if="!hideMobile">
			<q-img v-for="(img, k) in list.mobile" :src="img" :key="`ss_d_${k}`" :class="[{ current: current === k }]" />
		</div>
	</div>
</template>

<script>
export default {
	name: "ProjectScreenshots",
	data: () => ({
		current: 0,
	}),
	props: {
		list: {
			type: Object,
			required: true,
		},
		hideDesktop: {
			type: Boolean,
			default: false,
		},
		hideMobile: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
		nextScreenshot() {
			if (this.current >= this.list.desktop.length - 1) {
				this.current = 0;
			} else {
				this.current++;
			}
		},
	},
};
</script>

<style lang="scss" scoped>
@keyframes enterScreenshot {
	0% {
		opacity: 0;
		transform: translateY(20%);
	}
	100% {
		opacity: 1;
		transform: translateY(0%);
	}
}

.screenshots {
	width: 100%;
}

.device {
	background-color: transparent;
	background-repeat: no-repeat;
	background-position: center center;
	background-size: contain;
	position: relative;
	width: 100%;

	.q-img {
		position: absolute;
		opacity: 0;
		/* transform: translateY(20%); */

		&.current {
			animation: 1s ease-out 0s 1 normal forwards running enterScreenshot;
		}
	}

	&.desktop {
		background-image: url("../img/device_desktop.svg");
		width: 100%;
		height: 0;
		padding-top: 80%;

		.q-img {
			height: 58.2%;
			width: 82.8%;
			left: 8.5%;
			top: 8.1%;
		}
	}

	&.mobile {
		background-image: url("../img/device_mobile.svg");
		position: absolute;
		right: 0;
		left: 30%;
		bottom: 0;
		padding-top: 40%;

		.q-img {
			height: 79.5%;
			width: 18%;
			left: 41%;
			top: 10.2%;
			border-radius: 2%;

			&.current {
				animation-duration: 0.6s;
			}
		}
	}
}
</style>
