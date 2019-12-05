<template>
  <div class="flex justify-center mt-20">
    <div id="app" class="w-3/4">
      <header>
        <router-link to="/">
          <h2 class="text-6xl text-teal-400 font-black mb-20">BIER</h2>
        </router-link>
      </header>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("getBeers");
  }
};
</script>

<style lang="scss">
@import url("./assets/css/output.css");
</style>
