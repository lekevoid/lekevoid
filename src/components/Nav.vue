<template>
	<header class="row">
		<div class="col-1"></div>
		<div class="col">
			<nav :class="['row items-center justify-end q-pt-md q-pb-sm', `line_moves_${navLineDirection}`]" ref="top_nav">
				<router-link dark v-for="(page, k) in pages" :to="{ name: page.name }" :key="k" :ref="`link_${page.name.toLowerCase()}`">
					{{ page.name }}
				</router-link>
				<div class="underline" ref="nav_line"></div>
			</nav>
		</div>
		<div class="themes col-1 flex justify-end">
			<transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" appear :duration="300">
				<q-img class="theme_icon dark" v-if="!isDark" :src="icon_mode_dark" @click="$q.dark.set(true)" style="height: 30px; width: 30px">
					<q-tooltip>Dark Mode</q-tooltip>
				</q-img>
			</transition>
			<transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" appear :duration="300">
				<q-img class="theme_icon light" v-if="isDark" :src="icon_mode_light" @click="$q.dark.set(false)" style="height: 30px; width: 30px">
					<q-tooltip>Light Mode</q-tooltip>
				</q-img>
			</transition>
		</div>
		<div class="col-1"></div>
	</header>
</template>

<script>
import icon_mode_dark from "../assets/icon_mode_dark.svg";
import icon_mode_light from "../assets/icon_mode_light.svg";

export default {
	name: "Nav",
	props: {
		currentPage: {
			type: String,
			required: true,
		},
		pages: {
			type: Array,
			required: true,
		},
	},
	data: () => ({
		icon_mode_dark: icon_mode_dark,
		icon_mode_light: icon_mode_light,
		navLineDirection: "none",
	}),
	computed: {
		isDark() {
			if (this.$q.dark.isActive) {
				return true;
			}
			return false;
		},
	},
	methods: {
		moveNavLine(from, to) {
			const nav = this.$refs["top_nav"];
			const pageTo = this.pages.find((p) => p.name.toLowerCase() === to);
			const linkTo = this.$refs[`link_${pageTo.name.toLowerCase()}`][0].$el;
			const navLine = this.$refs["nav_line"];
			const left = linkTo.offsetLeft;
			const right = nav.clientWidth - (linkTo.offsetLeft + linkTo.clientWidth);

			if (from) {
				const pageFrom = this.pages.find((p) => p.name.toLowerCase() === from);

				if (pageTo.order < pageFrom.order) {
					this.navLineDirection = "left";
				} else {
					this.navLineDirection = "right";
				}
			}

			navLine.style.left = `${left}px`;
			navLine.style.right = `${right}px`;

			setTimeout(() => {
				this.navLineDirection = "none";
			}, 1000);
		},
		initNavLine() {
			if (this.currentPage) {
				this.moveNavLine("", this.currentPage);
			}
		},
	},
	mounted() {
		this.initNavLine();
		window.addEventListener("resize", this.initNavLine);
	},
	updated() {
		console.log(this.$q.dark.isActive);
		this.moveNavLine("", this.currentPage);
	},
	watch: {
		currentPage(to, from) {
			this.moveNavLine(from, to);
		},
	},
};
</script>

<style lang="scss" scoped>
body.body--dark {
	$linkColor: #fff;
	nav {
		a {
			color: $linkColor;
			&:after {
				display: none;
			}
		}
		.underline {
			border-color: $linkColor;
		}
	}
}

body.body--light {
	$linkColor: #004;
	nav {
		a {
			color: $linkColor;
		}
		.underline {
			border-color: $linkColor;
		}
	}
}

header {
	z-index: 100;
	position: fixed;
	width: 100%;
	top: 0;
	left: 0;
}

$padding: 1rem;

nav {
	position: fixed;
	bottom: 0;
	left: 0;
	padding-right: $padding;
	padding-bottom: $padding;
	z-index: 10;
	width: 100vw;
	background: #000;
	box-shadow: 0 0 20px #000;

	&:before {
		background: linear-gradient(to top, rgba(#000, 1) 0%, rgba(#000, 0) 100%);
		height: 30px;
		content: "";
		pointer-events: none;
		position: absolute;
		width: 100%;
		top: 0;
		left: 0;
		transform: translateY(-100%);
	}

	a {
		font-weight: bold;
		text-decoration: none;
		margin: 0 5px;
		padding: 0 10px;
	}

	.underline {
		border-bottom: 2px solid #fff;
		position: absolute;
		bottom: #{$padding * 0.7};
		width: auto;
	}

	&.line_moves_left {
		.underline {
			transition: left 0.3s ease-out 0s, right 0.3s ease-out 0.2s;
		}
	}

	&.line_moves_right {
		.underline {
			transition: left 0.3s ease-out 0.2s, right 0.3s ease-out 0s;
		}
	}
}

.themes {
	position: fixed;
	top: $padding;
	right: $padding;

	.fadeOut {
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
}

.theme_icon {
	height: 30px;
	width: 30px;
	cursor: pointer;
}
</style>
