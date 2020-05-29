<template>
  <spec-card class="spec-card-features" icon="star" title="Operational Features">
    <template v-slot>
      <ul>
        <li v-for="feature in specs.features" :key="feature.feature">
          <span
            class="feature-name"
          >{{ feature.feature + (feature.details.length === 1 ? ':' : '') }}</span>
          <template v-if="feature.details.length === 1">{{ feature.details[0] }}</template>
          <ul v-else>
            <li v-for="detail in feature.details" :key="detail">{{ detail }}</li>
          </ul>
        </li>
      </ul>
    </template>
  </spec-card>
</template>
<script>
import { mapGetters, mapMutations, mapState } from 'vuex';

import SpecCard from '@/components/specs/SpecsCard';

export default {
  name: 'FeaturesCard',
  components: { SpecCard },
  computed: {
    ...mapGetters('specs', ['fuel', 'weight']),
    ...mapState('specs', ['specs']),
  },
};
</script>
<style lang="scss" scoped>
.spec-card-features {
  &::v-deep {
    .card-header {
      background-color: #c8e6c9;
    }

    .card-body {
      background-color: #e8f5e9;
    }
  }

  ul {
    padding-left: 1.75rem;
  }
}

.feature-name {
  font-weight: bold;
}
</style>
