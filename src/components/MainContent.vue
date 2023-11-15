<script >
import HeroComponent from '../components/HeroComponent.vue';
  
  export default {
    components: {
     HeroComponent,

    },
    data() {
       return {

       };
    },
  }
</script>

<template>
 <main class="main__content">
   <HeroComponent/>
 </main>
  
</template>

<style lang="scss" scoped>

.main__content {
  width: 100%;
  min-height: calc(100vh - 150px);
  
}


</style>
