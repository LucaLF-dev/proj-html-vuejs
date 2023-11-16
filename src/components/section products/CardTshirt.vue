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
			<li v-for="stream in item.streams"></li>
		</ul>
   </div>



</template>

<style lang="scss" scoped>



</style>
