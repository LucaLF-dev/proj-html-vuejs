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
   <div class="card__t-shirt">
    <figure class="squad__t-shirt">
            <img :src="item.imgProduct" alt="" />
        </figure>
		<div class="t-shirt__name">
            <h3>{{ item.nameProduct }}</h3>
        </div>
        <div class="t-shirt__price">
            <h3>{{ item.price }}</h3>
        </div>
		
		<ul class="star__list">
			<li v-for="n in 5"><font-awesome-icon :icon="['fas', 'star']" /></li>
		</ul>
   </div>



</template>

<style lang="scss" scoped>
@use "src/style/partial/_variables.scss" as *;
.card__t-shirt {
    background-color: $card-color;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    .t-shirt__name {
        text-transform: uppercase;
    }


    .squad__t-shirt {
        width: 244px;
        aspect-ratio: 1;
    }

    .star__list {
        display: flex;
        padding-bottom: 15px;
    }
}


</style>
