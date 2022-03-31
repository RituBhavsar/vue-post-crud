<template>
  <div class="single-post">
    <div class="blod-id">{{ singlePost.id }}</div>
    <div class="blog-title">{{ singlePost.title }}</div>
    <div class="blod-body">{{ singlePost.body }}</div>
  </div>
</template>
<script>
import axios from "axios";
import { onBeforeMount, ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";
export default {
  name: "SingleBlog",
  setup() {
    const singlePost = ref([]);
    const route = useRoute();

    onBeforeMount(() => {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then((response) => {
          singlePost.value = response.data;
        });
    });

    return {
      singlePost,
      route,
    };
  },
};
</script>