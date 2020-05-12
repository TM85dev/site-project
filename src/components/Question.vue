<template>
  <div class="container question">
    <div class="row">
      <div class="col-md-9">
        <h1>{{ title }}</h1>
        <h2>{{ subTitle }}</h2>
      </div>
      <div class="col-md-3">
        <router-link to="/kontakt">
          <button class="btn btn-outline-primary">Skontaktuj się z nami</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    subTitle: String
  }
};
</script>

<style lang="scss" scoped>
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