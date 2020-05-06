<template>
  <spec-card class="spec-card-engine" icon="cogs" title="Engine Systems">
    <template v-slot>
      <b-table-simple class="spec-table" small>
        <b-tbody>
          <b-tr v-for="(mode, i) in specs.engine.modes" :key="mode.name">
            <b-th v-if="i === 0" :rowspan="specs.engine.modes.length">Modes</b-th>
            <b-td>{{ mode.name }}</b-td>
            <b-td>{{ mode.limit ? `≤ ${mode.limit.toString()}` : 'Unlimited' }}</b-td>
            <b-td class="text-right">{{ pressure(mode.rpm) }}</b-td>
            <b-td class="text-right">{{ mode.manifoldPressure.toString() }}</b-td>
          </b-tr>
          <b-tr v-for="(temps, i) in specs.engine.ratedTemps" :key="'rated-' + temps.name">
            <b-th v-if="i === 0" colspan="2" :rowspan="specs.engine.ratedTemps.length">Rated Temp.</b-th>
            <b-td>{{ temps.name }}</b-td>
            <b-td class="text-right" colspan="2">{{ temperatureRange(temps.range) }}</b-td>
          </b-tr>
          <b-tr v-for="(temps, i) in specs.engine.maxTemps" :key="'max-' + temps.name">
            <b-th v-if="i === 0" colspan="2" :rowspan="specs.engine.maxTemps.length">Max Temp.</b-th>
            <b-td>{{ temps.name }}</b-td>
            <b-td class="text-right" colspan="2">{{ temperature(temps.value) }}</b-td>
          </b-tr>
        </b-tbody>
      </b-table-simple>
    </template>
  </spec-card>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';

import SpecCard from '@/components/specs/SpecsCard';

export default {
  name: 'EngineCard',
  components: { SpecCard },
  computed: {
    ...mapGetters('specs', ['specs', 'pressure', 'temperature', 'temperatureRange']),
  },
};
</script>
<style lang="scss" scoped>
.spec-card-engine::v-deep .card-header {
  background-color: #d7ccc8;
}
.spec-card-engine::v-deep .card-body {
  background-color: #efebe9;
}
</style>
