<template>
	<q-page>
		<Backgrounds />
		<div class="row q-pa-xl">
			<div class="col">
				<h1>So who am I&nbsp;?</h1>
				<p>Stay tuned to find out...</p>
			</div>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed mauris diam. Nam bibendum finibus ante, bibendum dignissim lectus. In ut dictum
				arcu. Nam ac euismod augue, et aliquam libero. Quisque cursus arcu in tellus tempus, id aliquam velit elementum. Donec a dictum nunc. Curabitur
				dictum suscipit mauris, vitae tempor ante volutpat a. Aenean aliquet hendrerit dolor, vel laoreet felis maximus dapibus.
			</p>

			<p>
				Ut varius lectus at semper rhoncus. Vestibulum sem ante, varius eget odio vel, consectetur dapibus diam. Etiam quis varius nisl, a tristique
				nunc. Praesent a aliquam erat. Nulla facilisi. Morbi porta id sem id dictum. Fusce mattis metus quis felis maximus iaculis. Morbi nec semper
				arcu.
			</p>

			<p>
				Pellentesque in convallis dolor, in mattis odio. Donec orci neque, facilisis vel sapien in, bibendum molestie risus. Nulla nisl elit, porttitor
				non bibendum ac, fermentum non nunc. Proin diam eros, mattis id mollis in, faucibus posuere mi. Vivamus magna ex, volutpat a velit non, congue
				accumsan urna. Mauris faucibus, libero nec eleifend tristique, nisi ex consequat nisl, vel tempor lacus orci eget felis. Aenean nibh dui,
				eleifend ac elementum vel, ullamcorper at urna. Morbi quis sem at metus sodales dapibus id nec elit. Pellentesque eros metus, fermentum ac
				vehicula eget, maximus sit amet dui. In id massa erat. Nulla viverra pharetra sem, ac bibendum metus consequat ut. Aliquam tincidunt venenatis
				ex, molestie tincidunt ante aliquam id. Mauris a sem a neque pellentesque gravida accumsan in libero.
			</p>

			<p>
				Sed laoreet eros vel magna rutrum porttitor. Donec tempus ac magna sed dignissim. Aenean vel leo et dui mollis ullamcorper at non nibh. Quisque
				blandit purus ac efficitur facilisis. Fusce pellentesque odio in massa ultricies venenatis. Nunc ullamcorper est quis nulla luctus, quis
				fringilla quam aliquam. Cras mattis sapien ipsum, ac blandit mauris molestie in. Fusce faucibus venenatis accumsan. Pellentesque commodo urna in
				est porta maximus. Quisque tortor orci, varius ac mauris quis, ullamcorper convallis est. Curabitur at diam est. Quisque laoreet turpis eget
				dolor commodo, id vestibulum lectus vulputate. Praesent vitae erat sapien. Sed non metus sit amet erat mattis luctus id et nulla. Donec vitae
				eleifend leo. Sed vitae velit vel neque consectetur aliquam.
			</p>

			<p>
				Donec consequat ex vitae sodales pellentesque. Mauris feugiat dolor id metus semper, sit amet venenatis odio aliquam. In sollicitudin libero
				nisl, eget tincidunt felis porttitor nec. Nullam tincidunt dolor fermentum, faucibus metus id, accumsan nisl. Fusce leo nunc, laoreet et mauris
				facilisis, pellentesque porta lectus. Mauris nec lacus faucibus, gravida elit vel, aliquam massa. Etiam eget facilisis dui. Fusce tristique,
				diam at auctor viverra, urna nunc vestibulum diam, non feugiat elit nulla ut lorem. Suspendisse sollicitudin posuere dui, a laoreet libero
				laoreet et. Mauris ultricies tempor diam quis lacinia. Suspendisse sapien tellus, interdum sed dolor nec, pharetra volutpat ante.
			</p>
		</div>
	</q-page>
</template>

<script>
import Backgrounds from "../components/PersonalBackgrounds.vue";

import kevin_dark from "../img/kevin_dark.jpg";

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

.q-page {
	min-height: 120vh;
	display: block;

	& > .row {
		z-index: 10;
		position: relative;
	}
}
</style>
