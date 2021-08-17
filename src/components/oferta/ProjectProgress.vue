<template>
  <div class="container project-progress">
    <div>
      <div>
        <div v-for="item in data.slice(0,2)" :key="item.id">
          <img
            v-lazy="require(`@/assets/icons/${item.title.toLowerCase()}.jpg`)"
            :alt="item.title.toLowerCase()"
            id="image"
          />
          <p>
            <strong id="title">{{ item.title }}</strong>
          </p>
          <p id="text">{{ item.text }}</p>
        </div>
      </div>
      <div class="number">
        <div>1</div>
        <div>3</div>
        <div></div>
      </div>
      <div class="number">
        <div>2</div>
        <div>4</div>
      </div>
      <div>
        <div v-for="item in data.slice(2)" :key="item.id">
          <img
            v-lazy="require(`@/assets/icons/${item.title.toLowerCase()}.jpg`)"
            :alt="item.title.toLowerCase()"
            id="image"
          />
          <p>
            <strong id="title">{{ item.title }}</strong>
          </p>
          <p id="text">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import projectData from "../../assets/data/projectData.json";
export default {
  data() {
    return {
      data: projectData
    };
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
@mixin block {
  display: flex;
  flex-direction: column;
  div {
    font-size: 20px;
    font-weight: bolder;
    background-color: red;
    color: white;
    width: calc(30px + 1vw);
    height: calc(30px + 1vw);
    line-height: calc(30px + 1vw);
  }
}
.container {
  font-size: calc(10px + 0.36vw);
  background-color: white;
  margin-top: 40px;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 2px 16px 0px silver;
  & > div {
    display: flex;
    justify-content: center;
    & > div {
      text-align: center;

      &:first-of-type {
        padding-right: 10px;
        div {
          padding-bottom: 40px;
        }
      }
      &:nth-of-type(2) {
        @include block;
        border-right: 1px solid red;
        justify-content: space-between;
        div {
          &:last-of-type {
            opacity: 0;
          }
        }
      }
      &:nth-of-type(3) {
        @include block;
        border-left: 1px solid red;
        justify-content: space-around;
      }
      &:last-of-type {
        padding-left: 10px;
        padding-top: 100px;
        padding-bottom: 40px;
        div {
          padding-bottom: 40px;
        }
      }
      img {
        width: calc(100px + 10vw);
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
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
</style>