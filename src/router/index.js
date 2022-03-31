import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Blog from '../views/Blog.vue';
import SingleBlog from '../views/SingleBlog.vue';
import AddBlog from '../components/AddBlog.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/posts',
    name: 'Post',
    component: Blog,
  },
  {
    path: '/posts/:id',
    name: 'SinglePost',
    component: SingleBlog,
  },
  {
    path: '/posts/addpost',
    name: 'AddBlog',
    component: AddBlog,
  },
  {
    path: '/posts/:id/edit',
    name: 'EditBlog',
    component: AddBlog,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
