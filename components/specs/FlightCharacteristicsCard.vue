<template>
  <spec-card class="spec-card-flightchars" icon="tachometer-alt" title="Flight Characteristics">
    <template v-slot>
      <b-table-simple class="spec-table" small>
        <b-tbody>
          <b-tr v-if="!specs.airframe.indicatedStallSpeedRanges.takeoffLanding">
            <b-th>Indicated stall speed</b-th>
            <b-td class="text-right">Flight</b-td>
            <b-td
              class="text-right"
            >{{ speedRange(specs.airframe.indicatedStallSpeedRanges.flight) }}</b-td>
          </b-tr>
          <template v-else>
            <b-tr>
              <b-th rowspan="2">Indicated stall speed</b-th>
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
          </template>
          <b-tr>
            <b-th colspan="2">Dive limit</b-th>
            <b-td class="text-right">{{ speed(specs.airframe.diveSpeedLimit) }}</b-td>
          </b-tr>
          <b-tr v-for="(maxTrue, i) in specs.characteristics.maxTrueAirspeeds" :key="i">
            <b-th
              v-if="i === 0"
              :rowspan="specs.characteristics.maxTrueAirspeeds.length"
            >Max. true airspeed</b-th>
            <b-td class="text-right">{{ `${distance(maxTrue.altitude)} (${maxTrue.engineMode})` }}</b-td>
            <b-td class="text-right">{{ speed(maxTrue.speed) }}</b-td>
          </b-tr>
          <b-tr>
            <b-th rowspan="2">Max. performance</b-th>
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
            <b-th colspan="2">Takeoff speed</b-th>
            <b-td class="text-right">{{ speedRange(specs.airframe.takeoffSpeedRange) }}</b-td>
          </b-tr>
          <b-tr>
            <b-th colspan="2">Glideslope speed</b-th>
            <b-td class="text-right">{{ speedRange(specs.airframe.glideslopeSpeedRange) }}</b-td>
          </b-tr>
          <b-tr>
            <b-th colspan="2">Landing speed</b-th>
            <b-td class="text-right">{{ speedRange(specs.airframe.landingSpeedRange) }}</b-td>
          </b-tr>
          <b-tr v-if="specs.engine.superchargerGearShiftAltitude">
            <b-th colspan="2">Supercharger gear shift altitude</b-th>
            <b-td class="text-right">{{ distance(specs.engine.superchargerGearShiftAltitude) }}</b-td>
          </b-tr>
          <b-tr>
            <b-th colspan="2">Service ceiling</b-th>
            <b-td class="text-right">{{ distance(specs.characteristics.serviceCeiling) }}</b-td>
          </b-tr>
        </b-tbody>
      </b-table-simple>
    </template>
  </spec-card>
</template>
<script>
import { mapGetters, mapMutations, mapState } from 'vuex';

import SpecCard from '@/components/specs/SpecsCard';

export default {
  name: 'FlightCharacteristicsCard',
  components: { SpecCard },
  computed: {
    ...mapGetters('specs', ['distance', 'speed', 'speedRange']),
    ...mapState('specs', ['specs']),
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
