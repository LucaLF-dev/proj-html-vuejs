<script>
import HeroComponent from "../components/HeroComponent.vue";
import SectionGameCollection from "../components/SectionGameCollection.vue";
import SectionMatches from "../components/SectionMatches.vue";
import SectionOurTeam from "../components/SectionOurTeam.vue";
import SectionLiveStreaming from "../components/SectionLiveStreaming.vue";
import SectionProducts from "../components/section products/SectionProducts.vue";
import SectionBlog from "./section blog/SectionBlog.vue";

export default {
	components: {
		HeroComponent,
		SectionGameCollection,
		SectionMatches,
		SectionOurTeam,
		SectionLiveStreaming,
		SectionProducts,
		SectionBlog,
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
