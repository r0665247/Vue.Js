<template>
  <div id="app" class="justify-content-center">
    <!-- Nav tabs -->
    <ul class="nav nav-tabs" id="navId">
      <li class="nav-item">
        <router-link to="/"><a href="#tab1Id" class="nav-link active">Home</a></router-link>
      </li>

      <li class="nav-item">
        <router-link to="/form"><a href="#tab1Id" class="nav-link active">form</a></router-link>
      </li>
      <li class="nav-item">
        <router-link to="/index"><a href="#tab1Id" class="nav-link active">Indexes</a></router-link>
      </li>
    </ul>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>