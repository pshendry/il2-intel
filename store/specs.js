import SPECS from '@/assets/data/specs';

export const state = () => ({
  // The ID of the displayed spec sheet
  id: null,
  // The content tab being displayed
  tab: 'specs',
  // The displayed unit type for quantities
  units: 'metric',
});

export const getters = {
  specs(state) {
    return state.id !== null ? SPECS.find((s) => s.id === state.id) : null;
  },
  distance(_state, getters) {
    return (v) => v.to(getters.distanceUnit).toString();
  },
  distanceUnit(state) {
    return state.units === 'metric' ? 'm' : 'ft';
  },
  fuel(_state) {
    return (v) => `${v.scalar} L`;
  },
  speed(_state, getters) {
    return (v) => v.to(getters.speedUnit).toString();
  },
  speedRange(_state, getters) {
    return (vs) => `${vs[0].to(getters.speedUnit).scalar}..${vs[1].to(getters.speedUnit).toString()}`;
  },
  speedUnit(state) {
    return state.units === 'metric' ? 'km/h' : 'mi/h';
  },
  temperature(_state) {
    return (v) => `${v.scalar} °C`;
  },
  temperatureRange(_state) {
    return (vs) => `${vs[0].scalar}..${vs[1].scalar} °C`;
  },
  weight(_state, getters) {
    return (v) => v.to(getters.weightUnit).toString();
  },
  weightUnit(state) {
    return state.units === 'metric' ? 'kg' : 'lb';
  },
};

export const mutations = {
  setTab(state, tab) {
    state.tab = tab;
  },
  setVariant(state, id) {
    state.id = id;
  },
};
