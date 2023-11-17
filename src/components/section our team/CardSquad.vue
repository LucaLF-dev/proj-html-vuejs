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
	<div class="card squad-players">
        <figure class="squad__logo">
            <img :src="item.imgSquad" alt="squad-logo" />
        </figure>
		<div class="squad__name">
            <h3>{{ item.nameTeam }}</h3>
        </div>
		
		<ul class="stream__list">
			<li v-for="stream in item.streams">
				<a href="#"><img :src="stream.platform" alt="" /></a>
			</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
@use "src/style/partial/_variables.scss" as *;

.squad-players {
    width: 336px ;
    height: 556px;
    background-image: url("../assets/5.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:20px;
    padding: 90px 20px 30px 20px;
    border:  solid 7px $card-color;

    h3 {
        text-transform: uppercase;
    }
    .squad__logo {
      img {
        height: 150px;
       aspect-ratio: 1;} 
       
    }

    .stream__list {
        display: flex;
       gap: 10px;

        img {
            width: 38px;
            aspect-ratio: 1;
        }
    }
} 
</style>
