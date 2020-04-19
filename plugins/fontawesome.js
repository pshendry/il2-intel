import Vue from 'vue';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faCogs,
  faCrosshairs,
  faList,
  faPlaneArrival,
  faPlaneDeparture,
  faStar,
  faTachometerAlt,
  faWeightHanging,
} from '@fortawesome/free-solid-svg-icons';

config.autoAddCss = false;

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add([faCogs, faCrosshairs, faList, faPlaneArrival, faPlaneDeparture, faStar, faTachometerAlt, faWeightHanging]);

// Register the component globally
Vue.component('icon', FontAwesomeIcon);
