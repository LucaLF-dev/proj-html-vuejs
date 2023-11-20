<script>
import HeroComponent from "../components/HeroComponent.vue";
import SectionGameCollection from "./SectionGameCollection/SectionGameCollection.vue";
import SectionMatches from "./SectionMatches/SectionMatches.vue";
import SectionOurTeam from "../components/SectionOurTeam/SectionOurTeam.vue";
import SectionLiveStreaming from "./SectionLiveStreaming/SectionLiveStreaming.vue";
import SectionProducts from "../components/SectionProducts/SectionProducts.vue";
import SectionBlog from "./SectionBlog/SectionBlog.vue";
import SectionTestimonial from "./SectionTestimonial/SectionTestimonial.vue";

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
