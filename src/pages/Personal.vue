<template>
	<q-page>
		<div class="row">
			<div class="col-1"></div>
			<div class="col">
				<h1>I'm Kevin</h1>
				<h2>...and I find solutions</h2>
				<div class="row">
					<div class="col-4">
						<q-img :src="kevin_dark" />
					</div>
					<div class="col-1"></div>
					<div class="col-7">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus purus eu justo pharetra fermentum. Morbi blandit nisl
							pretium turpis condimentum, nec aliquam augue aliquet. Mauris venenatis sem a sapien scelerisque, et volutpat nibh condimentum.
							Nullam a pharetra dui. Morbi at metus diam. Curabitur velit ex, consequat vitae purus in, vulputate rutrum nisl. Vestibulum
							convallis id nunc et vehicula. Vivamus sollicitudin et lorem at tempus. Aliquam sed vehicula est, vitae ornare felis. Ut ac felis
							semper, pellentesque odio eget, egestas elit. Proin laoreet tellus tortor, vel euismod dolor ullamcorper vitae. Mauris dui magna,
							egestas pellentesque rutrum id, vehicula et felis. Praesent ac bibendum magna, eu pharetra mauris. Cras imperdiet faucibus ultrices.
							Suspendisse et nunc et nulla ultricies venenatis.
						</p>
						<p>
							Duis commodo vel nunc non ornare. Etiam ac scelerisque lacus, id sagittis nisi. Nullam aliquet elit enim, nec porta elit malesuada
							mollis. Vivamus vel elit sapien. Curabitur et volutpat massa. Nam vitae odio ut elit consequat mollis eu eu nisl. Nullam eget lorem
							id orci consequat dictum venenatis ac tortor. Sed maximus, erat vitae vestibulum condimentum, elit tortor bibendum tortor, egestas
							venenatis diam orci vel purus. In sit amet libero interdum dolor iaculis tempus at et nibh. Vivamus eu felis euismod, vehicula magna
							feugiat, vehicula dolor. Sed vel vestibulum ligula. Aliquam vulputate lectus nec urna consectetur, nec pretium turpis vestibulum.
							Mauris ut sem ac turpis pretium commodo vitae ac lacus. Maecenas fringilla est sit amet massa semper vulputate. Proin ullamcorper
							viverra ipsum, non vulputate lectus eleifend porttitor.
						</p>
						<p>
							In hac habitasse platea dictumst. Praesent sed nisl nunc. Aenean fringilla dolor eget lobortis cursus. Etiam at fermentum erat, at
							sagittis nunc. Vestibulum malesuada sem sed felis interdum, sit amet volutpat dolor suscipit. Pellentesque fermentum metus id felis
							accumsan, et feugiat metus varius. Fusce mattis nibh sed placerat faucibus. Duis molestie dolor justo, in lacinia orci dignissim in.
							Nunc in feugiat quam.
						</p>
						<p>
							Praesent vitae odio risus. Quisque vehicula, justo commodo consequat venenatis, neque sem fringilla turpis, sit amet sodales purus
							magna et orci. Morbi quis dictum lectus. Pellentesque rutrum, augue quis lacinia tristique, mi ligula vestibulum dui, in
							pellentesque purus nunc nec lectus. Ut ac pharetra quam, et scelerisque velit. Donec vel tristique orci, in ullamcorper diam. Sed
							arcu risus, porttitor ornare pulvinar at, suscipit at purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
							posuere cubilia curae; Vestibulum quis luctus turpis. Nam ut velit suscipit, varius magna eu, sagittis massa. Orci varius natoque
							penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis ultricies eu urna eget placerat. Morbi aliquet, lorem quis
							laoreet scelerisque, est leo interdum est, at tempor turpis risus sit amet lorem. Maecenas nec dapibus metus.
						</p>
					</div>
				</div>
			</div>
			<div class="col-1"></div>
		</div>
	</q-page>
</template>

<script>
import kevin_dark from "../assets/kevin_dark.jpg";

export default {
	name: "PagePersonal",
	data: () => ({
		kevin_dark: kevin_dark,
	}),
};
</script>

<style lang="scss">
body.body--dark {
	overflow-x: hidden;
	background: #000;
}
</style>
