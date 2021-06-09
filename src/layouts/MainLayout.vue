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
.page_content {
	position: relative;
	max-width: 1600px;
	margin-right: auto;
	margin-left: auto;
}
</style>
