<script>
import CardTshirt from "../SEctionProducts/CardTshirt.vue";
import CardPartner from "../SEctionProducts/CardPartner.vue";

export default {
	components: {
		CardTshirt,
		CardPartner,
	},
	data() {
		return {
			productsCard: [
				{
					imgProduct: "src/assets/t-shirt/maglietta1.jpg",
					nameProduct: "black T-shirt here",
					price: "$380.00",
				},
				{
					imgProduct: "src/assets/t-shirt/maglietta2.jpg",
					nameProduct: "green T-shirt here",
					price: "$380.00",
				},
				{
					imgProduct: "src/assets/t-shirt/maglietta1.jpg",
					nameProduct: "Yellow T-shirt here",
					price: "$380.00",
				},
				{
					imgProduct: "src/assets/t-shirt/maglietta2.jpg",
					nameProduct: "Blue T-shirt here",
					price: "$380.00",
				},
			],
			partnersCard: [
				{
					imgPartner: "src/assets/partner logo/partner1.png",
				},
				{
					imgPartner: "src/assets/partner logo/partner2.png",
				},
				{
					imgPartner: "src/assets/partner logo/partner3.png",
				},
				{
					imgPartner: "src/assets/partner logo/partner4.png",
				},
				{
					imgPartner: "src/assets/partner logo/partner1.png",
				},
				{
					imgPartner: "src/assets/partner logo/partner3.png",
				},
				{
					imgPartner: "src/assets/partner logo/partner4.png",
				},
				{
					imgPartner: "src/assets/partner logo/partner2.png",
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
			</div>
			<div class="grid__T-shirt">
				<CardTshirt
					v-for="product in productsCard"
					:key="product"
					:item="product"
				/>
			</div>
		</div>
		<div class="container partners">
			<div class="section__name">
				<h4>we our partner</h4>
				<h2 class="section-title">become a partner of gamer</h2>
			</div>
			<div class="grid__partner">
				<CardPartner
					v-for="partner in partnersCard"
					:key="partner"
					:item="partner"
				/>
			</div>
			<a class="button-big white" href="#">became a partner</a>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.section__products {
	background-color: #090e38;
	width: 100%;
	padding: 70px 0;

	.grid__T-shirt {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 20px;
		justify-content: space-evenly;
	}

	.grid__partner {
		margin: 20px;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: 1fr 1fr;
		grid-auto-flow: column;

		justify-items: center;
		justify-content: center;
		gap: 20px;
		padding-bottom: 40px;
	}
}

.container {
	padding-top: 50px;

	&.products {
		padding-bottom: 70px;
	}
	&.partners {
		border-top: 1px solid #232a5c;
		padding: 30px;
		margin-top: 30px;
	}
	.button-big {
		margin: 0 auto;
	}
}

.section__name {
	padding-bottom: 30px;
	text-align: center;
}
</style>
