<template>
  <div :class="data.className">
    <h1>
      {{ data.titleA }}
      <br />
      {{ data.titleB }}
    </h1>
    <p>{{ data.subTitle }}</p>
    <ul>
      <li v-for="(li, key) in data.listItems" :key="key">{{ li }}</li>
    </ul>
    <p>{{ data.afterList }}</p>
  </div>
</template>

<script>
export default {
  props: ["data"]
};
</script>