<template>
  <div class="page">
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand class="brand" to="/">IL-Tools</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" />
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/identify" :active="$route.name === 'identify'">Identification</b-nav-item>
          <b-nav-item-dropdown :class="[$route.name === 'specs-variant' ? 'active' : '']" :text="specsTitle">
            <b-dropdown-item v-for="spec in allSpecs" :key="spec.id" :to="`/specs/${spec.id}`">{{
              spec.variant
            }}</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown
            v-if="$route.name === 'specs-variant'"
            :text="`Units: ${unitOptions.find((uo) => uo.id === units).name}`"
          >
            <template v-for="opt in unitOptions">
              <b-dropdown-item :key="opt.id" v-if="units !== opt.id" @click="setUnits(opt.id)">{{
                opt.name
              }}</b-dropdown-item>
            </template>
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
import { mapGetters, mapMutations, mapState } from 'vuex';

import SPECS from '@/assets/data/specs';

export default {
  computed: {
    allSpecs() {
      return SPECS.filter((s) => s !== this.specs);
    },
    specsTitle() {
      return this.specs ? `Spec Sheet: ${this.specs.variant}` : 'Spec Sheets';
    },
    unitOptions() {
      return [
        { id: null, name: 'Default' },
        { id: 'metric', name: 'Metric' },
        { id: 'imperial', name: 'Imperial' },
      ];
    },
    ...mapState('specs', ['units']),
    ...mapGetters('specs', ['specs']),
  },
  methods: {
    onWindowResize: debounce(function () {
      this.setBreakpoint(window.innerWidth);
    }, 250),
    ...mapMutations('global', ['setBreakpoint']),
    ...mapMutations('specs', ['setUnits']),
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
