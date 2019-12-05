<template>
  <div class="beer min-h-full flex justify-center">
    <img
      class="block m-auto"
      v-if="beer.labels"
      :src="beer.labels.medium"
      :alt="beer.name"
    />
    <span
      v-else
      class="text-xl text-center text-teal-400 font-black pt-20 pb-10"
    >
      {{ beer.name }}
    </span>
  </div>
</template>

<script>
export default {
  name: "Beer",
  props: {
    beer: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.beer {
  transition: all 0.2s;
  background: white;
  &:hover {
    background: #e6fffa;
  }
}
img {
  filter: grayscale(90%);
  transition: all 0.1s;
  &:hover {
    filter: grayscale(0);
  }
}
</style>
