<template>
  <div @click="upScrolling()" class="button-back">
    <img src="@/assets/arrow.png" alt />
  </div>
</template>

<style lang="scss">
.button-back {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: rgba(250, 0, 0, 0.7);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 4px 1px silver;
  cursor: pointer;
  display: none;
  z-index: 1;

  img {
    transform: rotate(180deg);
    filter: brightness(600%);
    width: 50px;
    height: 40px;
  }
}
</style>

<script>
import $ from "jquery";
export default {
  mounted() {
    const buttonBack = $(".button-back");
    document.addEventListener("scroll", () => {
      if (window.scrollY >= 50) {
        buttonBack.fadeIn(400);
      } else {
        buttonBack.fadeOut(400);
      }
    });
  },
  methods: {
    upScrolling() {
      window.scrollTo(0, 0);
    }
  }
};
</script>
