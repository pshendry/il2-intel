<template>
  <spec-card class="spec-card-load" icon="weight-hanging" title="Load">
    <template v-slot>
      <b-table-simple class="spec-table" small>
        <b-tbody>
          <b-tr>
            <b-th>Empty weight</b-th>
            <b-td class="text-right">{{ weight(specs.load.emptyWeight) }}</b-td>
          </b-tr>
          <b-tr>
            <b-th>Standard weight</b-th>
            <b-td class="text-right">{{ weight(specs.load.standardWeight) }}</b-td>
          </b-tr>
          <b-tr>
            <b-th>Max. takeoff weight</b-th>
            <b-td class="text-right">{{ weight(specs.load.maxTakeoffWeight) }}</b-td>
          </b-tr>
          <b-tr>
            <b-th>Fuel load</b-th>
            <b-td class="text-right">{{ `${weight(specs.load.fuelLoad[0])} / ${fuel(specs.load.fuelLoad[1])}` }}</b-td>
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
  name: 'LoadCard',
  components: { SpecCard },
  computed: {
    ...mapGetters('specs', ['specs', 'fuel', 'weight']),
  },
};
</script>
<style lang="scss" scoped>
.spec-card-load::v-deep .card-header {
  background-color: #cfd8dc;
}
.spec-card-load::v-deep .card-body {
  background-color: #eceff1;
}
</style>
