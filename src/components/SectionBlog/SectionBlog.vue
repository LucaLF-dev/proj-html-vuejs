<script>
import CardBlog from '../SectionBlog/CardBlog.vue';

export default {
	components: {
        CardBlog,
    },
	data() {
		return {
            blogCards:[
                {
                  imgCard:"public/01 (3).jpg",
                  title:"distinctive redefine resource maximizing for",
                  nameUser:"admin",
                  date:"01 January 2022",
                  description:"Uniquely conceptuaze visionary processs airwith tactical ramatica centered qualitys vectoris with outfthebox scenario is ompelling uthoritatively generate front-end niches after one.",
                },
                {
                  imgCard:"public/01 (3).jpg",
                  title:"distinctive redefine resource maximizing for",
                  nameUser:"admin",
                  date:"01 January 2022",
                  description:"Uniquely conceptuaze visionary processs airwith tactical ramatica centered qualitys vectoris with outfthebox scenario is ompelling uthoritatively generate front-end niches after one.",
                },
            ]
        }
	},
};
</script>

<template>
	<section class="section__blog">
        <div class="section__name">
				<h4>our recent news</h4>
				<h2 class="section-title">our most popular blog posts</h2>
			</div>
		<div class="container ">
            <div class="grid">
            <CardBlog v-for="card in blogCards" :key="card" :item="card"/>
        </div>
        </div>
	

	</section>
</template>

<style lang="scss" scoped>

.section__blog {
    padding: 80px 0;
    width: 100%;
    background-image: url('src/assets/bg-blog.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    .grid{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        gap: 20px;
    }
    .section__name {
        text-align: center;
    }
    .container {
      padding: 50px 0;
    }
}

</style>
