<script>
export default {
	
	data() {
		return {
            
        };
	},
};
</script>

<template>
	<div class="card__newsletter">
                    <div class="newsletter__header" >
                        <h4>our newsletter</h4> 
                        <p>Gamer esports organization supported by community leaders</p>
                    </div>
                    <div class="newsletter__body">
                        <input type="text" placeholder=" Your Name ">
                        <input type="text" placeholder=" Your Email">
                        <a class="button-big white" hre="#"><span>Send message</span></a>
                    </div>
                </div>
</template>

<style lang="scss" scoped>
@use "src/style/partial/_variables.scss" as *;


.card__newsletter {
    padding-top: 10px;

        h4 {
		font-size: 22px;
		text-transform: uppercase;
        margin-bottom: 38px;
	}
    .newsletter__body {
        padding: 40px 0;
        display: flex;
        flex-direction: column;
        gap: 25px;

        input {
            height: 38px;
            padding: 10px 15px;
            background-color: $card-color;
            border: none; 
            
        }
    }

    
    }

</style>
