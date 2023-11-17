<script>


export default {
	data() {
		return {
           
        };
	},
};
</script>

<template>
	<div class="card__join-community">
        <div class="row">
        <div class="col join-us ">
          <h6 class="card-top__title">Let's play togheter</h6>
          <h3 class="card-title">Join <span>Gamer</span> Esports to became next pro gamer today!</h3>
          <p class="description card-info"> Distinctively provide acces mutfuncto users whereas transparent
							proceses somes ncentivize eficient functionalities rather than an
							extensible archtcture services and cross</p>
          <a class="button-big white" href="#"><span>Join community</span><font-awesome-icon :icon="['fas', 'circle-play']" /></a>

        </div>
        <div class="col">
            <img class="image_players" src="../assets/01 (1).png" alt="">
        </div>
    </div>
    </div>
</template>

<style lang="scss" scoped>
@use "src/style/partial/_variables.scss" as *;

.card__join-community {
    background-image: url("../assets/bg (4).jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 1170px;
    height:417px ;
    padding: 0 30px;
 
 .row {
    justify-content: space-between;
 }

 .col {

    &.join-us {
        display:flex;
        flex-direction: column;
        gap: 20px;
        width: 482px;
        height: 308px;
        padding-top: 50px;

        .card-top__title {
           color: #6f1951; 
           font-size: 15px;
        }
        .card-title {
            text-transform: uppercase;
            font-size: 26px;
        }
    }
 }
    .image_players {
        object-position: 0;
    }
}

</style>