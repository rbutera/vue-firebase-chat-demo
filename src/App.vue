<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
@font-face {
  font-family: system;
  font-style: normal;
  font-weight: 300;
  src: local('.SFNSText-Light'), local('.HelveticaNeueDeskInterface-Light'),
    local('.LucidaGrandeUI'), local('Ubuntu Light'), local('Segoe UI Light'),
    local('Roboto-Light'), local('DroidSans'), local('Tahoma');
}

#app {
  font-family: 'system';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app h1,
#app h2,
#app h3,
#app h4,
#app h5,
#app h6 {
  font-weight: 600;
  letter-spacing: 1px;
}
</style>
