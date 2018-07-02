<template>
  <section>
      <Header/>
      <Menu/>
      <Main/>
  </section>
</template>

<script>
import Header from "~/components/Header.vue";
import Menu from "~/components/Menu.vue";
import Main from "~/components/Main.vue";

export default {
  mounted() {},
  data() {
    return {};
  },
  methods: {},
  components: {
    Header,
    Menu,
    Main
  }
};
</script>

<style lang="postcss">
</style>
