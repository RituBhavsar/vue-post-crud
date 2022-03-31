<template>
  <div class="single-card-wrap">
    <div class="card">
      <div class="blog-id">{{ blogItem.id }}</div>
      <h4>{{ blogItem.title }}</h4>
      <div class="blog-buttons">
        <!-- <router-link to="" @click="this.$router.push({ name: 'details' })"
          >View More</router-link
        > -->
        <button
          @click="
            router.push({
              name: 'SinglePost',
              params: { id: blogItem.id },
            })
          "
        >
          View More
        </button>
        <button
          @click="
            router.push({
              name: 'EditBlog',
              params: { id: blogItem.id },
            })
          "
        >
          Edit Post
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
export default {
  name: "BlogCard",
  props: {
    blogItem: Object,
  },
  setup() {
    const router = useRouter();

    return { router };
  },
};
</script>