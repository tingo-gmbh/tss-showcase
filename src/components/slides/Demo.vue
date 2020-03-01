<template>
  <div class="tss-demo" id="demo">
    <img src="/images/demo.jpg" />
    <h1 class="display-4 mb-8">
      6. Demo
    </h1>
  </div>
</template>

<script>
export default {
  data: () => ({})
};
</script>

<style lang="scss">
.tss-demo {
  color: #1d232b;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
  }

  h1 {
    position: absolute;
    top: 10%;
    left: 5%;
    z-index: 100;
    padding: 10px 30px;
    background: #1b3d61;
    color: white;
  }
}
</style>
