<template>
  <nav>
    <div class="logo">
      <router-link to="/">
        <img src="@/assets/logo.png" alt="strony" />
      </router-link>
    </div>
    <div class="top-menu">
      <router-link
        v-for="link in links"
        :key="link.id"
        :to="link.linkRouter"
        :id="`link${link.id}`"
      >{{ link.name }}</router-link>
    </div>
    <div class="mobile-nav">
      <div v-for="num in numbers" :key="num" :id="`n${num}`"></div>
      <span></span>
    </div>
    <Overlay />
  </nav>
</template>

<script>
import Overlay from "./Overlay";
export default {
  components: {
    Overlay
  },
  name: "TopMenu",
  props: {
    msg: String
  },
  data() {
    return {
      links: [
        { id: 0, linkRouter: "/", name: "Strona Główna" },
        { id: 1, linkRouter: "/oferta", name: "Oferta" },
        { id: 2, linkRouter: "/cennik", name: "Cennik" },
        { id: 3, linkRouter: "/faq", name: "FAQ" },
        { id: 4, linkRouter: "/kontakt", name: "Kontakt" }
      ],
      numbers: [0, 1, 2]
    };
  },
  mounted() {
    // menu behavior on scroll
    document.addEventListener("scroll", () => {
      let trigger = false;
      //on scroll donw more than 50px
      if (window.scrollY >= 50) {
        trigger = true;
        if (trigger === true) {
          this.$anime({
            targets: "nav",
            backgroundColor: "rgba(255,255,255,1)",
            height: "70px",
            duration: 100,
            easing: "linear",
            delay: 1000
          });
          this.$anime({
            targets: "nav > div",
            lineHeight: "70px",
            duration: 100,
            easing: "linear",
            delay: 1000
          });
          this.$anime({
            targets: "nav img",
            width: "100px",
            duration: 100,
            easing: "linear",
            delay: 1000
          });
          this.$anime({
            targets: "nav a",
            fontSize: "calc(10px + 0.5vw)",
            duration: 100,
            easing: "linear",
            delay: 1000
          });
        }
      } else {
        trigger = false;
        // on scroll default to top screen
        if (trigger === false) {
          this.$anime({
            targets: "nav",
            backgroundColor: "rgba(255,255,255,0.3)",
            height: "100px",
            duration: 100,
            easing: "linear",
            delay: 1000
          });
          this.$anime({
            targets: "nav > div",
            lineHeight: "100px",
            duration: 100,
            easing: "linear",
            delay: 1000
          });
          this.$anime({
            targets: "nav img",
            width: "120px",
            duration: 100,
            easing: "linear",
            delay: 1000
          });
          this.$anime({
            targets: "nav a",
            fontSize: "calc(14px + 0.5vw)",
            duration: 100,
            easing: "linear",
            delay: 1000
          });
        }
      }
    });

    // on hover menu links
    this.links.forEach(link => {
      document
        .getElementById(`link${link.id}`)
        .addEventListener("mouseover", () => {
          this.$anime
            .timeline()
            .add({
              targets: `#link${link.id}`,
              opacity: [1, 0],
              duration: 150,
              easing: "easeOutExpo"
            })
            .add({
              targets: `#link${link.id}`,
              opacity: [0, 1],
              duration: 150
            })
            .add({
              targets: `#link${link.id}`,
              opacity: [1, 0],
              duration: 30
            })
            .add({
              targets: `#link${link.id}`,
              opacity: [0, 1],
              duration: 30
            });
        });
    });
    // on hover mobile menu icon
    document
      .querySelector(".mobile-nav span")
      .addEventListener("mouseover", () => {
        this.numbers.forEach(num => {
          this.$anime({
            targets: `#n${num}`,
            backgroundColor: "rgb(255,0,0)",
            duration: 1000,
            easing: "easeOutExpo"
          });
        });
      });
    document
      .querySelector(".mobile-nav span")
      .addEventListener("mouseleave", () => {
        this.numbers.forEach(num => {
          this.$anime({
            targets: `#n${num}`,
            backgroundColor:
              document.getElementById("overlay").style.display === "none"
                ? "rgb(0,0,0)"
                : "rgb(255,255,255)",
            duration: 1000,
            easing: "easeOutExpo"
          });
        });
      });
  }
};
</script>

<style scoped lang="scss">
$transparent-white: rgba(255, 255, 255, 0.3);
nav {
  width: 100%;
  height: 100px;
  box-shadow: 1px 1px 4px 1px $transparent-white;
  display: flex;
  background-color: $transparent-white;
  position: fixed;
  top: 0px;
  z-index: 3;
  .logo {
    z-index: 12;
  }
  img {
    margin: 0 50px;
    width: 120px;
  }

  & > div {
    height: 100%;
    line-height: 100px;
  }

  .mobile-nav {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    opacity: 0;
    span {
      position: absolute;
      width: 50px;
      height: 40px;
      right: calc(-40px + 16vw);
      cursor: pointer;
      z-index: 12;
    }
  }

  .mobile-nav > div {
    width: 40px;
    margin: 4px 16% 4px 0;
    height: 2px;
    background-color: black;
    z-index: 11;

    &:first-of-type {
      padding-top: 0px;
    }
  }
}
.top-menu {
  flex: 1;
  text-align: center;
  font-size: calc(14px + 0.5vw);
  opacity: 0;

  a {
    margin: 0 calc(10px + 2vw);
    color: black;
    text-decoration: none;
    &.router-link-exact-active {
      color: red;
    }
  }
}
</style>
