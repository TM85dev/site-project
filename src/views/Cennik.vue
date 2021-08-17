<template>
  <div class="cennik">
    <div class="box-container">
      <h1>
        <strong>Cennik</strong> standardowych pakietów.
      </h1>
      <h2>Wybierz jeden z pakietów już dziś.</h2>
    </div>
    <div class="price">
      <div id="one-page">
        <h1>One Page</h1>
        <div>
          <span>590</span>
          <span>zł</span>
          <span>netto</span>
        </div>
        <p>ilość podstron 1 strona</p>
        <p>miejsce dla strony na serwerze 1 rok</p>
        <p>domena .pl lub regonalna 1 rok</p>
        <p>certyfikat SSL 1 rok</p>
        <p>ilość poprawek 2 poprawki</p>
        <p>gwarancja 60 dni</p>
        <button class="btn btn-outline-danger">ZAMÓW TERAZ</button>
      </div>
      <div>
        <h1>Basic</h1>
        <div>
          <span>790</span>
          <span>zł</span>
          <span>netto</span>
        </div>
        <p>ilość podstron do 3 podstron</p>
        <p>miejsce dla strony na serwerze 1 rok</p>
        <p>domena .pl lub regonalna 1 rok</p>
        <p>certyfikat SSL 1 rok</p>
        <p>ilość poprawek 3 poprawki</p>
        <p>gwarancja 60 dni</p>
        <button class="btn btn-outline-danger">ZAMÓW TERAZ</button>
      </div>
      <div id="professional">
        <h1>Professional</h1>
        <div>
          <span>990</span>
          <span>zł</span>
          <span>netto</span>
        </div>
        <p>ilość podstron 7 podstron</p>
        <p>miejsce dla strony na serwerze 1 rok</p>
        <p>domena .pl lub regonalna 1 rok</p>
        <p>certyfikat SSL 1 rok</p>
        <p>ilość poprawek 4 poprawki</p>
        <p>gwarancja 60 dni</p>
        <button class="btn btn-outline-danger">ZAMÓW TERAZ</button>
      </div>
    </div>
    <Question
      title="Potrzebujesz innej specyfikacji?"
      subTitle="Wyślij do nas wiadomość z zapytaniem."
    />
    <ButtonBack />
    <Footer />
  </div>
</template>

<script>
import ButtonBack from "@/components/ButtonBack.vue";
import Footer from "@/components/Footer.vue";
import Question from "@/components/Question.vue";
export default {
  components: {
    ButtonBack,
    Footer,
    Question
  },
  mounted() {
    // scroll to top
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1);
    // animation after open site
    this.$anime({
      targets: ".cennik",
      opacity: [0, 1],
      duration: 1000,
      easing: "easeOutExpo"
    });
    // animation after hover price block
    const hoverPrice = (target, value) => {
      const el = document.getElementById(target);
      // hover
      el.addEventListener("mouseenter", () => {
        this.$anime({
          targets: el,
          keyframes: [
            { translateX: value, delay: 0, easing: "easeOutExpo" },
            { zIndex: 2, duration: 300 },
            { translateX: 0, delay: 0, easing: "easeInExpo" }
          ],
          duration: 600
        });
      });
      // unhover
      el.addEventListener("mouseleave", () => {
        this.$anime({
          targets: el,
          keyframes: [
            { translateX: value, delay: 0, easing: "easeOutExpo" },
            { zIndex: 0, duration: 300 },
            { translateX: 0, delay: 0, easing: "easeInExpo" }
          ],
          duration: 600
        });
      });
    };
    hoverPrice("one-page", -50);
    hoverPrice("professional", 50);
  }
};
</script>

<style lang="scss" scoped>
$gray: #898989;
.cennik {
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
.container {
  background-color: white;
  margin-top: 40px;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 2px 16px 0px silver;
}
.price {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  & > div {
    border: 2px solid black;
    box-shadow: 0px 10px 20px 10px $gray;
    border-radius: 50px;
    padding: 0px 30px 50px;

    &:first-of-type,
    &:last-of-type {
      background-color: #ebecec;
    }
    &:nth-of-type(2) {
      background-color: $gray;
      z-index: 1;
      margin: 0 -26px;
      padding: 0px 40px 50px;
      color: white;
      h1 {
        font-size: calc(10px + 1.2vw);
        padding-bottom: 10px;
      }
      button {
        margin-top: 30px;
        font-size: calc(7px + 0.6vw);
        padding: 12px calc(2px + 0.6vw);
        width: calc(66px + 6vw);
      }
      p {
        font-size: calc(10px + 0.4vw);
      }
    }
    h1 {
      font-size: calc(10px + 1vw);
      margin-top: 20px;
    }
    p {
      font-size: calc(10px + 0.4vw);
    }
    div {
      position: relative;
      font-family: "CooperBold";
      margin: -20px 0 20px 0;
    }
    div span:first-of-type {
      font-size: calc(24px + 3vw);
    }
    div span:nth-of-type(2) {
      position: absolute;
      bottom: calc(0px + 1vw);
      @media screen and (max-width: 1200px) {
        right: calc(-46px + 9vw);
      }
      right: calc(0px + 3vw);
      font-size: calc(20px + 1vw);
    }
    div span:last-of-type {
      position: absolute;
      bottom: calc(-10px + 0.1vw);
      @media screen and (max-width: 1200px) {
        right: calc(-46px + 9vw);
      }
      right: calc(0px + 3vw);
      font-size: calc(18px + 0.6vw);
    }
    button {
      margin-top: 20px;
      background-color: white;
      font-size: calc(6px + 0.6vw);
      padding: 10px calc(4px + 0.6vw);
      border-radius: 20px;
      &:hover {
        background-color: red;
        font-weight: bold;
      }
    }
  }
}
</style>