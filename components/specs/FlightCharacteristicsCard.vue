<template>
  <spec-card class="spec-card-flightchars" icon="tachometer-alt" title="Flight Characteristics">
    <template v-slot>
      <b-table-simple class="spec-table" small>
        <b-tbody>
          <b-tr>
            <b-td rowspan="2">Indicated stall speed</b-td>
            <b-td class="text-right">Takeoff/Landing</b-td>
            <b-td
              class="text-right"
            >{{ speedRange(specs.airframe.indicatedStallSpeedRanges.takeoffLanding) }}</b-td>
          </b-tr>
          <b-tr>
            <b-td class="text-right">Flight</b-td>
            <b-td
              class="text-right"
            >{{ speedRange(specs.airframe.indicatedStallSpeedRanges.flight) }}</b-td>
          </b-tr>
          <b-tr>
            <b-td colspan="2">Dive limit</b-td>
            <b-td class="text-right">{{ speed(specs.airframe.diveSpeedLimit) }}</b-td>
          </b-tr>
          <b-tr v-for="(maxTrue, i) in specs.characteristics.maxTrueAirspeeds" :key="i">
            <b-td
              v-if="i === 0"
              :rowspan="specs.characteristics.maxTrueAirspeeds.length"
            >Max. true airspeed</b-td>
            <b-td class="text-right">{{ `${distance(maxTrue.altitude)} (${maxTrue.engineMode})` }}</b-td>
            <b-td class="text-right">{{ speed(maxTrue.speed) }}</b-td>
          </b-tr>
          <b-tr>
            <b-td rowspan="2">Max. performance</b-td>
            <b-td class="text-right">Climb</b-td>
            <b-td
              class="text-right"
            >{{ speed(specs.characteristics.maxPerformance.climb[0].speed) }}</b-td>
          </b-tr>
          <b-tr>
            <b-td class="text-right">Turn</b-td>
            <b-td class="text-right">{{ speed(specs.characteristics.maxPerformance.turn[0].speed) }}</b-td>
          </b-tr>
          <b-tr>
            <b-td colspan="2">Takeoff speed</b-td>
            <b-td class="text-right">{{ speedRange(specs.airframe.takeoffSpeedRange) }}</b-td>
          </b-tr>
          <b-tr>
            <b-td colspan="2">Glideslope speed</b-td>
            <b-td class="text-right">{{ speedRange(specs.airframe.glideslopeSpeedRange) }}</b-td>
          </b-tr>
          <b-tr>
            <b-td colspan="2">Landing speed</b-td>
            <b-td class="text-right">{{ speedRange(specs.airframe.landingSpeedRange) }}</b-td>
          </b-tr>
          <b-tr v-if="specs.engine.superchargerGearShiftAltitude">
            <b-td colspan="2">Supercharger gear shift altitude</b-td>
            <b-td class="text-right">{{ distance(specs.engine.superchargerGearShiftAltitude) }}</b-td>
          </b-tr>
          <b-tr>
            <b-td colspan="2">Service ceiling</b-td>
            <b-td class="text-right">{{ distance(specs.characteristics.serviceCeiling) }}</b-td>
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
  name: 'FlightCharacteristicsCard',
  components: { SpecCard },
  computed: {
    ...mapGetters('specs', ['specs', 'distance', 'speed', 'speedRange']),
  },
};
</script>
<style lang="scss" scoped>
.spec-card-flightchars::v-deep .card-header {
  background-color: #bbdefb;
}
.spec-card-flightchars::v-deep .card-body {
  background-color: #e3f2fd;
}
</style>
