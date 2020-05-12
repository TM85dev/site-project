<template>
  <div class="faq">
    <div class="box-container">
      <h1>
        <strong>FAQ</strong> - najczęściej zadawane pytania.
      </h1>
      <h2>Dowiedz się więcej o naszej ofercie.</h2>
    </div>
    <div class="container">
      <div class="row faq-list" v-for="item in data" :key="item.id">
        <a
          href="#"
          @click.prevent="isVisible(item.id)"
          :class="`${item.visible ? 'active-faq' : 'deactive-faq'}`"
        >
          <img :src="imgSrc[item.id]" />
          <span>{{ item.title }}</span>
        </a>
        <div
          v-if="item.textVisible"
          :class="`container ${item.visible ? 'showing-text' : 'hiding-text'}`"
        >
          <div class="row">{{ item.text }}</div>
        </div>
        <hr />
      </div>
    </div>
    <Question title="Nie znalazłeś odpowiedzi?" subTitle="Wyślij do nas wiadomość z zapytaniem." />
    <ButtonBack />
    <Footer />
  </div>
</template>

<script>
import ButtonBack from "@/components/ButtonBack.vue";
import Footer from "@/components/Footer.vue";
import Question from "@/components/Question.vue";

import faqData from "../assets/data/faq.json";
export default {
  components: {
    ButtonBack,
    Footer,
    Question
  },
  data() {
    return {
      data: faqData,
      imgSrc: []
    };
  },
  mounted() {
    // adding image to array
    for (let i = 0; i <= this.data.length; i++) {
      this.imgSrc.push(require("../assets/icons/plus.png"));
    }
    // scroll to top
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1);
    // animation after open site
    this.$anime({
      targets: ".faq",
      opacity: [0, 1],
      duration: 1000,
      easing: "easeOutExpo"
    });
  },
  methods: {
    // toggle images 'plus'/'minus'
    isVisible(id) {
      this.data[id].visible = !this.data[id].visible;
      this.data[id].visible === true
        ? (this.imgSrc[id] = require("../assets/icons/minus.png"))
        : (this.imgSrc[id] = require("../assets/icons/plus.png"));
      setTimeout(() => {
        this.data[id].textVisible = !this.data[id].textVisible;
      }, 300);
    }
  }
};
</script>

<style lang="scss" scoped>
.faq {
  margin-top: 160px;
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
.faq > .container {
  background-color: white;
  margin-top: 40px;
  padding: 80px;
  border-radius: 10px;
  box-shadow: 0px 2px 16px 0px silver;
}
.faq-list {
  hr {
    width: 100%;
    margin: 30px 5%;
  }
  .container {
    margin: 0 4%;
    padding-bottom: 20px;
    div {
      margin-top: 20px;
    }
  }
  .showing-text {
    margin-top: 20px;
    animation: show 1 0.3s ease-out;
  }
  .hiding-text {
    animation: hide 1 0.3s ease-out;
  }
  @keyframes show {
    from {
      transform: translateY(-20px);
      opacity: 0;
      height: auto;
    }
    to {
      transform: translateY(0px);
      opacity: 1;
      height: auto;
    }
  }
  @keyframes hide {
    from {
      transform: translateY(0px);
      opacity: 1;
      height: auto;
    }
    to {
      transform: translateY(-20px);
      opacity: 0;
      height: auto;
    }
  }
  a {
    display: flex;
    align-items: center;
    color: black;
    text-decoration: none;

    &.active-faq {
      animation: color-red 1 0.3s ease-out;
      color: red;
    }
    &.deactive-faq {
      animation: color-black 1 0.3s ease-out;
      color: black;
    }
    @keyframes color-red {
      from {
        color: black;
      }
      to {
        color: red;
      }
    }
    @keyframes color-black {
      from {
        color: red;
      }
      to {
        color: black;
      }
    }
    img {
      width: calc(40px + 0.2vw);
    }
    span {
      display: table-cell;
      vertical-align: middle;
      font-size: calc(16px + 0.2vw);
      padding-left: 20px;
    }
  }
}
.container.question {
  margin-top: 80px;
  padding: 30px;

  h1 {
    font-size: 32px;
  }
  h2 {
    font-size: 14px;
  }
  button {
    border-radius: 10px;
    margin-top: 16px;
  }
}
</style>