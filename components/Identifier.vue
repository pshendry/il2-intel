<template>
  <b-container fluid>
    <b-row align-h="center">
      <b-col cols="auto">
        <h2 class="header">Identify the aircraft:</h2>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="auto">
        <img :class="['slide', { 'slide-prompt': stage !== 'reveal' }]" :src="currentSlideImage" />
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="auto">
        <div class="feedback">{{ feedbackText }}</div>
      </b-col>
    </b-row>
    <b-row
      v-if="stage === 'faction' || (stage === 'reveal' && selectedAircraftId === null)"
      align-h="center"
    >
      <b-col v-for="faction in ['axis', 'allies']" :key="faction" md="6" lg="5">
        <b-button
          class="option-button"
          block
          size="lg"
          :variant="getFactionButtonVariant(faction)"
          :disabled="stage !== 'faction'"
          @click.stop="selectFaction(faction)"
        >{{ faction === 'axis' ? 'Axis' : 'Allies' }}</b-button>
      </b-col>
    </b-row>
    <b-row v-else align-h="center">
      <b-col v-for="option in aircraftOptions" :key="option.variant" md="6" lg="5">
        <b-button
          class="option-button"
          block
          size="lg"
          :variant="getOptionButtonVariant(option)"
          :disabled="stage !== 'variant'"
          @click.stop="selectAircraft(option.id)"
        >{{ option.variant }}</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex';

export default {
  name: 'Identifier',
  data() {
    return {
      currentSlideImage: null,
    };
  },
  computed: {
    feedbackText() {
      if (this.stage === 'reveal') {
        return this.selectionIsCorrect
          ? 'Correct. Click or press any key to continue.'
          : `Incorrect (${this.currentAircraft.variant}). Click or press any key to continue.`;
      } else {
        return '';
      }
    },
    ...mapGetters('identify', ['aircraftOptions', 'currentAircraft', 'selectionIsCorrect', 'stage']),
    ...mapState('identify', ['currentSlideId', 'selectedAircraftId', 'selectedFaction']),
  },
  watch: {
    currentAircraft() {
      this.loadCurrentSlideImage();
    },
    currentSlideId() {
      this.loadCurrentSlideImage();
    },
  },
  created() {
    this.setRandomSlide();
    this.loadCurrentSlideImage();
  },
  mounted() {
    document.addEventListener('click', this.onWindowClick);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.onWindowClick);
  },
  methods: {
    onWindowClick(event) {
      if (this.stage === 'reveal') {
        this.setRandomSlide();
        this.loadCurrentSlideImage();
      }
    },
    getFactionButtonVariant(faction) {
      if (this.selectedFaction === null) {
        return 'secondary';
      } else if (faction === this.currentAircraft.faction) {
        return 'success';
      } else {
        return 'danger';
      }
    },
    getOptionButtonVariant(option) {
      if (this.selectedAircraftId === null) {
        return 'secondary';
      } else if (option.id === this.currentAircraft.id) {
        return 'success';
      } else {
        return option.id === this.selectedAircraftId ? 'danger' : 'secondary';
      }
    },
    loadSlideImage(aircraft, slide) {
      const filename = `${aircraft.variant} ${slide.toString().padStart(2, '0')}`;
      return import(`~/assets/images/identify/${filename}.jpg`).then(image => image.default);
    },
    loadCurrentSlideImage() {
      this.loadSlideImage(this.currentAircraft, this.currentSlideId).then(image => {
        this.currentSlideImage = image;
      });
    },
    ...mapMutations('identify', ['selectAircraft', 'selectFaction', 'setRandomSlide']),
  },
};
</script>

<style scoped>
.header {
  margin: 32px 0;
}

.header,
.feedback {
  font-family: 'SpecialElite', monospace;
}

.feedback {
  height: 1.5rem;
  margin-top: 1rem;
}

.slide {
  width: 100%;
  height: 100%;
  max-width: 640px;
  max-height: 480px;
  border-radius: 16px;
  transition: 0.25s filter linear;
}

.slide.slide-prompt {
  filter: blur(1px);
  transition: none;
}

.option-button {
  margin-top: 16px;
}
</style>
