<template>
  <b-container>
    <Identifier />
  </b-container>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

import Identifier from '~/components/Identifier.vue';

export default {
  components: {
    Identifier,
  },
};
</script>

<style lang="scss" scoped></style>
