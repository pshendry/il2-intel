<template>
  <div class="page">
    <b-container>
      <Identifier />
    </b-container>
  </div>
</template>

<script>
import '~/assets/css/styles.css';

import Identifier from '~/components/Identifier.vue';

export default {
  components: {
    Identifier,
  },
};
</script>

<style scoped>
.page {
  width: 100vw;
  height: 100vh;
  background-color: #f0e0c0;
}
</style>
