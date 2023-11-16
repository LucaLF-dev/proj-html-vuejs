<script>
export default {
	props: {
		item: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {};
	},
};
</script>

<template>
	<div class="card__matches-small">
		<div class="row card__header">
			<p class="col group__matches">
				{{ item.group }} <span>{{ item.numberPlayers }}</span>
			</p>
			<p class="col matches__price-money">
				Price pool <span>{{ item.prizePool }}</span>
			</p>
		</div>

		<div class="row card__body">
			<div class="col poster__home-team">
				<figure class="poster-wrapper">
					<img :src="item.posterHomeTeam" alt="" />
				</figure>
			</div>
			<div class="col matches__info">
				<div>
					<div v-if="item.nameTournament !== undefined" class="info__events">
						<h6>{{ item.nameTournament }}</h6>
					</div>

					<div v-else class="events__result">
						<div>
							<span>{{ item.pointsHome }}</span>
							<span> - </span>
							<span>{{ item.pointsAway }}</span>
						</div>
					</div>
				</div>
				<div class="events__reminder">
					<span class="date__event">
						{{ item.date }}
					</span>
					<span class="time__event">{{ item.time }}</span>
				</div>
				<div class="match__streaming">
					<ul>
						<li v-for="stream in item.streams">
							<a href="#"><img :src="stream" alt="" /></a>
						</li>
					</ul>
				</div>
			</div>
			<div class="col poster__away-team">
				<figure class="poster-wrapper">
					<img :src="item.posterAwayTeam" alt="" />
				</figure>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.card__matches-small {
	width: 542px;
	height: 209px;

	.card__header {
		background-color: #ff0052;
	}

	.card__body {
		background-color: white;
		color: black;
	}
}
</style>
