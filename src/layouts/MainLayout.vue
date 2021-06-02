<template>
	<q-layout view="lHh Lpr lFf" :class="`page_${currentPage}`">
		<div class="row">
			<div class="col-1"></div>
			<div class="col">
				<nav
					:class="['row items-center justify-end q-pt-lg q-pb-sm', `line_moves_${navLineDirection}`]"
					style="position: relative; z-index: 10"
					ref="top_nav"
				>
					<router-link v-for="(page, k) in pages" :to="{ name: page.name }" :key="k" :ref="`link_${page.name.toLowerCase()}`">
						{{ page.name }}
					</router-link>
					<div class="underline" ref="nav_line"></div>
				</nav>
			</div>
			<div class="col-1"></div>
		</div>
		<q-page-container>
			<transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" appear :duration="1000">
				<router-view />
			</transition>
		</q-page-container>
	</q-layout>
</template>

<script>
export default {
	name: "MainLayout",
	// components: { EssentialLink },
	data: () => ({
		pages: [
			{ order: 1, name: "Work" },
			{ order: 2, name: "Personal" },
		],
		navLineDirection: "none",
	}),
	computed: {
		currentPage() {
			return this.$route.name.toLowerCase();
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

<style lang="scss">
.q-page-container {
	position: relative;
}

.animated {
	&.fadeIn {
	}
	&.fadeOut {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
	}
}

nav {
	position: relative;

	a {
		font-weight: bold;
		color: #fff;
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
</style>
