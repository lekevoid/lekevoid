<template>
	<q-page>
		<div class="bg sky"><img :src="bg_sky" /></div>
		<div class="bg ocean"><img :src="bg_ocean" /></div>
		<div class="content">
			<div class="row">
				<div class="col-1"></div>
				<div class="col">
					<h1>Work</h1>
					<h2>The tools</h2>
					<q-card class="q-pa-xl q-mb-xl">
						<div class="row items-center">
							<div class="col-4"><h3>HTML/CSS</h3></div>
							<div class="col-8">
								<div class="flex flex-center">
									<q-avatar>
										<img :src="logo_html" />
									</q-avatar>
									<q-avatar>
										<img :src="logo_css" />
									</q-avatar>
								</div>
							</div>
						</div>
					</q-card>
					<q-card class="q-pa-xl q-mb-xl">
						<div class="row items-center">
							<div class="col-4"><h3>JS</h3></div>
							<div class="col-8">
								<div class="flex flex-center">
									<q-avatar>
										<img :src="logo_vue" />
									</q-avatar>
									<q-avatar>
										<img :src="logo_react" />
									</q-avatar>
								</div>
							</div>
						</div>
					</q-card>
					<q-card class="q-pa-xl q-mb-xl">
						<div class="row items-center">
							<div class="col-4"><h3>PHP</h3></div>
							<div class="col-8">
								<div class="flex flex-center">
									<q-avatar>
										<img :src="logo_php" />
									</q-avatar>
								</div>
							</div>
						</div>
					</q-card>
				</div>
				<div class="col-1"></div>
			</div>
		</div>
	</q-page>
</template>

<script>
import bg_sky from "../assets/bg_night_sky.jpg";
import bg_ocean from "../assets/bg_ocean_depths.jpg";

import logo_html from "../assets/logo_html.png";
import logo_css from "../assets/logo_css.png";
import logo_vue from "../assets/logo_vue.svg";
import logo_react from "../assets/logo_react.svg";
import logo_php from "../assets/logo_php.svg";

export default {
	name: "PageIndex",
	data: () => ({
		bg_sky: bg_sky,
		bg_ocean: bg_ocean,
		logo_html: logo_html,
		logo_css: logo_css,
		logo_vue: logo_vue,
		logo_react: logo_react,
		logo_php: logo_php,
	}),
};
</script>

<style lang="scss">
body {
	overflow-x: hidden;
	background-color: #000;
}

.bg {
	overflow: hidden;
	position: absolute;
	left: 0;
	height: auto;
	width: 100vw;
	z-index: 1;
	opacity: 0.6;

	&.sky {
		top: -15%;
		z-index: 2;
	}

	&.ocean {
		z-index: 1;
		bottom: 0;
	}
}

.content {
	position: relative;
	z-index: 10;
}

.q-card {
	background: radial-gradient(circle, rgba(#fff, 0.1) 0%, rgba(#fff, 0.4) 100%);
	box-shadow: 0 0 20px inset #fff;

	.row {
		z-index: 10;
	}

	&:after {
		z-index: 1;
		background-color: #fff;
		opacity: 0;
		transition: opacity 0.3s;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		content: "";
	}

	&:hover {
		&:after {
			opacity: 0.2;
		}
	}
}
</style>
