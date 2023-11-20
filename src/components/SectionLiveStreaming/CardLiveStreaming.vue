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
	<div class="card__live-streaming" :style="item.url" :class="item.class">
		<div class="wrapper-description">
			<a class="button-streaming button-big rose" href="#"
				><span>Watch now</span
				><font-awesome-icon :icon="['fas', 'circle-play']"
			/></a>
			<h3 class="description">{{ item.description }}</h3>
		</div>
		<a class="press__play" href="#"><font-awesome-icon class="play__button" :icon="['fas', 'circle-play']"></font-awesome-icon></a>
	</div>
</template>

<style lang="scss" scoped>
@use "src/style/partial/_variables.scss" as *;

.card__live-streaming {
	border-radius: 10px;
	border: 7px solid #232a5c;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;

	h3 {
		text-transform: uppercase;
	}

	.wrapper-description {
		position: absolute;

		left: 0;
		right: 0;
		top: 0;
		bottom: 0;

		z-index: 3;
		backdrop-filter: blur(1 px);
		background: rgb(0, 0, 0);
		background: linear-gradient(
			0deg,
			rgba(0, 0, 0, 0.7021183473389356) 23%,
			rgba(0, 0, 0, 0.09147408963585435) 65%
		);
		.button-streaming {
			position: relative;
			bottom: 30px;
			top: 260px;
			left: 15px;
		}

		.description {
			position: relative;
			left: 15px;
			top: 270px;
		}
	}

	.button-streaming {
		height: 40px;
		width: 150px;
		text-transform: uppercase;
		font-weight: 700;
		font-size: 12px;
		border: none;
	}
}

.press__play {
	
	width: 131px;
	aspect-ratio: 1;
	border-radius: 100%;
	background-color: rgba(255,255,255,0.25);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 800;
	
	.play__button {
		background-color: $rose-color;
		border-radius: 100%;
		font-size: 40px;
		color: white;
		z-index: 999;
	}
	
}
.grid-item1 {
	grid-area: area1;
}

.grid-item2 {
	grid-area: area2;
}

.grid-item3 {
	grid-area: area3;
}

.grid-item4 {
	grid-area: area4;
}

.grid-item5 {
	grid-area: area5;
}
</style>
