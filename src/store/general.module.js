import types from './mutationTypes'

import { api } from '../utils/api'

const INITIAL_STATE = {
  isFetching: false,
  isSuccess: false,
  isError: false,
  data: {
    location: '',
    temperature: '',
    description: ''
  }
}

export default {
  namespaced: true,
  state: {
    ...INITIAL_STATE
  },
  mutations: {
    [types.REQUEST_WEATHER] (state) {
      state = Object.assign(state, {
        isFetching: true,
        isSuccess: false,
        isError: false
      })
    },
    [types.ADD_WEATHER] (state, { data }) {
      state = Object.assign(state, {
        data,
        isFetching: false,
        isSuccess: true,
        isError: false
      })
    },
    [types.ERROR_WEATHER] (state) {
      state = Object.assign(state, {
        isFetching: false,
        isSuccess: false,
        isError: true
      })
    }
  },
  actions: {
    getWeather ({ commit }, { location }) {
      commit(types.REQUEST_WEATHER)
      api.getWeather(location)
        .then(data => {
          commit(types.ADD_WEATHER, {
            location,
            ...data
          })
        })
        .catch(() => {
          commit(types.ERROR_WEATHER)
        })
    }
  }
}
