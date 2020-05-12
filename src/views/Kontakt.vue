<template>
  <div class="kontakt">
    <div class="box-container">
      <h1>
        <strong>Informacje</strong> kontaktowe.
      </h1>
      <h2>Masz pytanie? Napisz do nas.</h2>
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>Kontakt z nami:</h1>
          <p>
            <strong>Telefon: {{" "}}</strong> 787-987-778
          </p>
          <p>
            <strong>E-mail: {{" "}}</strong> admin@strony.site.pl
          </p>
        </div>
        <div class="col contact">
          <h1>Znajdź nas:</h1>
          <img
            v-for="icon in icons"
            :key="icon.id"
            :src="require(`@/assets/icons/${icon.link}.png`)"
            :alt="icon.link"
          />
        </div>
      </div>
    </div>
    <div class="box-container">
      <h1>
        Chcesz stworzyć
        <strong>stronę internetową?</strong>
        <br />
        <span>Zapraszamy do współpracy!</span>
      </h1>
    </div>
    <form method="POST" @submit.prevent="isSubmit" class="box-container">
      <!-- imię lub nazwa firmy -->
      <label>
        <span :class="inputData[0].focus ? 'focus-input' : 'blur-input'">{{ inputData[0].text }}</span>
        <input
          @focus="isFocused(inputData[0].id, $event)"
          @blur="isBlured(inputData[0].id, $event)"
          type="text"
          class="form-control"
        />
        <span
          class="error"
          v-if="inputData[0].areaValue.length <= 3 && inputData[0].areaValue !==' '"
        >{{ inputData[0].error }}</span>
      </label>
      <!-- telefon -->
      <label>
        <span :class="inputData[1].focus ? 'focus-input' : 'blur-input'">{{ inputData[1].text }}</span>
        <input
          @focus="isFocused(inputData[1].id, $event)"
          @blur="isBlured(inputData[1].id, $event)"
          type="text"
          class="form-control"
        />
        <span
          class="error"
          v-if="inputData[1].areaValue.length !== 9 && inputData[1].areaValue !==' '"
        >{{ inputData[1].error }}</span>
      </label>
      <!-- email -->
      <label>
        <span :class="inputData[2].focus ? 'focus-input' : 'blur-input'">{{ inputData[2].text }}</span>
        <input
          @focus="isFocused(inputData[2].id, $event)"
          @blur="isBlured(inputData[2].id, $event)"
          type="text"
          class="form-control"
        />
        <span
          class="error"
          v-if="inputData[2].areaValue.length <= 4 && inputData[2].areaValue !==' '"
        >{{ inputData[2].error }}</span>
      </label>
      <!-- treść wiadomości -->
      <label>
        <span :class="inputData[3].focus ? 'focus-input' : 'blur-input'">{{ inputData[3].text }}</span>
        <textarea @focus="isFocused(3, $event)" @blur="isBlured(3, $event)" class="form-control"></textarea>
        <span
          class="error"
          v-if="inputData[3].areaValue.length <= 8 && inputData[3].areaValue !==' '"
        >{{ inputData[3].error }}</span>
      </label>
      <button type="submit" class="btn btn-outline-danger px-5">Wyślij</button>
    </form>
    <ButtonBack />
    <Footer />
  </div>
</template>

