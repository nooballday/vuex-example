<template>
  <div id="app">
    <h1>{{welcomeMessage}}</h1>
    <SecondText />
    <Button />
    <button v-on:click="addTwo">Increment Add 2</button>
  </div>
</template>

<script>
import Button from "./components/Button";
import SecondText from "./components/SecondText";
export default {
  name: "app",
  computed: {
    welcomeMessage() {
      return this.$store.getters["g/welcome1"];
    }
  },
  components: {
    Button,
    SecondText
  },
  methods: {
    addTwo(){
      this.$store.dispatch('g/incrementTwice')
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
