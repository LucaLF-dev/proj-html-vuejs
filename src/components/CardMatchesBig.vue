<script>
export default {
	data() {
		return {
			cardBig:
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
					streams: [
						{ platform: "public/social-1.png"},
						{platform: "public/social-2.png"},
						{platform: "public/social-3.png"},

					],
				},
		};
	},
};
</script>

<template>
	<div class="card__matches-big">
		<div class="row card__header">
			<div class="col group__matches">
				<span>{{cardBig.group}}</span>
				<span>{{cardBig.numberPlayers  }}</span>
        </div>
			<p class="col matches__price-money">Price pool <span>{{cardBig.prizePool }}</span></p>
		</div>

		<div class="row card__body">
			<div class="col matches__info">
				<div class="info__events">
					<h6>{{ cardBig.nameTournament }}</h6>
				</div>

			
				     
				<div>
					<span class="date__event">{{cardBig.date}}</span>
					<span class="time__event">{{cardBig.time}}</span>
				</div>
			</div>
			<div class="col teams__posters">
				<img :src="cardBig.posterHomeTeam" alt="">
                <img src="/public/vs.png" alt="">
                <img :src="cardBig.posterAwayTeam" alt="">
			</div>
			<div class="match__streaming">
				<ul >
					<li v-for="stream in cardBig.streams"><img :src="stream.platform" alt="" /></li>
					<li>
						<a class="button-big rose" href=""><span>whatch now</span></a>
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
    color: black;

	.card__header {
        padding: 5px;
        display: flex;
        justify-content: space-between;
		background-color: #ff0052;

        span,p {
            text-transform: uppercase;
            color: white;
        }
	}

	.card__body {
        padding: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
		background-color: white;
        color: black;

        .info__events {

            h6 {
                text-transform: uppercase;
                font-size: 12px;
            }
        }

        .teams__posters {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .match__streaming {

            ul {
                gap: 10px;
                display: flex;
                align-items: center;
            }
        }
	}
}
</style>
