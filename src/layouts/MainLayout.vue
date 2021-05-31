<template>
	<q-layout view="lHh Lpr lFf" :class="`page_${globalClass}`">
		<nav class="row items-center justify-end q-px-xl q-py-lg" style="position: relative; z-index: 10">
			<router-link :to="{ name: 'Work' }">Work</router-link>
			<router-link :to="{ name: 'Personal' }">Personal</router-link>
			<div class="underline"></div>
		</nav>
		<!-- <q-header elevated>
			<q-toolbar>
				<q-btn flat dense round icon="menu" aria-label="Menu" @click="leftDrawerOpen = !leftDrawerOpen" />

				<q-toolbar-title> Quasar App </q-toolbar-title>

				<div>Quasar v{{ $q.version }}</div>
			</q-toolbar>
		</q-header>

		<q-drawer v-model="leftDrawerOpen" show-if-above bordered content-class="bg-grey-1">
			<q-list>
				<q-item-label header class="text-grey-8"> Essential Links </q-item-label>
				<EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
			</q-list>
		</q-drawer> -->

		<q-page-container>
			<transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" appear :duration="1000">
				<router-view />
			</transition>
		</q-page-container>
	</q-layout>
</template>

<script>
export default {
	name: "MainLayout",
	// components: { EssentialLink },
	data: () => ({}),
	computed: {
		globalClass() {
			return this.$route.name.toLowerCase();
		},
	},
	watch: {
		globalClass(val) {
			console.log(val);
		},
	},
};
</script>

<style lang="scss">
.q-page-container {
	position: relative;
}

.animated {
	&.fadeIn {
	}
	&.fadeOut {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
	}
}
</style>
