import SPECS from '@/assets/data/specs';

export const state = () => ({
  // The content of the displayed spec sheet
  specs: null,
  // The displayed unit type for quantities ('metric', 'imperial', or null for aircraft-specific
  units: null,
});

export const getters = {
  distance(state) {
    return (v) => {
      if (state.units === null) {
        return v.toString();
      } else if (state.units === 'metric') {
        return v.to('m').toPrec('100 m').toString();
      } else {
        return v.to('ft').toPrec('100 ft').toString();
      }
    };
  },
  fuel(_state) {
    return (v) => `${v.scalar} L`;
  },
  pressure(_state) {
    return (v) => v.toString();
  },
  speed(state) {
    return (v) => {
      if (state.units === null) {
        return v.toString();
      } else if (state.units === 'metric') {
        return v.to('km/h').toPrec('1 km/h').toString();
      } else {
        return v.to('mi/h').toPrec('1 mi/h').toString();
      }
    };
  },
  speedRange(state, getters) {
    return (vs) => {
      if (vs.length == 1) {
        return getters.speed(vs[0]);
      } else if (state.units === null) {
        return `${vs[0].scalar}..${vs[1].toString()}`;
      } else if (state.units === 'metric') {
        return `${vs[0].to('km/h').toPrec('1 km/h').scalar}..${vs[1].to('km/h').toPrec('1 km/h').toString()}`;
      } else {
        return `${vs[0].to('mi/h').toPrec('1 mi/h').scalar}..${vs[1].to('mi/h').toPrec('1 mi/h').toString()}`;
      }
    };
  },
  temperature(_state) {
    return (v) => `${v.scalar} °C`;
  },
  temperatureRange(_state, getters) {
    return (vs) => {
      if (vs.length === 1) {
        return getters.temperature(vs[0]);
      } else {
        return `${vs[0].scalar}..${vs[1].scalar} °C`;
      }
    };
  },
  weight(state) {
    return (v) => {
      if (state.units === null) {
        return v.toString();
      } else if (state.units === 'metric') {
        return v.to('kg').toPrec('1 kg').toString();
      } else {
        return v.to('lb').toPrec('1 lb').toString();
      }
    };
  },
};

export const mutations = {
  reset(state) {
    state.specs = null;
  },
  setUnits(state, units) {
    state.units = units;
  },
  setSpecs(state, specs) {
    state.specs = specs;
  },
};

export const actions = {
  setVariant({ commit }, id) {
    return import(`~/assets/data/specs/${id}.js`).then((specs) => {
      commit('setSpecs', specs.default);
    });
  },
};
