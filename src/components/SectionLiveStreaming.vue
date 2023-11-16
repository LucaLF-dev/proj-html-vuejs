<script>
import CardLiveStreaming from '../components/CardLiveStreaming.vue';

export default {
	components: {
		CardLiveStreaming,
	},
	data() {
		return {
           cardLive: [
            {
                url: "public/01.jpg",
                description:"2022 lvp superliga orange summer"
            },
            {
                url: "public/01.jpg",
                description:"pubg classic tournament."
            },
            {
                url: "public/01.jpg",
                description:"can i add my local bank..."
            },
            {
                url: "public/01.jpg",
                description:"league battle tournament."
            },
            {
                url: "public/01.jpg",
                description:"where can i redeem my.."
            },
          
           ]
        };
	},
};
</script>

<template>
	<section class="section__live-streaming">
		<div class="section__name">
			<h4>OUR latest videos</h4>
			<h2 class="section-title">check our live streaming</h2>
		</div>
        <CardLiveStreaming/>
		
	</section>
</template>

<style lang="scss" scoped>
@use "../style/partial/variables" as *;

.section__live-streaming {
    height: 1040px;
    background-image: url("../assets/bg (3).jpg");

    .section__name {
        text-align: center;
    }
}

</style>