<script>
import CardLiveStreaming from './CardLiveStreaming.vue';

export default {
	components: {
		CardLiveStreaming,
	},
	data() {
		return {
           cardsLive: [
            {
                url: 'background-image: url(public/01.jpg);',
                class: 'grid-item1',
                description:"2022 lvp superliga orange summer"
            },
            {
                url:'background-image: url(public/01.jpg);' ,
                class: 'grid-item2',
                description:"pubg classic tournament."
            },
            {
                url: 'background-image: url(public/01.jpg);',
                class: 'grid-item3',
                description:"can i add my local bank..."
            },
            {
                url: 'background-image: url(public/01.jpg);',
                class: 'grid-item4',
                description:"league battle tournament."
            },
            {
                url: 'background-image: url(public/01.jpg);',
                class: 'grid-item5',
                description:"where can i redeem my.."
            },
          
           ]
        };
	},
};
</script>

<template>
	<section class="section__live-streaming">
        <div class="container">
		<div class="section__name">
			<h4>OUR latest videos</h4>
			<h2 class="section-title">check our live streaming</h2>
		</div>
        <div class="grid-container">
            
        <CardLiveStreaming v-for="card in cardsLive" :key="card" :item="card"/>

    </div>
    </div>
	</section>
</template>

<style lang="scss" scoped>
@use "src/style/partial/_variables.scss" as *;

.section__live-streaming {
    width: 100%;
    height: 1040px;
    background-image: url("../assets/bg (3).jpg");

    .section__name {
        text-align: center;
    }

    .grid-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 370px 370px;
        grid-gap: 20px;
        grid-template-areas: 
        "area1 area1 area1 area2 area2 area2"
        "area3 area3 area4 area4 area5 area5";

    }
}

</style>