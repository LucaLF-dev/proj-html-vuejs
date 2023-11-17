<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
	components: {
		FontAwesomeIcon,
	},
	data() {
		return {
			contacsSocial: [
				{
					type: ["fab", "facebook-messenger"],
					link: "#",
				},
				{
					type: ["fab", "twitter"],
					link: "#",
				},
				{
					type: ["fab", "vimeo"],
					link: "#",
				},
				{
					type: ["fab", "skype"],
					link: "#",
				},
				{
					type: ["fas", "rss"],
					link: "#",
				},
			],
			navLists: [
				{
					name: "Home",
					type: [],
					link: "#",
				},
				{
					name: "Features",
					type: ["fas", "plus"],
					link: "#",
				},
				{
					name: "Achievement",
					type: [],
					link: "#",
				},
				{
					name: "Blog",
					type: ["fas", "plus"],
					link: "#",
				},
				{
					name: "Contact",
					type: [],
					link: "#",
				},
			],
		};
	},
};
</script>

<template>
	<header class="main__header">
		<div class="container">
			<div class="nav__contacts">
				<div class="contacts__info">
					<ul>
						<li class="info__telephone">
							<a href="#"
								><font-awesome-icon :icon="['fas', 'phone']" />+800-123-4567
								6587</a
							>
						</li>
						<li class="info__address">
							<a href="#"
								><font-awesome-icon :icon="['fas', 'location-dot']" /> Beverley,
								New york 224 USA</a
							>
						</li>
					</ul>
				</div>
				<div class="contacts__socials">
					<ul>
						<li class="info__social" v-for="contact in this.contacsSocial" :key="contact">
							<a :href="contact.link"
								><font-awesome-icon :icon="contact.type"
							/></a>
						</li>
					</ul>
				</div>
			</div>

			<nav class="header__nav">
				<div class="nav__logo">
					<figure class="logo__image">
						<img src="/public/logo.png" alt="logo" />
					</figure>
				</div>
				<ul class="nav__list">
					<li v-for="element in this.navLists">
						<a :href="element.link">
							{{ element.name
							}}<font-awesome-icon
								class="icon__list-header"
								:icon="element.type"
						/></a>
					</li>
				</ul>
				<div class="nav__account">
					<a class="button white"
						><font-awesome-icon :icon="['fas', 'user']" /><span>Log in</span></a
					>
					<a class="button rose"
						><font-awesome-icon :icon="['fas', 'users']" /><span
							>Sign up</span
						></a
					>
				</div>
			</nav>
		</div>
	</header>
</template>

<style lang="scss" scoped>
.main__header {
	width: 100%;
	height: 155px;
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	z-index: 999;
	margin: 0;
	backdrop-filter: blur(5px);
}

.nav__contacts {
	display: flex;
	justify-content: space-between;

	.contacts__info {
		position: relative;

		ul {
			display: flex;
			gap: 20px;
	
			border-bottom: 1px solid white;

			.info__telephone {
				padding: 15px;
        position: relative;

				&::before {
					content: "";
					position: absolute;
					height: 58px;
					transform: rotate(-25deg);
					width: 1px;
					left: -13px;
					bottom: 6px;
					top: -3px;
					background-color: white;
				}
			}

      .info__address {
				padding: 15px;
        position: relative;

        &::before {
					content: "";
					position: absolute;
					height: 58px;
					transform: rotate(-25deg);
					width: 1px;
					left: -13px;
					bottom: 6px;
					top: -3px;
					background-color: white;
				}
				
			}

      
		}
	}

	.contacts__socials {
		ul {
			display: flex;
			justify-content: space-around;
			gap: 20px;
      border-bottom: 1px solid white;
      position: relative;

      &::before {
          content: "";
					position: absolute;
					height: 1px;
					right: 95%;
					width: 400px;
          top: 52px;
          
					
					
					background-color: white;
        }

      .info__social {
        padding: 15px;
        position: relative;

        &::after {
          content: "";
					position: absolute;
					height: 58px;
					transform: rotate(25deg);
					width: 1px;
          left: 56px;
					bottom: 6px;
					top: -3px;
					background-color: white;
        }

        
      }
		}
	}
}

.header__nav {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 50px;

	.nav__list {
		display: flex;
		gap: 15px;

		.icon__list-header {
			padding: 0 15px;
		}
	}
}

.nav__account {
	display: flex;
	align-items: center;
}

.logo__image {
	img {
		width: 181px;
		height: 60px;
		object-fit: cover;
	}
}
</style>
