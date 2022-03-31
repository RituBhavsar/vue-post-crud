<template>
  <div class="blog-modifications">
    <form action="" class="add-blog-form">
      <input
        type="text"
        v-model="addBlogData.blogTitle"
        id="blog-title"
        placeholder="Blog Title"
      />
      <textarea
        type="text"
        v-model="addBlogData.blogBody"
        id="blog-body"
        rows="6"
        placeholder="Blog Body"
      />
      <input
        type="text"
        v-model="addBlogData.userId"
        id="user-id"
        placeholder="User ID"
      />
      <div class="modify-buttons">
        <button type="button" @click="updateBlog()" v-if="route.params.id">
          Edit Blog
        </button>
        <button type="button" @click="addBlog()" v-else>Add Blog</button>
      </div>
    </form>
  </div>
</template>
<script>
import { useRoute, useRouter } from "vue-router";
import { ref } from "@vue/reactivity";
import axios from "axios";
import { onBeforeMount } from "@vue/runtime-core";
export default {
  name: "AddBlog",
  setup() {
    const addBlogData = ref({ blogTitle: "", blogBody: "", userId: "" });
    let status = "";
    const router = useRouter();
    const route = useRoute();
    const addBlog = () => {
      let article = {
        title: addBlogData.value.blogTitle,
        body: addBlogData.value.blogBody,
        userId: addBlogData.value.userId,
      };
      axios
        .post("https://jsonplaceholder.typicode.com/posts", article)
        .then((response) => {
          status = response.status;
          console.log("rkjg", status);
          if (status == 201) {
            router.push({
              name: "Post",
            });
          }
        });
    };

    onBeforeMount(() => {
      if (route.params.id) {
        axios
          .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
          .then((response) => {
            addBlogData.value = response.data;
            addBlogData.value = {
              blogTitle: addBlogData.value.title,
              blogBody: addBlogData.value.body,
              userId: addBlogData.value.userId,
            };
          });
      }
    });

    const updateBlog = () => {
      let article = {
        title: addBlogData.value.blogTitle,
        body: addBlogData.value.blogBody,
        userId: addBlogData.value.userId,
      };
      console.log("status", article.title);
      axios
        .get(
          `https://jsonplaceholder.typicode.com/posts/${route.params.id}`,
          article
        )
        .then((response) => {
          status = response.status;
          console.log("status", status);
          if (status == 200) {
            router.push({
              name: "SinglePost",
              params: { id: route.params.id },
            });
          }
        });
    };
    return { addBlog, addBlogData, status, router, route, updateBlog };
  },
};
</script>