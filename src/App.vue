<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/posts">Blog</router-link>
  </div>
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800&display=swap");
body {
  font-size: 16px;
  font-family: "Raleway", sans-serif;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Raleway", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.blodlist-wrap {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
}
.blogGrid-wrap {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
}
.blodlist-wrap .title {
  font-size: 22px;
  margin-bottom: 30px;
}
.blogGrid-wrap .blogItem {
  width: 100%;
  flex: 0 0 25%;
  max-width: 25%;
  padding: 0 15px;
  margin-bottom: 30px;
}
.blodlist-wrap {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
}

.single-card-wrap .card {
  box-shadow: 0px 0px 2px 2px rgb(0 0 0 / 15%);
  border-radius: 4px;
  height: 100%;
  padding: 10px;
}
.single-card-wrap .card h4 {
  font-size: 16px;
  color: #264b78;
}
.single-card-wrap .card .blog-id {
  height: 40px;
  width: 40px;
  margin: 0 auto 20px;
  background: #264b78;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  font-size: 16px;
  font-weight: 500;
  line-height: 40px;
}
.blog-buttons button,
.add-blog button,
.add-blog-form button {
  background: transparent;
  border: 2px solid #264b78;
  padding: 4px 16px;
  border-radius: 4px;
  margin-top: 16px;
  color: #264b78;
  font-weight: 700;
  cursor: pointer;
  transition: all 400ms ease-in-out;
}
.blog-buttons button:hover,
.add-blog button:hover,
.add-blog-form button:hover {
  background: #264b78;
  color: #fff;
}
.add-blog {
  margin-bottom: 20px;
}
.add-blog-form {
  display: block;
}
.add-blog-form input:focus {
  outline: none;
}
.blog-buttons {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0 10px;
}
.add-blog-form input,
.add-blog-form textarea {
  display: block;
  margin: 0 auto;
  padding: 10px 16px;
  border: 1px solid #9f9f9f;
  margin-bottom: 16px;
  border-radius: 3px;
  width: 800px;
  font-family: "Raleway", sans-serif;
  font-size: 14px;
}
</style>
