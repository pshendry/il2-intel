import { AIRCRAFT, state as defaultState, getters, mutations } from '@/store/identify';

describe('identity Vuex module', () => {
  describe('getters', () => {
    describe('currentAircraft', () => {
      test("returns `null` if there's no current aircraft", () => {
        const state = { ...defaultState(), currentAircraftId: null };

        const result = getters.currentAircraft(state);

        expect(result).toBeNull();
      });

      test('gets the aircraft object specified by the index', () => {
        const state = { ...defaultState(), currentAircraftId: 29 };

        const result = getters.currentAircraft(state);

        expect(result.variant).toBe('Fw 190 A-3');
      });
    });

    describe('aircraftOptions', () => {
      test('returns a list of aircraft objects corresponding to the indices in state.aircraftOptions', () => {
        const state = { ...defaultState(), aircraftOptionIds: [0, 2] };

        const result = getters.aircraftOptions(state);

        expect(result).toStrictEqual([AIRCRAFT[0], AIRCRAFT[2]]);
      });

      test('gets the aircraft object specified by the index', () => {
        const state = { ...defaultState(), currentAircraftId: 29 };

        const result = getters.currentAircraft(state);

        expect(result.variant).toBe('Fw 190 A-3');
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

      test('updates `pastSlides`', () => {
        const state = {
          ...defaultState(),
          currentAircraftId: null,
          currentSlideId: null,
          nextAircraftId: 1,
          nextSlideId: 2,
        };

        mutations.setRandomSlide(state);

        expect(state.pastSlides[1]).toEqual([2]);
      });

      test('sets the next aircraft/slide state', () => {
        const state = defaultState();

        mutations.setRandomSlide(state);

        expect(state.nextAircraftId).not.toBeNull();
        expect(state.nextSlideId).not.toBeNull();
      });

      test('moves next aircraft/slide to current', () => {
        const state = {
          ...defaultState(),
          currentAircraftId: null,
          currentSlideId: null,
          nextAircraftId: 1,
          nextSlideId: 2,
        };

        mutations.setRandomSlide(state);

        expect(state.currentAircraftId).toEqual(1);
        expect(state.currentSlideId).toEqual(2);
      });

      test('sets aircraftOptions to a random list of 6 options containing the current aircraft', () => {
        const state = {
          ...defaultState(),
          nextAircraftId: 1,
          nextSlideId: 2,
        };

        mutations.setRandomSlide(state);

        expect(state.aircraftOptionIds.length).toBe(6);
        expect(state.aircraftOptionIds).toContain(state.currentAircraftId);
      });

      test('resets pastSlides if every slide has been shown', () => {
        const state = defaultState();
        const totalSlideCount = AIRCRAFT.reduce((sum, a) => sum + a.slideCount, 0);
        for (let i = 0; i < totalSlideCount; i++) {
          mutations.setRandomSlide(state);
        }

        mutations.setRandomSlide(state);

        const pastSlideCount = state.pastSlides.reduce((sum, ps) => sum + ps.length, 0);
        expect(pastSlideCount).toBe(1);
      });
    });
  });
});
