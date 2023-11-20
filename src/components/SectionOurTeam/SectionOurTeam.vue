<script>
import CardSquad from "./CardSquad.vue";
import CardJoinCommunity from "./CardJoinCommunity.vue";

export default {
	components: {
		CardSquad,CardJoinCommunity,
	},
	data() {
		return {
            squadCard:[
                {
                imgSquad:"public/team-2.png",
                nameTeam:"gaming team",
                streams: [
						{ platform: "public/social-1.png"},
						{platform: "public/social-2.png"},
						{platform: "public/social-3.png"},

					],

            },
            {
                imgSquad:"public/teamsm-1.png",
                nameTeam:"dragon team",
                streams: [
						{ platform: "public/social-1.png"},
						{platform: "public/social-2.png"},
						{platform: "public/social-3.png"},

					],

            },
            {
                imgSquad:"public/teamsm-3.png",
                nameTeam:"frogs team",
                streams: [
						{ platform: "public/social-1.png"},
						{platform: "public/social-2.png"},
						{platform: "public/social-3.png"},

					],

            },
            {
                imgSquad:"public/teamsm-2.png",
                nameTeam:"wolf team",
                streams: [
						{ platform: "public/social-1.png"},
						{platform: "public/social-2.png"},
						{platform: "public/social-3.png"},

					],

            },
            {
                imgSquad:"public/teamsm-5.png",
                nameTeam:"shark team",
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
	<section class="section__our-team">
		<div class="section__name">
			<h4>OUR Team players</h4>
			<h2 class="section-title">All matches schedule</h2>
		</div>
		<div class="container-max">
			<div class="grid">
				<CardSquad v-for="squad in squadCard" :key="squad" :item="squad"/>
			</div>
            <div class="container">
                <CardJoinCommunity/>
            </div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
@use "src/style/partial/_variables.scss" as *;

.section__our-team {
	background-color: #090E38;
	width: 100%;
	padding: 50px 0;

    .grid {
        display:grid ;
        grid-template-columns: repeat(5,1fr);
        gap: 20px ;
		justify-content: space-evenly;
    }
}

.container-max {
	padding-top: 50px;
}
.container {
    padding-top: 100px;
}

.section__name {
	text-align: center;
}
</style>
