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
					<div v-if="item.nameTournament !== ''" class="info__events">
						<h6>{{ item.nameTournament }}</h6>
					</div>
					<div v-else class="events__result">
						<div>
							<p><span>{{ item.pointsHome }}</span>
							<span> - </span>
							<span>{{ item.pointsAway }}</span>
                        </p>
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
							<a href="#"><img :src="stream.platform" alt="" /></a>
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
@use "src/style/partial/_variables.scss" as *;
.card__matches-small {
    width: 542px;
	max-width: 542px;

    
    

	.card__header {
		background-color:$rose-color;
        display: flex;
        justify-content: space-between;
        padding: 10px 20px;

        p, span {
           text-transform: uppercase;
           font-size: 18px;

        }
	}

	.card__body {
        justify-content: space-around;
      flex-grow: 1;
        padding: 10px;
       
		background-color:$white-color;
		color: black;
        text-align: center;

        .matches__info {
            display: flex;
            flex-direction: column;
            gap: 5px;
        }

        .info__events {

            h6 {
                text-transform: uppercase;
                font-size: 15px;
            }
        }
        .match__streaming {
            
           ul {
            display: flex;
            justify-content: center;
            gap: 10px;
            
        }
        }
	}
}
</style>
