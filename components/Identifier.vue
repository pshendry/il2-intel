<template>
  <div>
    <img :src="currentSlideImage" />
  </div>
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
    ...mapGetters('identify', ['currentAircraft']),
    ...mapState('identify', ['currentSlide']),
  },
  watch: {
    currentAircraft() {
      this.loadCurrentSlideImage();
    },
    currentSlide() {
      this.loadCurrentSlideImage();
    },
  },
  created() {
    this.setRandomSlide();
    this.loadCurrentSlideImage();
  },
  methods: {
    loadSlideImage(aircraft, slide) {
      const filename = `${aircraft.type} ${aircraft.variant} ${slide.toString().padStart(2, '0')}`;
      return import(`~/assets/images/identify/${filename}.jpg`).then(image => image.default);
    },
    loadCurrentSlideImage() {
      this.loadSlideImage(this.currentAircraft, this.currentSlide).then(image => {
        this.currentSlideImage = image;
      });
    },
    ...mapMutations('identify', ['setRandomSlide']),
  },
};
</script>
