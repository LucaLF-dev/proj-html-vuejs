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
	<div class="card__blog">
		<div class="row">
			<figure class="card__image">
				<img :src="item.imgCard" alt="" />
			</figure>
            <div class="card__body"><div>
				<h3 class="title__body">{{ item.title }}</h3>
			</div>
			<div>
				<span class="user">{{ item.nameUser }}</span>
				<span class="date">{{ item.date }}</span>
			</div>
			<div class="card__description">
				<p>{{ item.description }}</p>
			</div>
            <div>
                <a class="button-big rose" href="#">read more</a>
            </div></div>
			
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use "src/style/partial/_variables.scss" as *;
.card__blog {
	background-color: $card-color;
	width: 530px;
    
	padding: 10px;

    .card__body {
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;

        .title__body {
            text-transform: uppercase;
        }

        .card__description {
         text-align: justify;
         margin: 10px 0;
        }
        .button-big {
            border: none;
        }
    }
   .row {
     flex-direction: column;
     gap: 12px;
   }
   
   .user {

    &::after {
        content: '';
        border-right: 1px solid white ;
        margin-left: 10px;
        margin-right: 10px;
    }
   }
}
</style>
