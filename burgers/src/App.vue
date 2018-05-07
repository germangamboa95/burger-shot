<template>
  <div id="app">
    
  <nav>
    <div class="nav-wrapper deep-orange darken-3">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </div>
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
  text-align: center;
  color: #2c3e50;
  background-image: url('https://images.pexels.com/photos/103886/pexels-photo-103886.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  height: 100%;
}
</style>
