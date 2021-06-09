<template>
	<q-page class="q-px-lg q-px-md-md">
		<div class="page_content row">
			<div class="col-md-2"></div>
			<div class="col">
				<div class="hero flex flex-center column no-wrap">
					<div class="me q-mb-xl">
						<q-img src="../img/kevin.webp" :ratio="1" contain />
					</div>
					<h1 class="flex column items-center q-mt-none">
						<span class="hi">Hi, I'm</span>
						<span class="kevin">Kevin.</span>
					</h1>
					<p v-if="hello">😉 Nice to meet you !</p>
					<p v-else>
						<q-btn color="purple" class="q-pl-lg" @click="hello = true">
							<span class="wave"><span class="inner">👋</span></span>
							<span>Well hello there !</span>
						</q-btn>
					</p>
				</div>
				<div class="row what_i_do flex-center">
					<div class="col column no-wrap justify-center items-end text-right">
						<div class="overline" v-scroll-fire="scaleFromRight"></div>
						<h2>What I do</h2>
						<p>I find <em>solutions</em> and <em>develop</em> them.</p>
						<p>
							My aim is to connect you with the solution that works for you and your business. This is why I avoid attaching myself to a
							particular language, framework or tool. What matters is what will help you.
						</p>
					</div>
				</div>
				<div class="row what_i_did flex-center">
					<div class="col column no-wrap justify-center items-start text-left">
						<div class="overline" v-scroll-fire="scaleFromLeft"></div>
						<h2>What I did</h2>
						<Project id="broadsign">
							<h3 class="title q-mt-none">
								<a href="https://broadsign.com" target="_blank" rel="noreferrer noopener">Broadsign</a>
							</h3>
							<p>An international digital signage company.</p>
							<h5 class="q-mb-sm">Features :</h5>
							<ul>
								<li>All the things</li>
							</ul>
							<div class="techs row items-center q-mb-lg">
								<h5 class="text-no-wrap q-my-md q-mr-md">Technologies used :</h5>
								<div class="techs_list col-12 col-md-auto">
									<q-img :src="logo_react" class="icon_tech" contain>
										<q-tooltip>React</q-tooltip>
									</q-img>
									<q-img :src="logo_gatsby" class="icon_tech" contain>
										<q-tooltip>GatsbyJS</q-tooltip>
									</q-img>
									<q-img :src="logo_wordpress" class="icon_tech" contain>
										<q-tooltip>Wordpress</q-tooltip>
									</q-img>
								</div>
							</div>
							<p>
								<q-btn type="a" color="primary" icon="preview" href="https://broadsign.com" target="_blank" label="View live !" />
							</p>
						</Project>
						<Project id="gigi_retzo" invert>
							<h3 class="title q-mt-none">
								<a href="https://gigiretzo.com" target="_blank" rel="noreferrer noopener">Gigi Retzo</a>
							</h3>
							<p>The website of a talented artist based in Montreal, Canada.</p>
							<h5 class="q-mb-sm">Features :</h5>
							<ul>
								<li>Full e-commerce allowing them to process orders and payments for their work</li>
								<li>
									CMS allows them to edit their portfolio, resume and vital information, and keep their visitors informed of their whereabouts
								</li>
							</ul>
							<div class="techs row items-center q-mb-lg">
								<h5 class="text-no-wrap q-my-md q-mr-md">Technologies used :</h5>
								<div class="techs_list col-12 col-md-auto">
									<q-img :src="logo_wordpress" class="icon_tech" contain>
										<q-tooltip>Wordpress</q-tooltip>
									</q-img>
									<q-img :src="logo_woocommerce" class="icon_tech" contain>
										<q-tooltip>Woocommerce</q-tooltip>
									</q-img>
								</div>
							</div>
							<p>
								<q-btn type="a" color="primary" icon="preview" href="https://gigiretzo.com" target="_blank" label="View live !" />
							</p>
						</Project>
						<Project id="bokkle" hide-mobile>
							<h3 class="title q-mt-none">
								<a href="https://bokkle.web.app" target="_blank" rel="noreferrer noopener">Bokkle</a>
							</h3>
							<p>
								A homemade version of the popular game Boggle. Our family wanted to have a game that we could use at night while the young ones
								were sleeping.
							</p>
							<h5 class="q-mb-sm">Features :</h5>
							<ul>
								<li>PWA capability : install as an app on your device and play offline</li>
								<li>Customizable grid size and timer length</li>
								<li>Dictionary UI connected to the Merriam-Webster API to validate words</li>
								<li>Create a game and play remotely with friends !</li>
							</ul>
							<div class="techs row items-center q-mb-lg">
								<h5 class="text-no-wrap q-my-md q-mr-md">Technologies used :</h5>
								<div class="techs_list col-12 col-md-auto">
									<q-img :src="logo_vue" class="icon_tech" contain>
										<q-tooltip>Vue</q-tooltip>
									</q-img>
									<q-img :src="logo_firebase" class="icon_tech wide" contain>
										<q-tooltip>Firebase</q-tooltip>
									</q-img>
								</div>
							</div>
							<p>
								<q-btn type="a" color="primary" icon="preview" href="https://bokkle.web.app" target="_blank" label="View live !" />
							</p>
						</Project>
					</div>
				</div>
			</div>
			<div class="col-md-2"></div>
		</div>
	</q-page>
