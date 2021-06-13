<template>
	<q-page class="q-px-lg">
		<div class="page_content row">
			<div class="col-md-2"></div>
			<div class="col">
				<div class="hero flex flex-center column no-wrap">
					<div class="me q-mb-xl">
						<q-img src="../img/kevin.webp" :ratio="1" contain />
					</div>
					<h1 class="flex column items-center q-mt-none">
						<span class="hi">{{ $t("hi") }}</span>
						<span class="kevin">Kevin.</span>
					</h1>
					<p>
						<q-btn color="purple" class="q-pl-lg" @click="console.log('hello')">
							<span class="wave"><span class="inner">👋</span></span>
							<span>{{ $t("hello_there") }}</span>
						</q-btn>
					</p>
				</div>
				<div class="row who_are_you flex-center">
					<div class="col column no-wrap justify-center items-start text-left">
						<div class="overline" v-scroll-fire="scaleFromLeft"></div>
						<h2>{{ $t("nice_to_meet_you") }}</h2>
						<p>Before we talk about me, may I ask who <i>you</i> are ?</p>
						<div :class="['row q-mt-lg items-start justify-center no-wrap q-gutter-x-lg', { has_current: user_is }]" style="width: 100%">
							<q-btn
								color="primary"
								size="lg"
								outline
								glossy
								:class="['btn_icon', { current: user_is === 'partner' }]"
								@click="user_is = 'partner'"
							>
								<span class="icon">🤝</span>
								<span class="label">Potential client/partner</span>
								<span class="cancel" @click="emptyUser($event)">&times;</span>
							</q-btn>
							<q-btn
								color="primary"
								size="lg"
								outline
								glossy
								:class="['btn_icon', { current: user_is === 'recruiter' }]"
								@click="user_is = 'recruiter'"
							>
								<span class="icon">🕵️‍♀️</span>
								<span class="label">HR/Recruiter</span>
								<span class="cancel" @click="emptyUser($event)">&times;</span>
							</q-btn>
							<q-btn color="primary" size="lg" outline glossy :class="['btn_icon', { current: user_is === 'dev' }]" @click="user_is = 'dev'">
								<span class="icon">🤓</span>
								<span class="label">A fellow dev</span>
								<span class="cancel" @click="emptyUser($event)">&times;</span>
							</q-btn>
							<q-btn
								color="primary"
								size="lg"
								outline
								glossy
								:class="['btn_icon', { current: user_is === 'visitor' }]"
								@click="user_is = 'visitor'"
							>
								<img src="../img/derp.svg" class="icon" />
								<span class="label">I'm just visiting...</span>
								<span class="cancel" @click="emptyUser($event)">&times;</span>
							</q-btn>
						</div>
					</div>
				</div>
				<div class="row">
					<transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" :duration="600">
						<div class="col" v-if="user_is === 'partner'"><h2>A potential partner ?</h2></div>
						<div class="col" v-if="user_is === 'recruiter'"><h2>A recuiter ?</h2></div>
						<div class="col" v-if="user_is === 'dev'"><h2>A fellow dev ?</h2></div>
						<div class="col" v-if="user_is === 'visitor'"><h2>A curious visitor ?</h2></div>
					</transition>
				</div>
				<!-- <div class="row what_i_do flex-center">
					<div class="col column no-wrap justify-center items-end text-right">
						<div class="overline" v-scroll-fire="scaleFromRight"></div>
						<h2>{{ $t("what_i_do") }}</h2>
						<p>I find <em>solutions</em> and <em>develop</em> them.</p>
						<p>
							My aim is to connect you with the solution that works for you and your business. This is why I avoid attaching myself to a
							particular language, framework or tool. What matters is what will help you.
						</p>
					</div>
				</div> -->
				<!-- <div class="row what_i_did flex-center">
					<div class="col column no-wrap justify-center items-start text-left">
						<div class="overline" v-scroll-fire="scaleFromLeft"></div>
						<h2>{{ $t("what_ive_done") }}</h2>
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
										icon="info"
										:to="{ name: 'SingleProject', params: { project: 'broadsign' } }"
										target="_blank"
										label="Details"
									/>
									<q-btn type="a" color="primary" icon="open_in_new" href="https://broadsign.com" target="_blank" :label="$t('view_live')" />
								</p>
							</template>
						</Project>
						<Project id="gigi_retzo" invert>
							<template #short>
								<h3 class="title q-mt-none">
									<a href="https://gigiretzo.com" target="_blank" rel="noreferrer noopener">{{ $t("projects.gigi_retzo.title") }}</a>
								</h3>
								<p>{{ $t("projects.gigi_retzo.short_desc") }}</p>
								<p class="ctas">
									<q-btn
										type="a"
										color="primary"
										class="q-mr-lg"
										icon="info"
										:to="{ name: 'SingleProject', params: { project: 'gigi_retzo' } }"
										target="_blank"
										:label="$t('details')"
									/>
									<q-btn type="a" color="primary" icon="open_in_new" href="https://gigiretzo.com" target="_blank" :label="$t('view_live')" />
								</p>
							</template>
						</Project>
						<Project id="bokkle" hide-mobile>
							<template #short>
								<h3 class="title q-mt-none">
									<a href="https://bokkle.web.app" target="_blank" rel="noreferrer noopener">{{ $t("projects.bokkle.title") }}</a>
								</h3>
								<p>{{ $t("projects.bokkle.short_desc") }}</p>
								<p class="ctas">
									<q-btn
										type="a"
										color="primary"
										class="q-mr-lg"
										icon="info"
										:to="{ name: 'SingleProject', params: { project: 'bokkle' } }"
										target="_blank"
										label="Details"
									/>
									<q-btn type="a" color="primary" icon="open_in_new" href="https://bokkle.web.app" target="_blank" :label="$t('view_live')" />
								</p>
							</template>
						</Project>
					</div>
				</div> -->
			</div>
			<div class="col-md-2"></div>
		</div>
	</q-page>
</template>

<script>
// import Project from "../components/Project.vue";

export default {
	name: "PageIndex",
	components: {
		/* Project */
	},
	data: () => ({
		user_is: false,
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
		emptyUser(event) {
			event.preventDefault();
			this.user_is = false;
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
	&.body--dark {
		.who_are_you {
			.btn_icon {
				img {
				}
			}
		}
	}
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

.who_are_you {
	.btn_icon {
		max-width: 50%;
		overflow: hidden;
		transition: max-width 0.6s ease-out 0s;
		max-height: 52px;

		.q-btn__content {
			white-space: nowrap;
			flex-flow: row nowrap;
		}

		.icon {
			margin-right: 0.4em;
			font-size: 1.4em;
		}

		img {
			height: 1em;
			width: 1em;
		}

		&:active,
		&:focus {
			box-shadow: 0 0 4px #fff;
		}

		.cancel {
			color: #f00;
			font-size: 0em;
			transition: font-size 0.6s, margin 0.6s;
			margin: 0;
			background-color: rgba(#000, 0.01);
		}

		&.current {
			pointer-events: none;

			.cancel {
				pointer-events: all;
				font-size: 3em;
				margin-left: 0.4em;
			}
		}
	}

	.has_current {
		.btn_icon {
			max-width: 0%;

			&.current {
				max-width: 100%;
			}
		}
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
