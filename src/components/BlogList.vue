<template>
  <div class="blodlist-wrap">
    <div class="title">
      <h4>Blogs</h4>
    </div>
    <div class="add-blog">
      <button
        @click="
          router.push({
            name: 'AddBlog',
          })
        "
      >
        Add Blogs
      </button>
    </div>
    <div class="blogGrid-wrap">
      <blog-card
        v-for="blogItem in allPost"
        :key="blogItem.id"
        :blogItem="blogItem"
        class="blogItem"
      />
    </div>
  </div>
</template>
<script>
import axios from "axios";
import BlogCard from "./BlogCard.vue";
import { onBeforeMount, ref } from "@vue/runtime-core";
import { useRouter } from "vue-router";
export default {
  components: { BlogCard },
  name: "BlogList",
  setup() {
    const allPost = ref([]);
    const router = useRouter();

    onBeforeMount(() => {
      axios
        .get(`http://jsonplaceholder.typicode.com/posts`)
        .then((response) => {
          allPost.value = response.data;
        });
    });

    return {
      allPost,
      router,
    };
  },
};
</script>