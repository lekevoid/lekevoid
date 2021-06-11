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
							<template #short>
								<h3 class="title q-mt-none">
									<a href="https://broadsign.com" target="_blank" rel="noreferrer noopener">Broadsign</a>
								</h3>
								<p>An international digital signage company.</p>
								<p class="ctas">
									<q-btn
										type="a"
										color="primary"
										class="q-mr-lg"
										icon="preview"
										:to="{ name: 'SingleProject', params: { project: 'broadsign' } }"
										target="_blank"
										label="Details"
									/>
									<q-btn type="a" color="primary" icon="preview" href="https://broadsign.com" target="_blank" label="View live !" />
								</p>
							</template>
						</Project>
						<Project id="gigi_retzo" invert>
							<template #short>
								<h3 class="title q-mt-none">
									<a href="https://gigiretzo.com" target="_blank" rel="noreferrer noopener">Gigi Retzo</a>
								</h3>
								<p>The website of a talented artist based in Montreal, Canada.</p>
								<p class="ctas">
									<q-btn
										type="a"
										color="primary"
										class="q-mr-lg"
										icon="preview"
										:to="{ name: 'SingleProject', params: { project: 'gigi_retzo' } }"
										target="_blank"
										label="Details"
									/>
									<q-btn type="a" color="primary" icon="preview" href="https://gigiretzo.com" target="_blank" label="View live !" />
								</p>
							</template>
						</Project>
						<Project id="bokkle" hide-mobile>
							<template #short>
								<h3 class="title q-mt-none">
									<a href="https://bokkle.web.app" target="_blank" rel="noreferrer noopener">Bokkle</a>
								</h3>
								<p>
									A homemade version of the popular game Boggle. Our family wanted to have a game that we could use at night while the young
									ones were sleeping.
								</p>
								<p class="ctas">
									<q-btn
										type="a"
										color="primary"
										class="q-mr-lg"
										icon="preview"
										:to="{ name: 'SingleProject', params: { project: 'bokkle' } }"
										target="_blank"
										label="Details"
									/>
									<q-btn type="a" color="primary" icon="preview" href="https://bokkle.web.app" target="_blank" label="View live !" />
								</p>
							</template>
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

export default {
	name: "PageIndex",
	components: { Project },
	data: () => ({
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
	border-bottom: 3px solid $accent;
	transform: scaleX(0);
	width: 50%;
	max-width: 500px;

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

@media (min-width: $breakpoint-md-min) {
	.hero {
		height: 90vh;
		margin-bottom: 10vh;
	}
}
</style>
