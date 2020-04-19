<template>
  <spec-card class="spec-card-procedure" :icon="icon" :title="name">
    <template v-slot>
      <ol>
        <li v-for="step in steps" :key="step.text || step">
          {{ step.text || step }}
          <ol v-if="step.steps">
            <li v-for="subStep in step.steps" :key="subStep">{{ subStep }}</li>
          </ol>
        </li>
      </ol>
    </template>
  </spec-card>
</template>
<script>
import SpecCard from '@/components/specs/SpecsCard';

export default {
  name: 'ProcedureCard',
  components: { SpecCard },
  props: {
    name: { type: String, required: true },
    icon: { type: String, required: true },
    steps: { type: Array, required: true },
  },
};
</script>
<style lang="scss" scoped>
.spec-card-procedure::v-deep .card-header {
  background-color: #fff9c4;
}
.spec-card-procedure::v-deep .card-body {
  background-color: #fafafa;
}
</style>
