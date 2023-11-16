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
	<div class="card__partners">
        <div class="container">
        <figure class="partner__logo">
            <img :src="item.imgSquad" alt="squad-logo" />
        </figure>
    </div>
	</div>
</template>

<style lang="scss" scoped>



</style>
