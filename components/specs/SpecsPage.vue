<template>
  <b-container fluid>
    <b-row>
      <b-col xl="8">
        <b-row>
          <b-col class="my-3" lg="6">
            <v-speeds-card />
          </b-col>
          <b-col class="my-3" lg="6">
            <features-card />
          </b-col>
          <b-col class="my-3" cols="12">
            <armament-card />
          </b-col>
        </b-row>
      </b-col>
      <b-col xl="4">
        <b-row class="side-row">
          <b-col class="my-3" lg="6" xl="12">
            <engine-card />
          </b-col>
          <b-col class="my-3" lg="6" xl="12">
            <load-card />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row>
      <b-col v-for="procedure in procedures" :key="procedure.name" class="my-3" md="6" lg="4">
        <procedure-card :name="procedure.name" :icon="procedure.icon" :steps="specs.procedures[procedure.id]" />
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { mapGetters } from 'vuex';

import ArmamentCard from '@/components/specs/ArmamentCard';
import EngineCard from '@/components/specs/EngineCard';
import FeaturesCard from '@/components/specs/FeaturesCard';
import LoadCard from '@/components/specs/LoadCard';
import ProcedureCard from '@/components/specs/ProcedureCard';
import VSpeedsCard from '@/components/specs/VSpeedsCard';

export default {
  components: { ArmamentCard, EngineCard, FeaturesCard, LoadCard, ProcedureCard, VSpeedsCard },
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
    ...mapGetters('specs', ['specs']),
  },
};
</script>
<style lang="scss" scoped>
.side-row {
  min-height: 100%;
}
</style>