<script>
import ButtonBack from "@/components/ButtonBack.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    ButtonBack,
    Footer
  },
  data() {
    return {
      icons: [
        { id: 0, link: "facebook" },
        { id: 1, link: "google-plus" },
        { id: 2, link: "linkedin" },
        { id: 3, link: "pinterest" },
        { id: 4, link: "twitter" },
        { id: 5, link: "youtube" }
      ],
      inputData: [
        {
          id: 0,
          focus: false,
          text: "Imię lub nazwa firmy",
          areaValue: " ",
          error: ""
        },
        {
          id: 1,
          focus: false,
          text: "Telefon",
          areaValue: " ",
          error: ""
        },
        {
          id: 2,
          focus: false,
          text: "E-mail",
          areaValue: " ",
          error: ""
        },
        {
          id: 3,
          focus: false,
          text: "Treść wiadomości",
          areaValue: " ",
          error: ""
        }
      ]
    };
  },
  mounted() {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1);
    this.$anime({
      targets: ".kontakt",
      opacity: [0, 1],
      duration: 1000,
      easing: "easeOutExpo"
    });
  },
  methods: {
    isFocused(id, event) {
      if (event.target.value.length <= 0) {
        this.inputData[id].focus = true;
      }
    },
    isBlured(id, event) {
      if (event.target.value.length <= 0) {
        this.inputData[id].focus = false;
      }
    },
    isSubmit($event) {
      // Validate input 'imię lub nazwa firmy'
      this.validateName($event, 0, 3, "3 znaki");
      // Validate input 'telefon'
      this.validatePhone($event);
      // Validate input 'email'
      this.validateEmail($event);
      // Validate input 'treść wiadomości'
      this.validateName($event, 3, 8, "8 znaków");
    },
    validateName(e, id, val, char) {
      // input has no characters
      if (e.target[0].value.length === 0) {
        this.inputData[
          id
        ].error = `Pole '${this.inputData[id].text}' jest wymagane.`;
        this.inputData[id].areaValue = "";
      }
      // input has some characters
      else {
        // input has less than required characters
        if (e.target[id].value.length <= val) {
          this.inputData[
            id
          ].error = `Pole '${this.inputData[id].text}' musi mieć więcej niż ${char}.`;
          this.inputData[id].areaValue = "";
        }
        // input has required characters
        this.inputData[id].areaValue = e.target[id].value;
      }
    },
    validatePhone(e) {
      // input has no characters
      if (e.target[1].value.length === 0) {
        this.inputData[1].error = `Pole '${this.inputData[1].text}' jest wymagane.`;
        this.inputData[1].areaValue = "";
      }
      // input has some characters
      else {
        // input has less or more than 9 characters
        if (e.target[1].value.length !== 9) {
          this.inputData[1].error = `Pole '${this.inputData[1].text}' musi zawierać 9 cyfrowy nr tel.`;
          this.inputData[1].areaValue = "";
        }
        // input has required characters
        else {
          // input has strings
          if (isNaN(e.target[1].value)) {
            this.inputData[1].error = `Pole ${this.inputData[1].text} musi zawierać cyfry.`;
            this.inputData[1].areaValue = "";
          }
          // input has numbers
          else {
            this.inputData[1].areaValue = e.target[1].value;
          }
        }
      }
    },
    validateEmail(e) {
      // input has no characters
      if (e.target[2].value.length === 0) {
        this.inputData[2].error = `Pole '${this.inputData[2].text}' jest wymagane.`;
        this.inputData[2].areaValue = "";
      }
      // input has some characters
      else {
        // input has less than 5 characters
        if (e.target[2].value.length <= 4) {
          this.inputData[2].error = `Pole '${this.inputData[2].text}' musi mieć więcej niż 4 znaki.`;
          this.inputData[2].areaValue = "";
        }
        // input has required characters
        else {
          // input is no email
          let emailValidate = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (emailValidate.test(e.target[2].value) === false) {
            this.inputData[2].error = `Pole ${this.inputData[2].text} nie zawiera prawidłowego adresu email.`;
            this.inputData[2].areaValue = "";
          }
          // input is email
          else {
            this.inputData[2].areaValue = e.target[2].value;
          }
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.kontakt {
  margin-top: 160px;
}
.box-container {
  margin: 60px 8% 0;
  h1 {
    font-size: calc(18px + 0.8vw);
    span {
      font-size: calc(10px + 0.8vw);
    }
  }
  h2 {
    font-weight: 100;
    font-size: 14px;
  }
}
.container {
  background-color: white;
  margin-top: 40px;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 2px 16px 0px silver;

  h1 {
    font-size: calc(16px + 1vw);
    margin-bottom: 10px;
  }
  p {
    letter-spacing: 1px;
  }
}
.contact {
  img {
    margin: 10px;
    height: 36px;
    cursor: pointer;
    &:hover {
      filter: brightness(1.2);
      animation: rotate-icon 1 0.6s ease-out;
    }
  }
}
@keyframes rotate-icon {
  from {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
  }
  to {
    transform: rotateY(0deg);
  }
}
form {
  label {
    margin-bottom: 50px;
    width: 51%;
    span {
      position: absolute;
      color: gray;
      line-height: 50px;
      padding-left: 20px;
      font-size: 14px;
    }
    input {
      height: 50px;
      width: 40vw;
      min-width: 260px;
      box-shadow: 0 0 100px 0 whitesmoke;
    }
    textarea {
      height: 160px;
      width: 60vw;
      min-width: 320px;
      box-shadow: 0 0 100px 0 whitesmoke;
    }
  }
  button {
    background-color: white;
  }
}
strong {
  font-family: ComfortaaBold;
}
.error {
  margin-top: -14px;
  color: red;
  animation: show-error 1 0.3s ease-out;
}
.focus-input {
  animation: focus 1 0.3s ease-in;
  transform: translateY(-38px);
  cursor: default;
  color: black;
}
.blur-input {
  animation: blur 1 0.3s ease-in;
  transform: translateY(0px);
  cursor: text;
  color: gray;
}
@keyframes focus {
  from {
    transform: translateY(0px);
    color: gray;
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  to {
    transform: translateY(-38px);
    color: black;
    opacity: 1;
  }
}
@keyframes blur {
  from {
    transform: translateY(-38px);
    color: black;
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    color: gray;
    opacity: 1;
  }
}
@keyframes show-error {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
}
</style>