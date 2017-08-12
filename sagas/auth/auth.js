import { all, put, call, takeLatest } from 'redux-saga/effects'
import Router from 'next/router'

import api from 'utils/api.js'
import {
  LOAD_USER,
  LOAD_USER_SUCCESS,
  SAVE_USER,
  SAVE_USER_SUCCESS,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS
} from 'redux/modules/auth/auth-types'

// SAGAS
function* runLoadUserWorker(action) {
  try {
    yield put({
      type: LOAD_USER_SUCCESS,
      user: action.user
    })
  } catch (error) {
    console.warn('error', error)
  }
}

function* runSaveUserWorker(action) {
  try {
    const res = yield call(api, '/save-user', {
      method: 'post',
      data: action.user
    })

    yield put({
      type: SAVE_USER_SUCCESS,
      user: res.data
    })
  } catch (error) {
    console.warn('error', error)
  }
}

function* runLogoutUserWorker() {
  try {
    yield call(api, '/logout', {
      method: 'post'
    })

    Router.push('/')

    yield put({
      type: LOGOUT_USER_SUCCESS
    })
  } catch (error) {
    console.warn('error', error)
  }
}

export default function* runLoadUserWatchers() {
  yield all([
    takeLatest(LOAD_USER, runLoadUserWorker),
    takeLatest(SAVE_USER, runSaveUserWorker),
    takeLatest(LOGOUT_USER, runLogoutUserWorker)
  ])
}
