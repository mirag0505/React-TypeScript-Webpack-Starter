import './App.less'
import 'dayjs/locale/ru'

import { AppRouter } from '@src/AppRouter'
import dayjs from 'dayjs'
import isLeapYear from 'dayjs/plugin/isLeapYear'
import { createBrowserHistory } from 'history'
import React from 'react'
import { Router } from 'react-router'

export const App = (): JSX.Element => {
  dayjs.extend(isLeapYear) // use plugin
  dayjs.locale('ru') // use locale

  const history = createBrowserHistory()
  return (
    <>
      <Router history={history}>
        <AppRouter />
      </Router>
    </>
  )
}
