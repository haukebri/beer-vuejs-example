<template>
  <div class="home">
    <div class="beers-list container flex flex-wrap">
      <router-link
        v-for="(beer, index) in beers"
        :key="index"
        :to="`/beer/${beer.id}`"
        class="flex-shrink-0 w-1/5 m-2 flex-grow"
      >
        <beer :beer="beer" />
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Beer from "@/components/Beer";

export default {
  name: "home",
  components: {
    Beer
  },
  computed: {
    beers() {
      return this.$store.state.beers;
    }
  }
};
</script>