</template>

<script>
import Project from "../components/Project.vue";

import logo_agility from "../img/logos/agility.svg";
import logo_css from "../img/logos/css.svg";
import logo_firebase_dark from "../img/logos/firebase_dark.svg";
import logo_firebase_light from "../img/logos/firebase_light.svg";
import logo_gatsby from "../img/logos/gatsby.svg";
import logo_html from "../img/logos/html.svg";
import logo_laravel from "../img/logos/laravel.svg";
import logo_php from "../img/logos/php.svg";
import logo_netlify_cms from "../img/logos/netlify_cms.svg";
import logo_prismic from "../img/logos/prismic.svg";
import logo_react from "../img/logos/react.svg";
import logo_sass from "../img/logos/sass.svg";
import logo_svelte from "../img/logos/svelte.svg";
import logo_vue from "../img/logos/vue.svg";
import logo_wordpress from "../img/logos/wordpress.svg";
import logo_woocommerce from "../img/logos/woocommerce.svg";

export default {
	name: "PageIndex",
	components: { Project },
	data: () => ({
		logo_html: logo_html,
		logo_css: logo_css,
		logo_sass: logo_sass,
		logo_vue: logo_vue,
		logo_react: logo_react,
		logo_svelte: logo_svelte,
		logo_gatsby: logo_gatsby,
		logo_php: logo_php,
		logo_laravel: logo_laravel,
		logo_agility: logo_agility,
		logo_netlify_cms: logo_netlify_cms,
		logo_prismic: logo_prismic,
		logo_wordpress: logo_wordpress,
		logo_woocommerce: logo_woocommerce,

		hello: false,
	}),
	computed: {
		logo_firebase() {
			return this.$q.dark.isActive ? logo_firebase_dark : logo_firebase_light;
		},
	},
	methods: {
		getScrollPercent() {
			let h = document.documentElement,
				b = document.body,
				st = "scrollTop",
				sh = "scrollHeight";
			return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
		},
		adjustStarsPosition() {
			if (this.$refs["bg_stars"]) {
				this.$refs["bg_stars"].style.backgroundPositionY = `${this.getScrollPercent() * 2}%`;
			}
		},
		scaleFromLeft(el) {
			if (el) {
				el.classList.add("from_left");
			}
		},
		scaleFromRight(el) {
			if (el) {
				el.classList.add("from_right");
			}
		},
	},
	created() {},
	mounted() {},
};
</script>

<style lang="scss">
@keyframes wave {
	0% {
		transform: rotate(8deg);
	}
	50% {
		transform: rotate(-8deg);
	}
	100% {
		transform: rotate(8deg);
	}
}

@keyframes scaleFromLeft {
	0% {
		transform: scaleX(0);
	}

	100% {
		transform: scaleX(1);
	}
}

@keyframes scaleFromRight {
	0% {
		transform: scaleX(0);
	}
	100% {
		transform: scaleX(1);
	}
}

body {
	transition: background-color 1s;
}

.q-page {
	padding-bottom: 100px;

	&.fadeOut {
		.hero {
			opacity: 0;
		}
	}
}

.hero {
	height: 80vh;
	margin-bottom: 20vh;

	.me {
		border: 2px ridge #fff;
		max-height: 400px;
		max-width: 400px;
		height: 50vmin;
		flex: 0 0 50vmin;
		width: 50vmin;
		border-radius: 400px;
		overflow: hidden;
	}

	.hi {
		font-size: 0.6em;
		line-height: 100%;
	}

	.q-btn {
		position: relative;
	}

	.wave {
		font-size: 300%;
		position: absolute;
		left: 0;
		top: 0;
		transform: translate(-50%, -20%);

		.inner {
			transform-origin: right bottom;
			position: relative;
			animation: wave 1s ease-in-out 0s infinite;
			display: block;
		}
	}
}

.overline {
	width: 30%;
	border-bottom: 3px solid $accent;
	transform: scaleX(0);

	&.from_left {
		transform-origin: left center;
		animation: scaleFromLeft 0.6s ease-out 0s 1 normal forwards running;
	}

	&.from_right {
		transform-origin: right center;
		animation: scaleFromRight 0.6s ease-out 0s 1 normal forwards running;
	}
}

.what_i_do {
	min-height: 100vh;
}

.q-card {
	background: radial-gradient(ellipse at bottom, rgba(#ddf, 0.4) 0%, rgba(#fff, 0) 75%);
	border-radius: 20px;
	overflow: hidden;
	text-shadow: 1px 1px 1px #000, 1px 1px 1px #000, 1px 1px 1px #000, 1px 1px 1px #000;

	.row {
		z-index: 10;
		position: relative;
	}

	&:before {
		z-index: 1;
		background-color: rgba(#fff, 0.1);
		box-shadow: 0 0 30px inset rgba(#fff, 0.2);
		opacity: 0;
		backdrop-filter: blur(4px);
		transition: opacity 0.6s;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		content: "";
	}

	&:hover {
		&:before {
			opacity: 1;
		}
	}
}

.icon_tech {
	height: 50px;
	width: 60px;
	margin: 0 8px;

	&.wide {
		width: 80px;
	}
}

@media (min-width: $breakpoint-md-min) {
	.hero {
		height: 90vh;
		margin-bottom: 10vh;
	}
}
</style>
