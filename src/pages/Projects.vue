<template>
	<q-page class="q-px-lg q-px-md-md">
		<div class="page_content row">
			<div class="col-md-2"></div>
			<div class="col">
				<div class="row what_i_did flex-center">
					<div class="col column no-wrap justify-center items-start text-left">
						<h2>Projects</h2>
						<Project id="broadsign" ref="project_broadsign">
							<div class="overline" v-scroll-fire="scaleFromRight"></div>
							<h3 class="title">
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
						<Project id="gigi_retzo" invert ref="project_gigi_retzo" name="project_gigi_retzo">
							<div class="overline" v-scroll-fire="scaleFromLeft"></div>
							<h3 class="title">
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
						<Project id="bokkle" hide-mobile ref="project_bokkle">
							<div class="overline" v-scroll-fire="scaleFromRight"></div>
							<h3 class="title">
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
	name: "PageProjects",
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
	}),
	computed: {
		logo_firebase() {
			return this.$q.dark.isActive ? logo_firebase_dark : logo_firebase_light;
		},
	},
	methods: {
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
		scrollToProject() {
			if (this.$route.params.project) {
				const project = `project_${this.$route.params.project}`;
				if (this.$refs[project]) {
					const target = this.$refs[project].$el;
					console.log(target);
					target.scrollIntoView({ behavior: "smooth" });
				}
			}
		},
	},
	created() {},
	mounted() {
		setTimeout(() => {
			this.scrollToProject();
		}, 300);
	},
};
</script>

<style lang="scss" scoped>
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
	padding-top: 100px;
}

.overline {
	width: 70vw;
	max-width: 500px;
	border-bottom: 3px solid $accent;
	transform: scaleX(0);
	position: absolute;
	top: 20px;
	left: 48px;
	transform-origin: left center;
	animation: scaleFromLeft 0.6s ease-out 0s 1 normal forwards running;
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
	.project {
		position: relative;
		padding-top: 60px;
	}

	.overline {
		top: -20px;

		&.from_left {
			left: 48px;
		}

		&.from_right {
			right: 0;
			transform-origin: right center;
			animation: scaleFromRight 0.6s ease-out 0s 1 normal forwards running;
		}
	}
}
</style>
