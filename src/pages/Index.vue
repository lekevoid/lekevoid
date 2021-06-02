<template>
	<q-page>
		<!-- <div class="quote best_tools right">I never ask myself "Is this feasible?", only "What's the best tool available?"</div>
		<div class="quote challenge left">Woohoo, a challenge!</div> -->
		<div class="content">
			<div class="row">
				<div class="col-1"></div>
				<div class="col">
					<h1>Work</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus purus eu justo pharetra fermentum. Morbi blandit nisl
						pretium turpis condimentum, nec aliquam augue aliquet. Mauris venenatis sem a sapien scelerisque, et volutpat nibh condimentum. Nullam a
						pharetra dui. Morbi at metus diam. Curabitur velit ex, consequat vitae purus in, vulputate rutrum nisl. Vestibulum convallis id nunc et
						vehicula. Vivamus sollicitudin et lorem at tempus. Aliquam sed vehicula est, vitae ornare felis. Ut ac felis semper, pellentesque odio
						eget, egestas elit. Proin laoreet tellus tortor, vel euismod dolor ullamcorper vitae. Mauris dui magna, egestas pellentesque rutrum id,
						vehicula et felis. Praesent ac bibendum magna, eu pharetra mauris. Cras imperdiet faucibus ultrices. Suspendisse et nunc et nulla
						ultricies venenatis.
					</p>
					<p>
						Duis commodo vel nunc non ornare. Etiam ac scelerisque lacus, id sagittis nisi. Nullam aliquet elit enim, nec porta elit malesuada
						mollis. Vivamus vel elit sapien. Curabitur et volutpat massa. Nam vitae odio ut elit consequat mollis eu eu nisl. Nullam eget lorem id
						orci consequat dictum venenatis ac tortor. Sed maximus, erat vitae vestibulum condimentum, elit tortor bibendum tortor, egestas
						venenatis diam orci vel purus. In sit amet libero interdum dolor iaculis tempus at et nibh. Vivamus eu felis euismod, vehicula magna
						feugiat, vehicula dolor. Sed vel vestibulum ligula. Aliquam vulputate lectus nec urna consectetur, nec pretium turpis vestibulum. Mauris
						ut sem ac turpis pretium commodo vitae ac lacus. Maecenas fringilla est sit amet massa semper vulputate. Proin ullamcorper viverra
						ipsum, non vulputate lectus eleifend porttitor.
					</p>
					<h2>The tools</h2>
					<q-card class="q-pa-xl q-mb-xl">
						<div class="row items-center">
							<div class="col-6">
								<h3>Front-End</h3>
								<h4>Look your best</h4>
								<p>
									The face of your app is what everyone will see and interact with. It deserves to be not only beautiful and unique, but also
									intuitive and practical.
								</p>
							</div>
							<div class="col-6">
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
					<q-card class="q-pa-xl q-mb-xl">
						<div class="row items-center">
							<div class="col-6">
								<h3>Back-End and Content Management Systems</h3>
								<h4>Do what you want</h4>
								<p>What's better than a beautiful house? A beautiful house with solid foundations.</p>
								<p>
									I love Wordpress, yet I am not married to it. There are tons of frameworks and content management systems out there, created
									by brilliant people who sincerely want to make life easier for business owners, content writers and creative experts.
								</p>
								<p>I am intent on selling you on one solution: the one that will resonate with you.</p>
							</div>
							<div class="col-6">
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
					<Project id="broadsign" name="broadsign.com" />
					<Project id="gigi_retzo" name="GigiRetzo.com" />
					<Project id="bokkle" name="Bokkle" />
					<Project id="face_a_face" name="Face à Face" />
				</div>
				<div class="col-1"></div>
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
	methods: {},
	created() {
		setInterval(this.animateStars, 50);
	},
};
</script>

<style lang="scss">
body.body--dark {
	overflow-x: hidden;
	background: #111;
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

	h3 {
		margin-top: 16px;
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
