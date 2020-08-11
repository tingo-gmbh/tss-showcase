<template>
  <div class="tss-modules" id="modules">
    <img src="/images/modules.jpg" class="modules" />
    <h1 class="display-3 mb-10 text-uppercase">
      2. Module
    </h1>
  </div>
</template>

<script>
export default {
  data: () => ({})
};
</script>

<style lang="scss">
.tss-modules {
  color: #1d232b;
  position: relative;

  img {
    margin-top: -120px;
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
