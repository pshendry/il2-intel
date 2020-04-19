<template>
  <spec-card class="spec-card-features" icon="star" title="Operational Features">
    <template v-slot>
      <ul>
        <li v-for="feature in specs.features" :key="feature.feature">
          {{ feature.feature }}
          <ul v-if="feature.details">
            <li v-for="detail in feature.details" :key="detail">{{ detail }}</li>
          </ul>
        </li>
      </ul>
    </template>
  </spec-card>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';

import SpecCard from '@/components/specs/SpecsCard';

export default {
  name: 'FeaturesCard',
  components: { SpecCard },
  computed: {
    ...mapGetters('specs', ['specs', 'fuel', 'weight']),
  },
};
</script>
<style lang="scss" scoped>
.spec-card-features::v-deep .card-header {
  background-color: #c8e6c9;
}
.spec-card-features::v-deep .card-body {
  background-color: #e8f5e9;
}
</style>
