export const state = () => ({
  breakpoint: null,
});

export const mutations = {
  setBreakpoint(state, width) {
    if (width >= 1200) {
      state.breakpoint = 'xl';
    } else if (width >= 992) {
      state.breakpoint = 'lg';
    } else if (width >= 768) {
      state.breakpoint = 'md';
    } else if (width >= 576) {
      state.breakpoint = 'sm';
    } else {
      state.breakpoint = 'xs';
    }
  },
};
