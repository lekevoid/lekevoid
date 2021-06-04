<template>
	<q-page>
		<Backgrounds />
		<div class="content">
			<div class="row">
				<div class="col-1"></div>
				<div class="col">
					<h1>So who am I&nbsp;?</h1>
					<p>Stay tuned to find out...</p>
				</div>
				<div class="col-1"></div>
			</div>
		</div>
	</q-page>
</template>

<script>
import Backgrounds from "../components/PersonalBackgrounds.vue";

import kevin_dark from "../assets/kevin_dark.jpg";

export default {
	name: "PagePersonal",
	components: { Backgrounds },
	data: () => ({
		kevin_dark: kevin_dark,
	}),
	created() {},
};
</script>

<style lang="scss" scoped>
body.body--dark {
	overflow-x: hidden;
	background: #000;
}

.content {
	position: relative;
	z-index: 10;
	padding-top: 6rem;
}
</style>
