import { groupBy, sortBy } from 'lodash';

export const AIRCRAFT = [
  { dlc: 'BoK', faction: 'allies', type: 'A-20', variant: 'A-20B', class: 'heavy', slideCount: 0 },
  { dlc: 'BoM', faction: 'allies', type: 'I-16', variant: 'I-16 type 24', class: 'light', slideCount: 0 },
  { dlc: 'BoS', faction: 'allies', type: 'La-5', variant: 'La-5 Series 8', class: 'light', slideCount: 0 },
  { dlc: 'BoS', faction: 'allies', type: 'LaGG-3', variant: 'LaGG-3 ser.29', class: 'light', slideCount: 0 },
  { dlc: 'BoM', faction: 'allies', type: 'IL-2', variant: 'IL-2 mod.1941', class: 'medium', slideCount: 0 },
  { dlc: 'BoS', faction: 'allies', type: 'IL-2', variant: 'IL-2 mod.1942', class: 'medium', slideCount: 0 },
  { dlc: 'BoK', faction: 'allies', type: 'IL-2', variant: 'IL-2 mod.1943', class: 'medium', slideCount: 0 },
  { dlc: 'BoM', faction: 'allies', type: 'MiG-3', variant: 'MiG-3 ser.24', class: 'light', slideCount: 18 },
  { dlc: 'BoB', faction: 'allies', type: 'P-38', variant: 'P-38J-25', class: 'medium', slideCount: 0 },
  { dlc: 'BoK', faction: 'allies', type: 'P-39', variant: 'P-39L-1', class: 'light', slideCount: 0 },
  { dlc: 'BoM', faction: 'allies', type: 'P-40', variant: 'P-40E-1', class: 'light', slideCount: 0 },
  { dlc: 'BoB', faction: 'allies', type: 'P-47', variant: 'P-47D-28', class: 'light', slideCount: 0 },
  { dlc: 'BoB', faction: 'allies', type: 'P-51', variant: 'P-51D-15', class: 'light', slideCount: 0 },
  { dlc: 'BoM', faction: 'allies', type: 'Pe-2', variant: 'Pe-2 ser.35', class: 'heavy', slideCount: 0 },
  { dlc: 'BoS', faction: 'allies', type: 'Pe-2', variant: 'Pe-2 ser.87', class: 'heavy', slideCount: 0 },
  { dlc: 'BoK', faction: 'allies', type: 'Spitfire', variant: 'Spitfire Mk.VB', class: 'light', slideCount: 0 },
  { dlc: 'BoB', faction: 'allies', type: 'Spitfire', variant: 'Spitfire Mk.IXe', class: 'light', slideCount: 0 },
  { dlc: 'BoB', faction: 'allies', type: 'Tempest', variant: 'Tempest Mk.V ser.2', class: 'light', slideCount: 0 },
  { dlc: 'BoS', faction: 'allies', type: 'Yak-1', variant: 'Yak-1 ser.69', class: 'light', slideCount: 0 }, // 30 },
  { dlc: 'BoK', faction: 'allies', type: 'Yak-1b', variant: 'Yak-1b ser.127', class: 'light', slideCount: 0 },
  { dlc: 'BoK', faction: 'allies', type: 'Yak-7B', variant: 'Yak-7B ser.36', class: 'light', slideCount: 0 },
  { dlc: 'BoM', faction: 'axis', type: 'Bf 109', variant: 'Bf 109 E-7', class: 'light', slideCount: 0 },
  { dlc: 'BoM', faction: 'axis', type: 'Bf 109', variant: 'Bf 109 F-2', class: 'light', slideCount: 0 },
  { dlc: 'BoS', faction: 'axis', type: 'Bf 109', variant: 'Bf 109 F-4', class: 'light', slideCount: 0 }, //2 },
  { dlc: 'BoS', faction: 'axis', type: 'Bf 109', variant: 'Bf 109 G-2', class: 'light', slideCount: 0 }, //29 },
  { dlc: 'BoK', faction: 'axis', type: 'Bf 109', variant: 'Bf 109 G-4', class: 'light', slideCount: 0 },
  { dlc: 'BoB', faction: 'axis', type: 'Bf 109', variant: 'Bf 109 G-14', class: 'light', slideCount: 0 },
  { dlc: 'BoB', faction: 'axis', type: 'Bf 109', variant: 'Bf 109 K-4', class: 'light', slideCount: 0 },
  { dlc: 'BoM', faction: 'axis', type: 'Bf 110', variant: 'Bf 110 E-2', class: 'medium', slideCount: 0 },
  { dlc: 'BoK', faction: 'axis', type: 'Bf 110', variant: 'Bf 110 G-2', class: 'medium', slideCount: 0 },
  { dlc: 'BoS', faction: 'axis', type: 'Fw 190', variant: 'Fw 190 A-3', class: 'light', slideCount: 0 },
  { dlc: 'BoK', faction: 'axis', type: 'Fw 190', variant: 'Fw 190 A-5', class: 'light', slideCount: 0 },
  { dlc: 'BoB', faction: 'axis', type: 'Fw 190', variant: 'Fw 190 A-8', class: 'light', slideCount: 0 },
  { dlc: 'BoB', faction: 'axis', type: 'Fw 190', variant: 'Fw 190 D-9', class: 'light', slideCount: 0 },
  { dlc: 'BoS', faction: 'axis', type: 'He 111', variant: 'He 111 H-6', class: 'heavy', slideCount: 0 },
  { dlc: 'BoK', faction: 'axis', type: 'He 111', variant: 'He 111 H-16', class: 'heavy', slideCount: 0 },
  { dlc: 'BoK', faction: 'axis', type: 'Hs 129', variant: 'Hs 129 B-2', class: 'heavy', slideCount: 0 },
  { dlc: 'BoS', faction: 'axis', type: 'Ju 87', variant: 'Ju 87 D-3', class: 'light', slideCount: 0 },
  { dlc: 'BoM', faction: 'axis', type: 'Ju 88', variant: 'Ju 88 A-4', class: 'heavy', slideCount: 0 },
  { dlc: 'BoM', faction: 'axis', type: 'MC.202', variant: 'MC.202 ser.VIII', class: 'light', slideCount: 0 },
  { dlc: 'BoB', faction: 'axis', type: 'Me 262', variant: 'Me 262 A', class: 'medium', slideCount: 0 },
].map((a, i) => ({ ...a, id: i }));

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = randomInt(0, i);
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function randomSample(count, collection) {
  return shuffleArray(collection).slice(0, count);
}

