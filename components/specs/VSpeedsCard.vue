<template>
  <spec-card class="spec-card-vspeeds" icon="tachometer-alt" title="V-Speeds">
    <template v-slot>
      <b-table-simple class="spec-table" small>
        <b-tbody>
          <b-tr>
            <b-td rowspan="2">Indicated stall speed</b-td>
            <b-td class="text-right">Takeoff</b-td>
            <b-td class="text-right">{{ speedRange(specs.vSpeeds.stall.takeoff) }}</b-td>
          </b-tr>
          <b-tr>
            <b-td class="text-right">Flight</b-td>
            <b-td class="text-right">{{ speedRange(specs.vSpeeds.stall.flight) }}</b-td>
          </b-tr>
          <b-tr>
            <b-td colspan="2">Dive limit</b-td>
            <b-td class="text-right">{{ speed(specs.vSpeeds.diveLimit) }}</b-td>
          </b-tr>
          <b-tr v-for="(maxTrue, i) in specs.vSpeeds.maxTrue" :key="i">
            <b-td v-if="i === 0" :rowspan="specs.vSpeeds.maxTrue.length">Max. true airspeed</b-td>
            <b-td class="text-right">{{ distance(maxTrue[0]) }}</b-td>
            <b-td class="text-right">{{ speed(maxTrue[1]) }}</b-td>
          </b-tr>
          <b-tr>
            <b-td rowspan="2">Max. performance</b-td>
            <b-td class="text-right">Climb</b-td>
            <b-td class="text-right">{{ speed(specs.vSpeeds.maxPerformance.climb) }}</b-td>
          </b-tr>
          <b-tr>
            <b-td class="text-right">Turn</b-td>
            <b-td class="text-right">{{ speed(specs.vSpeeds.maxPerformance.turn) }}</b-td>
          </b-tr>
          <b-tr>
            <b-td colspan="2">Takeoff speed</b-td>
            <b-td class="text-right">{{ speedRange(specs.vSpeeds.takeoff) }}</b-td>
          </b-tr>
          <b-tr>
            <b-td colspan="2">Glideslope speed</b-td>
            <b-td class="text-right">{{ speedRange(specs.vSpeeds.glideslope) }}</b-td>
          </b-tr>
          <b-tr>
            <b-td colspan="2">Landing speed</b-td>
            <b-td class="text-right">{{ speedRange(specs.vSpeeds.landing) }}</b-td>
          </b-tr>
          <b-tr>
            <b-td colspan="2">Service ceiling</b-td>
            <b-td class="text-right">{{ distance(specs.vSpeeds.serviceCeiling) }}</b-td>
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
  name: 'VSpeedsCard',
  components: { SpecCard },
  computed: {
    ...mapGetters('specs', ['specs', 'distance', 'speed', 'speedRange']),
  },
};
</script>
<style lang="scss" scoped>
.spec-card-vspeeds::v-deep .card-header {
  background-color: #bbdefb;
}
.spec-card-vspeeds::v-deep .card-body {
  background-color: #e3f2fd;
}
</style>
