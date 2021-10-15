import { Counter } from '@src/Counter'
import { selectInfoList } from '@src/redux/payment/state/getInfo/getInfoSelectors'
import { getInfoRequest } from '@src/redux/payment/state/getInfo/getInfoSlice'
import { Button } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const Home = (): JSX.Element => {
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

  return (
    <>
      HOME
      <h1>React TypeScript Webpack Starter Template</h1>
      <Button>Button</Button>
      <Button type="primary">Button</Button>
      <Counter />
    </>
  )
}
