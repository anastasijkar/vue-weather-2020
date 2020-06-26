import Vue from 'vue'
import Vuex from 'vuex'

import generalModule from './general.module'
import detailsModule from './details.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    general: generalModule,
    details: detailsModule
  }
})
