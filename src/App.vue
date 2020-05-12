<template>
  <div id="app">
    <TopMenu />
    <router-view />
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: "Comfortaa";
  src: url("./assets/fonts/Comfortaa-Regular.ttf") format("truetype");
}
@font-face {
  font-family: "ComfortaaBold";
  src: url("./assets/fonts/Comfortaa-SemiBold.ttf") format("truetype");
}
@font-face {
  font-family: "Cooper";
  src: url("./assets/fonts/Cooper Black Regular.ttf") format("truetype");
}
@font-face {
  font-family: "CooperBold";
  src: url("./assets/fonts/Cooper Std Black.ttf") format("truetype");
}
#app {
  font-family: "Comfortaa";
  strong {
    font-family: "ComfortaaBold";
  }
}
body {
  background-image: url("./assets/bg.jpg");
  background-size: cover;
}
html {
  scroll-behavior: smooth;
}
</style>

<script>
import TopMenu from "@/components/TopMenu.vue";
export default {
  components: {
    TopMenu
  }
};
</script>
