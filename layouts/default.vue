<template>
  <div class="page">
    <b-navbar class="navbar" toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand class="brand" to="/">IL-Tools</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" />
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/identify" :active="$route.name === 'identify'">Identification</b-nav-item>
          <b-nav-item-dropdown
            :class="['specs-dropdown', $route.name === 'specs-variant' ? 'active' : '']"
            :text="specsTitle"
          >
            <b-dropdown-item v-for="spec in allSpecs" :key="spec.id" :to="`/specs/${spec.id}`">
              {{
              spec.variant
              }}
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <template v-if="$route.name === 'specs-variant'">
            <b-nav-item-dropdown :text="`Units: ${unitOptions.find((uo) => uo.id === units).name}`">
              <template v-for="opt in unitOptions">
                <b-dropdown-item :key="opt.id" v-if="units !== opt.id" @click="setUnits(opt.id)">
                  {{
                  opt.name
                  }}
                </b-dropdown-item>
              </template>
            </b-nav-item-dropdown>
            <b-button
              class="print-button"
              variant="primary"
              @click="onPrintButtonClick"
              title="Print"
            >
              <icon icon="print" />
            </b-button>
          </template>
          <b-button v-b-modal.modal-about class="about-button" variant="primary" title="About">
            <icon icon="question" />
          </b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <nuxt />
    <b-modal id="modal-about" ok-only title="About IL-Tools" size="lg">
      <p>
        Tools for flying in
        <a
          href="https://il2sturmovik.com/about"
          target="_blank"
          rel="noreferrer noopener"
        >IL-2 Sturmovik</a>!
      </p>
      <p>
        Send bug reports, suggestions or other comments to
        <a href="mailto:admin@ijj.li">admin@ijj.li</a>.
      </p>
      <p>
        <strong>Author:</strong> Polendri
      </p>
      <p>
        <strong>Data sources:</strong>
      </p>
      <ul>
        <li>
          <a
            href="https://forum.il2sturmovik.com/topic/25993-aircraft-flight-and-technical-specifications-and-operational-details/"
          >1C Game Studios Aircraft Technical Specifications</a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCwV5RLX7mkaDy5gTIiuwGmg"
          >The Air Combat Tutorial Library</a> (procedure text/videos)
        </li>
      </ul>
    </b-modal>
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
      return this.specs ? SPECS.filter((s) => s !== this.specs.id) : SPECS;
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
    ...mapState('specs', ['specs', 'units']),
  },
  methods: {
    onPrintButtonClick() {
      window.print();
    },
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

.print-button svg {
  width: 20px;
}

.about-button svg {
  width: 16px;
}

.specs-dropdown ::v-deep ul {
  max-height: 256px;
  overflow-y: auto;
}

@media print {
  .page {
    background-color: transparent;
  }

  .navbar {
    display: none;
  }
}
</style>
