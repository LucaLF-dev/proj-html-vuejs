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
	<div class="card__company">
		
	</div>
</template>

<style lang="scss" scoped>
@use "src/style/partial/_variables.scss" as *;
.card__company{
	
	width: 530px;
    
	padding: 10px;
}

</style>
