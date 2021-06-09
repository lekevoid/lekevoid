<template>
	<div :class="['project', 'flex', { invert: invert }]">
		<div class="row items-start q-col-gutter-x-xl">
			<div class="col col-12 col-md-6">
				<Screenshots :list="screenshots" :hide-desktop="hideDesktop" :hide-mobile="hideMobile" />
			</div>
			<div class="col col-12 col-md-6">
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
		invert: {
			type: Boolean,
			default: false,
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
	data: () => ({
		screenshots: { desktop: [], mobile: [] },
	}),
	computed: {},
	methods: {
		getScreenshots() {
			for (let x = 1; x <= 9; x++) {
				try {
					const d = require(`../img/screenshots/${this.id}_0${x}_desktop.webp`);
					this.screenshots.desktop.push(d);
				} catch (e) {
					if (this.screenshots.desktop.length === 0) {
						console.log("No Desktop screenshot available for project", this.id);
						return false;
					}
				}

				try {
					const m = require(`../img/screenshots/${this.id}_0${x}_mobile.webp`);
					this.screenshots.mobile.push(m);
				} catch (e) {
					if (this.screenshots.mobile.length === 0) {
						console.log("No Mobile screenshot available for project", this.id);
						return false;
					}
				}
			}
		},
	},
	created() {
		this.getScreenshots();
	},
};
</script>

<style lang="scss" scoped>
.project {
	width: 100%;
	margin-bottom: 120px;
	max-width: 100%;

	&.invert {
		& > .row {
			flex-flow: row-reverse wrap;
		}
	}

	& > .row {
		min-width: 100%;
	}

	.col {
		position: relative;
	}

	ul {
		padding-left: 1em;
	}
}
</style>
