<template>
  <div class="home">
    <h1 id="title">
      <span v-for="(letter, k) in title.slice(0, 8)" :key="k" id="tworzymy">{{ letter }}</span>
      <br />
      <span v-for="(letter, k) in title.slice(9, 15)" :key="k + 9" id="strony">{{ letter }}</span>
    </h1>
    <h2 id="after-title">
      <span v-for="(letter, k) in title.slice(16, 50)" :key="k + 16" id="subtitle">{{ letter }}</span>
      <span v-for="(letter, k) in title.slice(50)" :key="k + 50" id="loop">{{ letter }}</span>
    </h2>
    <div class="arrow">
      <img src="../assets/arrow.png" alt class="img-arrow" />
      <img src="../assets/arrow.png" alt class="img-arrow" />
      <img src="../assets/arrow.png" alt class="img-arrow" />
    </div>
    <div class="box-container">
      <h1>Przygotuj się na rozwój swojej firmy!</h1>
      <h2>
        Skupiamy się na projektowaniu stron internetowych, które dają realne
        zyski.
      </h2>
    </div>
    <div class="container">
      <div class="row">
        <div v-for="content in data" :key="content.id" class="col-lg-4">
          <img
            v-lazy="require(`../assets/${content.name}.png`)"
            :alt="content.name"
            :id="`image${content.id}`"
          />
          <h1>
            <span class="title1">{{ content.title1 }}</span>
            <br />
            <span class="title2">{{ content.title2 }}</span>
          </h1>
          <p class="text">{{ content.text }}</p>
        </div>
      </div>
    </div>
    <Question
      title="Chcesz stworzyć stronę bądź masz pytania?"
      subTitle="Tworzymy, aby sprostać Twoim potrzebom."
    />
    <ButtonBack />
    <Footer />
  </div>
</template>

<script>
import ButtonBack from "@/components/ButtonBack.vue";
import Footer from "@/components/Footer.vue";
import Question from "@/components/Question.vue";

import mainData from "../assets/data/ofertaMainSite.json";

export default {
  components: {
    ButtonBack,
    Footer,
    Question
  },
  data() {
    return {
      title: [],
      data: mainData
    };
  },
  beforeMount() {
    // split title
    const word = "tworzymy strony pomagamy w rozwoju twojego biznesu|";
    this.title = word.split("");

    // scroll top after load site
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1);
  },
  mounted() {
    // showing 'strona glowna'
    this.$anime({
      targets: ".home",
      opacity: [0, 1],
      duration: 1000,
      easing: "easeOutExpo"
    });

    // title animation
    this.$anime({
      targets: "#tworzymy",
      opacity: 1,
      duration: 100,
      easing: "linear",
      delay: this.$anime.stagger(200)
    });
    setTimeout(() => {
      this.$anime({
        targets: "#strony",
        opacity: 1,
        duration: 100,
        easing: "linear",
        delay: this.$anime.stagger(200)
      });
    }, 1800);

    // under title animation
    setTimeout(() => {
      this.$anime({
        targets: "#subtitle",
        opacity: 1,
        duration: 100,
        easing: "linear",
        delay: this.$anime.stagger(100)
      });
    }, 3600);
    setTimeout(() => {
      this.$anime({
        targets: "#loop",
        opacity: 1,
        duration: 600,
        delay: 300,
        loop: true,
        easing: "easeOutExpo"
      });
    }, 7000);

    // arrow animation
    setTimeout(() => {
      this.$anime({
        targets: ".arrow img",
        opacity: 1,
        loop: true,
        easing: "easeInOutExpo",
        duration: 1000,
        delay: this.$anime.stagger(200)
      });
    }, 1000);

    // scroll down when clicked arrow
    const imgArrow = document.querySelectorAll(".img-arrow");
    imgArrow.forEach(arrow => {
      arrow.addEventListener("click", () => {
        document.querySelector(".img-arrow:last-of-type").scrollIntoView({
          behavior: "smooth"
        });
      });
    });
  }
};
</script>

<style lang="scss" scoped>
.home {
  background-image: url("../assets/home.jpg");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: calc(400px + 30vw);
  position: absolute;
  top: 0px;
  box-shadow: inset 0 -40px 20px white, 0 60px 20px 10px white;
}
#title {
  margin-top: calc(180px + 12vw);
  font-size: calc(14px + 1.4vw);
}
#after-title {
  margin-top: calc(10px + 3vw);
  font-size: calc(4px + 0.8vw);
}
#title,
#after-title {
  font-family: "Cooper";
  text-transform: uppercase;
  text-align: center;
  color: white;

  span {
    opacity: 0;
  }
}
.arrow {
  width: 100%;
  text-align: center;
  img {
    display: block;
    margin: 0 auto;
    padding: 2px 0;
    width: calc(26px + 2vw);
    opacity: 0;
    cursor: pointer;
    filter: brightness(0%);

    &:hover {
      filter: brightness(500%);
      animation: arrow-hover 1 0.2s ease-out;
    }
    &:first-of-type {
      margin-top: calc(100px + 10vw);
    }
  }
}
@keyframes arrow-hover {
  from {
    filter: brightness(0%);
  }
  to {
    filter: brightness(500%);
  }
}
.box-container {
  margin: 60px 8%;
  h1 {
    font-size: calc(18px + 1vw);
  }
  h2 {
    font-weight: 100;
    font-size: calc(10px + 0.3vw);
  }
}
.container {
  background-color: white;
  margin-top: 40px;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 2px 16px 0px silver;

  img {
    margin: 40px 0 20px;
    height: 120px;
    opacity: 0;
    transform: translateY(0);
  }
  img[lazy="loaded"] {
    animation: loaded-img 1 0.6s ease-out;
    opacity: 1;
    transform: translateY(0);
  }
  @keyframes loaded-img {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  h1 {
    font-size: 24px;
  }
  p {
    text-align: justify;
  }
}
.question {
  margin-top: 80px;

  h2 {
    font-size: 14px;
  }
  button {
    border-radius: 10px;
    margin-top: 16px;
  }
}
</style>
