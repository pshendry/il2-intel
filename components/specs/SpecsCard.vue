<template>
  <b-card class="spec-card">
    <template v-slot:header>
      <div class="spec-card-header">
        <icon class="spec-card-icon" :icon="icon" />
        <h4 class="spec-card-title">{{ title }}</h4>
        <b-dropdown v-if="hasOptions" class="spec-card-options" variant="secondary">
          <b-dropdown-item v-for="option in options" :key="option.value">{{ option.text }}</b-dropdown-item>
        </b-dropdown>
        <div v-if="$slots.header">
          <slot name="header" />
        </div>
      </div>
    </template>
    <slot />
    <template v-if="$slots.footer" v-slot:footer>
      <slot name="footer" />
    </template>
  </b-card>
</template>
<script>
export default {
  name: 'SpecsCard',
  props: {
    icon: { type: String, required: true },
    title: { type: String, required: true },
    options: { type: Array, default: () => [] },
  },
  computed: {
    hasOptions: function() { return this.options.length > 0; },
    hasHeaderSlot: function() { return Boolean(this.$slots.header); },
  },
};
</script>
<style lang="scss" scoped>
.spec-card {
  height: 100%;
  border-color: #e0e0e0;
}

.spec-card::v-deep {
  .card-header {
    padding: 8px 16px 4px 16px;
  }
  .card-body {
    padding: 0.5rem;
    font-size: 16px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;

    tbody td,
    tbody th {
      border-color: #bdbdbd;
    }
    tbody tr:first-child td,
    tbody tr:first-child th {
      border-top: none;
    }
  }
}

.spec-card-header {
  display: flex;
  align-items: center;
}

.spec-card-icon {
  width: 20px;
  margin: 0 8px 6px 0;
}

.spec-card-title {
  flex: 1;
  margin-bottom: 0;
  font-size: 20px;
}

.spec-card-options {
  margin: -8px -16px -4px 0;
}

@media print {
  .spec-card {
    border-color: #000;
    break-inside: avoid;
  }

  .spec-card::v-deep {
    .card-header {
      border-color: #000;
    }

    .card-body {
      background-color: transparent !important;
    }
  }
}
</style>
