<template>
  <div class="page">
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand class="brand" to="/">IL-Tools</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" />
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/identify" :active="$route.path === '/identify'">Identification</b-nav-item>
          <b-nav-item-dropdown :class="[$route.path.startsWith('/specs') ? 'active' : '']" :text="specsTitle">
            <b-dropdown-item v-for="spec in allSpecs" :key="spec.id" :to="`/specs/${spec.id}`">{{
              spec.variant
            }}</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <nuxt />
  </div>
</template>
<script>
import '~/assets/css/styles.scss';

import { debounce } from 'lodash';
import { mapGetters, mapMutations } from 'vuex';

import SPECS from '@/assets/data/specs';

export default {
  computed: {
    allSpecs() {
      return SPECS;
    },
    specsTitle() {
      return this.$route.path.startsWith('/specs/') && this.specs ? `Spec Sheet: ${this.specs.variant}` : 'Spec Sheets';
    },
    ...mapGetters('specs', ['specs']),
  },
  methods: {
    onWindowResize: debounce(function () {
      this.setBreakpoint(window.innerWidth);
    }, 250),
    ...mapMutations('global', ['setBreakpoint']),
  },
  created() {
    this.onWindowResize();
    window.addEventListener('resize', this.onWindowResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onWindowResize);
  },
};
</script>
<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #fffde7;
}

.brand {
  font-family: 'SpecialElite', monospace;
}
</style>
