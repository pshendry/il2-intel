<template>
  <div>
    <specs-page v-if="tab === 'specs'" class="spec-page" />
    <procedures-page v-if="tab === 'procedures'" class="spec-page" />
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapState } from 'vuex';

import ProceduresPage from '@/components/specs/ProceduresPage';
import SpecsPage from '@/components/specs/SpecsPage';

export default {
  components: { ProceduresPage, SpecsPage },
  computed: {
    ...mapGetters('specs', ['specs']),
    ...mapState('specs', ['tab']),
  },
  methods: {
    ...mapMutations('specs', ['setTab', 'setVariant']),
  },
  created() {
    this.setVariant(this.$route.params.variant);
  },
};
</script>
<style lang="scss" scoped>
.spec-title {
  display: inline;
}

.spec-page {
  padding: 15px 30px;
}
</style>
