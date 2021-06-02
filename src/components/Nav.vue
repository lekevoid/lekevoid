<template>
	<div class="row">
		<div class="col-1"></div>
		<div class="col">
			<nav
				:class="['row items-center justify-end q-pt-lg q-pb-sm', `line_moves_${navLineDirection}`]"
				style="position: relative; z-index: 10"
				ref="top_nav"
			>
				<router-link dark v-for="(page, k) in pages" :to="{ name: page.name }" :key="k" :ref="`link_${page.name.toLowerCase()}`">
					{{ page.name }}
				</router-link>
				<div class="underline" ref="nav_line"></div>
			</nav>
		</div>
		<div class="col-1 flex flex-center q-pt-md">
			<q-img class="theme_icon dark" v-if="!$q.dark.isActive" :src="icon_mode_dark" @click="$q.dark.set(true)"><q-tooltip>Dark Mode</q-tooltip></q-img>
			<q-img class="theme_icon light" v-if="$q.dark.isActive" :src="icon_mode_light" @click="$q.dark.set(false)"><q-tooltip>Light Mode</q-tooltip></q-img>
		</div>
		<div class="col-1"></div>
	</div>
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
	methods: {
		moveNavLine(from, to) {
			const nav = this.$refs["top_nav"];
			const pageTo = this.pages.find((p) => p.name.toLowerCase() === to);
			const linkTo = this.$refs[`link_${pageTo.name.toLowerCase()}`][0].$el;
			const navLine = this.$refs["nav_line"];
			const left = linkTo.offsetLeft;
			const right = nav.clientWidth - (linkTo.offsetLeft + linkTo.clientWidth);
			// console.log(nav.clientWidth, linkTo.offsetLeft, linkTo.clientWidth);

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

nav {
	position: relative;

	a {
		font-weight: bold;
		text-decoration: none;
		margin: 0 5px;
		padding: 0 10px;
	}

	.underline {
		border-bottom: 2px solid #fff;
		position: absolute;
		bottom: 0;
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

.theme_icon {
	height: 30px;
	width: 30px;
	cursor: pointer;
}
</style>
