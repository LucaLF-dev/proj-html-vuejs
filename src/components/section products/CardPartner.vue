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
	<div class="card__partner">
        <div class="container">
        <figure class="partner__logo">
            <img :src="item.imgPartner" alt="" />
        </figure>
    </div>
	</div>
</template>

<style lang="scss" scoped>
.card__partner {
    

	.partner__logo {
		width: 50px;
		aspect-ratio: 1;
	} 
}

</style>
