<script>
export default {
	props: {
		item: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			jackpotGames: [
				{
					img: "public/footer-jackpotgames.jpg",
					title: "free poker game",
					price: "$230",
				},
				{
					img: "public/footer-jackpotgames.jpg",
					title: "club poker game",
					price: "$290",
				},
				{
					img: "public/footer-jackpotgames.jpg",
					title: "royal poker game",
					price: "$330",
				},
			],
		};
	},
};
</script>

<template>
	<div class="card__top-jackpot">
		<div>
			<h4>top jackpot games</h4>
		</div>
		<div class="row">
			<div v-for="game in jackpotGames" :key="game" class="card-mini">
				<div class="logo-card__mini">
					<figure>
						<img :src="game.img" alt="" />
					</figure>
				</div>
				<div class="body-card__mini">
					<h5>{{ game.title }}</h5>
					<span> Poker: {{ game.price }} </span>
					<ul>
						<li v-for="n in 5">
							<font-awesome-icon class="star" :icon="['fas', 'star']" />
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use "src/style/partial/_variables.scss" as *;
.card__top-jackpot {
	padding: 10px;

	h4 {
		font-size: 22px;
		text-transform: uppercase;
	}

	.row {
		padding-top: 30px;
		display: flex;
		flex-direction: column;
		gap: 10px;

		.card-mini {
			display: flex;
			gap: 10px;
			align-items: center;
		}
	}
	.logo-card__mini {
		display: flex;
		figure {
			width: 80px;
			aspect-ratio: 1;
		}
	}

	.body-card__mini {
		h5 {
			text-transform: uppercase;
			font-size: 17px;
		}

		span {
			font-size: 15px;
		}

		ul {
			display: flex;
		}
	}
}
</style>
