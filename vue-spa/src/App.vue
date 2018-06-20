<template>
  <div id="app">
    <nav>
      <router-link to="/" exact>Home</router-link>
      <router-link to="/product">Product</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin: 60px 0 0 30px;
}
.router-link-active{font-weight: bold;}
</style>
