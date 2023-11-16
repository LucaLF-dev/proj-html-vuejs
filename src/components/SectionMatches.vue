<script>
import CardMatchesBig from "../components/CardMatchesBig.vue";
import CardMatchesSmall from "../components/CardMatchesSmall.vue";

export default {
	components: {
		CardMatchesBig,
		CardMatchesSmall,
	},
	data() {
		return {
			upcomingMatches: [
				{
					group: "2 group",
					numberPlayers: "32 players",
					prizePool: "$3200",
					nameTournament: "Battlefield-4 tournament",
					pointsHome: "",
					pointsAway: "",
					date: "30 april 2022",
					time: " 08:30PM",
					posterHomeTeam: "public/teamsm-6.png",
					posterAwayTeam: "public/teamsm-9.png",
					streams: [
						{
							Platform1: "public/social-1.png",
							Platform2: "public/social-2.png",
							Platform3: "public/social-3.png",
						},
					],
				},
				{
					group: "2 group",
					numberPlayers: "32 players",
					prizePool: "$3200",
					nameTournament: "Battlefield-4 tournament",
					pointsHome: "",
					pointsAway: "",
					date: "30 april 2022",
					time: " 08:30PM",
					posterHomeTeam: "public/teamsm-6.png",
					posterAwayTeam: "public/teamsm-9.png",
					streams: [
						{
							Platform1: "public/social-1.png",
							Platform2: "public/social-2.png",
							Platform3: "public/social-3.png",
						},
					],
				},
				{
					group: "2 group",
					numberPlayers: "32 players",
					prizePool: "$3200",
					nameTournament: "Battlefield-4 tournament",
					pointsHome: "",
					pointsAway: "",
					date: "30 april 2022",
					time: " 08:30PM",
					posterHomeTeam: "public/teamsm-6.png",
					posterAwayTeam: "public/teamsm-9.png",
					streams: [
						{
							Platform1: "public/social-1.png",
							Platform2: "public/social-2.png",
							Platform3: "public/social-3.png",
						},
					],
				},
			],
			previousMatches: [
				{
					group: "2 group",
					numberPlayers: "32 players",
					prizePool: "$3200",
					nameTournament: "",
					pointsHome: "4",
					pointsAway: "2",
					date: "30 april 2022",
					time: " 08:30PM",
					posterHomeTeam: "public/teamsm-6.png",
					posterAwayTeam: "public/teamsm-9.png",
					streams: [
						{
							Platform1: "public/social-1.png",
							Platform2: "public/social-2.png",
							Platform3: "public/social-3.png",
						},
					],
				},
				{
					group: "2 group",
					numberPlayers: "32 players",
					prizePool: "$3200",
					nameTournament: "",
					pointsHome: "8",
					pointsAway: "4",
					date: "30 april 2022",
					time: " 08:30PM",
					posterHomeTeam: "public/teamsm-6.png",
					posterAwayTeam: "public/teamsm-9.png",
					streams: [
						{
							Platform1: "public/social-1.png",
							Platform2: "public/social-2.png",
							Platform3: "public/social-3.png",
						},
					],
				},
				{
					group: "2 group",
					numberPlayers: "32 players",
					prizePool: "$3200",
					nameTournament: " ",
					pointsHome: "3",
					pointsAway: "4",
					date: "30 april 2022",
					time: " 08:30PM",
					posterHomeTeam: "public/teamsm-6.png",
					posterAwayTeam: "public/teamsm-9.png",
					streams: [
						{
							Platform1: "public/social-1.png",
							Platform2: "public/social-2.png",
							Platform3: "public/social-3.png",
						},
					],
				},
			],
		};
	},
};
</script>

<template>
	<section class="matches__section">
		<div class="container">
			<div class="row matches__big-preview">
				<div class="col preview__header">
					<h4>Anywhere. anytime</h4>
					<h2>All matches schedule</h2>

					<div class="col preview__body">
						<CardMatchesBig />
					</div>
				</div>

				<div class="row matches-insight">
					<div class="col upcoming-matches">
						<h3>upcoming Matches</h3>
						<div class="insight__body">
							<CardMatchesSmall
								v-for="cardMatch in upcomingMatches"
								:item="cardMatch"
							/>
						</div>
					</div>
					<div class="col upcoming-matches">
						<h3>previous matches</h3>
						<div class="insight__body">
							<CardMatchesSmall
								v-for="cardMatch in previousMatches"
								:item="cardMatch"
							/>
						</div>
					</div>
					
				</div>
				
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.matches__section {
	background-color: black;
	height: 1040px;
}

.container {
	padding: 60px;
}
.matches__big-preview {
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
	gap: 40px;

	.preview__header {
		text-align: center;

		h2 {
			font-size: 36px;
			text-transform: uppercase;
		}

		h4 {
			text-transform: uppercase;
			color: #6f1951;
		}
	}
}

.matches-insight {

	h3 {
		text-transform: uppercase;
		font-size: 18px;
		text-align: center;
		padding-bottom: 15px;
	}
	gap: 20px;
	.insight__header {
		display: flex;
		justify-content: space-around;
	}
}


</style>
