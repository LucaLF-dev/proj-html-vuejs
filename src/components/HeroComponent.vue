<script >

  
  export default {
    components: {
      

    },
    data() {
       return {

       };
    },
  }
</script>

<template>
   <section class="section__hero" >
     <div class="container-max">
       <div class="row">
        <div class="card">
          <h1 class="card-title">online game</h1>
          <h3 class="card-subtitle">genuine money transaction </h3>
          <p class="card-description"> Assertively Communicate An Expanded Array Of MindShare Rather Than Diverse Technologies For Magnetic Application Eamlessly Virtual Then Conveniently Monetize Synergistic Human Capital</p>
          <a class="button-big white" href="#"><font-awesome-icon :icon="['fas', 'user']" /><span>Join us today</span></a>
        </div>
       </div>
     </div>

   </section>
  
</template>

<style lang="scss" scoped>
 
 .section__hero{
  height: 939px;
  background-image: url('../assets/bg.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 150px ;
 }

 .row {
  padding-top: 90px;

 .card {

  width: 580px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;

  .card-title {
    font-size: 76px;
   text-transform: uppercase;
   letter-spacing: 1px;
  }

  .card-subtitle {
    font-size: 33px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
 }
 }
</style>
