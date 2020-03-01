<template>
  <div class="tss-slide" :style="{ backgroundColor: backgroundColor }">
    <comonent :is="component" />
  </div>
</template>

<script>
export default {
  props: {
    backgroundColor: {
      required: true
    },
    component: {
      required: true
    }
  }
};
</script>

<style lang="scss">
.tss-slide {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
