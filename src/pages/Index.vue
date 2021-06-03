<template>
	<q-page>
		<div class="bg_stars" ref="bg_stars"></div>
		<div class="bg_galaxy flex flex-center">
			<video autoplay loop muted ref="galaxy">
				<source src="../assets/galaxy_rotating_hd.mp4" type="video/mp4" />
				<source src="../assets/galaxy_rotating_md.mp4" type="video/mp4" />
				<source src="../assets/galaxy_rotating_sd.mp4" type="video/mp4" />
				<img src="../assets/galaxy_static.jpg" />
			</video>
		</div>
		<div class="content">
			<div class="row">
				<div class="col">
					<div class="hero flex flex-center column">
						<h1 class="flex column items-center q-mt-none">
							<span class="hi">Hi, I'm</span>
							<span class="kevin">Kevin.</span>
						</h1>
						<p>
							<q-btn color="purple" class="q-pl-lg">
								<span class="wave"><span class="inner">👋</span></span>
								<span>Well hello there !</span>
							</q-btn>
						</p>
					</div>
					<q-card class="q-pb-xl q-pa-sm-xl">
						<div class="row items-center">
							<div class="col-12 col-md-6">
								<h3>Front-End</h3>
								<h4>Look your best</h4>
								<p>
									The face of your app is what everyone will see and interact with. It deserves to be not only beautiful and unique, but also
									intuitive and practical.
								</p>
							</div>
							<div class="col-12 col-md-6">
								<div class="row items-center justify-center q-mb-lg">
									<q-img class="icon_tech" :src="logo_html" spinner-color="white" contain><q-tooltip>HTML 5</q-tooltip></q-img>
									<q-img class="icon_tech" :src="logo_css" spinner-color="white" contain><q-tooltip>CSS 3</q-tooltip></q-img>
									<q-img class="icon_tech" :src="logo_sass" spinner-color="white" contain><q-tooltip>SASS</q-tooltip></q-img>
								</div>
								<div class="row items-center justify-center q-mb-lg">
									<q-img class="icon_tech" :src="logo_vue" spinner-color="white" contain><q-tooltip>Vue</q-tooltip></q-img>
									<q-img class="icon_tech" :src="logo_react" spinner-color="white" contain><q-tooltip>React</q-tooltip></q-img>
									<q-img class="icon_tech" :src="logo_svelte" spinner-color="white" contain><q-tooltip>Svelte</q-tooltip></q-img>
								</div>
								<div class="row items-center justify-center">
									<q-img class="icon_tech" :src="logo_gatsby" spinner-color="white" contain><q-tooltip>Gatsby</q-tooltip></q-img>
								</div>
							</div>
						</div>
					</q-card>
					<q-card class="q-pb-xl q-pa-sm-xl">
						<div class="row items-center">
							<div class="col-12 col-md-6">
								<h3>Back-End and Content Management Systems</h3>
								<h4>Do what you want</h4>
								<p>What's better than a beautiful house? A beautiful house with solid foundations.</p>
								<p>
									I love Wordpress, yet I am not married to it. There are tons of frameworks and content management systems out there, created
									by brilliant people who sincerely want to make life easier for business owners, content writers and creative experts.
								</p>
								<p>I am intent on selling you on one solution: the one that will resonate with you.</p>
							</div>
							<div class="col-12 col-md-6">
								<div class="row items-center justify-center q-mb-lg">
									<q-img class="icon_tech" :src="logo_laravel" spinner-color="white" contain><q-tooltip>Laravel</q-tooltip></q-img>
								</div>
								<div class="row items-center justify-center q-mb-lg">
									<q-img class="icon_tech" :src="logo_agility" spinner-color="white" contain><q-tooltip>Agility CMS</q-tooltip></q-img>
									<q-img class="icon_tech" :src="logo_netlify_cms" spinner-color="white" contain><q-tooltip>Netlify CMS</q-tooltip></q-img>
									<q-img class="icon_tech" :src="logo_prismic" spinner-color="white" contain><q-tooltip>Prismic</q-tooltip></q-img>
									<q-img class="icon_tech" :src="logo_wordpress" spinner-color="white" contain><q-tooltip>Wordpress</q-tooltip></q-img>
								</div>
							</div>
						</div>
					</q-card>
					<h2>Projects</h2>
					<Project id="broadsign">
						<h3 class="title q-mt-md-none">broadsign.com</h3>
						<p></p>
					</Project>
					<Project id="gigi_retzo">
						<h3 class="title q-mt-md-none">
							<a href="https://gigiretzo.com" target="_blank" rel="noreferrer noopener">Gigi Retzo</a>
						</h3>
						<p>
							<a href="https://gigiretzo.com" target="_blank" rel="noreferrer noopener">gigiretzo.com</a>
						</p>
						<p>The website of a talented artist based in Montreal, Canada.</p>
						<h5 class="q-mb-sm">Features :</h5>
						<ul>
							<li>Full e-commerce allowing them to process orders and payments for their work</li>
							<li>
								CMS allows them to edit their portfolio, resume and vital information, and keep their visitors informed of their whereabouts
							</li>
						</ul>
						<div class="techs row items-center">
							<h5 class="q-mr-sm">Technologies used :</h5>
							<q-img :src="logo_wordpress" contain />
						</div>
					</Project>
					<Project id="bokkle">
						<h3 class="title q-mt-md-none">
							<a href="https://bokkle.web.app" target="_blank" rel="noreferrer noopener">Bokkle</a>
						</h3>
						<p>
							<a href="https://bokkle.web.app" target="_blank" rel="noreferrer noopener">bokkle.web.app</a>
						</p>
						<p>
							A homemade version of the popular game Boggle. Our family wanted to have a game that we could use at night while the young ones were
							sleeping.
						</p>
						<h5 class="q-mb-sm">Features :</h5>
						<ul>
							<li>PWA capability : install as an app on your device and play offline</li>
							<li>Customizable grid size and timer length</li>
							<li>Dictionary UI connected to the Merriam-Webster API to validate words</li>
							<li>Create a game and play remotely with friends !</li>
						</ul>
						<div class="techs row items-center">
							<h5 class="q-mr-sm">Technologies used :</h5>
							<q-img :src="logo_vue" contain />
						</div>
					</Project>
					<Project id="face_a_face">
						<h3 class="title q-mt-md-none">Face à Face</h3>
						<p></p>
					</Project>
				</div>
			</div>
		</div>
	</q-page>
