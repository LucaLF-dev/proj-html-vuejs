<script>
export default {
	data() {
		return {
			gameCollectionCard: [
				{
					imgOne: "public/team-1.png",
					imgCenter: "public/vs.png",
					imgTwo: "public/team-2.png",
				},
				{
					imgOne: "public/teamsm-4.png",
					imgCenter: "public/vs.png",
					imgTwo: "public/teamsm-3.png",
				},
				{
					imgOne: "public/teamsm-2.png",
					imgCenter: "public/vs.png",
					imgTwo: "public/teamsm-1.png",
				},
			],
			whoWeAreTeam: [
				{
					img: "public/icon-1.png",
					title: "103K Community earning",
					info: "Distinctively provide access mutfuncto users whereas communicate leveraged services",
				},
				{
					img: "public/icon-2.png",
					title: "34M+ registeres players",
					info: "Distinctively provide access mutfuncto users whereas communicate leveraged services",
				},
				{
					img: "public/icon-3.png",
					title: "240k streams complete",
					info: "Distinctively provide access mutfuncto users whereas communicate leveraged services",
				},
			],
		};
	},
};
</script>

<template>
	<section class="game__collection-section">
		<div class="container">
			<div class="section__wrapper-collection">
				<div class="section__title">
					<h4>Today's</h4>
					<h2 class="title__game-collection">our game collection</h2>
				</div>
				<div class="cards__team-wrapper">
					<div
						v-for="team in gameCollectionCard"
						:key="team"
						class="team__card"
					>
						<img class="team__image" :src="team.imgOne" alt="" /><img
							class="vs__image"
							:src="team.imgCenter"
							alt=""
						/><img class="team__image" :src="team.imgTwo" alt="" />
					</div>
				</div>
				<a class="button-big white" href="#">Browse all games</a>
			</div>
			<div class="section__wrapper-team">
				<div class="poster__team-esport">
					<figure class="image__team-esport">
						<img src="public/01.png" alt="" />
					</figure>
				</div>

				<div class="card team-easports">
					<div class="card__intro">
						<h4 class="">Who we are</h4>
						<h2 class="card__title">we are professional team esport</h2>
						<p class="description">
							Distinctively provide acces mutfuncto users whereas transparent
							proceses somes ncentivize eficient functionalities rather than an
							extensible archtcture services and cross
						</p>
						<div
							class="card__mini-whoweare"
							v-for="item in whoWeAreTeam"
							:key="item"
						>
							<figure class="wrapper__icon-team">
								<img :src="item.img" alt="" />
							</figure>
							<div class="whoweare-body">
								<h5>{{ item.title }}</h5>
								<p>{{ item.info }}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.game__collection-section {
	background-color: #131661;
	width: 100%;
	height: 1540px;
}

.section__wrapper-collection {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	padding: 120px 0px;
	row-gap: 20px;
	border-bottom: 1px solid #232a5c;

	.section__title {
		h4 {
			text-transform: uppercase;
			color: #6f1951;
		}

		h2 {
			font-size: 36px;
			text-transform: uppercase;
		}
	}
}
.cards__team-wrapper {
	display: flex;
	justify-content: center;
	gap: 12px;
	padding-top: 38px;
	padding-bottom: 64px;

	.team__card {
		background-color: #232a5c;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 8px;
		width: 358px;
		height: 226px;

		.team__image {
			width: 88px;
			height: 100px;
		}

		.vs__image {
			width: 30px;
			height: 30px;
		}
	}
}

.section__wrapper-team {
	display: flex;
	padding: 120px 0px;
	gap: 40px;
	justify-content: center;
	align-items: flex-start;

	.card__intro {
		display: flex;
		flex-direction: column;
		gap: 5px;

		h4 {
			text-transform: uppercase;
			color: #6f1951;
		}

		h2 {
			text-transform: uppercase;
			font-size: 36px;
		}
	}
	.image__team-esport {
		width: 550px;
		height: 560px;
	}

	.card__mini-whoweare {
		display: flex;
		gap: 15px;
		padding-top: 20px;

		.wrapper__icon-team {
			width: 70px;
			aspect-ratio: 1;
			background-color: #ff0052;
			border-radius: 100%;
			display: flex;
			justify-content: center;
			align-items: center;

			img {
				width: 30px;
			}
		}

		.whoweare-body {
			padding-right: 40px;

			h5 {
				text-transform: uppercase;
				font-size: 18px;
			}

			p {
				font-size: 12px;
				padding-top: 5px;
			}
		}
	}
}
</style>
