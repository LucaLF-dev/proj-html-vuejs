<script >
import HeaderPage from './components/HeaderPage.vue';
import HeroComponent from './components/HeroComponent.vue';
import MainContent from './components/MainContent.vue';
import FooterPage from './components/FooterPage.vue';
  
  export default {
    components: {
      HeaderPage,HeroComponent,MainContent,FooterPage,

    },
    data() {
       return {

       };
    },
  }
</script>

<template>
  <HeaderPage/>
  <HeroComponent/>
  <MainContent/>
  <FooterPage/>


  
</template>

<style lang="scss">
@use "./style/general.scss";


</style>
