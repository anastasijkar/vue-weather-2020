import types from './mutationTypes'

import { api } from '../utils/api'

const INITIAL_STATE = {
  isFetching: false,
  isSuccess: false,
  isError: false,
  data: []
}

export default {
  namespaced: true,
  state: {
    ...INITIAL_STATE
  },
  mutations: {
    [types.REQUEST_DETAILS] (state) {
      state = Object.assign(state, {
        isFetching: true,
        isSuccess: false,
        isError: false
      })
    },
    [types.ADD_DETAILS] (state, { data }) {
      state = Object.assign(state, {
        data,
        isFetching: false,
        isSuccess: true,
        isError: false
      })
    },
    [types.ERROR_DETAILS] (state) {
      state = Object.assign(state, {
        isFetching: false,
        isSuccess: false,
        isError: true
      })
    }
  },
  actions: {
    getDetails ({ commit }, { location }) {
      commit(types.REQUEST_DETAILS)
      console.log(location)
      api.getDetails(location)
        .then(data => {
          commit(types.ADD_DETAILS, {
            location,
            ...data
          })
        })
        .catch(() => {
          commit(types.ERROR_DETAILS)
        })
    }
  }
}
