<script>
export default {
	data() {
		return {
			cardBig: [
				{
					group: "2 group",
					numberPlayers: "32 players",
					prizePool: "$3200",
					nameTournament: "Battlefield-4 tournament",
					results: "",
					date: "30 april 2022",
					time: " 08:30PM",
					posterHomeTeam: "public/teamsm-6.png",
					posterAwayTeam: "public/teamsm-9.png",
					streamPlatform1: "public/social-1.png",
					streamPlatform2: "public/social-2.png",
					streamPlatform3: "public/social-3.png",
				},
			],
		};
	},
};
</script>

<template>
	<div class="card__matches-big">
		<div class="row card__header">
			<p class="col group__matches">
				<span>{{cardBig.group  }}</span>
				<span>{{  }}fff</span>
			</p>
			<p class="col matches__price-money">Price pool <span>{{ }}</span></p>
		</div>

		<div class="row card__body">
			<div class="col matches__info">
				<div class="info__events">
					<h6>{{  }}</h6>
				</div>

				<div class="events__result">
					<div>
						<span></span>
						<span> - </span>
						<span></span>
					</div>
				</div>
				<div>
					<span class="date__event">{{}}</span>
					<span class="time__event">{{}}</span>
				</div>
			</div>
			<div class="col teams__posters">
				<img src="" alt="">
                <img src="/public/vs.png" alt="">
                <img src="" alt="">
			</div>
			<div class="match__streaming">
				<ul>
					<li><img src="" alt="" /></li>
					<li>
						<a class="button-big white" href=""><span></span></a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.card__matches-big {
	width: 1132px;
	height: 206px;

	.card__header {
		background-color: #ff0052;
	}

	.card__body {
        display: flex;
        flex-direction: column;
		background-color: white;
        color: black;
	}
}
</style>
