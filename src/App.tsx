import React from 'react'
import { createBrowserHistory } from 'history'
import './App.less'
import dayjs from 'dayjs'
import isLeapYear from 'dayjs/plugin/isLeapYear' // import plugin
import 'dayjs/locale/ru'
import { AppRouter } from '@src/AppRouter'
import { Router } from 'react-router' // import locale

export const App = () => {
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
