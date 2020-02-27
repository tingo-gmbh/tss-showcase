<template>
  <div class="tss-keyfacts" id="keyfacts">
    <section>
      <h1>Key Facts!</h1>
    </section>

    <!-- This section will reveal itself each time it's scrolled into view -->
    <section v-scroll-reveal.reset>
      <h1>Tada!</h1>
    </section>

    <!-- Element-specific configuration options can be passed like this -->
    <section
      v-scroll-reveal.reset="{ delay: 250, distance: '500px', origin: 'left' }"
    >
      <h1>Slightly late tada!</h1>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.tss-keyfacts {
  padding-top: 64px;
}
</style>
