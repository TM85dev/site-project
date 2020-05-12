<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col logo">
          <router-link to="/">
            <img src="@/assets/logo.png" alt="strony" />
          </router-link>
        </div>
        <div class="col contact">
          <img
            v-for="icon in icons"
            :key="icon.id"
            :src="require(`@/assets/icons/${icon.link}.png`)"
            :alt="icon.link"
          />
          <p>
            Wyślij nam wiadomość
            <a href="#">admin@strony.site.pl</a>
          </p>
        </div>
      </div>
      <hr />
      <div class="container copyright">Copyright all right reserved</div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        { id: 0, link: "facebook" },
        { id: 1, link: "google-plus" },
        { id: 2, link: "linkedin" },
        { id: 3, link: "pinterest" },
        { id: 4, link: "twitter" },
        { id: 5, link: "youtube" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.logo {
  margin: calc(40px + 4vw) 0 calc(0px + 2vw) 0;

  img {
    margin: 0 2%;
    width: 120px;
  }
}
.contact {
  margin: calc(20px + 4.4vw) 0 calc(0px + 2vw) 0;
  text-align: right;

  img {
    margin: 10px;
    height: 30px;
    filter: grayscale(1);
    cursor: pointer;
    &:hover {
      filter: grayscale(0);
    }
  }
}
.copyright {
  margin: 40px 0;
  color: rgb(151, 151, 151);
}
hr {
  border-top: 2px solid rgba(0, 0, 0, 0.1);
}
footer {
  background-image: url("../assets/footer.png");
  background-size: calc(500px + 26vw);
  background-repeat: no-repeat;
  background-position: center bottom;
}
</style>