const AIRCRAFT = [
  { country: 'Germany', type: 'Bf 109', variant: 'F4', class: 'light', slideCount: 2 },
  { country: 'Germany', type: 'Fw 190', variant: 'A3', class: 'light', slideCount: 0 },
  { country: 'Germany', type: 'MC.202', variant: 'Series VIII', class: 'light', slideCount: 0 },
  { country: 'Russia', type: 'I-16', variant: 'Type 24', class: 'light', slideCount: 0 },
  { country: 'Russia', type: 'La-5', variant: 'Series 8', class: 'light', slideCount: 0 },
  { country: 'Russia', type: 'Yak-1', variant: 'Series 69', class: 'light', slideCount: 0 },
];

export const state = () => ({
  currentAircraft: null,
  currentSlide: null,
  pastSlides: AIRCRAFT.map(_ => []),
});

export const getters = {
  currentAircraft(state) {
    return AIRCRAFT[state.currentAircraft];
  },
};

export const mutations = {
  setRandomSlide(state) {
    if (state.currentAircraft !== null && state.currentSlide !== null) {
      state.pastSlides[state.currentAircraft].push(state.currentSlide);
    }

    let aircraft, slide;
    do {
      aircraft = 0; // TODO: pick randomly
      slide = AIRCRAFT[aircraft].slideCount > 0 ? Math.floor(Math.random() * AIRCRAFT[aircraft].slideCount) : null;
      // TODO: Detect when this will loop forever
    } while (slide === null || state.pastSlides[aircraft].includes(slide));
    state.currentAircraft = aircraft;
    state.currentSlide = slide;
  },
};
