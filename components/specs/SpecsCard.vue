<template>
  <b-card class="spec-card">
    <template v-slot:header>
      <icon class="spec-card-icon" :icon="icon" />
      <h4 class="spec-card-title">{{ title }}</h4>
    </template>
    <slot />
  </b-card>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'SpecsCard',
  props: {
    icon: { type: String, required: true },
    title: { type: String, required: true },
  },
};
</script>
<style lang="scss" scoped>
.spec-card {
  height: 100%;
}

.spec-card::v-deep .card-header {
  padding: 8px 16px 4px 16px;
  border-bottom: 0;
}
.spec-card::v-deep .card-body {
  padding: 0;
  font-size: 14px;
}

.spec-card-icon {
  width: 20px;
  margin: 0 8px 6px 0;
}

.spec-card-title {
  display: inline;
  font-size: 20px;
}
</style>
