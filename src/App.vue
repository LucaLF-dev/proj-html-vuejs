<script>
import HeaderPage from "./components/HeaderPage.vue";
import MainContent from "./components/MainContent.vue";
import FooterPage from "./components/footer page/FooterPage.vue";

export default {
	components: {
		HeaderPage,
		MainContent,
		FooterPage,
	},
	data() {
		return {
			
		};
	},
};
</script>

<template>
	<HeaderPage />
	<MainContent />
	<FooterPage />
</template>

<style lang="scss">
@use "./style/general.scss";
</style>
