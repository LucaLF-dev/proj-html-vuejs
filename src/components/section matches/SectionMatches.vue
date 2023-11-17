<script>
import CardMatchesBig from "./CardMatchesBig.vue";
import CardMatchesSmall from "./CardMatchesSmall.vue";

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
					nameTournament: "call of duty tournament",
					pointsHome: "",
					pointsAway: "",
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
				{
					group: "2 group",
					numberPlayers: "32 players",
					prizePool: "$3200",
					nameTournament: "league battle tournament",
					pointsHome: "",
					pointsAway: "",
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
				{
					group: "2 group",
					numberPlayers: "32 players",
					prizePool: "$3200",
					nameTournament: "pubg classic tournament",
					pointsHome: "",
					pointsAway: "",
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
						{ platform: "public/social-1.png"},
						{platform: "public/social-2.png"},
						{platform: "public/social-3.png"},

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
						{ platform: "public/social-1.png"},
						{platform: "public/social-2.png"},
						{platform: "public/social-3.png"},

					],
				},
				{
					group: "2 group",
					numberPlayers: "32 players",
					prizePool: "$3200",
					nameTournament: "",
					pointsHome: "3",
					pointsAway: "4",
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
					
					<div class=" upcoming-matches">
						<h3>upcoming Matches</h3>
						<div class="insight__body">
							<CardMatchesSmall
								v-for="match in upcomingMatches"
								:item="match"
							/>
						</div>
					</div>
					<div class=" upcoming-matches">
						<h3>previous matches</h3>
						<div class="insight__body">
							<CardMatchesSmall
								v-for="match in previousMatches"
								:item="match"
							/>
						</div>
					</div>
					
				</div>
				<div class="button-big white"><a href="#">BROWSE ALL MATCHES</a></div>
			</div>	
		</div>
	</section>
</template>

<style lang="scss" scoped>
.matches__section {
	padding: 60px 0;
	background-image: url("src/assets/sectionMatches.jpg");

	width: 100%;
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
			padding-bottom: 30px;
		}

		h4 {
			text-transform: uppercase;
			color: #6f1951;
			padding-bottom: 30px;
		}
	}
}

.matches-insight {
	justify-content: space-between;
	flex-direction: row;
	
	

	h3 {
		text-transform: uppercase;
		font-size: 18px;
		text-align: center;
		padding-bottom: 15px;
	}
	gap: 20px;
	
}

.upcoming-matches {
	display: flex;
	flex-direction: column;
	gap: 10px;
	
	
}
.button-big {
	margin: 0 auto;
}
</style>
