<template>
  <b-container fluid>
    <b-row align-h="center">
      <b-col cols="auto">
        <h2 class="header">Identify the aircraft:</h2>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="auto">
        <div class="slide-container">
          <img :class="['slide', { 'slide-prompt': stage !== 'reveal' }]" :src="currentSlideImage" />
        </div>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="auto">
        <div class="feedback">{{ feedbackText }}</div>
      </b-col>
    </b-row>
    <b-row no-gutters align-h="center" align-content="stretch">
      <template v-if="stage === 'faction' || (stage === 'reveal' && selectedAircraftId === null)">
        <b-col v-for="faction in ['axis', 'allies']" :key="faction" cols="6" lg="5">
          <div class="option-container">
            <b-button
              class="option-button"
              block
              :size="buttonSize"
              :variant="getFactionButtonVariant(faction)"
              :disabled="stage !== 'faction'"
              @click.stop="selectFaction(faction)"
            >{{ faction === 'axis' ? 'Axis' : 'Allies' }}</b-button>
          </div>
        </b-col>
      </template>
      <template v-else>
        <b-col v-for="option in aircraftOptions" :key="option.variant" cols="6" lg="5">
          <div class="option-container">
            <b-button
              class="option-button"
              block
              :size="buttonSize"
              :variant="getOptionButtonVariant(option)"
              :disabled="stage !== 'variant'"
              @click.stop="selectAircraft(option.id)"
            >{{ option.variant }}</b-button>
          </div>
        </b-col>
      </template>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex';

export default {
  name: 'Identifier',
  data() {
    return {
      loading: false,
      currentSlideImage: null,
      nextSlideImage: null,
    };
  },
  computed: {
    feedbackText() {
      if (this.stage === 'reveal') {
        return this.selectionIsCorrect
          ? 'Correct. Click or press a key to continue.'
          : `Incorrect (${this.currentAircraft.variant}). Click or press a key to continue.`;
      } else {
        return '';
      }
    },
    buttonSize() {
      return ['lg', 'xl'].includes(this.breakpoint) ? 'lg' : 'md';
    },
    ...mapGetters('identify', ['aircraftOptions', 'currentAircraft', 'nextAircraft', 'selectionIsCorrect', 'stage']),
    ...mapState('global', ['breakpoint']),
    ...mapState('identify', ['currentSlideId', 'nextSlideId', 'selectedAircraftId', 'selectedFaction']),
  },
  created() {
    this.nextSlide().then(() => {
      this.nextSlide();
    });
  },
  mounted() {
    document.addEventListener('click', this.onWindowClick);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.onWindowClick);
  },
  methods: {
    onWindowClick(event) {
      if (this.stage === 'reveal' && !this.loading) {
        this.nextSlide();
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
    nextSlide() {
      this.loading = true;
      this.currentSlideImage = this.nextSlideImage;
      this.setRandomSlide();
      return this.loadSlideImage(this.nextAircraft, this.nextSlideId).then(image => {
        this.nextSlideImage = image;
        this.loading = false;
      });
    },
    loadSlideImage(aircraft, slide) {
      const filename = `${aircraft.variant} ${slide.toString().padStart(2, '0')}`;
      return import(`~/assets/images/identify/${filename}.jpg`).then(image => {
        return new Promise(resolve => {
          // Load the image in a `new Image()` to force it to be fetched immediately
          const img = new Image();
          img.onload = () => {
            resolve(image.default);
          };
          img.src = image.default;
        });
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
  min-height: 32px;
  margin-top: 16px;
}

.slide-container {
  display: inline-block;
  border-radius: 16px;
  overflow: hidden;
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

.option-container {
  height: 100%;
  padding: 8px;
}

.option-button {
  height: 100%;
}

@media (max-width: 767px) {
  .header {
    font-size: 24px;
    margin: 16px 0;
  }
}
</style>
