import { state as defaultState, getters, mutations } from '@/store/identify';

describe('identity Vuex module', () => {
  describe('getters', () => {
    describe('currentAircraft', () => {
      test('gets the aircraft object specified by the index', () => {
        const state = { ...defaultState(), currentAircraft: 1 };

        const result = getters.currentAircraft(state);

        expect(result.type).toBe('Fw 190');
        expect(result.variant).toBe('A3');
      });
    });
  });

  describe('mutations', () => {
    describe('setRandomSlide', () => {
      test('does not alter `pastSlides` on first run', () => {
        const state = defaultState();

        mutations.setRandomSlide(state);

        expect(state.pastSlides.every(ps => ps.length == 0)).toBeTruthy();
      });

      test('updates `pastSlides` when a current slide exists', () => {
        const state = {
          ...defaultState(),
          currentAircraft: 1,
          currentSlide: 2,
        };

        mutations.setRandomSlide(state);

        expect(state.pastSlides[1]).toEqual([2]);
      });

      test('sets the current aircraft/slide state', () => {
        const state = defaultState();

        mutations.setRandomSlide(state);

        expect(state.currentAircraft).not.toBeNull();
        expect(state.currentSlide).not.toBeNull();
      });
    });
  });
});
