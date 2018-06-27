<template>
  <main class="main-container">
    <div class="sdp-container-scroll">
      <div class="content-container height100">
        <nuxt-child/>
      </div>
    </div>
  </main>
</template>
<style>
.main-container {
  position: absolute;
    top: 80px;
    left: 220px;
    right: 0;
    bottom: 0;
    overflow: hidden;
    background: #fff;
    transition: all .28s ease-out;
    will-change: transform
  }

  .sdp-container-scroll {
    position: absolute;
    width: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: all 0.2s ease;
  }

  .content-container {
    position: relative;
    padding: 0;
    min-width: 763px;
  }
</style>

