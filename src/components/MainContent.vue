<script>
import HeroComponent from "../components/HeroComponent.vue";
import SectionGameCollection from "./section game collection/SectionGameCollection.vue";
import SectionMatches from "./section matches/SectionMatches.vue";
import SectionOurTeam from "../components/section our team/SectionOurTeam.vue";
import SectionLiveStreaming from "./section live streaming/SectionLiveStreaming.vue";
import SectionProducts from "../components/section products/SectionProducts.vue";
import SectionBlog from "./section blog/SectionBlog.vue";
import SectionTestimonial from "./section testimonial/SectionTestimonial.vue";

export default {
	components: {
		HeroComponent,
		SectionGameCollection,
		SectionMatches,
		SectionOurTeam,
		SectionLiveStreaming,
		SectionProducts,
		SectionBlog,
		SectionTestimonial,
	},
	data() {
		return {};
	},
};
</script>

<template>
	<main class="main__content">
		<HeroComponent />
		<SectionGameCollection />
		<SectionMatches />
		<SectionOurTeam />
		<SectionLiveStreaming/>
		<SectionProducts/>
		<SectionBlog/>
		<SectionTestimonial/>
	</main>
</template>

<style lang="scss" scoped>
@use "../style/partial/variables" as *;
.main__content {
	min-width: 100%;
	min-height: calc(100vh - 150px);
	color: white;
}


</style>
