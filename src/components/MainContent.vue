<script>
import HeroComponent from "../components/HeroComponent.vue";
import SectionGameCollection from "../components/SectionGameCollection.vue";
import SectionMatches from "../components/SectionMatches.vue";

export default {
	components: {
		HeroComponent,
		SectionGameCollection,
    SectionMatches,
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
    <SectionMatches/>
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
