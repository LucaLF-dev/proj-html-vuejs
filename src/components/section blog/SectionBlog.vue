<script>
import CardBlog from '../section blog/CardBlog.vue';

export default {
	components: {
        CardBlog,
    },
	data() {
		return {
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
            <CardBlog/>
        </div>
	

	</section>
</template>

<style lang="scss" scoped>

.section__blog {
    width: 100%;
 
    background-image: url('src/assets/bg-blog.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    .section__name {
        text-align: center;
    }
    .container {
        padding: 600px;
    }
}

</style>
