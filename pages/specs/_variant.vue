<template>
  <b-overlay :show="loading">
    <div v-if="specs" class="specs-page">
      <div class="specs-page__title">
        <h2>Specifications and Operational Details: {{ specs.variant }}</h2>
      </div>
      <div class="specs-page__section1">
        <div class="specs-page__card specs-page__chars-card">
          <flight-characteristics-card />
        </div>
        <div class="specs-page__card specs-page__engine-card">
          <engine-card />
        </div>
        <div class="specs-page__card specs-page__load-card">
          <load-card />
        </div>
        <div class="specs-page__card specs-page__armament-card">
          <armament-card />
        </div>
      </div>
      <div class="specs-page__card specs-page__features-card">
        <features-card />
      </div>
      <div class="specs-page__section2">
        <div
          v-for="procedure in procedures"
          :key="procedure.id"
          :class="`specs-page__card specs-page__${procedure.id}-card`"
        >
          <procedure-card
            :name="procedure.name"
            :icon="procedure.icon"
            :steps="specs.procedures[procedure.id]"
            :training-video="specs.trainingVideos[procedure.id]"
          />
        </div>
      </div>
    </div>
    <div v-else class="specs-loading-content"></div>
  </b-overlay>
</template>
<script>
import Vue from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';

import ArmamentCard from '@/components/specs/ArmamentCard';
import EngineCard from '@/components/specs/EngineCard';
import FeaturesCard from '@/components/specs/FeaturesCard';
import LoadCard from '@/components/specs/LoadCard';
import ProcedureCard from '@/components/specs/ProcedureCard';
import FlightCharacteristicsCard from '@/components/specs/FlightCharacteristicsCard';

export default {
  components: { ArmamentCard, EngineCard, FeaturesCard, LoadCard, ProcedureCard, FlightCharacteristicsCard },
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    procedures() {
      return [
        {
          id: 'engineStart',
          name: 'Engine start procedure',
          icon: 'cogs',
        },
        {
          id: 'takeoff',
          name: 'Takeoff procedure',
          icon: 'plane-departure',
        },
        {
          id: 'landing',
          name: 'Landing procedure',
          icon: 'plane-arrival',
        },
      ];
    },
    ...mapState('specs', ['specs']),
  },
  watch: {
    specs(value) {
      Vue.nextTick(() => this.loading = !value);
    },
  },
  methods: {
    ...mapActions('specs', ['setVariant']),
    ...mapMutations('specs', ['reset']),
  },
  created() {
    this.setVariant(this.$route.params.variant);
  },
  beforeDestroy() {
    this.reset();
  },
};
</script>
<style lang="scss" scoped>
.specs-loading-content {
  width: 100%;
  height: calc(100vh - 56px);
}

.specs-page {
  display: grid;
  padding: 30px;
  grid:
    'title' auto
    'section1' auto
    'features' auto
    'section2' auto
    / 1fr;
  gap: 30px;
}

.specs-page__section1 {
  grid-area: section1;
  display: grid;
  grid:
    'chars' auto
    'engine' auto
    'load' auto
    'armament' auto
    / 1fr;
  gap: 30px;
}

.specs-page__section2 {
  grid-area: section2;
  display: grid;
  grid:
    'startup' auto
    'takeoff' auto
    'landing' auto
    / 1fr;
  gap: 30px;
  break-inside: avoid;
}

.specs-page__title {
  grid-area: title;

  h2 {
    margin-bottom: 0;
  }
}

.specs-page__chars-card {
  grid-area: chars;
}

.specs-page__engine-card {
  grid-area: engine;
}

.specs-page__load-card {
  grid-area: load;
}

.specs-page__armament-card {
  grid-area: armament;
}

.specs-page__features-card {
  grid-area: features;
}

.specs-page__engineStart-card {
  grid-area: startup;
}

.specs-page__takeoff-card {
  grid-area: takeoff;
}

.specs-page__landing-card {
  grid-area: landing;
}

@media (min-width: 992px) {
  .specs-page__section2 {
    grid-area: section2;
    display: grid;
    grid:
      'startup startup' auto
      'takeoff landing' auto
      / 1fr 1fr;
    gap: 30px;
  }
}

@media (min-width: 992px), print {
  .specs-page__section1 {
    grid-area: section1;
    display: grid;
    grid:
      'chars engine' auto
      'chars load' auto
      'armament armament' auto
      / 1fr 1fr;
    gap: 30px;
  }
}

@media (min-width: 1200px), print {
  .specs-page__section2 {
    grid-area: section2;
    display: grid;
    grid:
      'startup takeoff landing' auto
      / 1fr 1fr 1fr;
    gap: 30px;
  }
}

@media (min-width: 1200px) {
  .specs-page {
    display: grid;
    padding: 30px;
    grid:
      'title title' auto
      'section1 features' auto
      'section2 section2' auto
      / calc(66.67% - 10px) calc(33.33% - 20px);
    gap: 30px;
  }
}

@media print {
  .specs-page {
    display: block;

    > div {
      margin: 30px 0;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
