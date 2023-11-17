<script>
import CardCompany from "../footer page/CardCompany.vue";
import CardTopJackpot from "../footer page/CardTopJackpot.vue";

export default {
    components:{
        CardCompany,CardTopJackpot,
    },
	data() {
		return {
			companyInformations: [
				{
					icon: "",
					detail: "Phone number : +88012345678912",
				},
				{   icon: "", 
                    detail: "Email : youremail@gmail.com" 
                },
				{
					icon: "",
					detail: "Address : 30 North West New York 240",
				},
			],
            companyCard: [
                {   logo:"public/logo.png",
                    description:"Upropriate brand ecomca soud techolog after covalent technology enable prospective wastng markets whereas propriate and brand economca sound technolog",
                    platforms: [
						{platform:"public/social-1.png"},
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
	<footer class="page__footer">
        <div class="container information__detail">
            <div class="detail__card" v-for="information in companyInformations" :key="information "><img src="" alt=""><span>{{ information.detail }}</span></div>
        </div>
        <div class="container">
            <div class="row">
                <CardCompany/>
                <CardTopJackpot/>
                <div class="card__newsletter">
                    <div class="newsletter__header" >
                        <h4></h4> 
                        <p></p>
                    </div>
                    <div class="newsletter__body">
                        <input type="text" placeholder=" Your Name ">
                        <input type="text" placeholder=" Your Email">
                        <a class="button-big white" hre="#"><span>Send message</span></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>

.page__footer {
    width: 100%;
    height: 1000px;
    background-image: url('public/bg-footer.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.container {
    &.information__detail {
        
        display: flex;
        flex-direction: row;
        
       .detail__card {
           padding: 20px;
           border: 1px solid white;
           border-top: none;
       }
    }
}
</style>
