<template>
  <div class="beer-detail" v-if="beer">
    <div class="flex">
      <div class="w-1/2">
        <h1 class="text-4xl font-black">
          {{ beer.nameDisplay }}
        </h1>
        <span class="block text-xl text-teal-400">
          {{ beer.style.name }}
        </span>
        <p>
          {{ beer.style.description }}
        </p>
      </div>
      <div class="w-1/2">
        <img v-if="beer.labels" :src="beer.labels.large" :alt="beer.name" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      id: this.$route.params.id
    };
  },
  computed: {
    beer() {
      return this.$store.state.beers.filter(beer => beer.id === this.id)[0];
    }
  }
};
</script>

<style lang="scss"></style>