</template>

<script>
import Project from "../components/WorkProjectCarousel.vue";

import logo_html from "../assets/logo_html.svg";
import logo_css from "../assets/logo_css.svg";
import logo_sass from "../assets/logo_sass.svg";
import logo_vue from "../assets/logo_vue.svg";
import logo_react from "../assets/logo_react.svg";
import logo_svelte from "../assets/logo_svelte.svg";
import logo_gatsby from "../assets/logo_gatsby.svg";

import logo_php from "../assets/logo_php.svg";
import logo_laravel from "../assets/logo_laravel.svg";
import logo_agility from "../assets/logo_agility.svg";
import logo_netlify_cms from "../assets/logo_netlify_cms.svg";
import logo_prismic from "../assets/logo_prismic.svg";
import logo_wordpress from "../assets/logo_wordpress.svg";

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
	}),
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
				this.$refs["bg_stars"].style.backgroundPositionY = `${this.getScrollPercent() * 4}%`;
			}
		},
	},
	created() {},
	mounted() {
		var playPromise = this.$refs["galaxy"].play();

		if (playPromise !== undefined) {
			playPromise.then((_) => {}).catch((e) => {});
		}

		window.addEventListener("scroll", this.adjustStarsPosition);
	},
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

body {
	transition: background-color 1s;
}

body.body--dark,
body.body--light {
	overflow-x: hidden;
}

.bg_stars {
	z-index: 1;
	position: fixed;
	height: 100vh;
	width: 100vw;
	overflow: hidden;
	left: 0;
	top: 0;
	background: #000 url("../assets/bg_stars.png");

	img {
	}
}

.bg_galaxy {
	height: 100vh;
	width: auto;
	position: absolute;
	top: 0;
	left: 50%;
	z-index: 2;
	transform: translateX(-50%);

	video {
		height: 100vh;
		width: 200vh;
		max-width: 1920px;
		opacity: 0.3;
		left: 0;
	}
}

.hero {
	height: 100vh;

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

.quote {
	font-family: "monotype corsiva";
	color: #fff;
	position: absolute;
	right: 0;
	z-index: 5;
	max-width: 50%;
	font-size: 3vw;
	opacity: 0.2;
	filter: blur(2px);

	&.best_tools {
		top: 12vw;
	}

	&.challenge {
		top: 50vw;
	}

	&.left {
		left: 2%;
		text-align: left;
	}

	&.right {
		right: 2%;
		text-align: right;
	}
}

.content {
	position: relative;
	z-index: 10;
}

.q-card {
	/* background: radial-gradient(circle, rgba(#fff, 0.1) 0%, rgba(#fff, 0.4) 100%);
	box-shadow: 0 0 20px inset #fff;
	border-radius: 20px;
	backdrop-filter: blur(2px);
	overflow: hidden; */
	/* background: linear-gradient(to bottom, rgba(#fff, 0) 0%, rgba(#fff, 0.2) 100%); */
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
	filter: drop-shadow(-1px -1px 1px rgba(#ddf, 0.5)) drop-shadow(2px 2px 1px rgba(#005, 1));
	height: 100px;
	width: 100px;
	margin: 0 20px;
}
</style>
