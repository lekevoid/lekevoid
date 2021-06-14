<template>
	<q-layout view="lHh Lpr lFf" :class="`page_${currentPage}`">
		<Nav :current-page="currentPage" :pages="pages" />
		<q-page-container>
			<transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" :duration="600">
				<router-view />
			</transition>
		</q-page-container>
		<!-- <Footer /> -->
	</q-layout>
</template>

<script>
import Nav from "../components/Nav.vue";
// import Footer from "../components/Footer.vue";

export default {
	name: "MainLayout",
	components: { Nav /* , Footer  */ },
	data: () => ({}),
	computed: {
		pages() {
			const routes = this.$router.options.routes[0].children;
			const out = routes.map((r) => ({ name: r.name, slug: r.meta.slug, showInNav: r.meta.showInNav, order: r.meta.navOrder }));
			return out;
		},
		currentPage() {
			return this.pages.find((p) => p.name === this.$route.name);
		},
	},
};
</script>

<style lang="scss">
.q-page {
	max-width: 100vw;
	overflow-x: hidden;
}

.page_content {
	position: relative;
	max-width: 1600px;
	margin-right: auto;
	margin-left: auto;
}
.q-page.animated.fadeOut {
	animation-duration: 0s;
	position: absolute;
}
</style>
