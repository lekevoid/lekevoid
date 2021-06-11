<template>
	<q-page>
		<Backgrounds />
		<div class="page_content row q-pa-xl">
			<div class="col">
				<h1>{{ $t("content_personal.who_am_i") }}</h1>
			</div>
			<div v-html="$t('content_personal.text')"></div>
		</div>
	</q-page>
</template>

<script>
import Backgrounds from "../components/PersonalBackgrounds.vue";

export default {
	name: "PagePersonal",
	components: { Backgrounds },
	data: () => ({}),
	created() {
		console.log(this.$i18n.messages.en);
	},
};
</script>

<style lang="scss" scoped>
body.body--dark {
	background: #000;
}

.q-page {
	min-height: 120vh;
	display: block;

	& > .row {
		z-index: 10;
		position: relative;
	}
}
</style>
