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
	<div class="card__testimonial">
        <div class="row">
            <div class="profile">
                <figure>
                    <img src="" alt="">
                </figure>
                <div>
                    <h4 class="profile__name"></h4>
                    <h6 class="profile__job"></h6>
                </div>
                <div class="profile__logo-team">
                     <img src="" alt="">
                </div>
            </div>
        </div>
        <div class="row">
            <p class="profile__description"></p>
            <ul class="vote-star">
                <li></li>
            </ul>
            <span class="vote"></span>
        </div>
		
	</div>
</template>

<style lang="scss" scoped>
@use "src/style/partial/_variables.scss" as *;
.card__testimonial {
	background-color: $card-color;
	width: 530px;
    
	padding: 10px;
}
    

</style>
