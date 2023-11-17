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
		<div class="row card__header">
			<div class="profile">
				<figure>
					<img :src="item.imgProfile" alt="" />
				</figure>
				<div>
					<h4 class="profile__name">{{ item.name }}</h4>
					<h6 class="profile__job">{{ item.job }}</h6>
				</div>
            </div>
				<div class="profile__logo-team">
					<img :src="item.imgTeam" alt="" />
				</div>
			
		</div>
		<div class="row card__body">
			<p class="profile__description">{{ item.description }}</p>
			<ul class="vote-star">
				<li v-for="n in 5" class="star--centered bg--green">
					<font-awesome-icon :icon="['fas', 'star']" />
				</li>
                <span class="vote">{{ item.vote }}</span>
			</ul>
			
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use "src/style/partial/_variables.scss" as *;
.card__testimonial {
	background-color: $card-color;
	width: 530px;
	padding: 15px 10px;

    .card__header {
        justify-content: space-between;
        align-items: center;
        padding-bottom: 30px;
        border-bottom: 1px solid white;
        .profile {
            display: flex;
            align-items: center;
            gap: 20px;

            h4 {
			text-transform: uppercase;
		}
		h6 {
			font-weight: 300;
		}
		figure {
			border-radius: 100%;
			overflow: hidden;
			width: 64px;
			aspect-ratio: 1;

			img {
				object-fit: cover;
				object-position: center;
			}
		}
           
        }

        .profile__logo-team {

            img {
                width: 60px;
                aspect-ratio: 1;
            }
        }
    }
	
    .card__body {
        padding-top: 20px;
        display: flex;
        flex-direction: column;
        text-align: start;

        .vote-star {
            padding-top: 10px;
            display: flex;
            gap: 7px;
        }
    }
}

.vote-star {
	.bg--green {
		width: 32px;
		aspect-ratio: 1;
		border-radius: 5px;
		background-color: #02b57d;
	}

	.star--centered {
		display: flex;
		justify-content: center;
		align-items: center;
	}
}
</style>
