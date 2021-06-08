<template>
	<div :class="['screenshots', `current_${current}`]" @click="nextScreenshot()">
		<Screenshots :list="screenshots" />
		<div class="desktop">
			<q-img v-for="(img, k) in list.desktop" :src="img" :key="`ss_d_${k}`" :class="[{ current: current === k }]" />
		</div>
		<div class="mobile">
			<q-img v-for="(img, k) in list.mobile" :src="img" :key="`ss_d_${k}`" :class="[{ current: current === k }]" />
		</div>
		<pre>{{ list }}</pre>
	</div>
</template>

<script>
export default {
	name: "ProjectScreenshots",
	data: () => ({
		current: 1,
	}),
	props: {
		list: {
			type: Object,
			required: true,
		},
	},
};
</script>
