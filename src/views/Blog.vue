<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <BlogList />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import BlogList from "@/components/BlogList.vue";

export default {
  name: "Blog",
  components: {
    // HelloWorld
    BlogList,
  },
};
</script>