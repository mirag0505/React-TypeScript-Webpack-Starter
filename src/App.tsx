import React, { useEffect } from 'react'
import { Counter } from './Counter'
import { useDispatch, useSelector } from 'react-redux'
import { getInfoRequest } from '@src/redux/payment/state/getInfo/getInfoSlice'
import { selectInfoList } from '@src/redux/payment/state/getInfo/getInfoSelectors'

import './App.less'
import { Button } from 'antd'

import * as dayjs from 'dayjs'
import isLeapYear from 'dayjs/plugin/isLeapYear' // import plugin
// import plugin
import 'dayjs/locale/zh-cn' // import locale

export const App = () => {
  const dispatch = useDispatch()
  const infoList = useSelector(selectInfoList)

  useEffect(
    function dispatchDate() {
      dispatch(getInfoRequest({ orgId: 32434 }))
    },
    [dispatch]
  )

  useEffect(
    function showDate() {
      if (infoList) {
        console.log('infoList', infoList)
      }
    },
    [dispatch, infoList]
  )

  dayjs.extend(isLeapYear) // use plugin
  dayjs.locale('zh-cn') // use locale

  return (
    <>
      <h1>React TypeScript Webpack Starter Template</h1>
      <Button type="primary">Button</Button>
      <Counter />
    </>
  )
}
