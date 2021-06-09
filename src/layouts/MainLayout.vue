<template>
	<q-layout view="lHh Lpr lFf" :class="`page_${currentPage}`">
		<Nav :current-page="currentPage" :pages="pages" />
		<q-page-container>
			<transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" :duration="300">
				<router-view />
			</transition>
		</q-page-container>
	</q-layout>
</template>

<script>
import Nav from "../components/Nav.vue";

export default {
	name: "MainLayout",
	components: { Nav },
	data: () => ({
		pages: [
			{ order: 1, name: "Work" },
			{ order: 2, name: "Personal" },
		],
	}),
	computed: {
		currentPage() {
			return this.$route.name.toLowerCase();
		},
	},
};
</script>

<style lang="scss">
.q-page-container {
	position: relative;
	max-width: 1600px;
	margin-right: auto;
	margin-left: auto;
}

.q-page {
	overflow-x: hidden;
}

.animated {
	&.fadeIn {
	}

	/* &.fadeOut {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
	} */
}
</style>
