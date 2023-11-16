<script >
import HeroComponent from '../components/HeroComponent.vue';
import SectionGameCollection from '../components/SectionGameCollection.vue';

  export default {
    components: {
     HeroComponent,SectionGameCollection,

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
   <SectionGameCollection/>
 </main>
  
</template>

<style lang="scss" scoped>

.main__content {
  width: 100%;
  min-height: calc(100vh - 150px);
  
}


</style>
