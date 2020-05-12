<template>
  <div class="oferta">
    <div class="box-container">
      <h1>
        Sprawdź naszą
        <strong>ofertę</strong>.
      </h1>
      <h2>Szczegółowe informacje o usłudze stworzenia strony internetowej.</h2>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <a @click.prevent="makeOfertaVisible(item.id)" v-for="item in data" :key="item.id">
            <div>
              <img :src="require(`@/assets/${item.name}.png`)" :alt="item.name" />
            </div>
            <div>
              <h1 id="visible" :class="item.visible===false ? 'black' : 'red'">
                {{item.title1}}
                <br />
                {{item.title2}}
              </h1>
            </div>
          </a>
        </div>
        <div class="col show-animation">
            <Services
              v-show="item.visible"
              v-for="item in data"
              :key="item.id"
              :data="servicesData[item.id]"
            />
        </div>
      </div>
    </div>
    <div class="box-container">
      <h1>
        Tak powstaje
        <strong>Twoja strona</strong>.
      </h1>
      <h2>Zobacz poszczególne etapy powstawania strony.</h2>
    </div>
    <ProjectProgress />
    <Question title="Nie znalazłeś odpowiedzi?" subTitle="Wyślij do nas wiadomość z zapytaniem." />
    <ButtonBack />
    <Footer />
  </div>
</template>

<script>
import ProjectProgress from "@/components/oferta/ProjectProgress.vue";
import Services from "@/components/oferta/Services.vue";
import Footer from "@/components/Footer.vue";
import ButtonBack from "@/components/ButtonBack.vue";
import Question from "@/components/Question.vue";

import services from "../assets/data/services.json";
import ofertaMenu from "../assets/data/ofertaMenu.json";

export default {
  components: {
    ProjectProgress,
    Services,
    Footer,
    ButtonBack,
    Question
  },
  data() {
    return {
      data: ofertaMenu,
      servicesData: services
    };
  },
  mounted() {
    // scroll to top
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1);
    // animation after open site
    this.$anime({
      targets: ".oferta",
      opacity: [0, 1],
      duration: 1000,
      easing: "easeOutExpo"
    });
  },
  methods: {
    // select link from oferta and make it visible
    makeOfertaVisible(id) {
      this.data.forEach(item => {
        this.$anime({
          targets: ".show-animation",
          opacity: [1, 0],
          duration: 600,
          easing: "easeOutExpo"
        });
        setTimeout(() => {
          item.visible = false;
        }, 400);
      });
      setTimeout(() => {
        this.data[id].visible = !this.data[id].visible;
        this.$anime({
          targets: ".show-animation",
          opacity: [0, 1],
          duration: 600,
          easing: "easeOutExpo"
        });
      }, 400);
    }
  }
};
</script>

<style lang="scss" scoped>
.oferta {
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
.project-progress {
  margin-bottom: 100px;
}
.container {
  background-color: white;
  margin-top: 40px;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 2px 16px 0px silver;

  #image,
  .title1,
  .title2,
  .text {
    opacity: 0;
  }
  h1 {
    font-size: 24px;
  }
  p {
    text-align: justify;
  }
  a {
    cursor: pointer;
    margin: 0px;
    display: block;
    display: flex;

    div {
      flex: 1;
      margin: 20px 0;

      &:first-of-type {
        justify-content: center;
        text-align: center;
      }
      &:last-of-type {
        margin-left: -40px;
      }
      img {
        height: calc(40px + 0.6vw);
      }
      #visible {
        flex: flex-end;
        font-size: calc(10px + 0.4vw);
      }
    }
    @media (max-width: 767px) {
      div {
        margin: 6px;
        &:last-of-type {
          margin-left: calc(0px - 10vw);
        }
      }
    }
  }
}
.red {
  animation: change-to-red 1 0.3s ease-out;
  color: red;
}
.black {
  animation: change-to-black 1 0.3s ease-out;
  color: black;
}
@keyframes change-to-red {
  from {
    color: black;
  }
  to {
    color: red;
  }
}
@keyframes change-to-black {
  from {
    color: red;
  }
  to {
    color: black;
  }
}
</style>