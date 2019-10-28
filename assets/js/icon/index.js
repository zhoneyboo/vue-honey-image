import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import axios from 'axios';

window.axios = axios;
// import {
// } from '@fortawesome/free-regular-svg-icons'

import {
    faRoute,
    faDirections,
    faInfoCircle,
    faCaretLeft,
    faCaretRight,
    faBuilding,
    faSearch,
    faTimes,
    faRedo,
    faSearchPlus,
    faSearchMinus,
    faRestroom,
    faPlus,
    faMinus,
    faBook,
    faPhotoVideo,
    faMapMarkedAlt,
    faPhone,
} from '@fortawesome/free-solid-svg-icons'


library.add(
    faRoute,
    faDirections,
    faCaretRight,
    faCaretLeft,
    faBuilding,
    faInfoCircle,
    faSearch,
    faTimes,
    faRedo,
    faSearchPlus,
    faSearchMinus,
    faRestroom,
    faPlus,
    faMinus,
    faBook,
    faPhotoVideo,
    faMapMarkedAlt,
    faPhone,
);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false