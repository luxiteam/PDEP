<template>
  <section class="container">
    <div>
      <Header/>
      <Menu/>
      <Main/>
    </div>
  </section>
</template>

<script>
import Header from '~/components/Header.vue'
import Menu from '~/components/Menu.vue'
import Main from '~/components/Main.vue'

export default {
  components: {
    Header,
    Menu,    
    Main
  }
}
</script>

<style>
 
</style>
