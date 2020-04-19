<template>
  <b-container fluid>
    <b-row>
      <b-col v-for="procedure in procedures" :key="procedure.name" md="6" lg="4">
        <procedure-card :name="procedure.name" :icon="procedure.icon" :steps="specs.procedures[procedure.id]" />
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { mapGetters } from 'vuex';

import ProcedureCard from '@/components/specs/ProcedureCard';

export default {
  components: { ProcedureCard },
  computed: {
    procedures() {
      return [
        {
          id: 'engineStart',
          name: 'Engine start',
          icon: 'cogs',
        },
        {
          id: 'takeoff',
          name: 'Takeoff',
          icon: 'plane-departure',
        },
        {
          id: 'landing',
          name: 'Landing',
          icon: 'plane-arrival',
        },
      ];
    },
    ...mapGetters('specs', ['specs']),
  },
};
</script>
<style lang="scss" scoped></style>
