<template>
  <spec-card class="spec-card-armament" icon="crosshairs" title="Armament">
    <template v-slot>
      <b-table-simple class="spec-table" small>
        <b-tbody>
          <template
            v-for="type in [
              { id: 'standard', name: 'Standard' },
              { id: 'modifications', name: 'Modifications' },
            ]"
          >
            <b-tr v-for="(arms, i) in specs.armament[type.id]" :key="`${type.id}-${arms.name}`">
              <b-td v-if="i === 0" :rowspan="specs.armament[type.id].length">{{ type.name }}</b-td>
              <b-td>{{ `x${arms.qty}` }}</b-td>
              <b-td>{{ arms.name }}</b-td>
              <b-td>{{ arms.type }}</b-td>
              <b-td class="text-right">{{ arms.count }} ct</b-td>
              <b-td>{{ arms.details || '' }}</b-td>
            </b-tr>
          </template>
        </b-tbody>
      </b-table-simple>
    </template>
  </spec-card>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';

import SpecCard from '@/components/specs/SpecsCard';

export default {
  name: 'ArmaentCard',
  components: { SpecCard },
  computed: {
    ...mapGetters('specs', ['specs', 'fuel', 'weight']),
  },
};
</script>
<style lang="scss" scoped>
.spec-card-armament::v-deep .card-header {
  background-color: #ffccbc;
}
.spec-card-armament::v-deep .card-body {
  background-color: #fbe9e7;
}
</style>
