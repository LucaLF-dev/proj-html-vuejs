<script>
import CardTshirt from "../section products/CardTshirt.vue";
import CardPartner from "../section products/CardPartner.vue";

export default {
	components: {
		CardTshirt,
		CardPartner,
	},
	data() {
		return {
			productsCard: [
				{
					imgProduct: "../assets/02 (1).jpg",
					nameProduct: "black T-shirt here",
					price: "$380.00",
				},
				{
					imgProduct: "../assets/02 (1).jpg",
					nameProduct: "green T-shirt here",
					price: "$380.00",
				},
				{
					imgProduct: "../assets/02 (1).jpg",
					nameProduct: "Yellow T-shirt here",
					price: "$380.00",
				},
				{
					imgProduct: "../assets/02 (1).jpg",
					nameProduct: "Blue T-shirt here",
					price: "$380.00",
				},
			],
		};
	},
};
</script>

<template>
	<section class="section__products">
		<div class="container products">
			<div class="section__name">
				<h4>Gamer t-shirt's</h4>
				<h2 class="section-title">explore our products</h2>
				<div class="grid"> 
                    <CardTshirt v-for="product in productsCard" :key="product" :item="product"/>
                </div>
			</div>
		</div>
		<div class="container partners">
			<div class="section__name">
				<h4>Gamer t-shirt's</h4>
				<h2 class="section-title">explore our products</h2>
				<div class="grid">
                    <CardPartner/>
                </div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>


.section__products {
	background-color: #090e38;
	width: 100%;
    height: 1040px;
	padding: 50px 0;

	.grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 20px;
		justify-content: space-evenly;
	}
}


.container {
	padding-top: 100px;
}

.section__name {
	text-align: center;
}
</style>
