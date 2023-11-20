<script>
import WidgetCompany from "../footer page/WidgetCompany.vue";
import WidgetTopJackpot from "../footer page/WidgetTopJackpot.vue";
import WidgetNewsLetter from "../footer page/WidgetNewsLetter.vue";
import FooterCopyrightPage from "../footer page/FooterCopyrightPage.vue";
export default {
    components:{
        WidgetCompany,WidgetTopJackpot,WidgetNewsLetter,FooterCopyrightPage,
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
            companyCard: {
                   logo:"public/logo.png",
                    description:"Upropriate brand ecomca soud techolog after covalent technology enable prospective wastng markets whereas propriate and brand economca sound technolog",
                    platforms: [
						{platform:"public/social-1.png"},
						{platform: "public/social-2.png"},
						{platform: "public/social-3.png"},

					],
            },
            
            
		};
	},
};
</script>

<template>
	<footer class="page__footer">
        <div class="container-jumbo">
        <div class="container information__detail">
            <div class="detail__card" v-for="information in companyInformations" :key="information "><img src="" alt=""><span>{{ information.detail }}</span></div>
        </div>
    </div>
        <div class="container">
            <div class="row  cards__footer">
                <WidgetCompany :item="companyCard"/>
                <WidgetTopJackpot />
                <WidgetNewsLetter/>
            </div>
        </div>
    </footer>
    <FooterCopyrightPage/>
</template>

<style lang="scss" scoped>

.page__footer {
    width: 100%;
  
    background-image: url('public/bg-footer.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.container-jumbo {

    border-bottom: 1px solid  #232a5c;
   
}
.container {
   
    &.information__detail {
        
        display: flex;
        justify-content: center;
        flex-direction: row;
        
       .detail__card {
           padding: 20px;
           border: 1px solid  #232a5c;
           border-top: none;
           border-bottom: none;
           position: relative;

           
       }
    }
    .cards__footer {
        padding-top: 50px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 20px;
        
        justify-items: center;
    }

}
</style>