export const state = () => ({
  currentAircraftId: null,
  currentSlideId: null,
  nextAircraftId: null,
  nextSlideId: null,
  aircraftOptionIds: [],
  pastSlides: AIRCRAFT.map(_ => []),
  selectedFaction: null,
  selectedAircraftId: null,
});

export const getters = {
  currentAircraft(state) {
    return state.currentAircraftId !== null ? AIRCRAFT[state.currentAircraftId] : null;
  },

  nextAircraft(state) {
    return state.nextAircraftId !== null ? AIRCRAFT[state.nextAircraftId] : null;
  },

  aircraftOptions(state) {
    return state.aircraftOptionIds.map(i => AIRCRAFT[i]);
  },

  stage(state, getters) {
    if (state.selectedFaction === null) {
      return 'faction';
    } else if (state.selectedAircraftId === null && getters.selectionIsCorrect) {
      return 'variant';
    } else {
      return 'reveal';
    }
  },

  selectionIsCorrect(state) {
    let result = true;

    if (state.selectedFaction !== null) {
      result = result && state.selectedFaction === AIRCRAFT[state.currentAircraftId].faction;
    }
    if (state.selectedAircraftId !== null) {
      result = result && state.selectedAircraftId === state.currentAircraftId;
    }

    return result;
  },
};

export const mutations = {
  setRandomSlide(state) {
    // Clear selections
    state.selectedFaction = null;
    state.selectedAircraftId = null;

    // Add the current slide to `pastSlides`, and reset `pastSlides` if necessary
    if (state.nextAircraftId !== null && state.nextSlideId !== null) {
      const totalSlideCount = AIRCRAFT.reduce((sum, a) => sum + a.slideCount, 0);
      const pastSlideCount = state.pastSlides.reduce((sum, ps) => sum + ps.length, 0);
      if (totalSlideCount - pastSlideCount <= 1) {
        state.pastSlides = AIRCRAFT.map(_ => []);
      }
      state.pastSlides[state.nextAircraftId].push(state.nextSlideId);
    }

    // Replace current slide with "next" slide
    state.currentAircraftId = state.nextAircraftId;
    state.currentSlideId = state.nextSlideId;

    // Select the new "next" aircraft/slide
    let aircraftId, slideId;
    do {
      aircraftId = randomInt(0, AIRCRAFT.length - 1);
      slideId = AIRCRAFT[aircraftId].slideCount > 0 ? randomInt(0, AIRCRAFT[aircraftId].slideCount - 1) : null;
    } while (slideId === null || state.pastSlides[aircraftId].includes(slideId));
    state.nextAircraftId = aircraftId;
    state.nextSlideId = slideId;

    // Select options to choose from
    if (state.currentAircraftId !== null && state.currentSlideId !== null) {
      const aircraftByType = groupBy(
        AIRCRAFT.filter(
          a =>
            a.faction === AIRCRAFT[state.currentAircraftId].faction && a.type !== AIRCRAFT[state.currentAircraftId].type
        ),
        a => a.type
      );
      const chosenTypes = randomSample(5, Object.keys(aircraftByType));
      state.aircraftOptionIds = sortBy(
        chosenTypes
          .map(type => {
            return AIRCRAFT.indexOf(aircraftByType[type][randomInt(0, aircraftByType[type].length - 1)]);
          })
          .concat([state.currentAircraftId]),
        i => AIRCRAFT[i].variant
      );
    }
  },

  selectFaction(state, faction) {
    state.selectedFaction = faction;
  },

  selectAircraft(state, aircraftId) {
    state.selectedAircraftId = aircraftId;
  },
};
