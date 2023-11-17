<script>
import CardTestimonial from "../section testimonial/CardTestimonial.vue";

export default {
	components: {
		CardTestimonial,
	},
	data() {
		return {
            testimonialCards: [
                {
                    imgProfile:"public/testimonial1.jpg",
                    name:"madley pondor",
                    job:"UI Designer",
                    imgTeam:"src/assets/partner logo/partner2.png",
                    description:"Edgeing nterfaces fnergstca plagiarize teams anbudng paradms rapidiousl buildcaboration anden deassharing viaing and bleeding whereas goingi forward process and monetze",   
                    vote:"5.28"          
                },
                {
                    imgProfile:"public/testimonial2.jpg",
                    name:"oliver beddows",
                    job:"UI Designer",
                    imgTeam:"src/assets/partner logo/partner4.png",
                    description:"Edgeing nterfaces fnergstca plagiarize teams anbudng paradms rapidiousl buildcaboration anden deassharing viaing and bleeding whereas goingi forward process and monetze",   
                    vote:"5.28"                    
                },
            ]
        };
	},
};
</script>

<template>
	<section class="section__testimonial">
        <div class="section__name">
				<h4>our recent news</h4>
				<h2 class="section-title">our most popular testimonials posts</h2>
			</div>
     <div class="container">
        <div class="grid">
			<CardTestimonial v-for="card in testimonialCards" :key="card" :item="card"/>
		</div>
     </div>
		
	</section>
</template>

<style lang="scss" scoped>
.section__testimonial {
	background-color: #090e38;
	width: 100%;
	
	padding: 80px 0;
    text-align: center;

    .grid {
        display: grid;
        grid-template-columns: repeat(2,1fr);
        gap: 20px;
    }

    .container {
        padding: 30px 0;
    }
}
</style>
