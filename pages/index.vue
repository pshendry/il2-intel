<template>
  <div class="page">
    <b-container>
      <Identifier />
    </b-container>
  </div>
</template>

<script>
import '~/assets/css/styles.css';

import { debounce } from 'lodash';
import { mapMutations, mapState } from 'vuex';

import Identifier from '~/components/Identifier.vue';

export default {
  components: {
    Identifier,
  },
  created() {
    this.onWindowResize();
    window.addEventListener('resize', this.onWindowResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onWindowResize);
  },
  methods: {
    onWindowResize: debounce(function() {
      this.setBreakpoint(window.innerWidth);
    }, 250),
    ...mapMutations('global', ['setBreakpoint']),
  },
};
</script>

<style scoped>
.page {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #f0e0c0;
}
</style>
