<script>
export default {
	data() {
		return {
			companyInformations: [
				{
					icon: "",
					phoneNumber: "+88012345678912",
				},
				{   icon: "", 
                    email: "youremail@gmail.com" 
                },
				{
					icon: "",
					address: "30 North West New York 240",
				},
			],
            companyCard: [
                {   logo:"public/logo.png",
                    description:"Upropriate brand ecomca soud techolog after covalent technology enable prospective wastng markets whereas propriate and brand economca sound technolog",
                    platforms: [
						{ platform: "public/social-1.png"},
						{platform: "public/social-2.png"},
						{platform: "public/social-3.png"},

					],
                }
            ],
            jackPotGames: [
                {
                    img:"public/footer-jackpotgames.jpg",
                    title:"free poker game",
                    price:"$230",
                },
                {
                    img:"public/footer-jackpotgames.jpg",
                    title:"club poker game",
                    price:"$290",
                },
                {
                    img:"public/footer-jackpotgames.jpg",
                    title:"royal poker game",
                    price:"$330",
                },
            ],

		};
	},
};
</script>

<template>
	<footer class="page__footer"></footer>
</template>

<style lang="scss" scoped></style>
