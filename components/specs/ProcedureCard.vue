<template>
  <spec-card class="spec-card-procedure" :icon="icon" :title="name">
    <template v-if="trainingVideo" v-slot:header>
      <a
        class="procedure-video-link"
        :href="trainingVideo"
        target="_blank"
        rel="noreferrer noopener"
      >Watch video</a>
    </template>
    <template v-slot>
      <ol>
        <li v-for="step in steps" :key="step.text || step">
          <input v-if="!step.steps" type="checkbox" class="procedure-checkbox" />
          {{ step.text || step }}
          <ol v-if="step.steps">
            <li v-for="subStep in step.steps" :key="subStep">
              <input type="checkbox" class="procedure-checkbox" />
              {{ subStep }}
            </li>
          </ol>
        </li>
      </ol>
    </template>
    <template v-slot:footer>
      Procedures {{ trainingVideo ? 'and videos' : '' }} by
      <a
        href="https://www.youtube.com/channel/UCwV5RLX7mkaDy5gTIiuwGmg"
      >The Air Combat Tutorial Library</a>
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
    trainingVideo: { type: String, required: true },
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
.spec-card-procedure::v-deep .card-footer {
  padding: 0.25rem 1rem;
  text-align: right;
  font-size: 12px;
}

.procedure-video-link {
  display: block;
  margin-bottom: 4px;
  font-size: 14px;
}

@media print {
  .procedure-checkbox,
  .procedure-video-link {
    display: none;
  }
}
</style>
