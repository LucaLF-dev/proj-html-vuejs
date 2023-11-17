<script>
export default {
	props: {
		item: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
            
        };
	},
};
</script>

<template>
	<div class="card__company">
		<div class="logo">
            <img :src="item.logo" alt="">
        </div>
        <div class="description">
            <p>{{ item.description }}</p>
        </div>
        <ul class="platform-list">
            <li v-for="platform in item.platforms"><img :src="platform.platform" alt=""></li>
        </ul>
	</div>
</template>

<style lang="scss" scoped>
@use "src/style/partial/_variables.scss" as *;
.card__company{
	

    
	padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 30px;

    .platform-list {
        display: flex;
        gap: 10px;
    }
}

</style>
